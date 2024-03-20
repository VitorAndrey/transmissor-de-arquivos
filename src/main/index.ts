import { join } from 'path'
import { sequelize } from '@database/sequelize'
import icon from '../../resources/icon.png?asset'
import { app, shell, BrowserWindow, ipcMain, Tray } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import * as SequelizeSchemas from '@database/sequelize/schemas/@exports'

import { registerIpcEvents } from './src/ipc/ipc-events'
registerIpcEvents(ipcMain)

let mainWindow: BrowserWindow | null = null
let tray: Tray | null = null

function createWindow(): void {
  if (!mainWindow) {
    app.setName('Transmissor de arquivos')

    mainWindow = new BrowserWindow({
      show: false,
      width: 1280,
      height: 720,
      minWidth: 800,
      minHeight: 600,
      icon,
      resizable: true,
      autoHideMenuBar: true,

      webPreferences: {
        sandbox: false,
        contextIsolation: true,
        preload: join(__dirname, '../preload/index.js')
      },

      ...(process.platform === 'linux' ? { icon } : {})
    })

    mainWindow.on('ready-to-show', () => {
      if (mainWindow) mainWindow.show()
    })

    mainWindow.on('close', (event) => {
      event.preventDefault()
      if (mainWindow) mainWindow.hide()
    })

    mainWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }
  }
}

function createTray(): void {
  if (!tray) {
    tray = new Tray(icon)
    tray.on('click', () => {
      if (mainWindow) {
        if (mainWindow.isVisible()) {
          mainWindow.hide()
        } else {
          mainWindow.show()
        }
      }
    })
    tray.setToolTip('Trasmissor de arquivos')
  }
}

async function syncSequelize() {
  try {
    const syncConfig = { force: false, alter: true }

    await sequelize.sync(syncConfig)

    await Promise.all(
      Object.values(SequelizeSchemas).map((schema) => {
        //@ts-ignore TODO: look for the right typing for this
        schema.sync(syncConfig)
      })
    )

    console.log('Sequelize models synced successfully.')
  } catch (error) {
    console.error('Error synchronizing sequelize:\n', error)
  }
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      mainWindow.show()
      mainWindow.focus()
    }
  })

  app.on('before-quit', () => {
    if (tray) {
      tray.destroy()
      tray = null
    }

    if (mainWindow) {
      mainWindow.destroy()
      mainWindow = null
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.exit()
    }
  })

  app.whenReady().then(() => {
    electronApp.setAppUserModelId('com.electron')

    // Call just when using sequelize
    syncSequelize()

    createTray()
    createWindow()

    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createTray()
        createWindow()
      }
    })
  })
}

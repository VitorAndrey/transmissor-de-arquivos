import { getProducts, quitApp, sendLog } from './ipc-handlers/@exports'

export function registerIpcEvents(ipcMain): void {
  ipcMain.handle('get-products', getProducts)

  ipcMain.on('quit-app', quitApp)
  ipcMain.on('send-log', sendLog)
}

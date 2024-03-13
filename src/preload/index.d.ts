import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}

interface Api {
  product: {
    findMany: () => ReturnType<typeof ipcRenderer.send>
    create: () => ReturnType<typeof ipcRenderer.send>
    update: () => ReturnType<typeof ipcRenderer.send>
    delete: () => ReturnType<typeof ipcRenderer.send>
  }
}

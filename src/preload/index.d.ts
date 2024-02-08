import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}

interface Api {
  products: {
    findMany: () => ReturnType<typeof ipcRenderer.send>
  }
}

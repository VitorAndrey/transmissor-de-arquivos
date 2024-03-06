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
  }
}

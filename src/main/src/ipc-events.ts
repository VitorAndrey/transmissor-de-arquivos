import { sendLog } from './ipc-handlers'

export function registerIpcEvents(ipcMain): void {
  ipcMain.on('send-log', sendLog)
}

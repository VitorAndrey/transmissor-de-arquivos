import { sendLog } from './ipc-handlers/@exports'

export function registerIpcEvents(ipcMain): void {
  ipcMain.on('send-log', sendLog)
}

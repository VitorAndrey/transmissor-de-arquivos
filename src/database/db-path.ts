import * as fs from 'fs'
import { join } from 'path'
import { app } from 'electron'

const userDataPath = app.getPath('userData')
const dbPath = join(userDataPath, 'Database')

if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath)
}

export { dbPath }

import * as fs from 'fs'
import { join } from 'path'
import { app } from 'electron'

const userDataPath = app.getPath('userData')
const migrationsPath = join(userDataPath, 'Migrations')

if (!fs.existsSync(migrationsPath)) {
  fs.mkdirSync(migrationsPath)
}

export { migrationsPath }

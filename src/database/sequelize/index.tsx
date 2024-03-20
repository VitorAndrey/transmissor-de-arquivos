import * as fs from 'fs'
import { Sequelize } from 'sequelize'
import { join } from 'path'

import { dbPath } from '../db-path'

const sequelizeDbPath = join(dbPath, 'Sequelize')

if (!fs.existsSync(sequelizeDbPath)) {
  fs.mkdirSync(sequelizeDbPath)
}

const sequelizeSqliteFile = join(sequelizeDbPath, 'db.sqlite')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: sequelizeSqliteFile,
  logging: false
})

export { sequelize }

import * as fs from 'fs'
// import path from 'path'
import { join } from 'path'
import Database from 'better-sqlite3'
import { dbPath } from '../db-path'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

import { product } from './schemas/@exports'
// import jsonFile from '../../resources/xx.json?commonjs-external&asset'

const drizzleDbPath = join(dbPath, 'Drizzle')

if (!fs.existsSync(drizzleDbPath)) {
  fs.mkdirSync(drizzleDbPath)
}

const drizzleSqliteFile = join(drizzleDbPath, 'sqlite.db')

const betterSqlite = new Database(drizzleSqliteFile)
const db = drizzle(betterSqlite, { schema: { product } })

// const dir = path.dirname(jsonFile)
// migrate(db, { migrationsFolder: dir })
migrate(db, { migrationsFolder: 'src/database/drizzle/migrations' })

// TODO: Close database before quiting app =>  betterSqlite.close()

export { db }

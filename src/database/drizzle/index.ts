// CURRENTLY DISABLED, USING SEQUELIZE INSTEAD WHILE CAN'T SOLVE
// NOT FINDING MIGRATIONS FOLDER AFTER BUILD ERROR.

import * as fs from 'fs'
import { join } from 'path'
import Database from 'better-sqlite3'
import { dbPath } from '../db-path'
import { drizzle } from 'drizzle-orm/better-sqlite3'
// import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { product } from './schemas/@exports'

const drizzleDbPath = join(dbPath, 'Drizzle')

if (!fs.existsSync(drizzleDbPath)) {
  fs.mkdirSync(drizzleDbPath)
}

const drizzleSqliteFile = join(drizzleDbPath, 'sqlite.db')

const betterSqlite = new Database(drizzleSqliteFile)
const db = drizzle(betterSqlite, { schema: { product } })

// migrate(db, { migrationsFolder: 'src/database/drizzle/migrations' })

// TODO: Close database before quiting app =>  betterSqlite.close()

export { db }

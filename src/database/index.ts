import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import Database from 'better-sqlite3'
import { dbPath } from './db-path'
import path from 'path'

import { product } from '../database/schemas/@exports'
import jsonFile from '../../resources/xx.json?commonjs-external&asset'

const betterSqlite = new Database(dbPath)
const db = drizzle(betterSqlite, { schema: { product } })

const dir = path.dirname(jsonFile)
migrate(db, { migrationsFolder: dir })

// TODO: Close database before quiting app =>  betterSqlite.close()

export { db }

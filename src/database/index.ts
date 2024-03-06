import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import Database from 'better-sqlite3'
import { dbPath } from './db-path'

import { product } from '@schemas/@exports'

const betterSqlite = new Database(dbPath)
const db = drizzle(betterSqlite, { schema: { product } })

migrate(db, { migrationsFolder: 'src/database/migrations' })
// TODO: Close database before quiting app
// betterSqlite.close()

export { db }

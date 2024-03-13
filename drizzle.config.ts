import type { Config } from 'drizzle-kit'

export default {
  schema: './src/database/drizzle/schemas/@exports.ts',
  out: './src/database/drizzle/migrations',
  driver: 'better-sqlite'
} satisfies Config

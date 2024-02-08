import type { Config } from 'drizzle-kit'

export default {
  schema: './src/database/schemas/!(exports).ts',
  out: './drizzle',
  driver: 'better-sqlite'
} satisfies Config

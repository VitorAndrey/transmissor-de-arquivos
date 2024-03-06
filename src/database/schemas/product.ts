import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const product = sqliteTable('products', {
  id: integer('id').primaryKey(),
  name: text('name')
})

export type ProductType = typeof product.$inferSelect
export type InsertProductType = typeof product.$inferInsert

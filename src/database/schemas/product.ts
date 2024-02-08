import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const products = sqliteTable('products', {
  id: integer('id').primaryKey(),
  name: text('name')
})

export type ProductType = typeof products.$inferSelect
export type InsertProductType = typeof products.$inferInsert

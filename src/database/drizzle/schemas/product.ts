import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const product = sqliteTable('products', {
  id: integer('id').primaryKey(),
  convenio: text('name')
})

export type Product = typeof product.$inferSelect
export type InsertProduct = typeof product.$inferInsert
export type UpdateProduct = {
  convenio: string
  updatedProduct: InsertProduct
}

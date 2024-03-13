import { Product, InsertProduct, UpdateProduct } from '@database/drizzle/schemas/@exports'

export interface ProductsRepository {
  create(data: { newProduct: Product }): Promise<InsertProduct>
  update(data: UpdateProduct): Promise<Product>
  delete(data: { convenio: string }): void

  findMany: () => Promise<Product[]>
  findByConvenio(data: { convenio: string }): Promise<Product | null>
}

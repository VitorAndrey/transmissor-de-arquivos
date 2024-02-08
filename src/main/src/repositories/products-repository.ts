import { ProductType } from '@schemas/@exports'

export interface ProductsRepository {
  findMany: () => Promise<ProductType[]>
}

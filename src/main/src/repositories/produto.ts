import { ProductType } from '../../../types'

type UpdateObject = {
  productId: string
  newProduct: ProductType
}

export interface ProductsRepository {
  create: (data: ProductType) => void
  delete: (id: string) => void
  update: (data: UpdateObject) => void

  findById: (id: string) => Promise<ProductType | null>
  findMany: () => Promise<ProductType[]>
}

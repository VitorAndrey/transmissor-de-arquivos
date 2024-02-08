import { ProductType } from '@schemas/product'
import { ProductsRepository } from '../products-repository'
import { db } from '../../../../database/index'

export class DrizzleProductsRepository implements ProductsRepository {
  async findMany(): Promise<ProductType[]> {
    const data = db.query.products.findMany()

    return data
  }
}

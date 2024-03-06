import { ProductType } from '@schemas/@exports'
import { ProductsRepository } from '../products-repository'
import { db } from '../../../../database'

export class DrizzleProductsRepository implements ProductsRepository {
  async findMany(): Promise<ProductType[]> {
    const data = db.query.product.findMany()

    return data
  }
}

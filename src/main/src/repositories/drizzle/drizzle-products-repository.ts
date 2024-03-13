import { product } from '@database/drizzle/schemas/@exports'
import { ProductsRepository } from '../products-repository'
import { db } from '@database/drizzle'

export class DrizzleProductsRepository implements ProductsRepository {
  //@ts-expect-error - TODO: implement method
  async create({ newProduct }) {}

  //@ts-expect-error - TODO: implement method
  async update({ convenio, updatedProduct }) {}

  async delete() {
    await db.delete(product)
  }

  async findMany() {
    const data = db.query.product.findMany()

    return data
  }

  async findByConvenio({ convenio }) {
    const data = await db.query.product.findFirst({
      where: (product, { eq }) => eq(product.convenio, convenio)
    })

    return data || null
  }
}

import '@database/sequelize'
import { Product } from '@database/sequelize/schemas/product'
import { ProductsRepository } from '../products-repository'

export class SequelizeProductsRepository implements ProductsRepository {
  async create({ newProduct }) {
    const product = await Product.create(newProduct)

    return product.dataValues
  }

  async update({ convenio, updatedProduct }) {
    await Product.update(updatedProduct, {
      where: {
        convenio
      }
    })

    return updatedProduct
  }

  async delete({ convenio }) {
    await Product.destroy({
      where: {
        convenio
      }
    })
  }

  async findMany() {
    const data = await Product.findAll()
    const products = data.map((item) => item.dataValues)

    return products
  }

  async findByConvenio({ convenio }) {
    const product = await Product.findOne({
      where: {
        convenio
      }
    })
    return product?.dataValues
  }
}

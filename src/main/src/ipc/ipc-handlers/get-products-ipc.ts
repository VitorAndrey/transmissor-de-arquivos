import { SequelizeProductsRepository } from '@main/repositories/sequelize/sequelize-products-repository'

export async function getProducts() {
  const productsRepository = new SequelizeProductsRepository()

  try {
    const products = await productsRepository.findMany()

    return products
  } catch (error) {
    console.error({ message: 'Error while searching products.', error })
  }

  return null
}

import { DrizzleProductsRepository } from '../repositories/drizzle/drizzle-products-repository'

export async function getProducts() {
  const productsRepository = new DrizzleProductsRepository()

  try {
    const products = await productsRepository.findMany()

    return products
  } catch (error) {
    console.error({ message: 'Error while searching products.', error })
  }

  return null
}

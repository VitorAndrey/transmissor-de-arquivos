import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/cadastrar-produto')({
  component: CadastrarProduto
})

function CadastrarProduto(): JSX.Element {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const products = await window.api.product.findMany()

    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      {products}
    </div>
  )
}

import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@renderer/components/shadcn/button'
import { Input } from '@renderer/components/shadcn/input'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index(): JSX.Element {
  const [products, setProducts] = useState([])

  async function fetchProducts(): Promise<void> {
    const products = await window.api.product.findMany()
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="space-y-2">
      <h1>Welcome Home!</h1>
      <Button>Test</Button>
      <Input className="w-80" />
      {JSON.stringify(products)}
    </div>
  )
}

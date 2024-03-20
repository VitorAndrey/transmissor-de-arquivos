import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'

const productSearchSchema = z.object({
  convenio: z.string()
})

export const Route = createFileRoute('/alterar-produto')({
  component: AlterarProduto,
  validateSearch: productSearchSchema
})

function AlterarProduto(): JSX.Element {
  const { convenio } = Route.useSearch()

  return (
    <div>
      <h1>Alterar Produto - {convenio}</h1>
    </div>
  )
}

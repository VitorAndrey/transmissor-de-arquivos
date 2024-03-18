import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/alterar-produto')({
  component: AlterarProduto
})

function AlterarProduto(): JSX.Element {
  return (
    <div>
      <h1>Alterar Produto</h1>
    </div>
  )
}

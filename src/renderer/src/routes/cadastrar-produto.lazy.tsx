import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cadastrar-produto')({
  component: CadastrarProduto
})

function CadastrarProduto(): JSX.Element {
  return (
    <div>
      <h1>Cadastrar Produto</h1>
    </div>
  )
}

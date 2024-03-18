import { Link } from '@tanstack/react-router'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-2 p-6">
      <Link to="/cadastrar-produto">Cadastrar Produtos</Link>
      <Link to="/gerenciar-produtos">Gerenciar Produtos</Link>
    </aside>
  )
}

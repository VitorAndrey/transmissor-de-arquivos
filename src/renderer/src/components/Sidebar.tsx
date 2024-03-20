import { Link } from '@tanstack/react-router'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-2 p-6">
      <Link to="/cadastrar-produto">Cadastrar Produtos</Link>
      <Link to="/gerenciar-produtos/1">Gerenciar Produtos</Link>
      <Link to="/transferencia-manual">Transferência Manual</Link>
      <Link to="/historico">Histórico</Link>
    </aside>
  )
}

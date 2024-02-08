import { Link } from '@tanstack/react-router'

export function Sidebar(): JSX.Element {
  return (
    <aside className="flex flex-col gap-2 p-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </aside>
  )
}

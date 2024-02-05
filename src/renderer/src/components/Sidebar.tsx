import { Link } from '@tanstack/react-router'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="flex flex-col gap-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </aside>
  )
}

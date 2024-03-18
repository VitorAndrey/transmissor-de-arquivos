import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => null,
  loader: () => {
    redirect({
      to: '/cadastrar-produto',
      throw: true
    })
  }
})

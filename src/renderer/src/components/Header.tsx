import { cn } from '@renderer/utils/shadcn'
import { buttonVariants } from './shadcn/button'
import { CaixaLogo } from './caixa-logo'

export function Header(): JSX.Element {
  return (
    <header className="flex h-16 items-center justify-between border-b px-8">
      <div className="flex items-center gap-2">
        <CaixaLogo />
        <h2>Transmissor de arquivos 1.0.0</h2>
      </div>
      <button className={cn(buttonVariants({ variant: 'link' }), 'underline')}>Sair</button>
    </header>
  )
}

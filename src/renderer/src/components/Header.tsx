import { CaixaLogo } from './caixa-logo'
import { HeaderQuitButton } from './header-quit-button'

export function Header(){
  return (
    <header className="flex h-24 items-center gap-8 border-y px-8">
      <CaixaLogo />

      <div className="flex-1">
        <h1 className="text-xl font-bold">Transmissor de documentos</h1>
        <span className="text-sm">Versão 1.0.0</span>
      </div>

      <HeaderQuitButton />
    </header>
  )
}

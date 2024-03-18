import { CaixaLogo } from './caixa-logo'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@renderer/components/shadcn/alert-dialog"

export function Header(){
  return (
    <header className="flex h-24 items-center gap-8 border-y px-8">
      <CaixaLogo />

      <div className="flex-1">
        <h1 className="text-xl font-bold">Transmissor de documentos</h1>
        <span className="text-sm">Versão 1.0.0</span>
      </div>

      <AlertDialog>
      <AlertDialogTrigger>
        <span className="text-sm underline">Sair</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              Ao fechar o programa na opção &quot;Sair&quot; ao invés de no &quot;X&quot; da janela,
              o programa encerrará completamente o processo automático de envio de arquivos.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => {}}>
            Encerrar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </header>
  )
}

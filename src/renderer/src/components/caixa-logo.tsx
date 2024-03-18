import Logo from '@renderer/assets/images/caixa-logo.png'

type Props = {
  size?: number
}

export function CaixaLogo({ size = 115 }: Props){
  return <img src={Logo} alt="Logo da Caixa" width={size} />
}

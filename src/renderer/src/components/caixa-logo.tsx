import Logo from '@renderer/assets/images/caixa-logo.png'

type CaixaLogoProps = {
  size?: number
}

export function CaixaLogo({ size = 100 }: CaixaLogoProps): JSX.Element {
  return <img src={Logo} alt="Logo da Caixa" width={size} />
}

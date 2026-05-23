import Image from 'next/image'

interface KultivarLogoProps {
  variant?: 'dark' | 'light'
  size?: number
}

export function KultivarLogo({ variant = 'dark', size = 28 }: KultivarLogoProps) {
  const src =
    variant === 'light' ? '/images/logo-kultivar-light.svg' : '/images/logo-kultivar.svg'
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      priority
      aria-hidden
    />
  )
}

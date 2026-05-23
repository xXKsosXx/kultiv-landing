import Image from 'next/image'

interface KultivarLogoProps {
  variant?: 'dark' | 'light'
  size?: number
}

/**
 * Logo Kultivar (moulinet).
 * Kamal doit déposer :
 *  - public/images/logo-kultivar.png        (logo principal, transparent ou bg clair)
 *  - public/images/logo-kultivar-light.png  (variante cream/sage pour fond sombre)
 *    En attendant la version cream, on retombe sur le placeholder K cream
 *    via le fichier logo-kultivar-light.svg.
 */
export function KultivarLogo({ variant = 'dark', size = 32 }: KultivarLogoProps) {
  const src =
    variant === 'light'
      ? '/images/logo-kultivar-light.svg'
      : '/images/logo-kultivar.png'
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      priority
      aria-hidden
      style={{ display: 'block', width: size, height: size, objectFit: 'contain' }}
    />
  )
}

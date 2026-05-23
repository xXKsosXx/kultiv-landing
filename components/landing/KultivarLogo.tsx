import Image from 'next/image'

interface KultivarLogoProps {
  variant?: 'dark' | 'light'
  size?: number
}

/**
 * Logo Kultivar (moulinet) — même PNG pour les deux variantes.
 * Sur fond sombre (variant="light"), un backdrop cream/sage rend
 * le moulinet vert profond lisible.
 */
export function KultivarLogo({ variant = 'dark', size = 32 }: KultivarLogoProps) {
  const wrapperClass =
    variant === 'light' ? 'lp-logo-wrap lp-logo-wrap--light' : 'lp-logo-wrap'

  return (
    <span
      className={wrapperClass}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/images/logo-kultivar.png"
        alt=""
        width={size}
        height={size}
        priority
        className="lp-logo-img"
      />
    </span>
  )
}

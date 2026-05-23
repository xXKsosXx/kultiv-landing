interface KultivarLogoProps {
  variant?: 'dark' | 'light'
}

export function KultivarLogo({ variant = 'dark' }: KultivarLogoProps) {
  const leaf1 = variant === 'dark' ? '#154212' : '#F4EDE0'
  const leaf2 = '#A8C5A0'
  const stem = variant === 'dark' ? '#154212' : '#F4EDE0'

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28 C 16 18, 8 14, 6 10 C 12 11, 16 14, 16 20 Z" fill={leaf1} />
      <path d="M16 28 C 16 18, 24 14, 26 10 C 20 11, 16 14, 16 20 Z" fill={leaf2} />
      <path d="M16 28 L 16 12" stroke={stem} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

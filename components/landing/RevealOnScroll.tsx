'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'header'
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [delay])

  const classes = `lp-reveal ${visible ? 'lp-reveal--visible' : ''} ${className}`.trim()

  return (
    <Tag ref={ref as never} className={classes}>
      {children}
    </Tag>
  )
}

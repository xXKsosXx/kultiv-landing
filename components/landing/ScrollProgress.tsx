'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
      setPct(Math.max(0, Math.min(1, ratio)))
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="lp-progress" style={{ width: `${pct * 100}%` }} aria-hidden />
}

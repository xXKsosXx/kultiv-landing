'use client'

import { Plus } from '@phosphor-icons/react/dist/ssr'
import { ReactNode, useState } from 'react'

interface FaqItemProps {
  question: string
  children: ReactNode
}

export function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`lp-faq-item lp-reveal lp-reveal--visible ${
        open ? 'lp-faq-item--open' : ''
      }`}
    >
      <button
        className="lp-faq-q"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span>{question}</span>
        <span className="lp-ic">
          <Plus size={14} />
        </span>
      </button>
      <div className="lp-faq-a">
        <div className="lp-faq-a-inner">{children}</div>
      </div>
    </div>
  )
}

'use client'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asLink?: boolean }

export default function GlassButton({ asLink, className = '', children, ...rest }: Props){
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30'
  const glass = 'bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md'
  const classes = `${base} ${glass} ${className}`.trim()

  if(asLink){
    return <a {...(rest as any)} className={classes}>{children}</a>
  }

  return <button {...rest} className={classes}>{children}</button>
}

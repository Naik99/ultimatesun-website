'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/entrance-doors', label: 'Entrance Doors' },
    { href: '/wooden-doors', label: 'Wooden Doors' },
    { href: '/kitchen-sinks', label: 'Kitchen Sinks' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-[1240px] mx-4 bg-white/8 backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-2xl shadow-lg shadow-black/20">
        <div className="flex items-center justify-between h-[64px] px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/images/logo-placeholder.png" alt="ULTIMATESUN logo" fill sizes="48px" className="object-contain rounded-md" priority />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-[#003841] tracking-tight">ULTIMATESUN</div>
              <div className="text-[12px] text-white/85">Resources Nig LTD</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`relative px-3 py-1 text-sm transition-colors duration-200 text-white/90 hover:text-[#003841]`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="px-4 py-2 bg-[#003841] hover:bg-[#024f43] text-white rounded-md text-sm shadow-sm">Get a Quote</Link>
          </div>

          <button className="md:hidden p-2 rounded-md bg-white/6" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} className="text-white/90" /> : <Menu size={20} className="text-white/90" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-sm text-white/90">{item.label}</Link>
            ))}
            <Link href="/contact" className="block mt-2 px-4 py-2 bg-[#003841] text-white rounded-md text-sm">Get a Quote</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

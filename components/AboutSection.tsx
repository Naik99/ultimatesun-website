"use client"
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function AboutSection(){
  const slides = [
    '/images/about/about1.jpg',
    '/images/hero/door-hero.jpg',
    '/images/entrance-doors/entrance1.jpg'
  ]

  const [idx, setIdx] = useState(0)
  const tRef = useRef<number | null>(null)

  useEffect(() => {
    tRef.current = window.setInterval(() => setIdx(i => (i + 1) % slides.length), 5000)
    return () => { if (tRef.current) window.clearInterval(tRef.current) }
  }, [])

  return (
    <section id="about" className="py-24 bg-[#003841] overflow-hidden relative">
      {/* background slider images */}
      {slides.map((src, i) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}>
          <Image src={src} alt="About background" fill className="object-cover object-center brightness-75" priority={i===0} />
          <div className="absolute inset-0 bg-[#003841]/70" />
        </div>
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-6 md:p-10 lg:p-12 mx-auto max-w-6xl" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,56,65,0.06))', backdropFilter: 'blur(8px)'}}>

          {/* decorative faint glow (kept inside bounds) */}
          <div aria-hidden className="absolute left-6 top-6 w-40 h-40 rounded-full bg-white/6 blur-3xl opacity-20" />

          <div className="relative z-10 bg-[rgba(255,255,255,0.02)] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-xs">
                  <div className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center shadow-md transition-transform hover:scale-105">
                    <div className="relative w-28 h-28 md:w-36 md:h-36">
                      <Image src="/images/logo-placeholder.png" alt="ULTIMATESUN logo" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm border border-white/10">
                  <span className="text-xs font-semibold tracking-wider text-white/90">ABOUT ULTIMATESUN</span>
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">Built Around Quality. Driven by Excellence.</h2>

                <p className="mt-4 text-white/80 max-w-2xl">ULTIMATESUN Resources Nig LTD is a building-materials brand based in Osogbo, Osun State, Nigeria, providing quality doors and kitchen solutions for modern homes, offices and other spaces.</p>

                <p className="mt-3 text-white/80 max-w-2xl">From premium imported entrance doors to elegant wooden doors and practical kitchen sinks, our focus is on products that combine quality, durability and style.</p>

                <div className="mt-6 flex items-center gap-4">
                  <a href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-white/6 backdrop-blur-sm border border-white/20 text-white hover:bg-white/8 hover:border-white/30 transition-all">
                    <span className="font-semibold">Discover More</span>
                    <ArrowRight size={16} className="text-white" />
                  </a>

                  <span className="text-white/70 italic">Quality. Durability. Excellence.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

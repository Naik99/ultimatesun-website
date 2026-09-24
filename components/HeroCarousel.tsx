 'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, HeroSlide } from '../data/heroSlides'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 5500)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [index, isPaused])

  const goPrev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const goNext = () => setIndex((i) => (i + 1) % heroSlides.length)

  return (
    <section onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="relative min-h-[820px] md:min-h-[78vh] lg:min-h-[88vh] bg-black overflow-hidden">
      {heroSlides.map((slide: HeroSlide, i) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Image src={slide.image} alt={slide.title} fill className="object-cover object-center" priority={i===0} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-white">
            <div className="inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm text-sm tracking-wider">{heroSlides[index].category}</div>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">{heroSlides[index].title}</h2>
            <p className="mt-5 text-gray-200 max-w-xl">{heroSlides[index].description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={heroSlides[index].primaryCta.href} className="inline-flex items-center px-6 py-3 bg-[#003841] hover:bg-[#024f43] text-white rounded-md text-sm shadow">{heroSlides[index].primaryCta.label}</a>
              <a href={heroSlides[index].secondaryCta.href} className="inline-flex items-center px-5 py-3 border border-white/20 text-white rounded-md text-sm">{heroSlides[index].secondaryCta.label}</a>
            </div>
            <div className="mt-6 text-sm text-white/80">{heroSlides[index].location}</div>
          </div>

          <div className="md:col-span-7 relative">
            <div className="aspect-[5/4] md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/20">
              <Image src={heroSlides[index].image} alt={heroSlides[index].title} fill className="object-cover object-center transform transition-transform duration-700 scale-100 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute right-6 bottom-8 z-40 flex items-center gap-3">
        <button aria-label="Previous slide" onClick={goPrev} className="p-2 rounded-md bg-white/6 backdrop-blur-sm text-white/90">
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-black/30">
          {heroSlides.map((s, i) => (
            <button key={s.id} aria-label={`Go to ${s.id}`} onClick={() => setIndex(i)} className={`w-8 h-2 rounded-full transition-all ${i === index ? 'bg-[#003841] w-8' : 'bg-white/30 w-4'}`} />
          ))}
        </div>
        <button aria-label="Next slide" onClick={goNext} className="p-2 rounded-md bg-white/6 backdrop-blur-sm text-white/90">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}

'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[72vh] md:h-[80vh] bg-black">
      <Image src="/images/hero/door-hero.jpg" alt="Entrance door" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="text-sm tracking-wider uppercase text-[#003841]">QUALITY BUILDING MATERIALS</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">Quality Doors. Exceptional Spaces.</h1>
          <p className="mt-6 text-gray-200">Discover premium imported entrance doors, beautifully crafted wooden doors and quality kitchen sinks designed to bring durability, security and elegance to your space.</p>
          <div className="mt-8 flex gap-3">
            <a href="#entrance" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30 bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md">Explore Our Products</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30 bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md">Get a Quote</a>
          </div>
          <div className="mt-6 text-sm text-[#003841]/80">Osogbo, Osun State, Nigeria</div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'entrance',
    name: 'Imported Entrance Doors',
    desc: 'Premium entrance doors designed to combine security, durability and modern style, giving your building a strong and elegant first impression.',
    img: '/images/entrance-doors/entrance1.jpg',
    href: '#'
  },
  {
    id: 'wooden',
    name: 'Wooden Doors',
    desc: 'Elegant wooden doors that bring warmth, character and timeless beauty to residential and commercial spaces.',
    img: '/images/wooden-doors/wood1.jpg',
    href: '#'
  },
  {
    id: 'sinks',
    name: 'Kitchen Sinks',
    desc: 'Functional and stylish kitchen sinks selected for modern kitchens, combining durability, practicality and clean design.',
    img: '/images/kitchen-sinks/sink1.jpg',
    href: '#'
  }
]

export default function ProductCategories(){
  return (
    <section className="py-24 relative bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* subtle decorative glass circle */}
      <div aria-hidden className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/6 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <button className="inline-flex items-center px-4 py-2 rounded-full bg-white/8 backdrop-blur-sm border-2 border-white/10 shadow-sm focus:outline-none">
            <span className="text-sm font-semibold text-[#003841] tracking-wider">OUR PRODUCTS</span>
          </button>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-3xl mx-auto">Quality Products for Modern Spaces</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore our carefully selected range of doors and kitchen solutions.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <article key={cat.id} className="group relative rounded-3xl overflow-hidden transition-transform transform hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/5 transition-all group-hover:ring-[#003841]/20" />

              <div className="relative h-[320px] md:h-[360px] lg:h-[400px] w-full bg-black/5 rounded-2xl overflow-hidden">
                <Image src={cat.img} alt={cat.name} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* category badge */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-semibold text-white/95 tracking-wider">{cat.name.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white/6 backdrop-blur-xl border border-white/10 rounded-b-2xl">
                <h3 className="text-2xl font-semibold text-gray-900">{cat.name}</h3>
                <p className="mt-3 text-gray-600">{cat.desc}</p>

                <div className="mt-6">
                  <a href={cat.href} aria-label={`Explore ${cat.name}`} className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white/8 backdrop-blur-sm border-2 border-white/10 hover:border-[#003841] hover:shadow-md transition-transform duration-300 group">
                    <span className="text-sm font-semibold text-[#003841]">Explore Collection</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={16} className="text-[#003841]" /></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

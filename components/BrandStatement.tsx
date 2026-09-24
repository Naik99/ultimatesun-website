import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function BrandStatement(){
  return (
    <section className="relative mt-12">
      <div className="relative h-64 md:h-96">
        <Image src="/images/hero/door-hero.jpg" alt="Brand background" fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-[#003841]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-4xl mx-auto bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">

              <div className="text-white text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-extrabold">Quality. Durability. Excellence.</h2>
                <p className="mt-2 text-white/80">The standard behind everything we offer.</p>
              </div>

              <div className="ml-auto">
                <a href="#" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white/6 backdrop-blur-sm border border-white/20 text-white hover:bg-white/8 transition">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight size={16} className="text-white" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

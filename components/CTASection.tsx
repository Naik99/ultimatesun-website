export default function CTASection(){
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 bg-white/6 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-tr from-[#6EE7B7] to-[#60A5FA] opacity-30 rounded-full blur-3xl transform rotate-45" aria-hidden />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gradient-to-tr from-[#FDBA74] to-[#F472B6] opacity-30 rounded-full blur-3xl transform rotate-12" aria-hidden />

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#023a36]">Looking for the Right Product for Your Space?</h2>
          <p className="mt-3 text-[#1f2937]">Explore our range of entrance doors, wooden doors and kitchen sinks — or speak with us about a tailored solution.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#entrance" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-[#00766a] to-[#004f45] transform hover:-translate-y-1 transition">Explore Products</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/10 text-[#023a36] hover:shadow-md transition">Get a Quote</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">No pressure — just honest advice and reliable products.</div>
        </div>
      </div>
    </section>
  )
}

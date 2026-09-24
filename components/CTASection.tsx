export default function CTASection(){
  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Looking for the Right Product for Your Space?</h2>
        <p className="mt-3 text-gray-700">Explore our range of entrance doors, wooden doors and kitchen sinks or speak with us about your requirements.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#entrance" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30 bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md">Explore Products</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30 bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md">Get a Quote</a>
        </div>
      </div>
    </section>
  )
}

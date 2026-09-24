import Image from 'next/image'

const products = [
  { id: 1, name: 'Premium Imported Entrance Door', category: 'Imported Entrance Door', img: '/images/entrance-doors/entrance1.jpg', desc: 'A premium imported entrance door.' },
  { id: 2, name: 'Modern Imported Entrance Door', category: 'Imported Entrance Door', img: '/images/entrance-doors/entrance2.jpg', desc: 'A modern imported entrance door.' },
  { id: 3, name: 'Classic Wooden Door', category: 'Wooden Door', img: '/images/wooden-doors/wood1.jpg', desc: 'A classic wooden door.' },
  { id: 4, name: 'Modern Wooden Door', category: 'Wooden Door', img: '/images/wooden-doors/wood2.jpg', desc: 'A modern wooden door.' },
  { id: 5, name: 'Stainless Steel Kitchen Sink', category: 'Kitchen Sink', img: '/images/kitchen-sinks/sink1.jpg', desc: 'A stainless steel kitchen sink.' },
  { id: 6, name: 'Premium Kitchen Sink', category: 'Kitchen Sink', img: '/images/kitchen-sinks/sink2.jpg', desc: 'A premium kitchen sink.' }
]

export default function FeaturedProducts(){
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="mt-2 text-gray-600">Explore some of the products available from ULTIMATESUN Resources Nig LTD.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <article key={p.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <div className="relative h-44">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#003841]">{p.category}</div>
              <h3 className="mt-1 font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4">
                <a href="#" className="text-[#003841] font-medium">View Details</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

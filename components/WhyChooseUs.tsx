import { CheckCircle } from 'lucide-react'

const features = [
  { title: 'Quality', desc: 'Products selected with quality and reliability in mind.' },
  { title: 'Durability', desc: 'Materials chosen to provide lasting value and everyday performance.' },
  { title: 'Style', desc: 'Modern designs that complement contemporary spaces.' },
  { title: 'Service', desc: 'A professional and straightforward customer experience.' }
]

export default function WhyChooseUs(){
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose ULTIMATESUN?</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map(f => (
          <div key={f.title} className="p-6 bg-white rounded-lg shadow flex gap-4 items-start">
            <CheckCircle className="w-8 h-8 text-[#003841]" />
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

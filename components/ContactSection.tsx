'use client'
import { useState } from 'react'

const productOptions = [
  'Imported Entrance Doors',
  'Wooden Doors',
  'Kitchen Sinks',
  'General Enquiry'
]

export default function ContactSection(){
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: productOptions[0], message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: any){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: any){
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Let's Talk About Your Project</h2>
          <p className="mt-2 text-gray-600">Osogbo, Osun State, Nigeria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700">For enquiries, use the contact form or reach us at the placeholders below.</p>
            <ul className="mt-4 text-gray-700 space-y-1">
              <li>Phone: [PHONE NUMBER]</li>
              <li>WhatsApp: [WHATSAPP NUMBER]</li>
              <li>Email: [EMAIL ADDRESS]</li>
              <li>Address: [BUSINESS ADDRESS]</li>
            </ul>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded">
                <h3 className="font-semibold">Thank you</h3>
                <p className="mt-2 text-gray-700">Your enquiry has been recorded locally. We will respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300" placeholder="Phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Product Category</label>
                  <select name="product" value={form.product} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300">
                    {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300" rows={4} />
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#003841]/30 bg-white/6 backdrop-blur-sm border border-white/10 text-[#003841] hover:shadow-md">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

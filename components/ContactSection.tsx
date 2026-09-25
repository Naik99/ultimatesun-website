'use client'
import { useState } from 'react'
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'

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
          <p className="mt-2 text-gray-500">Osogbo, Osun State, Nigeria — we're ready when you are.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact cards */}
          <div className="space-y-5">
            <p className="text-gray-700">Prefer to reach out directly? Use any of the contact methods below — we aim to respond within one business day.</p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#003841] via-[#025a4f] to-emerald-500 text-white shadow-2xl transform hover:-translate-y-1 transition">
                <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase opacity-90">Phone</div>
                  <div className="font-semibold">[PHONE NUMBER]</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-orange-300 text-white shadow-2xl transform hover:-translate-y-1 transition">
                <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase opacity-90">WhatsApp</div>
                  <div className="font-semibold">[WHATSAPP NUMBER]</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-white shadow-2xl transform hover:-translate-y-1 transition">
                <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase opacity-90">Email</div>
                  <div className="font-semibold">[EMAIL ADDRESS]</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-rose-200 text-[#222] shadow-2xl transform hover:-translate-y-1 transition">
                <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#222]" />
                </div>
                <div>
                  <div className="text-sm uppercase opacity-90">Address</div>
                  <div className="font-semibold">[BUSINESS ADDRESS]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 shadow-lg">
                <h3 className="font-semibold text-[#003841]">Thank you</h3>
                <p className="mt-2 text-gray-700">Your enquiry has been recorded. We will respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white/4 p-6 rounded-2xl backdrop-blur-md border border-white/8 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm text-gray-600 mb-1">Full Name</span>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-lg px-3 py-2 bg-white/8 border border-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#003841]/40" />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm text-gray-600 mb-1">Phone</span>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-lg px-3 py-2 bg-white/8 border border-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#003841]/40" />
                  </label>
                </div>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Email</span>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-lg px-3 py-2 bg-white/8 border border-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#003841]/40" />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Product Category</span>
                  <select name="product" value={form.product} onChange={handleChange} className="rounded-lg px-3 py-2 bg-white/8 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#003841]/40">
                    {productOptions.map(p => <option key={p} value={p} className="text-black">{p}</option>)}
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Message</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project" className="rounded-lg px-3 py-2 bg-white/8 border border-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#003841]/40 resize-none shadow-inner" />
                </label>

                <div className="flex justify-end">
                  <button type="submit" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#003841] to-[#025a4f] text-white shadow-xl transform hover:-translate-y-0.5 transition">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

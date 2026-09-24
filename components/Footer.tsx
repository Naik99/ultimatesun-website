import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold">ULTIMATESUN Resources Nig LTD</div>
          <div className="mt-2 text-gray-400">Quality. Durability. Excellence.</div>
          <p className="mt-4 text-gray-400">Quality doors and kitchen solutions for modern spaces.</p>
        </div>

        <div>
          <div className="font-semibold">Navigation</div>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#entrance">Entrance Doors</Link></li>
            <li><Link href="#wooden">Wooden Doors</Link></li>
            <li><Link href="#sinks">Kitchen Sinks</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <p className="mt-3 text-gray-400">Osogbo, Osun State, Nigeria</p>
          <p className="mt-2 text-gray-400">Phone: [PHONE NUMBER]</p>
          <p className="mt-1 text-gray-400">Email: [EMAIL ADDRESS]</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">© 2026 ULTIMATESUN Resources Nig LTD. All Rights Reserved.</div>
    </footer>
  )
}

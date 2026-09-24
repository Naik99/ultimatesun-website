import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ULTIMATESUN Resources Nig LTD | Quality Doors & Kitchen Sinks',
  description:
    'ULTIMATESUN Resources Nig LTD provides quality imported entrance doors, wooden doors and kitchen sinks in Osogbo, Osun State, Nigeria.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

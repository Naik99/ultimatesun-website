import Navbar from '../components/Navbar'
import Hero from '../components/HeroCarousel'
import ProductCategories from '../components/ProductCategories'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStatement from '../components/BrandStatement'
import CTASection from '../components/CTASection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCategories />
          <AboutSection />
          <WhyChooseUs />
          <FeaturedProducts />
        </div>
        <BrandStatement />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

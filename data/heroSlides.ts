export const heroSlides = [
  {
    id: 'brand',
    category: 'ULTIMATESUN RESOURCES',
    title: 'Quality. Durability. Excellence.',
    description: 'Premium doors and kitchen solutions designed to bring lasting quality, security and style to modern spaces.',
    location: 'Osogbo, Osun State, Nigeria',
    image: '/images/hero/door-hero.jpg',
    primaryCta: { label: 'Explore Our Products', href: '#entrance' },
    secondaryCta: { label: 'Get a Quote', href: '#contact' }
  },
  {
    id: 'entrance',
    category: 'IMPORTED ENTRANCE DOORS',
    title: 'Make a Strong First Impression.',
    description: 'Discover premium imported entrance doors designed to combine security, durability and sophisticated modern design.',
    image: '/images/entrance-doors/entrance1.jpg',
    primaryCta: { label: 'Explore Entrance Doors', href: '#entrance' },
    secondaryCta: { label: 'Get a Quote', href: '#contact' }
  },
  {
    id: 'wooden',
    category: 'WOODEN DOORS',
    title: 'Natural Character. Timeless Design.',
    description: 'Bring warmth, elegance and character to your space with beautifully designed wooden doors for modern homes and commercial spaces.',
    image: '/images/wooden-doors/wood1.jpg',
    primaryCta: { label: 'Explore Wooden Doors', href: '#wooden' },
    secondaryCta: { label: 'Get a Quote', href: '#contact' }
  },
  {
    id: 'sinks',
    category: 'KITCHEN SINKS',
    title: 'Designed for the Modern Kitchen.',
    description: 'Explore stylish and practical kitchen sinks selected to bring functionality, durability and clean design to modern kitchens.',
    image: '/images/kitchen-sinks/sink1.jpg',
    primaryCta: { label: 'Explore Kitchen Sinks', href: '#sinks' },
    secondaryCta: { label: 'Get a Quote', href: '#contact' }
  }
]

export type HeroSlide = typeof heroSlides[number]

import { Store } from './types'

const MOCK = [
  {
    id: 'restaurant-1',
    title: 'Restaurant',
    description: 'A nice restaurant somewhere in ',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res4.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'CMA, Rivadavia 2371',
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
  {
    id: 'restaurant-2',
    title: 'Very nice pleace  to eat a crab',
    description: 'Go on taste futti dimare and eat it',
    image:
      'https://restaurants-images-test.s3.amazonaws.com/shard_restaurant.webp',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-3',
    title: 'Dog food here',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res7.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-4',
    title: 'Very nice pleace  to eat a crab',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-5',
    title: 'some restaurant',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-6',
    title: 'Eat it',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-7',
    title: 'Cat food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-8',
    title: 'Pet food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-9',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-10',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-11',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-12',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-13',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-14',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'manolo-alem',
    title: 'Manolo Alem',
    description: 'Los churros más icónicos de Mar del Plata',
    image: 'https://restaurants-images-test.s3.amazonaws.com/restaurant-1.jpg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Leandro N. Alem 3980',
      lat: -38.0297605,
      lng: -57.5549408,
    },
  },
]

const api = {
  list: async (): Promise<Store[]> => MOCK,
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id)

    if (!store) {
      throw new Error('Store not found')
    }

    return store
  },
  hot: async (): Promise<Store> => {
    const index = Math.floor(Math.random() * MOCK.length)

    return MOCK[index]
  },
}

export default api

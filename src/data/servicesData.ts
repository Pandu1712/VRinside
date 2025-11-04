import {
  UtensilsCrossed,
  BedDouble,
  DoorClosed,
  Baby,
  Sofa,
  Tv,
  LampDesk,
  Briefcase,
  Home,
} from 'lucide-react';
import type { Service } from '../types/service';

export const categories = [
  'All',
  'Living Spaces',
  'Private Spaces',
  'Functional Areas',
  'Specialized',
];

export const services: Service[] = [
  {
    id: '1',
    icon: UtensilsCrossed,
    title: 'Modular Kitchens',
    description:
      'Bespoke modular kitchens combining innovation and elegance. Crafted with smart storage, premium materials, and seamless modular units that blend style with utility.',
    category: 'Functional Areas',
    image:
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Modern', 'Storage Solutions', 'Custom Design'],
    featured: true,
  },
  {
    id: '2',
    icon: BedDouble,
    title: 'Personalized Bedrooms',
    description:
      'Luxury meets comfort with custom-designed bedrooms. From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique personality and lifestyle.',
    category: 'Private Spaces',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Luxury', 'Comfort', 'Lighting'],
    featured: true,
  },
  {
    id: '3',
    icon: DoorClosed,
    title: 'Functional Wardrobes',
    description:
      'Custom wardrobes designed for efficiency and elegance. Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living.',
    category: 'Private Spaces',
    image:
      'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Organization', 'Walk-in Closets', 'Glass Designs'],
    featured: false,
  },
  {
    id: '4',
    icon: Baby,
    title: 'Functional Kids Room',
    description:
      'Vibrant, safe, and creative spaces for kids. Designed with playful decor, smart storage, and ergonomic layouts that grow with your child\'s imagination.',
    category: 'Specialized',
    image:
      'https://images.pexels.com/photos/3935347/pexels-photo-3935347.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3935337/pexels-photo-3935337.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534274/pexels-photo-8534274.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534063/pexels-photo-8534063.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Playful', 'Safe Design', 'Smart Storage'],
    featured: false,
  },
  {
    id: '5',
    icon: Sofa,
    title: 'Living Room Interiors',
    description:
      'Stylish and comfortable living spaces designed to bring warmth and sophistication. From statement walls to custom furniture, we create spaces that feel like home.',
    category: 'Living Spaces',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Warmth', 'Statement Walls', 'Custom Furniture'],
    featured: true,
  },
  {
    id: '6',
    icon: Tv,
    title: 'Elegant Entertainment Units',
    description:
      'Transform your living area with entertainment units that combine functionality and design—perfect for displaying your TV, decor, and collectibles in style.',
    category: 'Living Spaces',
    image:
      'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Entertainment', 'Display', 'Modern'],
    featured: false,
  },
  {
    id: '7',
    icon: LampDesk,
    title: 'Divine Pooja Rooms',
    description:
      'Peaceful and sacred spaces crafted with devotion. From traditional temple-style setups to modern minimalist sanctuaries, we design pooja rooms that inspire serenity.',
    category: 'Specialized',
    image:
      'https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/161640/pexels-photo-161640.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163833/pexels-photo-163833.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Sacred', 'Traditional', 'Minimalist'],
    featured: false,
  },
  {
    id: '8',
    icon: UtensilsCrossed,
    title: 'Elegant Dining Room Designs',
    description:
      'Make every meal special with elegantly designed dining rooms featuring bespoke furniture, statement lighting, and decor that celebrates togetherness.',
    category: 'Living Spaces',
    image:
      'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Elegant', 'Bespoke', 'Statement Lighting'],
    featured: false,
  },
  {
    id: '9',
    icon: Briefcase,
    title: 'Functional Home Office Designs',
    description:
      'Boost productivity and creativity with ergonomic home office designs featuring intelligent layouts, inspiring decor, and functional organization.',
    category: 'Functional Areas',
    image:
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Ergonomic', 'Productivity', 'Organization'],
    featured: false,
  },
  {
    id: '10',
    icon: Home,
    title: 'Complete Home Makeovers',
    description:
      'Transform your entire home with our comprehensive design solutions. We handle everything from concept to completion, ensuring a cohesive and stunning result throughout your space.',
    category: 'Specialized',
    image:
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Complete Solutions', 'Cohesive Design', 'Full Service'],
    featured: true,
  },
];

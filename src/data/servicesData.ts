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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702612/Kitchen_-_Main_jmcaz7.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702612/Kitchen_1_zbzooc.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702612/Kitchen_-2_sidfbw.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702702/kitchen4_gazbqd.jpg',
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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693457/Bedroom_-_Main_tstccu.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693457/Bedroom_1_crd8al.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693457/Bedroom_2_qrmm7f.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693457/Bedroom_-_3_vupliw.jpg',
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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693782/Wardrobe_-_Main_b9lplx.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693781/Wardrobe_1_ywk2qz.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693781/Wardrobes_2_avdva0.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693780/Wardrobe_3_d6fr8p.jpg',
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
      'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/childrens-room/five-pieces-of-furniture-essential-to-a-functional-kids-room/Title-kids-room-interior-design.jpg',
    gallery: [
      'https://cdn.home-designing.com/wp-content/uploads/2020/09/shared-kids-room.jpg',
      'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/09/Colorful-rainbow-themed-kids-room-interior-design-scaled.jpg',
      'https://i.pinimg.com/originals/09/5b/97/095b97688975ed76c99b5a9e3c88322e.jpg',
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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702507/Living_Room_Main_dius4h.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702506/Drawing_Room_-_1_a9itln.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702506/Living_Room_2_eb8qnc.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702506/Living_Room_3_tgkb0c.jpg',
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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693656/Home_Theatre_y91b4f.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693656/TV_Unit_szjlug.jpg',
      'https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/tv-unit-1657603921-6y6tm/living-view-3-option-2-1-1-1662029420-4RCM2.jpg',
      'https://i.pinimg.com/originals/34/7a/6d/347a6d8835e0be95bbfb649a40ac76c7.jpg',
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
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702772/Pooja_Room_-_Main_uzya5s.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702772/Pooja_Room_-_1_kddt65.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702772/Pooja_Room_-_2_u2swyc.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702772/Pooja_Room_-_3_d0hups.jpg',
    ],
    tags: ['Sacred', 'Traditional', 'Minimalist'],
    featured: false,
  },

  {
    id: '8',
    icon: Briefcase,
    title: 'Functional Home Office Designs',
    description:
      'Boost productivity and creativity with ergonomic home office designs featuring intelligent layouts, inspiring decor, and functional organization.',
    category: 'Functional Areas',
    image:
      'https://www.sanfrandesign.com/wp-content/uploads/2020/08/Worry-About-Function.jpg',
    gallery: [
      'https://stylesatlife.com/wp-content/uploads/2020/01/Best-Office-Interior-Designs.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693885/Home_Office_2_wn4lcy.jpg',
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693884/Home_Office_-_3_h6hzsa.jpg',
    ],
    tags: ['Ergonomic', 'Productivity', 'Organization'],
    featured: false,
  },
  {
    id: '9',
    icon: Home,
    title: 'Complete Home Makeovers',
    description:
      'Transform your entire home with our comprehensive design solutions. We handle everything from concept to completion, ensuring a cohesive and stunning result throughout your space.',
    category: 'Specialized',
    image:
      'https://media.aws.smithandsons.com.au/images/1454/1454-original.jpg',
    gallery: [
      'https://ahouseinthehills.com/wp-content/uploads/2024/06/Modern-Makeovers-Interior-Design-Secrets-to-Refresh-Your-Home.webp',
      'https://media.aws.smithandsons.com.au/images/15849/15849-original.jpg',
      'https://www.garageliving.com/hs-fs/hubfs/garage-remodels-garage-improvement-month.jpg?width=1080&name=garage-remodels-garage-improvement-month.jpg',
    ],
    tags: ['Complete Solutions', 'Cohesive Design', 'Full Service'],
    featured: true,
  },
];

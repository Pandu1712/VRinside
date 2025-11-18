import {
  UtensilsCrossed,
  BedDouble,
  DoorClosed,
  Baby,
  Sofa,
  Tv,
  LampDesk,
  Briefcase,

} from 'lucide-react';
import type { Service } from '../types/service';

export const categories = [
  'All',
  'Staying Spaces',
  'Personal Spaces',
  'Functional Areas',
  'Specialized',
];

export const services: Service[] = [

  {
    id: '3',
    icon: DoorClosed,
    title: 'Functional Wardrobes',
    description:
      'Custom wardrobes designed for efficiency and elegance. Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living.',
    category: 'Personal Spaces',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443804/WhatsApp_Image_2025-11-17_at_13.13.42_a6036a1f_pw6lfl.jpg',
    gallery: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.44_0d800591_jhfzeg.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.46_1da81371_sn6gam.jpg"
    ],
    tags: ['Organization', 'Walk-in Closets', 'Glass Designs'],
    featured: false,
  },
  {
    id: '1',
    icon: UtensilsCrossed,
    title: 'Kitchens',
    description:
      'Bespoke modular kitchens combining innovation and elegance. Crafted with smart storage, premium materials, and seamless modular units that blend style with utility.',
    category: 'Functional Areas',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443745/WhatsApp_Image_2025-11-17_at_13.13.53_938d3850_aklyn6.jpg',
    gallery: [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.49_f543dfd7_uq8sgm.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.47_2697d81c_mtd9bk.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443751/WhatsApp_Image_2025-11-17_at_13.13.50_7904481e_vgbafr.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443765/WhatsApp_Image_2025-11-17_at_13.13.46_a65b210e_cz9gym.jpg"
    ],
    tags: ['Modern', 'Storage Solutions', 'Custom Design'],
    featured: true,
  },
  {
    id: '2',
    icon: BedDouble,
    title: 'Master Bedrooms',
    description:
      'Luxury meets comfort with custom-designed bedrooms. From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique personality and lifestyle.',
    category: 'Personal Spaces',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443804/WhatsApp_Image_2025-11-17_at_13.13.41_aba8d54f_he2upp.jpg',
    gallery: [
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762693457/Bedroom_1_crd8al.jpg',
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443795/WhatsApp_Image_2025-11-17_at_13.13.43_aa83fc2d_pyatxm.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443765/WhatsApp_Image_2025-11-17_at_13.13.45_c1884d7c_zrxa2q.jpg",

    ],
    tags: ['Luxury', 'Comfort', 'Lighting'],
    featured: true,
  },
  {
    id: '6',
    icon: Tv,
    title: 'Entertainment Place',
    description:
      'Transform your living area with entertainment units that combine functionality and design—perfect for displaying your TV, decor, and collectibles in style.',
    category: 'Staying Spaces',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.49_cba31998_wpxc8t.jpg',
    gallery: [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443805/WhatsApp_Image_2025-11-17_at_11.35.50_e23110d6_sjqsqy.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443752/WhatsApp_Image_2025-11-17_at_13.13.49_8d071b84_rjfvty.jpg"
    ],
    tags: ['Entertainment', 'Display', 'Modern'],
    featured: false,
  },
  
  {
    id: '4',
    icon: Baby,
    title: 'Kids Room',
    description:
      'Vibrant, safe, and creative spaces for kids. Designed with playful decor, smart storage, and ergonomic layouts that grow with your child\'s imagination.',
    category: 'Specialized',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443765/WhatsApp_Image_2025-11-17_at_13.13.45_c1884d7c_zrxa2q.jpg',
    gallery: [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443746/WhatsApp_Image_2025-11-17_at_13.13.55_237f152a_dtxlzd.jpg",
      "https://elledecor.in/wp-content/uploads/2024/09/BANNER_KIDS-BEDROOM.jpg"
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
    category: 'Hall Rooms',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.48_9058fef1_kywzfg.jpg',
    gallery: [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.49_cba31998_wpxc8t.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443757/WhatsApp_Image_2025-11-17_at_13.13.46_1da81371_sn6gam.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443805/WhatsApp_Image_2025-11-17_at_11.35.50_e23110d6_sjqsqy.jpg"  
    
    ],
    tags: ['Warmth', 'Statement Walls', 'Custom Furniture'],
    featured: true,
  },
  
  {
    id: '7',
    icon: LampDesk,
    title: 'Pooja Mandir',
    description:
      'Peaceful and sacred spaces crafted with devotion. From traditional temple-style setups to modern minimalist sanctuaries, we design pooja rooms that inspire serenity.',
    category: 'Specialized',
    image:
      'https://res.cloudinary.com/dxvabsqrq/image/upload/v1762702772/Pooja_Room_-_Main_uzya5s.jpg',
    gallery: [
    "https://img.staticmb.com/mbimages/interiorDesignerCMS/decorPartner/5/projectImage/deco_puja.jpg.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4L-Pxa-pStbBkfeJLyz_x5k_bQpGJfiFFxg&s"
    
    ],
    tags: ['Sacred', 'Traditional', 'Minimalist'],
    featured: false,
  },

  {
    id: '8',
    icon: Briefcase,
    title: 'Home Office',
    description:
      'Boost productivity and creativity with ergonomic home office designs featuring intelligent layouts, inspiring decor, and functional organization.',
    category: 'Functional Areas',
    image:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443745/WhatsApp_Image_2025-11-17_at_13.13.52_90e039ea_crbch2.jpg',
    gallery: [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443758/WhatsApp_Image_2025-11-17_at_13.13.44_0d800591_jhfzeg.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443751/WhatsApp_Image_2025-11-17_at_13.13.48_303568a7_lhbn9u.jpg",
     "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763443745/WhatsApp_Image_2025-11-17_at_13.13.52_90e039ea_crbch2.jpg"
    
    ],
    tags: ['Ergonomic', 'Productivity', 'Organization'],
    featured: false,
  },
  
];

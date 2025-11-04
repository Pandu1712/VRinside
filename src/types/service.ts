import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
  image: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
}

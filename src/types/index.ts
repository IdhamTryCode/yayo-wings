import { LucideIcon } from 'lucide-react';

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: MenuCategory;
}

export type MenuCategory = 'menu-utama' | 'minuman' | 'snack' | 'addons';

export interface Category {
    id: MenuCategory;
    name: string;
    icon: LucideIcon;
}

export interface NavItem {
    id: string;
    label: string;
    icon: LucideIcon;
    href: string;
}

export interface Platform {
    id: string;
    name: string;
    icon?: string;
    logo?: string;
    link: string;
    color: string;
    bgColor: string;
}

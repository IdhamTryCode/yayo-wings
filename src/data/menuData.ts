import { MenuItem, Category, MenuCategory } from '../types';
import { UtensilsCrossed, Coffee, Cookie, Plus } from 'lucide-react';

export const categories: Category[] = [
    { id: 'menu-utama', name: 'Menu Utama', icon: UtensilsCrossed },
    { id: 'minuman', name: 'Minuman', icon: Coffee },
    { id: 'snack', name: 'Snack', icon: Cookie },
    { id: 'addons', name: 'Add-Ons', icon: Plus },
];

export const menuItems: MenuItem[] = [
    // MENU UTAMA
    {
        id: 'paket-rame',
        name: 'Paket Rame Chicken Wings',
        price: 30000,
        description: 'Paket chicken wings porsi rame, cocok untuk sharing bareng teman atau keluarga. Bumbu korea yang autentik.',
        image: '/images/menu/paket-rame.jpg',
        category: 'menu-utama',
    },
    {
        id: 'paket-nasi',
        name: 'Paket Nasi Chicken Wings',
        price: 13000,
        description: 'Chicken wings dengan nasi hangat, pilihan tepat untuk makan siang yang mengenyangkan.',
        image: '/images/menu/paket-nasi.jpg',
        category: 'menu-utama',
    },
    {
        id: 'paket-hemat',
        name: 'Paket Hemat Chicken Wings',
        price: 15000,
        description: 'Combo hemat yang pas di kantong. Chicken wings + nasi + minuman.',
        image: '/images/menu/paket-hemat.jpg',
        category: 'menu-utama',
    },

    // MINUMAN
    {
        id: 'es-teh-jumbo',
        name: 'Es Teh Jumbo',
        price: 3000,
        description: 'Teh manis dingin ukuran jumbo, segar untuk menemani makan kamu.',
        image: '/images/menu/es-teh-jumbo.jpg',
        category: 'minuman',
    },
    {
        id: 'sticky-milk',
        name: 'Es Sticky Milk',
        price: 10000,
        description: 'Minuman susu kekinian dengan topping sticky yang unik dan lezat.',
        image: '/images/menu/sticky-milk.jpeg',
        category: 'minuman',
    },

    // SNACK
    {
        id: 'udang-keju',
        name: 'Udang Keju',
        price: 15000,
        description: 'Udang goreng renyah dengan lelehan keju yang gurih. Snack premium.',
        image: '/images/menu/udang-keju.jpg',
        category: 'snack',
    },
    {
        id: 'cireng-mercon',
        name: 'Cireng Mercon',
        price: 10000,
        description: 'Cireng pedas isian mercon, level pedasnya bikin nagih.',
        image: '/images/menu/cireng-mercon.jpg',
        category: 'snack',
    },
    {
        id: 'gyoza',
        name: 'Gyoza',
        price: 15000,
        description: 'Gyoza panggang ala Jepang, kulit renyah dengan isian daging yang juicy.',
        image: '/images/menu/gyoza.jpg',
        category: 'snack',
    },

    // ADDONS
    {
        id: 'saus-keju',
        name: 'Saus Keju',
        price: 5000,
        description: 'Saus keju premium untuk pelengkap menu favorit kamu.',
        image: '/images/menu/saus-keju.jpg',
        category: 'addons',
    },
    {
        id: 'nasi',
        name: 'Nasi',
        price: 3000,
        description: 'Nasi putih hangat porsi pas.',
        image: '/images/menu/nasi.jpg',
        category: 'addons',
    },
    {
        id: 'mie-bangladesh',
        name: 'Mie Bangladesh',
        price: 12000,
        description: 'Mie pedas khas Bangladesh dengan bumbu rempah yang kuat dan menggugah selera.',
        image: '/images/menu/mie-bangladesh.jpg',
        category: 'addons',
    },
];

export const getMenuByCategory = (category: MenuCategory): MenuItem[] => {
    return menuItems.filter((item) => item.category === category);
};

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuCategory } from '../../types';
import { menuItems, getMenuByCategory } from '../../data/menuData';
import { MenuCard } from '../ui/MenuCard';
import { CategoryTabs } from '../ui/CategoryTabs';
import { FadeIn } from '../animations/FadeIn';

interface MenuSectionProps {
    onOrder: () => void;
}

export function MenuSection({ onOrder }: MenuSectionProps) {
    const [activeCategory, setActiveCategory] = useState<MenuCategory>('menu-utama');
    const filteredItems = getMenuByCategory(activeCategory);

    return (
        <section
            id="menu"
            className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-primary-50/30 overflow-hidden"
        >
            {/* Decorative backgrounds */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary-200 rounded-full blur-3xl opacity-20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold font-body mb-4">
                        Menu Kami
                    </span>
                    <h2 className="font-display text-h2 font-bold text-gray-900">
                        Pilih Menu{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                            Favoritmu
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body mt-4 text-lg">
                        Dari Korean Wings sampai snack, semua ada!
                    </p>
                </FadeIn>

                {/* Category Tabs */}
                <FadeIn delay={0.2} className="flex justify-center mb-10">
                    <CategoryTabs
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </FadeIn>

                {/* Menu grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredItems.map((item, i) => (
                            <MenuCard key={item.id} item={item} index={i} onOrder={onOrder} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Total items indicator */}
                <FadeIn delay={0.3} className="text-center mt-10">
                    <p className="text-gray-400 font-body text-sm">
                        Total {menuItems.length} menu tersedia • Update terus ya!
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

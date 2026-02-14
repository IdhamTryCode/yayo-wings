import { motion } from 'framer-motion';
import { categories } from '../../data/menuData';
import { MenuCategory } from '../../types';
import { cn } from '../../utils/helpers';

interface CategoryTabsProps {
    activeCategory: MenuCategory;
    onCategoryChange: (category: MenuCategory) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
                const isActive = activeCategory === category.id;
                const Icon = category.icon;

                return (
                    <motion.button
                        key={category.id}
                        onClick={() => onCategoryChange(category.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            'relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body whitespace-nowrap transition-all duration-300',
                            isActive
                                ? 'text-white shadow-lg shadow-primary-500/30'
                                : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50'
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <Icon size={16} />
                            {category.name}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}

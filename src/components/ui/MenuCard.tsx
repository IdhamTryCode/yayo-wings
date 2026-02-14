import { motion } from 'framer-motion';
import { MenuItem } from '../../types';
import { formatPrice } from '../../data/menuData';

interface MenuCardProps {
    item: MenuItem;
    index: number;
    onOrder: () => void;
}

export function MenuCard({ item, index, onOrder }: MenuCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-lg shadow-primary-500/5 hover:shadow-2xl hover:shadow-primary-500/15 hover:border-primary-200/50 transition-all duration-500"
        >
            {/* Image container */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                />

                {/* Price badge */}
                <div className="absolute top-4 right-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-bold font-body shadow-lg shadow-primary-500/30"
                    >
                        {formatPrice(item.price)}
                    </motion.div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-xs font-semibold font-body">
                        {item.category === 'menu-utama'
                            ? '⭐ Utama'
                            : item.category === 'minuman'
                                ? '🥤 Minuman'
                                : item.category === 'snack'
                                    ? '🍿 Snack'
                                    : '➕ Add-On'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-display text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {item.name}
                </h3>
                <p className="text-gray-500 text-sm font-body mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                </p>

                {/* Order button */}
                <motion.button
                    onClick={onOrder}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-body font-semibold text-sm shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                    Pesan Sekarang
                </motion.button>
            </div>
        </motion.div>
    );
}

import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { getMenuByCategory, formatPrice } from '../../data/menuData';

export function DrinksSection() {
    const drinks = getMenuByCategory('minuman');

    return (
        <section
            id="drinks"
            className="relative py-20 sm:py-28 bg-gradient-to-b from-primary-50/30 to-white overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-primary-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold font-body mb-4">
                        Minuman Segar
                    </span>
                    <h2 className="font-display text-h2 font-bold text-gray-900">
                        Teman Makan yang{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary-500">
                            Sempurna
                        </span>
                    </h2>
                </FadeIn>

                {/* Drinks cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {drinks.map((drink, i) => (
                        <FadeIn key={drink.id} delay={i * 0.2} direction={i % 2 === 0 ? 'left' : 'right'}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-primary-50">
                                    <motion.img
                                        src={drink.image}
                                        alt={drink.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                                            {drink.name}
                                        </h3>
                                        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold font-body">
                                            {formatPrice(drink.price)}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-body text-sm leading-relaxed">
                                        {drink.description}
                                    </p>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

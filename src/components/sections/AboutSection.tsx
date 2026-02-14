import { motion } from 'framer-motion';
import { Heart, Star, Clock, Truck } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const features = [
    {
        icon: Star,
        title: 'Bumbu Autentik',
        description: 'Racikan bumbu korea asli yang bikin ketagihan',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
    },
    {
        icon: Heart,
        title: 'Dibuat dengan Cinta',
        description: 'Setiap porsi dibuat fresh untuk pelanggan',
        color: 'text-primary-500',
        bg: 'bg-primary-50',
    },
    {
        icon: Clock,
        title: 'Cepat & Panas',
        description: 'Proses cepat, disajikan hangat selalu',
        color: 'text-blue-500',
        bg: 'bg-blue-50',
    },
    {
        icon: Truck,
        title: 'Delivery Ready',
        description: 'Tersedia di GoFood, GrabFood, ShopeeFood',
        color: 'text-green-500',
        bg: 'bg-green-50',
    },
];

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold font-body mb-4">
                        Kenapa Yayo Wings?
                    </span>
                    <h2 className="font-display text-h2 font-bold text-gray-900 mt-2">
                        Bukan Sekadar{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                            Ayam Goreng Biasa
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body mt-4 text-lg leading-relaxed">
                        Yayo Wings hadir dengan cita rasa Korean Fried Chicken premium di Demak.
                        Renyah di luar, juicy di dalam, dengan bumbu yang kaya rasa.
                    </p>
                </FadeIn>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <FadeIn key={i} delay={i * 0.15}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-500 group"
                            >
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className={`${feature.color}`} size={28} />
                                </div>
                                <h3 className="font-display text-lg font-bold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* Stats */}
                <FadeIn delay={0.4}>
                    <div className="mt-16 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-8 sm:p-12">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                            {[
                                { value: '50+', label: 'Porsi / Hari' },
                                { value: '4.8', label: 'Rating' },
                                { value: '5+', label: 'Platform' },
                                { value: '10000+', label: 'Happy Customer' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-3xl sm:text-4xl font-display font-black text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/70 font-body text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/helpers';
import { Button } from '../ui/Button';

export function HeroSection() {
    const bgOffset = useParallax(0.5);
    const contentOffset = useParallax(0.3);
    const { scrollY } = useScrollProgress();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background image with parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/hero/hero.png')`,
                    transform: `translateY(${bgOffset}px)`,
                }}
            />

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 transition-all duration-100"
                style={{
                    background: `linear-gradient(
            135deg,
            rgba(244, 63, 94, ${Math.max(0.85 - scrollY / 1000, 0.4)}),
            rgba(225, 29, 72, ${Math.max(0.75 - scrollY / 1000, 0.3)}),
            rgba(190, 18, 60, ${Math.max(0.8 - scrollY / 1000, 0.35)})
          )`,
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white/20"
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white/20"
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Content */}
            <div
                className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
                style={{
                    transform: `translateY(${contentOffset}px)`,
                    opacity: Math.max(1 - scrollY / 500, 0),
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
                    >
                        <span className="text-white/90 font-body text-sm font-medium">#1 Chicken Wings di Demak</span>
                    </motion.div>

                    {/* Title */}
                    <h1 className="font-display text-hero font-black text-white leading-tight">
                        <span className="block">Chicken Wings</span>
                        <span className="block mt-1">
                            yang Bikin{' '}
                            <span className="relative">
                                <span className="relative z-10">Nagih!</span>
                                <motion.span
                                    className="absolute bottom-1 left-0 right-0 h-3 bg-white/20 rounded-lg -z-0"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                />
                            </span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-6 text-white/80 font-body text-lg sm:text-xl max-w-lg mx-auto leading-relaxed"
                    >
                        Bumbu korea autentik, ayam goreng renyah, harga mulai{' '}
                        <span className="text-white font-bold">Rp 13.000</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => scrollToSection('menu')}
                        >
                            Lihat Menu
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('order')}
                            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                            Pesan Sekarang →
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <button
                    onClick={() => scrollToSection('about')}
                    className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
                >
                    <span className="text-xs font-body tracking-widest uppercase text-center">Scroll</span>
                    <ChevronDown size={20} />
                </button>
            </motion.div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { ShoppingBag, Bike, Clock } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { Button } from '../ui/Button';

interface OrderSectionProps {
    onOpenModal: () => void;
}

export function OrderSection({ onOpenModal }: OrderSectionProps) {
    return (
        <section
            id="order"
            className="relative py-20 sm:py-28 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
            <div className="absolute inset-0 bg-[url('/images/hero/hero.png')] bg-cover bg-center opacity-10" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/5"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/5"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <FadeIn>
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
                    >
                        <ShoppingBag size={16} className="text-white" />
                        <span className="text-white/90 font-body text-sm font-medium">Pesan Sekarang</span>
                    </motion.div>

                    {/* Title */}
                    <h2 className="font-display text-h2 sm:text-5xl font-black text-white leading-tight">
                        Laper? Yayo Wings{' '}
                        <span className="block mt-2">Solusinya!</span>
                    </h2>
                    <p className="text-white/70 font-body text-lg mt-6 max-w-lg mx-auto leading-relaxed">
                        Pesan lewat platform favoritmu atau langsung via WhatsApp.
                        Delivery cepat, rasa tetap panas & renyah!
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
                        {[
                            { icon: Bike, text: 'Delivery' },
                            { icon: Clock, text: 'Cepat' },
                            { icon: ShoppingBag, text: '5 Platform' },
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                                    <feat.icon size={22} className="text-white" />
                                </div>
                                <span className="text-white/80 font-body text-sm">{feat.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: 'spring' }}
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={onOpenModal}
                            className="text-primary-600 text-lg px-10 py-4"
                        >
                            Pilih Platform Pesan
                        </Button>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}

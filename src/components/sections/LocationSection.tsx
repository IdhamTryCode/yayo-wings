import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { contactInfo } from '../../data/platformData';
import { Button } from '../ui/Button';

export function LocationSection() {
    return (
        <section
            id="location"
            className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold font-body mb-4">
                        Lokasi Kami
                    </span>
                    <h2 className="font-display text-h2 font-bold text-gray-900">
                        Temukan{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                            Yayo Wings
                        </span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Map */}
                    <FadeIn direction="left">
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="relative h-80 sm:h-96 lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                        >
                            <iframe
                                src={contactInfo.mapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Yayo Wings"
                            />
                        </motion.div>
                    </FadeIn>

                    {/* Info Cards */}
                    <FadeIn direction="right">
                        <div className="space-y-5">
                            {/* Address */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                                    <MapPin className="text-primary-500" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-gray-800 mb-1">Alamat</h3>
                                    <p className="text-gray-500 font-body text-sm leading-relaxed">
                                        {contactInfo.address}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300 block"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                    <Phone className="text-green-500" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-gray-800 mb-1">Telepon</h3>
                                    <p className="text-gray-500 font-body text-sm">{contactInfo.phone}</p>
                                </div>
                            </motion.a>

                            {/* Hours */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Clock className="text-blue-500" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-gray-800 mb-1">Jam Buka</h3>
                                    <p className="text-gray-500 font-body text-sm">{contactInfo.hours}</p>
                                </div>
                            </motion.div>

                            {/* Direction button */}
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() =>
                                    window.open(contactInfo.mapsLink, '_blank')
                                }
                                className="w-full"
                            >
                                <Navigation size={18} />
                                Buka di Google Maps
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

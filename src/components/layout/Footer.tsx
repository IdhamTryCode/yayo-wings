import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { contactInfo } from '../../data/platformData';

export function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/logo/logo.png"
                                alt="Yayo Wings"
                                className="w-12 h-12"
                            />
                            <div>
                                <h3 className="font-display text-xl font-bold">YAYO WINGS</h3>
                                <p className="text-gray-400 text-sm font-body">Korean Wings Demak</p>
                            </div>
                        </div>
                        <p className="text-gray-400 font-body text-sm leading-relaxed">
                            Chicken Wings terenak di Demak! Dibuat dengan bumbu korea autentik dan cinta.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-display text-lg font-semibold mb-4">Kontak</h4>
                        <div className="space-y-3">
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors font-body text-sm"
                            >
                                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                                {contactInfo.phone}
                            </a>
                            <div className="flex items-start gap-3 text-gray-400 font-body text-sm">
                                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                                {contactInfo.address}
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 font-body text-sm">
                                <Clock size={16} className="text-primary-400 flex-shrink-0" />
                                {contactInfo.hours}
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-display text-lg font-semibold mb-4">Ikuti Kami</h4>
                        <a
                            href={contactInfo.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-body text-sm font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                        >
                            <Instagram size={18} />
                            {contactInfo.instagram}
                        </a>
                    </motion.div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 font-body text-sm">
                        © {new Date().getFullYear()} Yayo Wings. Made in Demak.
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Platform } from '../../types';
import { platforms } from '../../data/platformData';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-gray-900/70 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Content */}
                    <motion.div
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-5">
                            <h2 className="font-display text-xl font-bold text-white">
                                Pesan Sekarang
                            </h2>
                            <p className="text-white/80 text-sm font-body mt-1">
                                Pilih platform favoritmu
                            </p>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Platform list */}
                        <div className="p-6 space-y-3">
                            {platforms.map((platform, i) => (
                                <PlatformCard key={platform.id} platform={platform} index={i} />
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6">
                            <p className="text-gray-400 text-xs text-center font-body">
                                Pengiriman tergantung area masing-masing platform
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
    return (
        <motion.a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all duration-200 group"
            style={{
                backgroundColor: platform.bgColor,
            }}
        >
            {platform.logo ? (
                <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-12 h-12 object-contain"
                />
            ) : (
                <span className="text-3xl">{platform.icon}</span>
            )}
            <div className="flex-1">
                <h3 className="font-body font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {platform.name}
                </h3>
                <p className="text-xs text-gray-400 font-body">Pesan via {platform.name}</p>
            </div>
            <span className="text-gray-300 group-hover:text-primary-500 transition-colors">
                →
            </span>
        </motion.a>
    );
}

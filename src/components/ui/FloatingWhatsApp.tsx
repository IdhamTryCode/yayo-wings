import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/platformData';

export function FloatingWhatsApp() {
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
        'Halo Yayo Wings, saya mau pesan!'
    )}`;

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-[9998]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                    y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                }}
            >
                <MessageCircle className="text-white" size={28} fill="white" />

                {/* Badge */}
                <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <span className="text-white text-[8px] font-bold">1</span>
                </motion.span>
            </motion.a>

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-2 rounded-lg font-body shadow-lg"
            >
                Chat kami!
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
            </motion.div>
        </motion.div>
    );
}

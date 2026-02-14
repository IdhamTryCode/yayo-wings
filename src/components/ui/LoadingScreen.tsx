import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
            >
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5"
                        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                </div>

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative z-10"
                >
                    <img
                        src="/images/logo/logo.png"
                        alt="Yayo Wings"
                        className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-2xl"
                    />
                </motion.div>

                {/* Brand text */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative z-10 mt-6 text-center"
                >
                    <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wider">
                        YAYO WINGS
                    </h1>
                    <p className="font-body text-white/70 text-sm sm:text-base mt-2 tracking-wide">
                        Korean Wings Demak
                    </p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '200px' }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="relative z-10 mt-10"
                >
                    <div className="w-[200px] h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: 'easeOut' }}
                        />
                    </div>
                    <p className="text-white/50 text-xs mt-3 text-center font-body">
                        {progress < 100 ? 'Menyiapkan menu...' : 'Siap!'}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

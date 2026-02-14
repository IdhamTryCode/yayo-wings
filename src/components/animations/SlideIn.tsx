import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'left' | 'right';
    className?: string;
}

export function SlideIn({
    children,
    delay = 0,
    duration = 0.8,
    direction = 'left',
    className = '',
}: SlideInProps) {
    const x = direction === 'left' ? -100 : 100;

    return (
        <motion.div
            initial={{ opacity: 0, x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

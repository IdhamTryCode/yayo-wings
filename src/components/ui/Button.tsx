import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:from-primary-600 hover:to-primary-700',
        secondary: 'bg-white text-primary-600 shadow-lg hover:shadow-xl hover:bg-gray-50',
        outline:
            'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
        ghost: 'text-gray-600 hover:text-primary-600 hover:bg-primary-50',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            onClick={onClick}
            disabled={disabled}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
            {children}
        </motion.button>
    );
}

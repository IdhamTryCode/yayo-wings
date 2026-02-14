import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, UtensilsCrossed, MapPin, ShoppingBag, Menu, X, Info } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/helpers';
import { cn } from '../../utils/helpers';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
    { id: 'about', label: 'Tentang', icon: Info, href: '#about' },
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed, href: '#menu' },
    { id: 'location', label: 'Lokasi', icon: MapPin, href: '#location' },
    { id: 'order', label: 'Pesan', icon: ShoppingBag, href: '#order' },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isScrolled } = useScrollProgress();

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-[9990] transition-all duration-300',
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-xl border-b border-primary-100/50 shadow-lg shadow-primary-500/5'
                        : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <motion.button
                            onClick={() => handleNavClick('hero')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/images/logo/logo.png"
                                alt="Yayo Wings"
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                            <div className="hidden sm:block">
                                <h1
                                    className={cn(
                                        'font-display text-lg font-bold transition-colors',
                                        isScrolled ? 'text-gray-900' : 'text-white'
                                    )}
                                >
                                    YAYO WINGS
                                </h1>
                                <p
                                    className={cn(
                                        'text-xs font-body transition-colors',
                                        isScrolled ? 'text-gray-500' : 'text-white/70'
                                    )}
                                >
                                    Korean Wings Demak
                                </p>
                            </div>
                        </motion.button>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={cn(
                                        'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-body transition-all duration-300',
                                        isScrolled
                                            ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                    )}
                                >
                                    <item.icon size={16} />
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                'md:hidden p-2 rounded-xl transition-colors',
                                isScrolled
                                    ? 'text-gray-700 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                            )}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9989] md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 pt-20">
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, i) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => handleNavClick(item.id)}
                                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all font-body font-medium"
                                        >
                                            <item.icon size={20} />
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

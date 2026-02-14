import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { MenuSection } from './components/sections/MenuSection';
import { DrinksSection } from './components/sections/DrinksSection';
import { LocationSection } from './components/sections/LocationSection';
import { OrderSection } from './components/sections/OrderSection';

// UI
import { LoadingScreen } from './components/ui/LoadingScreen';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Modal } from './components/ui/Modal';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoadingComplete = useCallback(() => {
        setIsLoading(false);
    }, []);

    const openOrderModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeOrderModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            {/* Loading Screen */}
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            </AnimatePresence>

            {/* Main Content */}
            {!isLoading && (
                <>
                    <Navbar />

                    <main>
                        <HeroSection />
                        <AboutSection />
                        <MenuSection onOrder={openOrderModal} />
                        <DrinksSection />
                        <LocationSection />
                        <OrderSection onOpenModal={openOrderModal} />
                    </main>

                    <Footer />
                    <FloatingWhatsApp />

                    {/* Order Modal */}
                    <Modal isOpen={isModalOpen} onClose={closeOrderModal} />
                </>
            )}
        </>
    );
}

export default App;

import { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, MessageCircle, ShoppingBag, Instagram, Home, UtensilsCrossed, Coffee, MapPinned } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281329064923', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.app.goo.gl/HStadzmvwrdvvcH79?g_st=com.google.maps.preview.copy', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/yayo_wings/', '_blank');
  };

  const menuCategories = {
    main: [
      {
        name: "Paket Rame Korean Wings",
        price: "Rp 30.000",
        description: "10 pcs Korean chicken wings pedas dengan saus spicy Korea pilihan",
        image: "/images/paket-rame.jpg"
      },
      {
        name: "Paket Nasi Korean Wings",
        price: "Rp 13.000",
        description: "Nasi putih + 3 Korean wings dengan saus spicy Korea",
        image: "/images/paket-nasi.jpg"
      },
      {
        name: "Paket Hemat Korean Combo",
        price: "Rp 15.000",
        description: "Nasi + 3 Korean wings spicy + es teh jumbo",
        image: "/images/paket-hemat.jpg"
      }
    ],
    drinks: [
      {
        name: "Es Teh Jumbo",
        price: "Rp 5.000",
        description: "Es teh manis ukuran jumbo",
        image: "/images/es-teh-jumbo.jpg"
      },
      {
        name: "Es Sticky Milk",
        price: "Rp 12.000",
        description: "Minuman susu kekinian dengan tekstur sticky",
        image: "/images/es-sticky-milk.jpeg"
      }
    ],
    snacks: [
      {
        name: "Udang Keju",
        price: "Rp 15.000",
        description: "Udang goreng crispy dengan taburan keju",
        image: "/images/udang-keju.jpg"
      },
      {
        name: "Cireng Mercon",
        price: "Rp 10.000",
        description: "Cireng dengan sambal mercon super pedas",
        image: "/images/cireng-mercon.jpg"
      },
      {
        name: "Gyoza",
        price: "Rp 15.000",
        description: "Dumpling isi ayam ala Jepang",
        image: "/images/gyoza.jpg"
      }
    ],
    addons: [
      {
        name: "Saus Keju",
        price: "Rp 5.000",
        description: "Saus keju creamy untuk tambahan",
        image: "/images/saus-keju.jpg"
      },
      {
        name: "Nasi",
        price: "Rp 3.000",
        description: "Nasi putih hangat",
        image: "/images/nasi.jpg"
      },
      {
        name: "Mie Bangladesh",
        price: "Rp 12.000",
        description: "Mie goreng ala Bangladesh dengan bumbu special",
        image: "/images/mie-bangladesh.jpg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <nav 
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.2))' }}
      >
        <div className="bg-white/95 backdrop-blur-lg px-6 py-3 rounded-full border border-red-200">
          <ul className="flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110 group p-2"
              >
                <Home size={24} className="group-hover:animate-bounce" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110 group p-2"
              >
                <UtensilsCrossed size={24} className="group-hover:animate-bounce" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('drinks')}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110 group p-2"
              >
                <Coffee size={24} className="group-hover:animate-bounce" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110 group p-2"
              >
                <MapPinned size={24} className="group-hover:animate-bounce" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('order')}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110 group p-2"
              >
                <ShoppingBag size={24} className="group-hover:animate-bounce" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        id="home"
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-red-900/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">YAYO WINGS DEMAK</h1>
            <p className="text-xl text-white/90 mb-8 hover:text-white transition-colors duration-300">Ayam Goreng Korea Terbaik di Jawa Tengah - Korean Chicken Wings Pedas & Spicy</p>
            <button
              onClick={() => scrollToSection('order')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/30 active:scale-95"
            >
              <MessageCircle size={20} className="animate-bounce" />
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 hover:text-red-600 transition-colors duration-300">Tentang Yayo Wings Demak</h2>
          <p className="text-gray-600 text-center mb-8 hover:text-gray-900 transition-colors duration-300">
            <strong>Yayo Wings</strong> adalah restaurant <strong>ayam goreng Korea terbaik di Demak, Jawa Tengah</strong>. Kami menghadirkan kelezatan <strong>Korean chicken wings</strong> dengan saus pedas spicy ala Korea yang autentik. Menu <strong>Korean food</strong> kami dibuat dengan bahan berkualitas premium dan resep rahasia Korea yang telah disempurnakan. Nikmati pengalaman kuliner <strong>wings Korea</strong> terbaik dengan berbagai pilihan saus spicy dan sticky milk yang menggugah selera di Demak.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 active:scale-95"
            >
              <Instagram size={20} className="animate-bounce" />
              Follow Us on Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 hover:text-red-600 transition-colors duration-300">Menu Korean Food Yayo Wings Demak</h2>
          
          {/* Main Menu */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Menu Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.main.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="p-4 group-hover:bg-red-50 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    <p className="text-red-600 font-bold group-hover:scale-110 transition-transform duration-300 inline-block">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Menu */}
          <div id="drinks" className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Minuman</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {menuCategories.drinks.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="p-4 group-hover:bg-red-50 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    <p className="text-red-600 font-bold group-hover:scale-110 transition-transform duration-300 inline-block">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Snacks Menu */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Snack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.snacks.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="p-4 group-hover:bg-red-50 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    <p className="text-red-600 font-bold group-hover:scale-110 transition-transform duration-300 inline-block">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Addons Menu */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Addons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.addons.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="p-4 group-hover:bg-red-50 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    <p className="text-red-600 font-bold group-hover:scale-110 transition-transform duration-300 inline-block">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 hover:text-red-600 transition-colors duration-300">Lokasi Yayo Wings Demak & Jam Buka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              onClick={handleMapsClick}
              className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-red-50 p-8 rounded-xl cursor-pointer"
            >
              <MapPin size={32} className="text-red-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold mb-2 hover:text-red-600 transition-colors duration-300">Lokasi</h3>
              <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Jl. Teuku Umar, Bogorame<br />
                Demak, Jawa Tengah
              </p>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-red-50 p-8 rounded-xl">
              <Clock size={32} className="text-red-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold mb-2 hover:text-red-600 transition-colors duration-300">Jam Operasional</h3>
              <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Senin - Minggu<br />
                10:00 - 21:00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 px-4 bg-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8 hover:scale-105 transition-transform duration-300">Pesan Korean Wings Yayo Demak Sekarang!</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30 hover:bg-red-50 active:scale-95"
            >
              <MessageCircle size={20} className="animate-bounce" />
              WhatsApp
            </button>
            <a
              href="https://r.grab.com/g/6-20240924_140212_2F1EE0B261D94A7592A071BF3516A604_MEXMPS-6-C6LGEU43VUAESA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30 hover:bg-red-50 active:scale-95"
            >
              <ShoppingBag size={20} className="animate-bounce" />
              GoFood
            </a>
            <a
              href="https://r.grab.com/g/6-20240924_140212_2F1EE0B261D94A7592A071BF3516A604_MEXMPS-6-C6LGEU43VUAESA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30 hover:bg-red-50 active:scale-95"
            >
              <ShoppingBag size={20} className="animate-bounce" />
              GrabFood
            </a>
            <a
              href="https://shopee.co.id/universal-link/now-food/shop/21950409?deep_and_deferred=1&shareChannel=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30 hover:bg-red-50 active:scale-95"
            >
              <ShoppingBag size={20} className="animate-bounce" />
              ShopeeFood
            </a>
            <a
              href="https://shopee.co.id/universal-link/now-food/shop/21950409?deep_and_deferred=1&shareChannel=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30 hover:bg-red-50 active:scale-95"
            >
              <ShoppingBag size={20} className="animate-bounce" />
              Maxim Food
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-4 hover:text-red-400 transition-colors duration-300">© 2024 Yayo Wings. All rights reserved.</p>
          <div className="flex justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
            <Phone size={20} className="animate-bounce" />
            <a 
              href="tel:+6281329064923"
              className="hover:text-red-400 transition-colors duration-300"
            >
              +62 813-2906-4923
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
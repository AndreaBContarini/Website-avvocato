import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Chiudi il menu mobile quando cambia la pagina
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Sono', path: '/about' },
    { name: 'Servizi', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
    { name: 'Contattami', path: '/contact', isButton: true }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Scale className="h-8 w-8 text-primary-light group-hover:text-primary-lighter transition-colors duration-300" />
            <span className="font-heading font-bold text-xl md:text-2xl">
              <span className="text-text-light">Avv.</span> <span className="gradient-text">E.B. Contarini</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isButton ? (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="btn-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'text-primary-light after:w-full' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-text-light hover:text-primary-light transition-colors p-2"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel mt-2 mx-4 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`block py-2 px-3 rounded-lg ${
                    link.isButton 
                      ? 'btn-primary text-center' 
                      : `nav-link ${location.pathname === link.path ? 'text-primary-light' : ''}`
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
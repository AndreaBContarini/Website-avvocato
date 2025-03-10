import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    
    if (!hasAcceptedCookies) {
      // Mostra il banner dopo un breve ritardo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    
    // Attiva Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    // Imposta solo i cookie essenziali
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
    
    // Disattiva Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto px-4"
        >
          <div className="glass-panel p-5 md:p-6 rounded-xl shadow-xl">
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Informativa sui Cookie</h3>
              <p className="text-sm text-text-light/80">
                Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare l'esperienza di navigazione. 
                Cliccando su "Accetta tutti" acconsenti all'uso di tutti i cookie. Cliccando su "Rifiuta" verranno utilizzati solo i cookie tecnici essenziali. 
                Per maggiori informazioni e per modificare le tue preferenze consulta la nostra{' '}
                <Link to="/cookies" className="text-primary-light hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={declineCookies}
                className="btn-secondary text-sm py-2 px-4"
              >
                Rifiuta
              </button>
              <button
                onClick={acceptCookies}
                className="btn-primary text-sm py-2 px-4"
              >
                Accetta tutti
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
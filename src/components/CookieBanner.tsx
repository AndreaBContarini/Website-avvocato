import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';

// Estendo l'interfaccia Window per includere gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Sempre attivo e non modificabile
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Controlla se l'utente ha già impostato le preferenze sui cookie
    const savedPreferences = localStorage.getItem('cookiePreferences');
    
    if (!savedPreferences) {
      // Mostra il banner dopo un breve ritardo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      // Carica le preferenze salvate
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const savePreferences = () => {
    // Salva le preferenze dell'utente
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    
    // Aggiorna le impostazioni di Google Analytics in base alle preferenze
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': cookiePreferences.analytics ? 'granted' : 'denied',
        'ad_storage': cookiePreferences.marketing ? 'granted' : 'denied',
        'functionality_storage': cookiePreferences.preferences ? 'granted' : 'denied'
      });
    }
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    
    // Attiva tutti i cookie per Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted'
      });
    }
  };

  const acceptOnlyNecessary = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    
    // Disattiva i cookie non necessari per Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied'
      });
    }
  };

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return; // Non permettere di modificare i cookie necessari
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="glass-panel rounded-xl shadow-xl max-w-6xl mx-auto overflow-hidden">
            <div className="p-5 md:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Informativa sui Cookie</h3>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-text-light/70 hover:text-text-light p-1"
                  aria-label="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-text-light/80 mb-3">
                  Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare l'esperienza di navigazione. 
                  Puoi personalizzare le tue preferenze o accettare tutti i cookie.
                  Per maggiori informazioni consulta la nostra{' '}
                  <Link to="/cookies" className="text-primary-light hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
                
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center text-primary-light hover:text-primary-lighter text-sm font-medium"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Nascondi dettagli
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Personalizza preferenze
                    </>
                  )}
                </button>
              </div>
              
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 overflow-hidden"
                  >
                    <div className="space-y-4 mb-4">
                      {/* Cookie necessari */}
                      <div className="p-3 bg-primary-dark/30 rounded-lg flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Cookie necessari</h4>
                          <p className="text-sm text-text-light/70">Essenziali per il funzionamento del sito. Non possono essere disattivati.</p>
                        </div>
                        <div className="bg-primary-light/20 p-1 rounded-full">
                          <Check className="w-5 h-5 text-primary-light" />
                        </div>
                      </div>
                      
                      {/* Cookie analitici */}
                      <div className="p-3 bg-primary-dark/30 rounded-lg flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Cookie analitici</h4>
                          <p className="text-sm text-text-light/70">Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza.</p>
                        </div>
                        <button
                          onClick={() => handleToggle('analytics')}
                          className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 ${
                            cookiePreferences.analytics ? 'bg-primary-light justify-end' : 'bg-primary-dark/50 justify-start'
                          }`}
                          aria-checked={cookiePreferences.analytics}
                          role="switch"
                        >
                          <span className="w-4 h-4 bg-white rounded-full block" />
                        </button>
                      </div>
                      
                      {/* Cookie di marketing */}
                      <div className="p-3 bg-primary-dark/30 rounded-lg flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Cookie di marketing</h4>
                          <p className="text-sm text-text-light/70">Utilizzati per mostrarti contenuti pertinenti in base ai tuoi interessi.</p>
                        </div>
                        <button
                          onClick={() => handleToggle('marketing')}
                          className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 ${
                            cookiePreferences.marketing ? 'bg-primary-light justify-end' : 'bg-primary-dark/50 justify-start'
                          }`}
                          aria-checked={cookiePreferences.marketing}
                          role="switch"
                        >
                          <span className="w-4 h-4 bg-white rounded-full block" />
                        </button>
                      </div>
                      
                      {/* Cookie di preferenze */}
                      <div className="p-3 bg-primary-dark/30 rounded-lg flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Cookie di preferenze</h4>
                          <p className="text-sm text-text-light/70">Permettono al sito di ricordare le tue preferenze e personalizzazioni.</p>
                        </div>
                        <button
                          onClick={() => handleToggle('preferences')}
                          className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 ${
                            cookiePreferences.preferences ? 'bg-primary-light justify-end' : 'bg-primary-dark/50 justify-start'
                          }`}
                          aria-checked={cookiePreferences.preferences}
                          role="switch"
                        >
                          <span className="w-4 h-4 bg-white rounded-full block" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={acceptOnlyNecessary}
                  className="btn-secondary text-sm py-2 px-4 order-3 sm:order-1"
                >
                  Rifiuta non necessari
                </button>
                <button
                  onClick={savePreferences}
                  className="btn-secondary text-sm py-2 px-4 order-2"
                  disabled={!showDetails}
                >
                  Salva preferenze
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="btn-primary text-sm py-2 px-4 order-1 sm:order-3"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
            
            <div className="bg-primary-dark/30 py-2 px-5 text-xs text-text-light/60 text-center">
              Cliccando "Accetta tutti", acconsenti all'uso di tutti i cookie. Cliccando "Rifiuta non necessari", verranno utilizzati solo i cookie necessari.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
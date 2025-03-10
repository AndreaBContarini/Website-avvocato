import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Per favore, inserisci un indirizzo email valido.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      // Qui in futuro collegherai il webhook per lo scenario make
      // Per ora simuliamo una richiesta di successo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Si è verificato un errore. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Resta <span className="gradient-text">Aggiornato</span>
              </h2>
              <p className="text-lg mb-6 text-text-light/80">
                Iscriviti alla newsletter per ricevere aggiornamenti su novità fiscali, 
                articoli e approfondimenti nel campo del diritto tributario.
              </p>
              <div className="hidden md:block">
                <div className="flex items-center space-x-3 text-text-light/70">
                  <CheckCircle className="w-5 h-5 text-primary-light" />
                  <span>Nessuno spam, solo contenuti di valore</span>
                </div>
                <div className="flex items-center space-x-3 mt-2 text-text-light/70">
                  <CheckCircle className="w-5 h-5 text-primary-light" />
                  <span>Cancellazione facile in qualsiasi momento</span>
                </div>
              </div>
            </div>
            
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Il tuo indirizzo email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@esempio.it"
                      className="input-field"
                      required
                    />
                    {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Iscrizione in corso...</span>
                    ) : (
                      <>
                        <span>Iscriviti alla Newsletter</span>
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <div className="md:hidden mt-4">
                    <div className="flex items-center space-x-3 text-text-light/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-light" />
                      <span>Nessuno spam, solo contenuti di valore</span>
                    </div>
                    <div className="flex items-center space-x-3 mt-2 text-text-light/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-light" />
                      <span>Cancellazione facile in qualsiasi momento</span>
                    </div>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/20 mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-light" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Iscrizione Completata!</h3>
                  <p className="text-text-light/80">
                    Grazie per esserti iscritto alla nostra newsletter. 
                    Riceverai presto i nostri aggiornamenti.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
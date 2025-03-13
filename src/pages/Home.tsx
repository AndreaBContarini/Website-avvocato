import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Shield, BookOpen, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  // Animazioni avanzate
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50 
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  const services = [
    {
      icon: <Scale className="w-12 h-12 text-primary-light" />,
      title: 'Contenzioso Tributario',
      description: 'Assistenza e rappresentanza in ogni fase del contenzioso tributario, dalla mediazione al ricorso in Cassazione.'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-light" />,
      title: 'Patent Box',
      description: 'Consulenza specializzata sul regime opzionale di tassazione agevolata per i redditi derivanti dall\'utilizzo di beni immateriali.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary-light" />,
      title: 'Consulenza Fiscale',
      description: 'Supporto professionale per questioni fiscali complesse, con un approccio personalizzato per ogni cliente.'
    }
  ];

  const testimonials = [
    {
      text: "«L'Avv. Belli Contarini ha dimostrato competenza ed integrità impeccabile. Tramite la sua consulenza, abbiamo superato con successo le complessità fiscali e legali. Un professionista di alto livello.»",
      author: "Paol Bettin, CFO di MV Augusta gruppo KTM",
      company: "MV Augusta / KTM",
      logo: "/src/images/mv-augusta-ktm.png"
    },
    {
      text: "«L'Avvocato Edoardo Belli Contarini ha una comprovata esperienza nelle agevolazioni e nel contenzioso tributario. Ha rappresentato con successo la Società nei giudizi instaurati contro l'Agenzia delle Entrate, ottenendo ottimi risultati.»",
      author: "Ylenia De Angelis, CEO gruppo Farinella",
      company: "Farinella",
      logo: "/src/images/farinella-logo.png"
    },
    {
      text: "«Edoardo Belli Contarini è un professionista eccezionale, con una profonda conoscenza del diritto tributario. La sua consulenza ci ha permesso di ottimizzare le nostre strategie fiscali con grande efficacia. Un partner di fiducia.»",
      author: "Marco Oliveri, CEO di Etichettificio Dany gruppo 4All Label",
      company: "4All Label",
      logo: "/src/images/4all-label-logo.png"
    },
    {
      text: "«Professionista dalle spiccate capacità di analisi e di ascolto. Una certezza nelle competenze tecniche. Questo il mix che contraddistingue l'Avv. Belli Contarini nella nostra piacevole e soddisfacente collaborazione.»",
      author: "Veronica Traversa, CFO Elleci S.p.A.",
      company: "Elleci S.p.A.",
      logo: "/src/images/elleci-logo.png"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
            alt="Studio legale"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center md:text-left max-w-3xl"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="gradient-text"
                  animate={pulseAnimation}
                >
                  Avvocato Tributarista
                </motion.span><br />
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Edoardo Belli Contarini
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-text-light/90 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Partner presso lo Studio Legale Tributario<br />Fantozzi & Associati
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/contact" className="btn-primary">
                    Richiedi una consulenza
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/services" className="btn-secondary">
                    Scopri i miei servizi
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Subito dopo la hero section */}
      <section className="py-16 bg-primary-dark/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-xl text-center relative overflow-hidden"
          >
            {/* Background animation */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Iscriviti alla mia Newsletter
              </motion.h2>
              <motion.p 
                className="text-text-light/80 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ricevi aggiornamenti su novità fiscali, sentenze rilevanti e approfondimenti sul diritto tributario.
              </motion.p>
              <motion.form 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="La tua email"
                  className="input-field flex-grow"
                  required
                />
                <motion.button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Iscriviti ora
                </motion.button>
              </motion.form>
              <motion.p 
                className="text-xs text-text-light/60 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Iscrivendoti accetti la nostra <Link to="/privacy" className="underline hover:text-primary-light">Privacy Policy</Link>. 
                Puoi disiscriverti in qualsiasi momento.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servizi in evidenza */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block mx-auto">I Miei Servizi</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-text-light/80">
              Offro assistenza legale specializzata in ambito tributario, con un approccio personalizzato per ogni cliente.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass-panel p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(var(--color-primary-light), 0.1), 0 10px 10px -5px rgba(var(--color-primary-light), 0.04)"
                }}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-light/80 mb-4">{service.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/services" className="inline-flex items-center text-primary-light hover:text-primary-lighter">
                    Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 bg-primary-dark/50 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block mx-auto">Testimonianze di alcuni clienti</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="neu-panel p-6 rounded-xl relative"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(var(--color-primary-light), 0.1), 0 10px 10px -5px rgba(var(--color-primary-light), 0.04)"
                }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <motion.div 
                  className="absolute -top-3 -left-3 text-6xl text-primary-light/20"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  "
                </motion.div>
                <div className="flex flex-col h-full">
                  <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      {testimonial.logo && (
                        <motion.div 
                          className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 overflow-hidden"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                          <img src={testimonial.logo} alt={testimonial.company} className="w-10 h-10 object-contain" />
                        </motion.div>
                      )}
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-text-light/70">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Riconoscimenti */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block mx-auto">Riconoscimenti e Casi di Successo</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerItem}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(var(--color-primary-light), 0.1), 0 10px 10px -5px rgba(var(--color-primary-light), 0.04)"
              }}
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-3">«Uno studio di eccellenza e professionalità»</h3>
                <p className="text-xl font-bold text-primary-light">- Forbes</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(var(--color-primary-light), 0.1), 0 10px 10px -5px rgba(var(--color-primary-light), 0.04)"
              }}
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-3">Top nel 2024</h3>
                <p className="text-lg mb-2">«Studio tributario tra i migliori d'Italia»</p>
                <p className="text-primary-light">- Il Sole 24 Ore & Statista</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(var(--color-primary-light), 0.1), 0 10px 10px -5px rgba(var(--color-primary-light), 0.04)"
              }}
            >
              <div>
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-xl font-bold">Energent S.p.A.</h3>
                </div>
                <p className="text-text-light/90 mb-4">
                  Lo Studio Fantozzi & Associati ha assistito la Energent S.p.A. nella ristrutturazione del debito, incluso il negoziato con l'Agenzia delle Entrate e l'Agenzia della Riscossione, culminando nella stipula di accordi, poi omologati dal Tribunale di Roma.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-12 rounded-xl text-center relative overflow-hidden"
          >
            {/* Background animation */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-primary-lighter/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-16 h-16 text-primary-light mx-auto mb-6" />
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Pronto a risolvere le tue questioni tributarie?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Contattami oggi stesso per una consulenza personalizzata e scopri come posso aiutarti.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Contattami ora
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
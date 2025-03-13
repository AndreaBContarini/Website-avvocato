import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Shield, BookOpen, FileText, Briefcase, Award, ArrowRight } from 'lucide-react';

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Animazione per gli elementi che entrano da sinistra
  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  };

  // Animazione per gli elementi che entrano da destra
  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  };

  // Animazione per gli elementi che appaiono con un effetto di scala
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const mainServices = [
    {
      id: "contenzioso",
      icon: <Scale className="w-12 h-12 text-primary-light" />,
      title: "Contenzioso Tributario",
      description: "Assistenza e rappresentanza in ogni fase del contenzioso tributario, dalla mediazione al ricorso in Cassazione.",
      details: [
        "Rappresentanza in Commissione Tributaria Provinciale e Regionale",
        "Ricorsi per Cassazione in materia tributaria",
        "Mediazione e conciliazione tributaria",
        "Assistenza in fase di verifica fiscale",
        "Impugnazione di atti impositivi"
      ]
    },
    {
      id: "patent-box",
      icon: <Shield className="w-12 h-12 text-primary-light" />,
      title: "Patent Box",
      description: "Consulenza specializzata sul regime opzionale di tassazione agevolata per i redditi derivanti dall'utilizzo di beni immateriali.",
      details: [
        "Analisi di eleggibilità per il regime Patent Box",
        "Assistenza nella determinazione del reddito agevolabile",
        "Predisposizione della documentazione necessaria",
        "Gestione del ruling con l'Agenzia delle Entrate",
        "Consulenza su marchi, brevetti e know-how"
      ]
    },
    {
      id: "consulenza",
      icon: <BookOpen className="w-12 h-12 text-primary-light" />,
      title: "Consulenza Fiscale",
      description: "Supporto professionale per questioni fiscali complesse, con un approccio personalizzato per ogni cliente.",
      details: [
        "Pianificazione fiscale per persone fisiche e giuridiche",
        "Consulenza su operazioni straordinarie",
        "Assistenza in materia di fiscalità internazionale",
        "Interpelli e richieste di ruling",
        "Due diligence fiscale"
      ]
    },
    {
      id: "assistenza",
      icon: <Briefcase className="w-12 h-12 text-primary-light" />,
      title: "Assistenza Legale",
      description: "Supporto legale completo in ambito tributario per privati e aziende.",
      details: [
        "Redazione di pareri legali in materia tributaria",
        "Assistenza in fase di accertamento",
        "Consulenza su adempimenti fiscali",
        "Rappresentanza presso enti impositori",
        "Assistenza in procedure di voluntary disclosure"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <FileText className="w-8 h-8 text-primary-light" />,
      title: "Redazione di Pareri",
      description: "Elaborazione di pareri legali su questioni fiscali complesse e interpretazione della normativa tributaria."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-light" />,
      title: "Formazione",
      description: "Corsi di formazione e aggiornamento in materia fiscale per professionisti e aziende."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servizi <span className="gradient-text">Offerti</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Offriamo assistenza legale specializzata in ambito tributario, con un approccio personalizzato per ogni cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
              >
                <motion.div
                  {...(index % 2 === 0 ? slideInLeft : slideInRight)}
                  className="glass-panel p-8 rounded-xl overflow-hidden relative"
                >
                  {/* Background decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-light/5 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-4 bg-primary-dark/40 rounded-xl mr-4"
                      >
                        {service.icon}
                      </motion.div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-text-light/80 mb-8 max-w-3xl">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                      {service.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * i }}
                          className="flex items-start"
                        >
                          <ArrowRight className="w-5 h-5 text-primary-light mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-text-light/80">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link to="/contact" className="btn-primary inline-block">
                        Richiedi una consulenza
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...scaleIn}
            className="text-center mb-12"
          >
            <h2 className="section-title inline-block mx-auto">Altri Servizi</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-text-light/80">
              Oltre ai servizi principali, offriamo anche:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(var(--color-primary-light), 0.1)" }}
                className="glass-panel p-8 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-text-light/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai bisogno di assistenza legale?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-text-light/80">
                Contattaci oggi stesso per una consulenza personalizzata e scopri come possiamo aiutarti a risolvere le tue questioni tributarie.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                    Contattaci ora
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href="tel:+393475428664" 
                    className="btn-secondary text-lg px-8 py-4 flex items-center"
                  >
                    +39 347 542 8664
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
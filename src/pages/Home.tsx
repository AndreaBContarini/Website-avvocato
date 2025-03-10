import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Shield, BookOpen, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
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
      text: "L'Avvocato Belli Contarini ha gestito il nostro contenzioso tributario con grande professionalità, ottenendo un risultato eccellente.",
      author: "Marco R., CEO",
      company: "Azienda Tech"
    },
    {
      text: "Competenza, precisione e disponibilità. Tre parole che descrivono perfettamente il servizio ricevuto.",
      author: "Laura M.",
      company: "Imprenditrice"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
                Studio Legale<br />
                <span className="gradient-text">Avv. Edoardo Belli Contarini</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-text-light/90 max-w-xl">
                Esperienza e professionalità nel diritto tributario e contenzioso, al servizio di privati e aziende.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Richiedi una consulenza
                </Link>
                <Link to="/services" className="btn-secondary">
                  Scopri i servizi
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="neu-panel p-6 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
                  alt="Avvocato al lavoro"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="section-title inline-block mx-auto">Servizi in Evidenza</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-text-light/80">
              Offriamo assistenza legale specializzata in ambito tributario, con un approccio personalizzato per ogni cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-panel p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-light/80 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary-light hover:text-primary-lighter">
                  Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
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
            <h2 className="section-title inline-block mx-auto">Cosa Dicono i Clienti</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="neu-panel p-6 rounded-xl relative"
              >
                <div className="absolute -top-3 -left-3 text-6xl text-primary-light/20">"</div>
                <p className="text-lg mb-4 relative z-10">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                    <span className="font-bold text-text-light">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-text-light/70">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="glass-panel p-8 md:p-12 rounded-xl text-center"
          >
            <Award className="w-16 h-16 text-primary-light mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto a risolvere le tue questioni tributarie?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contattaci oggi stesso per una consulenza personalizzata e scopri come possiamo aiutarti.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Contattaci ora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
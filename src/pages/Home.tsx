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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
                Studio Fantozzi & Associati<br />
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
                  Scopri i miei servizi
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
                  src="/src/images/eddy.jpeg"
                  alt="Avvocato Edoardo Belli Contarini"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Prima dei servizi */}
      <section className="py-16 bg-primary-dark/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Iscriviti alla mia Newsletter</h2>
            <p className="text-text-light/80 mb-6">
              Ricevi aggiornamenti su novità fiscali, sentenze rilevanti e approfondimenti sul diritto tributario.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="input-field flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Iscriviti ora
              </button>
            </form>
            <p className="text-xs text-text-light/60 mt-4">
              Iscrivendoti accetti la nostra <Link to="/privacy" className="underline hover:text-primary-light">Privacy Policy</Link>. 
              Puoi disiscriverti in qualsiasi momento.
            </p>
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
            <h2 className="section-title inline-block mx-auto">Testimonianze di alcuni clienti</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="neu-panel p-6 rounded-xl relative"
              >
                <div className="absolute -top-3 -left-3 text-6xl text-primary-light/20">"</div>
                <div className="flex flex-col h-full">
                  <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      {testimonial.logo && (
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                          <img src={testimonial.logo} alt={testimonial.company} className="w-10 h-10 object-contain" />
                        </div>
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
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-3">«Uno studio di eccellenza e professionalità»</h3>
                <p className="text-xl font-bold text-primary-light">- Forbes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-3">Top nel 2024</h3>
                <p className="text-lg mb-2">«Studio tributario tra i migliori d'Italia»</p>
                <p className="text-primary-light">- Il Sole 24 Ore & Statista</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="neu-panel p-6 rounded-xl relative flex flex-col h-full"
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
              Contattami oggi stesso per una consulenza personalizzata e scopri come posso aiutarti.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Contattami ora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
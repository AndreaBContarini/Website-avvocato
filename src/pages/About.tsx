import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const achievements = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary-light" />,
      title: "Esperienza",
      value: "35+ anni",
      description: "di esperienza nel diritto tributario"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-light" />,
      title: "Clienti",
      value: "500+",
      description: "clienti assistiti con successo"
    },
    {
      icon: <Award className="w-8 h-8 text-primary-light" />,
      title: "Riconoscimenti",
      value: "Numerosi",
      description: "riconoscimenti nel settore legale"
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
              Chi <span className="gradient-text">Sono</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Mi occupo di diritto tributario, offrendo soluzioni in contenzioso fiscale, tutela patrimoniale, riorganizzazioni aziendali e transazioni fiscali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeIn}
              className="order-2 md:order-1"
            >
              <h2 className="section-title mb-6">Il Mio Profilo Professionale</h2>
              <p className="mb-4 text-text-light/80">
                Sono un avvocato tributarista con oltre 35 anni di esperienza nel settore. 
                Mi sono laureato con lode in Giurisprudenza presso l'Università La Sapienza di Roma e ho conseguito 
                la votazione di 110/110 e Lode.
              </p>
              <p className="mb-4 text-text-light/80">
                Attualmente sono partner dello Studio Legale Fantozzi e Associati, dove mi occupo principalmente di 
                contenzioso tributario, assistendo clienti privati e aziende in tutte le fasi del processo tributario.
              </p>
              <p className="mb-6 text-text-light/80">
                Sono autore di numerose pubblicazioni in materia fiscale e relatore in convegni e seminari sul diritto tributario.
                Collaboro stabilmente con Il Sole 24 Ore, fornendo contributi specialistici e approfondimenti.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href="https://www.linkedin.com/in/ebcontarini/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Il Mio Profilo LinkedIn
                </a>
                <a 
                  href="https://www.youtube.com/@EdoardoBelliContarini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Il Mio Canale YouTube
                </a>
              </div>
            </motion.div>
            
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="neu-panel p-6 relative mx-auto max-w-md">
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

      {/* Achievements */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title inline-block mx-auto">I Miei Risultati</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-panel p-8 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-3xl font-bold text-primary-light mb-2">{item.value}</p>
                <p className="text-text-light/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-primary-light mr-3" />
                <h2 className="section-title mb-0">La Mia Esperienza</h2>
              </div>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">Partner</h3>
                  <p className="text-primary-light mb-2">Fantozzi & Associati</p>
                  <p className="text-text-light/70">mag 1988 - Presente · 36 anni 11 mesi</p>
                  <p className="text-text-light/80 mt-3">
                    Come socio di Fantozzi & Associati, da oltre 35 anni mi occupo di diritto tributario, offrendo soluzioni in contenzioso fiscale, tutela patrimoniale, riorganizzazioni aziendali e transazioni fiscali.
                  </p>
                  <p className="text-primary-light mt-4 text-sm">Roma, Italia</p>
                </div>
                
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">Pubblicista</h3>
                  <p className="text-primary-light mb-2">Il Sole 24 Ore</p>
                  <p className="text-text-light/70">1988 - Presente · 37 anni 3 mesi</p>
                  <p className="text-text-light/80 mt-3">
                    Collaboro stabilmente con Il Sole 24 Ore, fornendo contributi specialistici e approfondimenti. Inoltre, scrivo per altre prestigiose testate come la Rivista di Diritto Tributario, il Bollettino Tributario e il Corriere Tributario.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">Ufficiale</h3>
                  <p className="text-primary-light mb-2">Guardia di Finanza</p>
                  <p className="text-text-light/70">mar 1989 - giu 1990 · 1 anno 4 mesi</p>
                </div>
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              {...fadeIn}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-light mr-3" />
                <h2 className="section-title mb-0">La Mia Formazione</h2>
              </div>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">Sapienza Università di Roma</h3>
                  <p className="text-primary-light mb-2">Laurea, Giurisprudenza</p>
                  <p className="text-text-light/70">1983 - 1988</p>
                  <p className="text-text-light/80 mt-3">Votazione: 110/110 e Lode</p>
                  <p className="text-text-light/80 mt-2">
                    Laurea in diritto tributario presso l'Università degli studi La Sapienza di Roma
                  </p>
                </div>
                
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">Liceo classico Lucrezio Caro di Roma</h3>
                  <p className="text-text-light/70">1979 - 1983</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-primary-light mr-3" />
              <h2 className="section-title mb-0 inline-block">Le Mie Pubblicazioni</h2>
            </div>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-text-light/80">
              Una selezione delle mie pubblicazioni più recenti
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="glass-panel p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-2">Il Patent Box e le agevolazioni fiscali per la proprietà intellettuale</h3>
              <p className="text-primary-light mb-3">Rivista di Diritto Tributario, 2022</p>
              <p className="text-text-light/80">
                Analisi approfondita del regime fiscale agevolato per i redditi derivanti dall'utilizzo di beni immateriali.
              </p>
            </motion.div>
            
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-2">Strategie di difesa nel contenzioso tributario</h3>
              <p className="text-primary-light mb-3">Il Fisco, 2021</p>
              <p className="text-text-light/80">
                Guida pratica alle strategie difensive più efficaci nelle diverse fasi del processo tributario.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
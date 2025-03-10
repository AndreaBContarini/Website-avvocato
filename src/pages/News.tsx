import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const News = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const newsItems = [
    {
      id: "webinar-patent-box-2025",
      title: "Webinar: Il Patent Box nel 2025",
      description: "Partecipa al nostro webinar gratuito sul regime Patent Box e scopri come la tua azienda può beneficiarne.",
      date: "20/01/2025",
      category: "Eventi",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80"
    },
    {
      id: "nuova-circolare-agenzia-entrate",
      title: "Nuova Circolare dell'Agenzia delle Entrate sul Contenzioso Tributario",
      description: "L'Agenzia delle Entrate ha pubblicato una nuova circolare che chiarisce alcuni aspetti controversi del contenzioso tributario.",
      date: "12/01/2025",
      category: "Normativa",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
    },
    {
      id: "sentenza-cassazione-deducibilita",
      title: "Importante Sentenza della Cassazione sulla Deducibilità dei Costi",
      description: "La Corte di Cassazione ha emesso una sentenza che stabilisce nuovi criteri per la deducibilità dei costi aziendali.",
      date: "05/01/2025",
      category: "Giurisprudenza",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80"
    },
    {
      id: "convegno-diritto-tributario-roma",
      title: "Convegno sul Diritto Tributario a Roma",
      description: "L'Avv. Edoardo Belli Contarini parteciperà come relatore al convegno sul diritto tributario che si terrà a Roma il 15 febbraio 2025.",
      date: "28/12/2024",
      category: "Eventi",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80"
    },
    {
      id: "riforma-fiscale-2025",
      title: "Riforma Fiscale 2025: Le Principali Novità",
      description: "Un'analisi delle principali novità introdotte dalla riforma fiscale che entrerà in vigore nel 2025.",
      date: "20/12/2024",
      category: "Normativa",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
    },
    {
      id: "nuovo-articolo-sole24ore",
      title: "Nuovo Articolo dell'Avv. Belli Contarini su Il Sole 24 Ore",
      description: "L'Avv. Edoardo Belli Contarini ha pubblicato un nuovo articolo su Il Sole 24 Ore riguardante le opportunità fiscali per le imprese innovative.",
      date: "15/12/2024",
      category: "Pubblicazioni",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
    }
  ];

  const categories = [...new Set(newsItems.map(item => item.category))];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">News</span> ed Eventi
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Rimani aggiornato sulle ultime novità in materia di diritto tributario, eventi e pubblicazioni dello Studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="flex flex-wrap justify-center gap-3"
          >
            <button className="btn-primary py-2 px-4">Tutte</button>
            {categories.map((category) => (
              <button 
                key={category}
                className="btn-secondary py-2 px-4"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel rounded-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-sm text-primary-light mb-1">{newsItems[0].date} - {newsItems[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{newsItems[0].title}</h2>
                <p className="text-text-light/80 mb-6">{newsItems[0].description}</p>
                <Link 
                  to={`/news/${newsItems[0].id}`} 
                  className="btn-primary inline-block self-start"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-xl overflow-hidden h-full flex flex-col"
              >
                <div className="h-48 relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-sm text-primary-light mb-2">{item.date}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-light/80 mb-4 flex-grow">{item.description}</p>
                  <Link 
                    to={`/news/${item.id}`} 
                    className="text-primary-light hover:text-primary-lighter inline-flex items-center mt-auto"
                  >
                    Leggi di più
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel p-8 md:p-12 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Rimani Aggiornato</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-text-light/80">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti su novità fiscali, eventi e pubblicazioni dello Studio.
            </p>
            <Link to="/#newsletter" className="btn-primary text-lg px-8 py-4">
              Iscriviti alla Newsletter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News; 
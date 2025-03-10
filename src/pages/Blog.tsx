import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const blogPosts = [
    {
      id: "patent-box-opportunita-fiscale",
      title: "Patent Box: Opportunità Fiscale in Scadenza il 29 Gennaio",
      description: "Scopriamo alcuni vantaggi del regime patent box, un'opzione fiscale vantaggiosa per le imprese innovative, disponibile fino al 29 gennaio.",
      date: "15/01/2025",
      source: "Il Sole 24 Ore",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
      content: `
        La legge di Bilancio 207/2024, in attesa della riforma organica prevista dall'articolo 6, lettere a) e b), della legge 111/2023 e relativa bozza di Testo unico delle agevolazioni tributarie, ha inciso in ordine sparso su diversi incentivi con l'obiettivo di premiare - tramite i noti meccanismi dei crediti di imposta, maggiorazione dei costi deducibili e aliquota ridotta Ires - la Transizione 5.0, l'Industria 4.0, gli investimenti in beni tecnologicamente avanzati, gli incrementi occupazionali e la quotazione delle Pmi (articolo 1, commi 399 e seguenti).

        Nondimeno, nel solco della transizione tecnologica e dell'innovazione, probabilmente l'incentivo più appetibile è ancora il nuovo patent box - per la verità introdotto da tempo per effetto dell'articolo 6 del Dl 146/2021 e relativo provvedimento 15 febbraio 2022 n. 48243 - trattandosi di una misura che, diversamente dalle altre, risulta ormai sperimentata, senza limitazioni temporali, piuttosto semplice da applicare, senza ipotesi di recapture o di decadenza, e, ulteriore elemento da non sottovalutare, connotata dalla cosiddetta penalty protection.

        Va ricordato che detto beneficio spetta a tutte quelle imprese che sostengano determinate spese eleggibili volte a creare i beni immateriali e a ottenere il relativo titolo di privativa ovvero in sintesi: software protetti da copyright, brevetti industriali per invenzioni e per modelli di utilità, disegni o modelli oppure ancora la combinazione di due o più dei predetti beni.

        Risulta tuttora escluso soltanto il know-how - cioè i processi, le formule e le informazioni relativi a esperienze acquisite nel campo industriale, commerciale o scientifico giuridicamente tutelabili - che meriterebbe di essere reinserito nel perimetro degli IP, anche perché in linea con le indicazioni Ocse. Ad ogni modo, l'ambito oggettivo del patent box è davvero ampio e spesso sottovalutato dalle stesse imprese, essendo incluse ad esempio pure le invenzioni biotecnologiche e i relativi certificati complementari di protezione, i brevetti e certificati per varietà vegetali e le topografie di prodotti a semiconduttori (circolare dell'agenzia delle Entrate 24 febbraio 2023, n. 5/E, nonché l'elencazione rinvenibile nel Codice della proprietà intellettuale, Dlgs 30/2005).

        La super-deduzione al 110% ai fini Ires, Irpef e Irap, com'è intuitivo, risulta attraente non solo in termini quantitativi, ma considerato altresì che:
        i) premia in modo trasversale tutte le imprese innovative, incluse quelle in perdita fiscale, purché non siano in crisi;
        ii) è di tipo automatico, dura cinque anni, si liquida direttamente in dichiarazione in una logica "front end", cioè in base ai costi eleggibili sostenuti;
        iii) è cumulabile con altre agevolazioni;
        iv) in presenza della documentazione idonea scatta l'esimente sanzionatoria.

        E' pur vero che l'agevolazione implica il sostenimento degli oneri per la tutela legale ovvero per la registrazione degli IP, ma il ritorno dell'investimento è assicurato, non solo per motivi fiscali, tenuto conto anche del cosiddetto «meccanismo premiale» (articolo 5 del provvedimento 15 febbraio 2022), ma per gli ulteriori vantaggi extra-fiscali derivanti dal titolo di privativa ottenuto in conformità (anche) al Codice della proprietà intellettuale: maggiore potere contrattuale nelle relazioni commerciali, possibilità di monetizzare l'innovazione attraverso licenze d'uso, potenziale aumento del valore dell'azienda, accesso facilitato a finanziamenti ed investimenti, rafforzamento dell'immagine e del brand, incremento di partnership e collaborazioni strategiche anche all'estero.

        Dunque, nello scrutinare il panorama degli incentivi mirati a premiare l'innovazione e la transizione tecnologica, non si può prescindere dal patent box; per le imprese interessate ad opzionare il regime quinquennale già a partire dal 2023, c'è tempo fino al 29 gennaio per espletare i relativi adempimenti in dichiarazione integrativa.
      `
    },
    {
      id: "contenzioso-tributario-novita",
      title: "Novità nel Contenzioso Tributario: Cosa Cambia nel 2025",
      description: "Analizziamo le principali novità normative che interesseranno il contenzioso tributario a partire dal 2025.",
      date: "05/12/2024",
      source: "Studio Legale Avv. Edoardo Belli Contarini",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80"
    },
    {
      id: "fiscalita-internazionale-2025",
      title: "Fiscalità Internazionale: Prospettive per il 2025",
      description: "Un'analisi delle tendenze e delle sfide in materia di fiscalità internazionale per le imprese italiane nel 2025.",
      date: "20/11/2024",
      source: "Studio Legale Avv. Edoardo Belli Contarini",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
    }
  ];

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
              Il Nostro <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Approfondimenti, analisi e novità in materia di diritto tributario e fiscalità d'impresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel p-6 md:p-8 rounded-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm text-primary-light">{blogPosts[0].date} - {blogPosts[0].source}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
                <p className="text-text-light/80 mb-6">{blogPosts[0].description}</p>
                <Link 
                  to={`/blog/${blogPosts[0].id}`} 
                  className="btn-primary inline-block"
                >
                  Leggi l'articolo completo
                </Link>
              </div>
              <div className="order-first md:order-last">
                <div className="neu-panel p-2 relative">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold mb-8"
          >
            Articoli Recenti
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-sm text-primary-light mb-2">{post.date} - {post.source}</span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-text-light/80 mb-4 flex-grow">{post.description}</p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-primary-light hover:text-primary-lighter inline-flex items-center mt-auto"
                  >
                    Leggi l'articolo
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

      {/* Full Article */}
      <section className="mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel p-8 rounded-xl"
          >
            <div className="mb-8 text-center">
              <span className="text-sm text-primary-light">{blogPosts[0].date} - {blogPosts[0].source}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
              <p className="text-xl text-text-light/80">{blogPosts[0].description}</p>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              {blogPosts[0].content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-text-light/90">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">Hai bisogno di consulenza sul Patent Box?</h3>
              <p className="mb-6">
                Lo Studio Legale Avv. Edoardo Belli Contarini offre consulenza specializzata in materia di Patent Box e agevolazioni fiscali per l'innovazione.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Contattaci per una consulenza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 
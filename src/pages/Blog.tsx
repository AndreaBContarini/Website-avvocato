import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Articolo non trovato</h2>
          <p className="mb-8">L'articolo che stai cercando non esiste o è stato rimosso.</p>
          <button 
            onClick={() => navigate('/blog')}
            className="btn-primary"
          >
            Torna al Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-xl"
        >
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center text-primary-light hover:text-primary-lighter mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna al Blog
          </button>

          <div className="mb-8 text-center">
            <span className="text-sm text-primary-light">{post.date} - {post.source}</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <p className="text-xl text-text-light/80">{post.description}</p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content && post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('<h2>')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('<h2>', '').replace('</h2>', '')}
                  </h2>
                );
              }
              return (
                <p key={idx} className="mb-6 text-text-light/90" dangerouslySetInnerHTML={{ __html: paragraph }} />
              );
            })}
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold mb-4">Hai bisogno di consulenza su questo tema?</h3>
            <p className="mb-6">
              Sono a tua disposizione per offrirti consulenza specializzata in materia fiscale e tributaria.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contattami per una consulenza
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Array degli articoli del blog
const blogPosts = [
  {
    id: "concordato-preventivo-biennale",
    title: "Concordato Preventivo Biennale e Incentivi Fiscali",
    description: "I contribuenti ISA che hanno aderito al Concordato Preventivo Biennale (CPB) devono valutare l'impatto delle agevolazioni fiscali sulle basi imponibili IRES e IRAP per ottimizzare la propria pianificazione tributaria.",
    date: "02/02/2025",
    source: "Studio Fantozzi & Associati - Avv. Edoardo Belli Contarini",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    content: `
Il <strong>Concordato Preventivo Biennale (CPB)</strong> è uno strumento di compliance fiscale che, una volta accettato, vincola l'impresa a dichiarare importi prestabiliti per i periodi d'imposta 2024-2025. Il CPB garantisce determinati benefici premiali, ma impedisce il ricalcolo delle basi imponibili anche in caso di maggiori o minori redditi effettivi, salvo le circostanze eccezionali individuate dal decreto MEF 14.6.2024.

<h2>Il Concordato Preventivo Biennale: vincoli e opportunità</h2>

Il <strong>Concordato Preventivo Biennale</strong> rappresenta un'importante opportunità per le imprese che intendono stabilizzare il proprio carico fiscale nel biennio 2024-2025. Questo strumento offre vantaggi significativi in termini di certezza tributaria e riduzione del rischio di accertamenti, ma comporta anche vincoli rilevanti che devono essere attentamente valutati.

La principale caratteristica del CPB è la sua natura vincolante: una volta accettata la proposta dell'Agenzia delle Entrate, l'impresa si impegna a dichiarare gli importi concordati indipendentemente dai risultati economici effettivamente conseguiti. Questo aspetto può rappresentare un vantaggio in caso di performance superiori alle aspettative, ma potrebbe risultare penalizzante qualora i risultati fossero inferiori a quanto preventivato.

<h2>Agevolazioni fiscali e impatto sul CPB</h2>

Un aspetto cruciale da considerare riguarda l'interazione tra il CPB e le altre agevolazioni fiscali disponibili. È importante sottolineare che le agevolazioni fiscali non modificano le basi imponibili concordate, né compromettono l'accesso al CPB, ormai consolidato con l'accettazione della proposta. 

Anche in caso di decadenza (art. 22 dlgs 13/2024), le imposte e i contributi dovuti sono calcolati sulle basi imponibili concordate, se superiori ai redditi effettivi.

Alcuni bonus fiscali non interferiscono con il CPB, poiché fruibili tramite compensazione in modello F24. È il caso dei:
- Crediti d'imposta per Ricerca e Sviluppo
- Incentivi per Industria 4.0
- Agevolazioni per Transizione 5.0
- Riduzione dell'aliquota IRES premiale (dal 24% al 20%)

<h2>Super deduzioni e possibili interferenze</h2>

Alcune misure agevolative, invece, possono creare problematiche nel cumulo con il CPB. In particolare:

- La super deduzione per incrementi occupazionali (art. 4 dlgs 216/2023)
- Il Patent Box (art. 6 d.l. 146/2021) con super deduzione al 110%

Questi strumenti riducono l'imponibile IRES e IRAP, potenzialmente interferendo con gli importi definiti nel CPB, senza però consentire una revisione delle basi concordate. Si crea quindi un potenziale "cortocircuito" normativo che richiede un'attenta pianificazione fiscale.

<h2>Strategie per ottimizzare i benefici fiscali</h2>

Per evitare la perdita dei benefici di CPB e Patent Box, una soluzione efficace è scadenziare il timing della fruizione dell'incentivo fiscale. Dato che il Patent Box è subordinato alla registrazione del bene immateriale e al suo utilizzo effettivo, si può programmare l'utilizzo del beneficio nel 2025-2026, sfruttando i vantaggi senza compromettere il CPB.

Questa strategia consente di ottenere un duplice beneficio:

1. <strong>Riduzione delle imposte</strong> grazie al CPB e ai suoi effetti premiali nel biennio 2024-2025
2. <strong>Massimizzazione delle agevolazioni fiscali</strong> come il Patent Box nel periodo successivo, con vantaggi extra-fiscali quali patrimonializzazione e royalties

<h2>Conclusione</h2>

La pianificazione fiscale è cruciale per sfruttare al meglio gli incentivi fiscali senza incorrere in limitazioni dovute al CPB. Adottare una strategia di tempistica ottimale consente di ottenere il massimo risparmio fiscale e di evitare il rischio di ridurre retroattivamente le basi imponibili concordate.

Le imprese che hanno aderito al CPB dovrebbero quindi valutare attentamente il timing di fruizione delle diverse agevolazioni fiscali, possibilmente con il supporto di consulenti specializzati, per massimizzare i benefici complessivi e garantire la piena conformità normativa.
    `
  }
];

const Blog = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
              Il Mio <span className="gradient-text">Blog</span>
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
    </div>
  );
};

export { Blog, BlogPost };
export default Blog; 
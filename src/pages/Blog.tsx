import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === postId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <Helmet>
          <title>Articolo non trovato | Blog | Avv. Edoardo Belli Contarini</title>
          <meta name="description" content="L'articolo che stai cercando non esiste o è stato rimosso." />
        </Helmet>
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
      <Helmet>
        <title>{post.title} | Blog | Avv. Edoardo Belli Contarini</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Avv. Edoardo Belli Contarini" />
        <meta property="article:section" content="Diritto Tributario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>
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
    id: "patent-box-opportunita-fiscale",
    title: "Patent Box: Opportunità Fiscale in Scadenza",
    description: "Scopriamo alcuni vantaggi del regime patent box, un'opzione fiscale vantaggiosa per le imprese innovative, disponibile fino al 29 gennaio.",
    date: "15/01/2025",
    source: "Il Sole 24 Ore",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    content: `
La legge di Bilancio 207/2024, in attesa della riforma organica prevista dall'articolo 6, lettere a) e b), della legge 111/2023 e relativa bozza di Testo unico delle agevolazioni tributarie, ha inciso in ordine sparso su diversi incentivi con l'obiettivo di premiare - tramite i noti meccanismi dei crediti di imposta, maggiorazione dei costi deducibili e aliquota ridotta Ires - la Transizione 5.0, l'Industria 4.0, gli investimenti in beni tecnologicamente avanzati, gli incrementi occupazionali e la quotazione delle Pmi (articolo 1, commi 399 e seguenti).

<h2>Il Patent Box: un incentivo consolidato e vantaggioso</h2>

Nondimeno, nel solco della transizione tecnologica e dell'innovazione, probabilmente l'incentivo più appetibile è ancora il <strong>nuovo patent box</strong> - per la verità introdotto da tempo per effetto dell'articolo 6 del Dl 146/2021 e relativo provvedimento 15 febbraio 2022 n. 48243 - trattandosi di una misura che, diversamente dalle altre, risulta ormai sperimentata, senza limitazioni temporali, piuttosto semplice da applicare, senza ipotesi di recapture o di decadenza, e, ulteriore elemento da non sottovalutare, connotata dalla cosiddetta <strong>penalty protection</strong>.

<h2>Ambito di applicazione e beni immateriali eleggibili</h2>

Va ricordato che detto beneficio spetta a tutte quelle imprese che sostengano determinate spese eleggibili volte a creare i beni immateriali e a ottenere il relativo titolo di privativa ovvero in sintesi:
- Software protetti da copyright
- Brevetti industriali per invenzioni
- Brevetti per modelli di utilità
- Disegni o modelli
- Combinazione di due o più dei predetti beni

Risulta tuttora escluso soltanto il <strong>know-how</strong> - cioè i processi, le formule e le informazioni relativi a esperienze acquisite nel campo industriale, commerciale o scientifico giuridicamente tutelabili - che meriterebbe di essere reinserito nel perimetro degli IP, anche perché in linea con le indicazioni Ocse. 

Ad ogni modo, l'ambito oggettivo del patent box è davvero ampio e spesso sottovalutato dalle stesse imprese, essendo incluse ad esempio pure le invenzioni biotecnologiche e i relativi certificati complementari di protezione, i brevetti e certificati per varietà vegetali e le topografie di prodotti a semiconduttori (circolare dell'agenzia delle Entrate 24 febbraio 2023, n. 5/E, nonché l'elencazione rinvenibile nel Codice della proprietà intellettuale, Dlgs 30/2005).

<h2>I vantaggi della super-deduzione al 110%</h2>

La <strong>super-deduzione al 110%</strong> ai fini Ires, Irpef e Irap, com'è intuitivo, risulta attraente non solo in termini quantitativi, ma considerato altresì che:

1. Premia in modo trasversale tutte le imprese innovative, incluse quelle in perdita fiscale, purché non siano in crisi
2. È di tipo automatico, dura cinque anni, si liquida direttamente in dichiarazione in una logica "front end", cioè in base ai costi eleggibili sostenuti
3. È cumulabile con altre agevolazioni
4. In presenza della documentazione idonea scatta l'esimente sanzionatoria

<h2>Costi e benefici dell'agevolazione</h2>

È pur vero che l'agevolazione implica il sostenimento degli oneri per la tutela legale ovvero per la registrazione degli IP, ma il ritorno dell'investimento è assicurato, non solo per motivi fiscali, tenuto conto anche del cosiddetto <strong>«meccanismo premiale»</strong> (articolo 5 del provvedimento 15 febbraio 2022), ma per gli ulteriori vantaggi extra-fiscali derivanti dal titolo di privativa ottenuto in conformità (anche) al Codice della proprietà intellettuale:

- Maggiore potere contrattuale nelle relazioni commerciali
- Possibilità di monetizzare l'innovazione attraverso licenze d'uso
- Potenziale aumento del valore dell'azienda
- Accesso facilitato a finanziamenti ed investimenti
- Rafforzamento dell'immagine e del brand
- Incremento di partnership e collaborazioni strategiche anche all'estero

<h2>Scadenza imminente per l'opzione 2023</h2>

Dunque, nello scrutinare il panorama degli incentivi mirati a premiare l'innovazione e la transizione tecnologica, non si può prescindere dal patent box; per le imprese interessate ad opzionare il regime quinquennale già a partire dal 2023, c'è tempo fino al <strong>29 gennaio</strong> per espletare i relativi adempimenti in dichiarazione integrativa.
    `
  },
  {
    id: "concordato-preventivo-biennale",
    title: "Concordato Preventivo Biennale e Incentivi Fiscali",
    description: "I contribuenti ISA che hanno aderito al Concordato Preventivo Biennale (CPB) devono valutare l'impatto delle agevolazioni fiscali sulle basi imponibili IRES e IRAP per ottimizzare la propria pianificazione tributaria.",
    date: "02/02/2025",
    source: "Studio Fantozzi & Associati - Avv. Edoardo Belli Contarini",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    content: `
Il <strong>Concordato Preventivo Biennale (CPB)</strong> è uno strumento di compliance fiscale che, una volta accettato, vincola l'impresa a dichiarare importi prestabiliti per i periodi d'imposta 2024-2025. Il CPB garantisce determinati benefici premiali, ma impedisce il ricalcolo delle basi imponibili anche in caso di maggiori o minori redditi effettivamente conseguiti, salvo le circostanze eccezionali individuate dal decreto MEF 14.6.2024.

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

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Blog | Diritto Tributario | Avv. Edoardo Belli Contarini</title>
        <meta name="description" content="Approfondimenti, analisi e novità in materia di diritto tributario, patent box, concordato preventivo e fiscalità d'impresa a cura dell'Avv. Edoardo Belli Contarini." />
        <meta name="keywords" content="diritto tributario, patent box, concordato preventivo biennale, fiscalità d'impresa, agevolazioni fiscali, blog tributario" />
        <meta property="og:title" content="Blog | Diritto Tributario | Avv. Edoardo Belli Contarini" />
        <meta property="og:description" content="Approfondimenti, analisi e novità in materia di diritto tributario, patent box, concordato preventivo e fiscalità d'impresa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ebcontarini.it/blog" />
      </Helmet>
      
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

      {/* Articles */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-panel p-6 md:p-8 rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-sm text-primary-light">{post.date} - {post.source}</span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{post.title}</h2>
                    <p className="text-text-light/80 mb-6">{post.description}</p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="btn-primary inline-block"
                    >
                      Leggi l'articolo completo
                    </Link>
                  </div>
                  <div className="order-first md:order-last">
                    <div className="neu-panel p-2 relative">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Blog, BlogPost };
export default Blog; 
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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

  const sections = [
    {
      id: "introduzione",
      title: "Introduzione",
      content: `
        I presenti Termini di Servizio ("Termini") regolano l'utilizzo del sito web www.ebcontarini.it ("Sito") e i servizi offerti dallo Studio Fantozzi & Associati, nella persona dell'Avv. Edoardo Belli Contarini ("Studio").
        
        Utilizzando il Sito o richiedendo i nostri servizi, accetti di essere vincolato da questi Termini. Se non accetti questi Termini, ti preghiamo di non utilizzare il Sito o i nostri servizi.
        
        Ti invitiamo a leggere attentamente questi Termini prima di utilizzare il Sito o richiedere i nostri servizi.
      `
    },
    {
      id: "servizi-legali",
      title: "Servizi Legali",
      content: `
        Lo Studio offre servizi di consulenza e assistenza legale in materia di diritto tributario e contenzioso fiscale.
        
        I servizi legali sono forniti sulla base di un accordo specifico tra lo Studio e il cliente, che definisce l'ambito, le modalità e i costi dei servizi.
        
        La richiesta di informazioni tramite il Sito non costituisce un rapporto professionale tra lo Studio e l'utente. Un rapporto professionale si instaura solo dopo la sottoscrizione di un accordo specifico.
        
        Lo Studio si riserva il diritto di rifiutare di fornire servizi a qualsiasi persona o entità, a sua esclusiva discrezione.
      `
    },
    {
      id: "contenuti-sito",
      title: "Contenuti del Sito",
      content: `
        I contenuti del Sito, inclusi testi, immagini, loghi, grafica, video e altri materiali, sono di proprietà dello Studio o dei suoi licenzianti e sono protetti dalle leggi sul diritto d'autore e altre leggi sulla proprietà intellettuale.
        
        È consentito visualizzare, scaricare e stampare i contenuti del Sito esclusivamente per uso personale e non commerciale, a condizione di non modificare i contenuti e di mantenere tutti gli avvisi di copyright e altri avvisi di proprietà.
        
        Non è consentito riprodurre, distribuire, modificare, creare opere derivate, pubblicare, concedere in licenza, trasferire o vendere qualsiasi contenuto ottenuto dal Sito senza il previo consenso scritto dello Studio.
        
        Le informazioni fornite sul Sito hanno scopo puramente informativo e non costituiscono consulenza legale. Non dovresti agire o astenerti dall'agire sulla base delle informazioni ottenute dal Sito senza prima consultare un professionista legale.
      `
    },
    {
      id: "limitazioni-responsabilita",
      title: "Limitazioni di Responsabilità",
      content: `
        Il Sito e i suoi contenuti sono forniti "così come sono" e "come disponibili", senza garanzie di alcun tipo, esplicite o implicite.
        
        Lo Studio non garantisce che il Sito sarà sempre disponibile, ininterrotto, tempestivo, sicuro o privo di errori, né che i risultati ottenuti dall'uso del Sito saranno accurati o affidabili.
        
        Lo Studio non sarà responsabile per eventuali danni diretti, indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall'uso o dall'impossibilità di utilizzare il Sito o i suoi contenuti, anche se lo Studio è stato informato della possibilità di tali danni.
        
        In ogni caso, la responsabilità totale dello Studio per qualsiasi reclamo relativo a questi Termini o all'uso del Sito non supererà l'importo pagato dall'utente allo Studio per i servizi, se del caso.
      `
    },
    {
      id: "privacy",
      title: "Privacy e Protezione dei Dati",
      content: `
        Lo Studio si impegna a proteggere la tua privacy e a trattare i tuoi dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e altre leggi applicabili sulla protezione dei dati.
        
        Per informazioni su come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali, consulta la nostra Informativa sulla Privacy.
        
        Utilizzando il Sito, acconsenti al trattamento dei tuoi dati personali come descritto nella nostra Informativa sulla Privacy.
      `
    }
  ];

  const additionalSections = [
    {
      title: "Modifiche ai Termini",
      content: `
        Lo Studio si riserva il diritto di modificare questi Termini in qualsiasi momento, a sua esclusiva discrezione.
        
        Le modifiche ai Termini saranno efficaci immediatamente dopo la pubblicazione sul Sito. L'uso continuato del Sito dopo tali modifiche costituisce accettazione dei nuovi Termini.
        
        Ti invitiamo a consultare regolarmente questa pagina per essere informato su eventuali modifiche.
      `
    },
    {
      title: "Legge Applicabile e Foro Competente",
      content: `
        Questi Termini sono regolati e interpretati in conformità con le leggi italiane, senza riguardo ai principi di conflitto di leggi.
        
        Qualsiasi controversia derivante da o relativa a questi Termini o all'uso del Sito sarà soggetta alla giurisdizione esclusiva del Tribunale di Roma, Italia.
      `
    },
    {
      title: "Disposizioni Generali",
      content: `
        Se una qualsiasi disposizione di questi Termini è ritenuta invalida o inapplicabile, tale disposizione sarà limitata o eliminata nella misura minima necessaria, e le restanti disposizioni di questi Termini rimarranno in pieno vigore ed efficacia.
        
        La rinuncia da parte dello Studio a far valere qualsiasi diritto o disposizione di questi Termini non costituirà una rinuncia a tale diritto o disposizione in futuro.
        
        Questi Termini costituiscono l'intero accordo tra te e lo Studio riguardo all'uso del Sito e sostituiscono qualsiasi accordo precedente tra te e lo Studio relativo all'oggetto di questi Termini.
      `
    },
    {
      title: "Contatti",
      content: `
        Per qualsiasi domanda o richiesta relativa a questi Termini o all'uso del Sito, puoi contattarci all'indirizzo email: ebcontarini@fantozzieassociati.it
      `
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
              Termini di <span className="gradient-text">Servizio</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Questi termini regolano l'utilizzo del nostro sito web e dei servizi offerti dallo Studio Fantozzi & Associati, nella persona dell'Avv. Edoardo Belli Contarini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Indice dei Contenuti</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className="block p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                {...fadeIn}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="glass-panel p-6 rounded-xl">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-text-light/80 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {additionalSections.map((section, index) => (
              <motion.div
                key={index}
                {...fadeIn}
              >
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <div className="glass-panel p-5 rounded-xl">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-text-light/80 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center text-text-light/60 text-sm"
          >
            <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 
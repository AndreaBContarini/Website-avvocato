import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      id: "informazioni-generali",
      title: "Informazioni Generali",
      content: `
        La presente Informativa sulla Privacy descrive come lo Studio Fantozzi & Associati, nella persona dell'Avv. Edoardo Belli Contarini, raccoglie, utilizza e condivide i dati personali 
        ottenuti tramite il sito web www.ebcontarini.it e durante la fornitura dei nostri servizi legali.
        
        Ci impegniamo a proteggere la tua privacy e a trattare i tuoi dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) 
        e altre leggi applicabili sulla protezione dei dati.
      `
    },
    {
      id: "dati-raccolti",
      title: "Dati Raccolti",
      content: `
        Raccogliamo i seguenti tipi di dati personali:
        
        • Dati di contatto: nome, indirizzo email, numero di telefono, indirizzo postale
        • Dati professionali: informazioni sulla tua azienda o professione
        • Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, tempo di permanenza sul sito
        • Dati forniti volontariamente: informazioni che ci fornisci tramite moduli di contatto o corrispondenza
        
        Raccogliamo questi dati quando:
        
        • Visiti il nostro sito web
        • Compili un modulo di contatto
        • Ti iscrivi alla nostra newsletter
        • Richiedi una consulenza o un servizio legale
        • Interagisci con noi tramite email, telefono o di persona
      `
    },
    {
      id: "utilizzo-dati",
      title: "Utilizzo dei Dati",
      content: `
        Utilizziamo i tuoi dati personali per:
        
        • Fornirti i servizi legali richiesti
        • Rispondere alle tue richieste di informazioni
        • Inviarti la nostra newsletter (se hai acconsentito)
        • Migliorare e personalizzare la tua esperienza sul nostro sito
        • Adempiere ai nostri obblighi legali e professionali
        • Proteggere i nostri diritti legali e prevenire abusi
        
        La base giuridica per il trattamento dei tuoi dati personali include:
        
        • L'esecuzione di un contratto con te
        • Il nostro legittimo interesse commerciale
        • Il tuo consenso, quando richiesto
        • L'adempimento di obblighi legali
      `
    },
    {
      id: "condivisione-dati",
      title: "Condivisione dei Dati",
      content: `
        Possiamo condividere i tuoi dati personali con:
        
        • Collaboratori professionali che ci assistono nella fornitura dei servizi legali
        • Fornitori di servizi che ci supportano nelle nostre operazioni (come provider di hosting, servizi email, ecc.)
        • Autorità pubbliche, quando richiesto dalla legge
        
        Non vendiamo, affittiamo o cediamo i tuoi dati personali a terzi per finalità di marketing.
        
        I tuoi dati personali possono essere trasferiti e archiviati in paesi al di fuori dell'Unione Europea. 
        In tal caso, adottiamo misure appropriate per garantire che i tuoi dati siano protetti in conformità con le leggi applicabili.
      `
    }
  ];

  const additionalSections = [
    {
      title: "Cookie",
      content: `
        Il nostro sito utilizza cookie e tecnologie simili per migliorare la tua esperienza di navigazione. 
        Per maggiori informazioni sui cookie che utilizziamo e su come gestirli, consulta la nostra Cookie Policy.
      `
    },
    {
      title: "Diritti dell'Interessato",
      content: `
        Ai sensi del GDPR, hai il diritto di:
        
        • Accedere ai tuoi dati personali
        • Rettificare dati inesatti
        • Richiedere la cancellazione dei tuoi dati
        • Limitare o opporti al trattamento dei tuoi dati
        • Richiedere la portabilità dei tuoi dati
        • Revocare il consenso in qualsiasi momento
        
        Per esercitare questi diritti, contattaci all'indirizzo email: ebcontarini@fantozzieassociati.it
      `
    },
    {
      title: "Sicurezza dei Dati",
      content: `
        Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali 
        da perdita, uso improprio, accesso non autorizzato, divulgazione, alterazione o distruzione.
      `
    },
    {
      title: "Conservazione dei Dati",
      content: `
        Conserviamo i tuoi dati personali solo per il tempo necessario a raggiungere le finalità per cui sono stati raccolti, 
        o per adempiere a obblighi legali o regolamentari.
      `
    },
    {
      title: "Modifiche alla Privacy Policy",
      content: `
        Possiamo aggiornare periodicamente questa Informativa sulla Privacy. Ti invitiamo a consultare regolarmente 
        questa pagina per essere informato su eventuali modifiche.
      `
    },
    {
      title: "Contatti",
      content: `
        Per qualsiasi domanda o richiesta relativa a questa Informativa sulla Privacy o al trattamento dei tuoi dati personali, 
        puoi contattarci all'indirizzo email: ebcontarini@fantozzieassociati.it
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
              Informativa sulla <span className="gradient-text">Privacy</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              La tua privacy è importante per noi. Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
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

export default Privacy; 
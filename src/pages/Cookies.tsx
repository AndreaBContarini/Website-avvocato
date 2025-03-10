import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      id: "cosa-sono",
      title: "Cosa sono i Cookie",
      content: `
        I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo terminale (computer, tablet, smartphone, ecc.), 
        dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita da parte dello stesso utente.
        
        I cookie permettono ai siti web di ricordare le azioni e le preferenze dell'utente (come, ad esempio, i dati di login, la lingua preferita, 
        le dimensioni dei caratteri, altre impostazioni di visualizzazione, ecc.) in modo che non debbano essere indicate nuovamente quando l'utente 
        torni a visitare detto sito o navighi da una pagina all'altra di esso.
        
        I cookie, quindi, sono utilizzati per eseguire autenticazioni informatiche, monitoraggio di sessioni e memorizzazione di informazioni 
        riguardanti le attività degli utenti che accedono ad un sito.
      `
    },
    {
      id: "tipi-cookie",
      title: "Tipi di Cookie",
      content: `
        I cookie possono essere classificati in diverse categorie in base alla loro funzione, durata e provenienza:
        
        **In base alla funzione:**
        
        • Cookie tecnici: sono quelli utilizzati al solo fine di effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, 
        o nella misura strettamente necessaria al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'utente a erogare tale servizio.
        
        • Cookie di profilazione: sono volti a creare profili relativi all'utente e vengono utilizzati al fine di inviare messaggi pubblicitari in linea 
        con le preferenze manifestate dallo stesso nell'ambito della navigazione in rete.
        
        **In base alla durata:**
        
        • Cookie di sessione: sono cookie temporanei che vengono cancellati automaticamente quando l'utente chiude il browser.
        
        • Cookie persistenti: sono cookie che rimangono memorizzati sul dispositivo dell'utente fino alla loro scadenza o cancellazione da parte dell'utente.
        
        **In base alla provenienza:**
        
        • Cookie di prima parte: sono cookie impostati dal sito web visitato dall'utente.
        
        • Cookie di terze parti: sono cookie impostati da un dominio diverso da quello visitato dall'utente.
      `
    },
    {
      id: "cookie-utilizzati",
      title: "Cookie Utilizzati su Questo Sito",
      content: `
        Il nostro sito web utilizza i seguenti tipi di cookie:
        
        **Cookie tecnici essenziali:**
        
        • Nome: cookiesAccepted
        • Scopo: Memorizza le preferenze dell'utente relative all'accettazione dei cookie
        • Durata: 1 anno
        • Prima/Terza parte: Prima parte
        
        **Cookie analitici:**
        
        • Nome: _ga, _gat, _gid
        • Scopo: Utilizzati da Google Analytics per raccogliere informazioni statistiche anonime su come gli utenti utilizzano il sito
        • Durata: _ga (2 anni), _gat (1 minuto), _gid (24 ore)
        • Prima/Terza parte: Terza parte (Google)
        
        I cookie analitici sono stati anonimizzati e configurati per ridurre il loro potere di identificazione, pertanto, secondo la normativa vigente, 
        possono essere assimilati ai cookie tecnici e non richiedono il consenso esplicito dell'utente.
      `
    },
    {
      id: "gestione-cookie",
      title: "Gestione dei Cookie",
      content: `
        L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser.
        
        **Attenzione:** la disabilitazione totale o parziale dei cookie tecnici può compromettere l'utilizzo delle funzionalità del sito riservate agli utenti registrati. 
        Al contrario, la fruibilità dei contenuti pubblici è possibile anche disabilitando completamente i cookie.
        
        La disabilitazione dei cookie "terze parti" non pregiudica in alcun modo la navigabilità.
        
        L'impostazione può essere definita in modo specifico per i diversi siti e applicazioni web. Inoltre i migliori browser consentono di definire impostazioni diverse per i cookie "proprietari" e per quelli di "terze parti".
        
        Di seguito indichiamo come procedere alla gestione dei cookie tramite le impostazioni dei principali browser:
        
        • Chrome: https://support.google.com/chrome/answer/95647
        • Firefox: https://support.mozilla.org/it/kb/Gestione%20dei%20cookie
        • Internet Explorer: https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies
        • Safari: https://support.apple.com/it-it/guide/safari/sfri11471/mac
        • Edge: https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
      `
    }
  ];

  const additionalInfo = [
    {
      title: "Accettazione o Rifiuto dei Cookie",
      content: `
        Quando accedi per la prima volta al nostro sito, ti viene mostrato un banner che ti informa sull'utilizzo dei cookie e ti offre la possibilità di:
        
        • Accettare tutti i cookie
        • Accettare solo i cookie essenziali
        
        Puoi modificare le tue preferenze in qualsiasi momento cliccando sul link "Cookie Policy" presente nel footer del sito.
      `
    },
    {
      title: "Aggiornamenti della Cookie Policy",
      content: `
        La presente Cookie Policy può essere soggetta a modifiche nel tempo. Si consiglia di consultare periodicamente questa pagina per essere sempre aggiornati sulla policy adottata dal nostro sito in materia di cookie.
      `
    },
    {
      title: "Contatti",
      content: `
        Per qualsiasi domanda o richiesta relativa a questa Cookie Policy o all'utilizzo dei cookie sul nostro sito, puoi contattarci all'indirizzo email: ebcontarini@fantozzieassociati.it
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
              <span className="gradient-text">Cookie</span> Policy
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Informazioni sui cookie utilizzati su questo sito e su come gestirli.
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

      {/* Additional Info */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                {...fadeIn}
              >
                <h2 className="text-xl font-bold mb-3">{info.title}</h2>
                <div className="glass-panel p-5 rounded-xl">
                  {info.content.split('\n\n').map((paragraph, idx) => (
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

export default Cookies; 
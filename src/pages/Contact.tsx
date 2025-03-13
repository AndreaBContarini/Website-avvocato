import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Youtube, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary-light" />,
      title: "Telefono",
      value: "+39 347 542 8664",
      link: "tel:+393475428664"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-light" />,
      title: "Email",
      value: "ebcontarini@fantozzieassociati.it",
      link: "mailto:ebcontarini@fantozzieassociati.it"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-light" />,
      title: "Dove Trovarmi",
      value: "Via Sicilia 66, Roma, Italia",
      link: "https://maps.google.com/?q=Via+Sicilia+66+Roma+Italia"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-primary-light" />,
      title: "LinkedIn",
      value: "Edoardo Belli Contarini",
      link: "https://www.linkedin.com/in/ebcontarini/"
    },
    {
      icon: <Youtube className="w-6 h-6 text-primary-light" />,
      title: "YouTube",
      value: "Edoardo Belli Contarini",
      link: "https://www.youtube.com/@EdoardoBelliContarini"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Rimuovi l'errore quando l'utente inizia a digitare
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Qui in futuro collegherai il webhook per lo scenario make
      // Per ora simuliamo una richiesta di successo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setErrors({ form: 'Si è verificato un errore. Riprova più tardi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <span className="gradient-text">Contattami</span>
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Hai bisogno di assistenza legale o vuoi richiedere una consulenza? Compila il form sottostante o contattami direttamente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              {...fadeIn}
              className="md:col-span-1"
            >
              <div className="glass-panel p-6 rounded-xl h-full">
                <h2 className="text-2xl font-bold mb-6">I Miei Contatti</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      target={info.title === "Dove Trovarmi" || info.title === "LinkedIn" || info.title === "YouTube" ? "_blank" : undefined}
                      rel={info.title === "Dove Trovarmi" || info.title === "LinkedIn" || info.title === "YouTube" ? "noopener noreferrer" : undefined}
                      className="flex items-start hover:text-primary-light transition-colors duration-300"
                    >
                      <div className="p-2 glass-panel rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{info.title}</h3>
                        <p className="text-text-light/80">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-bold mb-2">La Mia Disponibilità</h3>
                  <p className="text-text-light/80">
                    Lunedì - Venerdì: 9:00 - 18:00<br />
                    Sabato - Domenica: Chiuso
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="glass-panel p-6 md:p-8 rounded-xl">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Inviami un Messaggio</h2>
                    
                    {errors.form && (
                      <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                        {errors.form}
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nome e Cognome *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Mario Rossi"
                          />
                          {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="mario.rossi@esempio.it"
                          />
                          {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Telefono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="+39 123 456 7890"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Oggetto
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input-field"
                          >
                            <option value="">Seleziona un oggetto</option>
                            <option value="Consulenza Fiscale">Consulenza Fiscale</option>
                            <option value="Contenzioso Tributario">Contenzioso Tributario</option>
                            <option value="Pianificazione Patrimoniale">Pianificazione Patrimoniale</option>
                            <option value="Altro">Altro</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Messaggio *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                          placeholder="Descrivi brevemente la tua richiesta..."
                        ></textarea>
                        {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`btn-primary flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                              Invio in corso...
                            </>
                          ) : (
                            <>
                              Invia Messaggio
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-light" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Messaggio Inviato!</h2>
                    <p className="text-text-light/80 mb-6">
                      Grazie per avermi contattato. Ti risponderò il prima possibile.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Invia un altro messaggio
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="glass-panel p-4 rounded-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5!2d12.4922!3d41.9075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a38a8c5b7f%3A0x1c3b8dde8c1d3fcd!2sVia%20Sicilia%2C%2066%2C%2000187%20Roma%20RM!5e0!3m2!1sit!2sit!4v1651234567890!5m2!1sit!2sit"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Legale Fantozzi e Associati"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
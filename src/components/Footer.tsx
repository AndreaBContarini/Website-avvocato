import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Sono', path: '/about' },
    { name: 'Servizi', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contatti', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Termini di Servizio', path: '/terms' },
  ];

  const services = [
    { name: 'Contenzioso Tributario', path: '/services#contenzioso' },
    { name: 'Patent Box', path: '/services#patent-box' },
    { name: 'Consulenza Fiscale', path: '/services#consulenza' },
    { name: 'Assistenza Legale', path: '/services#assistenza' },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/ebcontarini/' 
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-5 h-5" />, 
      url: 'https://www.youtube.com/@EdoardoBelliContarini' 
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-dark/80 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-light">Studio Fantozzi & Associati</h3>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-heading font-bold">
                <span className="text-text-light">Avv.</span> <span className="gradient-text">E.B. Contarini</span>
              </span>
            </div>
            <p className="text-text-light/80 mb-4">
              Esperienza e professionalità nel diritto tributario e contenzioso, al servizio di privati e aziende.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 glass-panel rounded-full hover:bg-primary-light/20 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-light">Link Rapidi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-text-light/80 hover:text-primary-light flex items-center"
                    onClick={scrollToTop}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-light">I Miei Servizi</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-text-light/80 hover:text-primary-light flex items-center"
                    onClick={scrollToTop}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-light">I Miei Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <a href="tel:+393475428664" className="text-text-light/80 hover:text-primary-light">
                  +39 347 542 8664
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <a href="mailto:ebcontarini@fantozzieassociati.it" className="text-text-light/80 hover:text-primary-light break-all">
                  ebcontarini@fantozzieassociati.it
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-text-light/80">
                  Via Sicilia 66, Roma, Italia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-light/60 text-center">
            &copy; {currentYear} Avv. Edoardo Belli Contarini - Studio Fantozzi & Associati. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link to="/privacy" className="text-text-light/70 hover:text-primary-light" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-light/70 hover:text-primary-light" onClick={scrollToTop}>
              Termini di Servizio
            </Link>
            <Link to="/cookies" className="text-text-light/70 hover:text-primary-light" onClick={scrollToTop}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
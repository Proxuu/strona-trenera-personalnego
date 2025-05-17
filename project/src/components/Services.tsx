import React, { useRef } from 'react';
import { Users, Monitor, Utensils } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const services = [
    {
      icon: <Users size={32} className="mb-4 text-emerald-600" />,
      title: "Trening Personalny",
      description: "Indywidualne sesje treningowe dostosowane do Twoich potrzeb i celów. Poprowadzę Cię przez prawidłową technikę, formę i zapewnię motywację potrzebną do sukcesu.",
      features: ["Spersonalizowane plany treningowe", "Korekta techniki", "Śledzenie postępów", "Elastyczny harmonogram"]
    },
    {
      icon: <Monitor size={32} className="mb-4 text-emerald-600" />,
      title: "Coaching Online",
      description: "Profesjonalny coaching z dowolnego miejsca na świecie. Programy online obejmują sesje wideo, spersonalizowane treningi i regularne konsultacje, aby utrzymać Twoją motywację.",
      features: ["Konsultacje wideo", "Dostęp do aplikacji mobilnej", "Cotygodniowe sprawdzanie postępów", "Wsparcie 24/7 przez WhatsApp"]
    },
    {
      icon: <Utensils size={32} className="mb-4 text-emerald-600" />,
      title: "Planowanie Żywienia",
      description: "Kompleksowe plany żywieniowe zaprojektowane tak, aby uzupełniać Twój program treningowy i styl życia. Naucz się, jak właściwie odżywiać swoje ciało dla optymalnych wyników.",
      features: ["Planowanie posiłków", "Edukacja żywieniowa", "Porady dietetyczne", "Zalecenia suplementacyjne"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Oferowane Usługi
          </h2>
          <div className={`w-20 h-1 bg-emerald-500 mx-auto mb-6 transition-transform duration-700 delay-100 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-gray-600 transition-opacity duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Wybierz idealny plan dopasowany do Twoich celów fitness i budżetu. Wszystkie plany zawierają 
            indywidualne podejście i wsparcie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center transition-colors"
                >
                  Dowiedz się więcej
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
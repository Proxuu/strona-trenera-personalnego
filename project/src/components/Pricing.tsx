import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const plans = [
    {
      name: "Plan Podstawowy",
      price: 199,
      period: "za sesję",
      features: [
        "Trening personalny one-on-one",
        "Ocena sprawności fizycznej",
        "Podstawowy plan treningowy",
        "Wsparcie przez email",
      ],
      recommended: false,
      buttonText: "Rozpocznij"
    },
    {
      name: "Plan Premium",
      price: 799,
      period: "miesięcznie",
      features: [
        "8 sesji treningowych miesięcznie",
        "Kompleksowa ocena sprawności",
        "Spersonalizowany plan treningowy",
        "Podstawowe wskazówki żywieniowe",
        "Wsparcie 24/7 przez WhatsApp",
        "Dostęp do aplikacji monitorującej postępy"
      ],
      recommended: true,
      buttonText: "Najlepsza Wartość"
    },
    {
      name: "Plan Elite",
      price: 1399,
      period: "miesięcznie",
      features: [
        "12 sesji treningowych miesięcznie",
        "Zaawansowana ocena sprawności",
        "Spersonalizowany program treningowy",
        "Szczegółowy plan żywieniowy",
        "Rekomendacje suplementacji",
        "Priorytetowe planowanie",
        "Wsparcie 24/7 przez WhatsApp",
        "Dostęp do aplikacji monitorującej postępy"
      ],
      recommended: false,
      buttonText: "Rozpocznij"
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Pakiety Treningowe
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-lg ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200' 
                  : 'bg-white border border-gray-200'
              } shadow-lg transition-all duration-700 delay-${index * 150} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price} zł</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.recommended 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:text-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-opacity duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-600">
            Nie wiesz, który plan wybrać?{' '}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              Skontaktuj się
            </button>{' '}
            aby umówić się na bezpłatną konsultację.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
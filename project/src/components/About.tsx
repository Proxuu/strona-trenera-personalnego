import React, { useRef } from 'react';
import { Medal, Clock, Award, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const credentials = [
    { 
      icon: <Medal size={24} />, 
      title: "Certyfikowany Trener", 
      description: "Certyfikowany Trener NASM ze specjalizacją w dietetyce sportowej."
    },
    { 
      icon: <Clock size={24} />, 
      title: "10+ Lat Doświadczenia", 
      description: "Pomogłem setkom klientów osiągnąć ich cele fitness."
    },
    { 
      icon: <Award size={24} />, 
      title: "Nagradzany", 
      description: "Uznany za jednego z najlepszych trenerów w regionie."
    },
    { 
      icon: <Heart size={24} />, 
      title: "Skupiony na Kliencie", 
      description: "Spersonalizowane plany dostosowane do indywidualnych potrzeb i celów."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            O Mnie
          </h2>
          <div className={`w-20 h-1 bg-emerald-500 mx-auto mb-6 transition-transform duration-700 delay-100 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`lg:w-1/2 relative transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/6456140/pexels-photo-6456140.jpeg"
                alt="Profesjonalny trener personalny"
                className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[600px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-500 rounded-lg z-0"></div>
          </div>

          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pomogę Ci Osiągnąć Twój <span className="text-emerald-600">Pełny Potencjał</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Z ponad dekadą doświadczenia w treningu personalnym i doradztwie żywieniowym, 
              poświęciłem swoją karierę pomaganiu ludziom w transformacji ich życia poprzez fitness. 
              Moje podejście łączy metody treningowe oparte na nauce z indywidualnym podejściem, 
              aby zapewnić trwałe rezultaty.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Wierzę, że fitness powinien być dostępny dla każdego, niezależnie od punktu startowego. 
              Niezależnie od tego, czy jesteś początkującym, czy chcesz podnieść swoją formę na wyższy poziom, 
              stworzę dla Ciebie spersonalizowany plan, który pasuje do Twojego stylu życia i pomoże 
              Ci osiągnąć Twoje cele.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="text-emerald-600 mr-3">{credential.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{credential.title}</h4>
                    <p className="text-sm text-gray-600">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
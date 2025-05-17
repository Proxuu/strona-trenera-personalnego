import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    const heroElement = document.querySelector('.hero-fade-in');
    if (heroElement) {
      heroElement.classList.add('opacity-100');
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg" 
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 hero-fade-in opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 text-sm font-semibold bg-emerald-500 text-white rounded-full mb-6">
            Trener Personalny
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Zmień Swoje Ciało, <br />
            <span className="text-emerald-400">Zmień Swoje Życie</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Spersonalizowany coaching fitness stworzony, aby pomóc Ci osiągnąć Twoje cele, 
            czy to utrata wagi, budowa mięśni, czy poprawa ogólnego stanu zdrowia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium 
                         transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Umów Konsultację <ArrowRight size={18} className="ml-2" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white rounded-lg font-medium 
                         transition-all duration-300 flex items-center justify-center"
            >
              Zobacz Ofertę
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
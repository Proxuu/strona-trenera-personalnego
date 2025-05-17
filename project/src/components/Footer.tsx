import React from 'react';
import { Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="font-bold text-xl">FitCoach</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformujemy życie poprzez profesjonalny coaching fitness i spersonalizowane programy treningowe.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com`}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                  aria-label={`Odwiedź nasz profil na ${platform}`}
                >
                  <span className="capitalize">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Strona główna' },
                { id: 'about', label: 'O mnie' },
                { id: 'services', label: 'Usługi' },
                { id: 'testimonials', label: 'Opinie' },
                { id: 'pricing', label: 'Cennik' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Trening Personalny</li>
              <li>Coaching Online</li>
              <li>Planowanie Żywienia</li>
              <li>Zajęcia Grupowe</li>
              <li>Ocena Sprawności</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>ul. Fitness 123, Warszawa</p>
              <p>Tel: +48 123 456 789</p>
              <p>Email: trener@fitcoach.pl</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} FitCoach. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
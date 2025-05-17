import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Check } from './Check';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        submitting: false 
      }));
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      text: "+48 123 456 789",
      link: "tel:+48123456789"
    },
    {
      icon: <Mail size={20} />,
      text: "trener@fitcoach.pl",
      link: "mailto:trener@fitcoach.pl"
    },
    {
      icon: <MapPin size={20} />,
      text: "ul. Fitness 123, Warszawa",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Skontaktuj się
          </h2>
          <div className={`w-20 h-1 bg-emerald-500 mx-auto mb-6 transition-transform duration-700 delay-100 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-gray-600 transition-opacity duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Gotowy rozpocząć swoją przygodę fitness? Skontaktuj się, aby umówić się na bezpłatną konsultację i omówić, jak możemy pomóc Ci osiągnąć Twoje cele.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informacje Kontaktowe</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Godziny Otwarcia</h3>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-600">Poniedziałek - Piątek</span>
                <span className="font-medium">6:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sobota</span>
                <span className="font-medium">8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Niedziela</span>
                <span className="font-medium">8:00 - 14:00</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media</h3>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com`}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors"
                  aria-label={`Odwiedź nasz profil na ${platform}`}
                >
                  <span className="capitalize text-sm">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wyślij Wiadomość</h3>
              
              {formState.submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Dziękujemy!</h4>
                  <p className="text-gray-600">Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
                  <button
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false, name: '', email: '', phone: '', message: '' }))}
                    className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Wyślij Kolejną Wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Imię i Nazwisko
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Adres Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Numer Telefonu (opcjonalnie)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                      placeholder="Opowiedz o swoich celach fitness..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                      formState.submitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-700 transform hover:-translate-y-1'
                    } text-white`}
                  >
                    {formState.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Wyślij Wiadomość
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
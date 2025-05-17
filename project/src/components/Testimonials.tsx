import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anna Kowalska",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      role: "Klientka - Redukcja Wagi",
      quote: "Praca z tym trenerem całkowicie zmieniła moje podejście do fitnessu. Schudłam 15 kg w 6 miesięcy i zyskałam pewność siebie, o której nigdy nie marzyłam. Spersonalizowany plan zrobił ogromną różnicę.",
      stars: 5
    },
    {
      name: "Piotr Nowak",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      role: "Klient - Budowa Masy",
      quote: "Po latach niekonsekwentnych rezultatów na siłowni, ten program pomógł mi zbudować 7 kg mięśni i znacznie zwiększyć siłę. Coaching jest najwyższej klasy, a rezultaty mówią same za siebie.",
      stars: 5
    },
    {
      name: "Marta Wiśniewska",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      role: "Klientka - Coaching Online",
      quote: "Mimo że trenujemy wirtualnie, czuję jakbym miała osobistego trenera tuż obok. Coaching online jest szczegółowy, motywujący i pomógł mi zachować regularność pomimo napiętego grafiku.",
      stars: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-emerald-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-transform duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Historie Sukcesu Klientów
          </h2>
          <div className={`w-20 h-1 bg-emerald-400 mx-auto mb-6 transition-transform duration-700 delay-100 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-emerald-100 transition-opacity duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Poznaj osoby, które zmieniły swoje życie dzięki naszym programom treningowym.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-emerald-700 hover:bg-emerald-600 rounded-full p-2 transition-colors"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-emerald-700 hover:bg-emerald-600 rounded-full p-2 transition-colors"
            aria-label="Następna opinia"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-emerald-300' : 'bg-emerald-600'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
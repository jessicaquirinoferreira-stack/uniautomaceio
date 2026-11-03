import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/uniautoData';

export const DepoimentosSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-black uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
            Prova Social & Avaliações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Quem Conhece a Uniauto{' '}
            <span className="uniauto-text">Recomenda</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Histórias reais de quem precisou da Uniauto em momentos difíceis e foi acolhido com respeito e agilidade.
          </p>
        </div>

        {/* Featured Testimonials Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-blue-900/5">
            {/* Top Stars & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-black text-slate-800">5.0 / 5.0</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-[#00A859] border border-emerald-200 w-fit">
                {current.badge}
              </span>
            </div>

            {/* Comment Quote */}
            <p className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed mb-8">
              “{current.comment}”
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#003DA5]"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">{current.name}</h4>
                  <p className="text-xs text-[#003DA5] font-bold">
                    {current.role} • {current.location}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{current.vehicle}</p>
                </div>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition cursor-pointer border border-slate-200"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-[#003DA5] hover:bg-[#002f80] text-white transition cursor-pointer shadow-md shadow-blue-900/20"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-8 bg-[#003DA5]' : 'bg-slate-200'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

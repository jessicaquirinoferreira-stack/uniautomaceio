import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMO_FUNCIONA_STEPS, UNIAUTO_INFO } from '../data/uniautoData';

export const ComoFuncionaSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Quero dar o primeiro passo e fazer a cotação do meu veículo na Uniauto Maceió.'
  )}`;

  return (
    <section id="como-funciona" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Passo a Passo Simples
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Como Funciona Para Proteger{' '}
            <span className="uniauto-text">Seu Veículo</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Em apenas 4 etapas descomplicadas você sai da vulnerabilidade e garante tranquilidade para você e sua família.
          </p>
        </div>

        {/* 4 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {COMO_FUNCIONA_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#003DA5]/40 transition-all duration-300 hover:-translate-y-2 group shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Big Number & Time Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#003DA5] to-[#00A859]">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-white text-[#003DA5] border border-slate-200">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#003DA5] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-[#00A859]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Etapa {idx + 1} de 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/25 transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>INICIAR ETAPA 1: FAZER MINHA COTAÇÃO</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

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

        {/* Official Associate Event Guidance (Card 09) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#003DA5] to-[#00A859] p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider">
                Procedimento Oficial do Associado
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-3">
                Caro Associado, em Caso de Evento:
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mt-2 leading-relaxed">
                A Uniauto Brasil garante agilidade e suporte no momento em que você mais precisa. Siga os dois passos obrigatórios:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-xl bg-white text-[#003DA5] font-black flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base">
                      Entre em contato imediatamente com a Assistência 24h
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                      Ligue gratuitamente para <strong className="text-white text-base">0800 940 0587</strong> (+55 800 940 0587) para envio imediato de guincho, socorro ou apoio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-xl bg-emerald-300 text-slate-900 font-black flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base">
                      Realize a abertura no local do evento enviando fotos e vídeos
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                      Acesse diretamente pelo celular o portal: <strong className="text-white underline">uniautobrasil.org.br/acionamento</strong> para documentar a vistoria inicial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={UNIAUTO_INFO.central0800Tel}
                  className="py-3 px-5 rounded-xl bg-white text-[#003DA5] hover:bg-slate-100 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition hover:scale-105 active:scale-95"
                >
                  <span>Ligar 0800 940 0587</span>
                </a>

                <a
                  href={UNIAUTO_INFO.acionamentoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-slate-900/50 hover:bg-slate-900/70 border border-white/30 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition"
                >
                  <span>Acessar uniautobrasil.org.br/acionamento</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-60 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-slate-900">
                <img
                  src="/assets/uniauto_cards/card_09.jpg"
                  alt="Instruções de Acionamento Uniauto Brasil"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
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

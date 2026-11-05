import React from 'react';
import { Check, ArrowRight, Sparkles, Bike, Car, Truck, ShieldCheck, Zap } from 'lucide-react';
import { PLANOS_DATA, UNIAUTO_INFO } from '../data/uniautoData';

export const PlanosSection: React.FC = () => {
  const getPlanIcon = (id: string) => {
    switch (id) {
      case 'moto':
        return <Bike className="w-6 h-6 text-[#00A859]" />;
      case 'carro':
        return <Car className="w-6 h-6 text-[#003DA5]" />;
      default:
        return <Truck className="w-6 h-6 text-slate-700" />;
    }
  };

  const getWhatsAppPlanUrl = (planoTitle: string, price: string) => {
    const text = `Olá! Vi no site da Uniauto Brasil o *${planoTitle}* (a partir de R$ ${price}/mês) e gostaria de fechar minha cotação com este plano.`;
    return `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Tabela de Planos Oficiais • Sem Pegadinhas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Planos Sob Medida: Moto a partir de{' '}
            <span className="text-[#00A859]">R$ 50,00</span> e Carro a partir de{' '}
            <span className="text-[#003DA5]">R$ 100,00</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Proteção veicular completa com 100% da FIPE, guincho ilimitado e sem acréscimo abusivo para quem trabalha em aplicativos ou possui veículo elétrico.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANOS_DATA.map((plano) => {
            const isPopular = plano.popular;

            return (
              <div
                key={plano.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  isPopular
                    ? 'bg-gradient-to-b from-blue-50/70 via-white to-emerald-50/40 border-2 border-[#003DA5] shadow-2xl shadow-blue-900/15'
                    : 'bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#003DA5] to-[#00A859] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {plano.badge}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {getPlanIcon(plano.id)}
                    </div>
                    {!isPopular && plano.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-200/80 text-slate-700">
                        {plano.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                    {plano.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-6">
                    {plano.subtitle}
                  </p>

                  {/* Price Tag */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6 shadow-2xs">
                    <span className="text-xs text-slate-500 font-bold block mb-1">Mensalidade a partir de:</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-extrabold text-[#00A859]">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        {plano.priceStartingAt}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">{plano.pricePeriod}</span>
                    </div>
                    <span className="text-[11px] text-[#003DA5] font-black mt-1 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00A859]" /> 100% da Tabela FIPE
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      O que está incluso:
                    </span>
                    {plano.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 font-black">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={feat.includes('Especial') || feat.includes('Elétricas') || feat.includes('10%') ? 'font-bold text-slate-900' : ''}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={getWhatsAppPlanUrl(plano.title, plano.priceStartingAt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition duration-200 cursor-pointer shadow-md ${
                      isPopular
                        ? 'bg-[#00A859] hover:bg-[#008f4c] text-white shadow-emerald-600/30 hover:scale-[1.02]'
                        : 'bg-[#003DA5] hover:bg-[#002f80] text-white shadow-blue-900/20 hover:scale-[1.02]'
                    }`}
                  >
                    <span>CONTRATAR ESTE PLANO</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-center text-[10px] text-slate-500 mt-2 font-medium">
                    Sem fidelidade abusiva • Vistoria 100% digital
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#003DA5] flex items-center justify-center shrink-0 font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Tem dúvidas sobre o valor exato do seu modelo?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Nossos consultores calculam a cotação oficial em menos de 2 minutos pelo WhatsApp.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de uma cotação personalizada para meu veículo na Uniauto Brasil.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs whitespace-nowrap transition"
          >
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

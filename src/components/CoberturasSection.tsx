import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  CarFront,
  Flame,
  CloudRain,
  Users,
  CarTaxiFront,
  Sparkles,
  ArrowRight,
  X,
  Zap,
} from 'lucide-react';
import { COBERTURAS, Cobertura, UNIAUTO_INFO } from '../data/uniautoData';

export const CoberturasSection: React.FC = () => {
  const [selectedCoverage, setSelectedCoverage] = useState<Cobertura | null>(null);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 transition-transform duration-200 group-hover:scale-110" };
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="w-6 h-6 text-[#00A859]" />;
      case 'Zap':
        return <Zap {...props} className="w-6 h-6 text-emerald-500" />;
      case 'Lock':
        return <Lock {...props} className="w-6 h-6 text-[#003DA5]" />;
      case 'CarFront':
        return <CarFront {...props} className="w-6 h-6 text-[#003DA5]" />;
      case 'Flame':
        return <Flame {...props} className="w-6 h-6 text-amber-500" />;
      case 'CloudRain':
        return <CloudRain {...props} className="w-6 h-6 text-sky-500" />;
      case 'Users':
        return <Users {...props} className="w-6 h-6 text-indigo-600" />;
      case 'CarTaxiFront':
        return <CarTaxiFront {...props} className="w-6 h-6 text-[#00A859]" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-purple-600" />;
      default:
        return <ShieldCheck {...props} className="w-6 h-6 text-[#003DA5]" />;
    }
  };

  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de uma cotação com todas as coberturas completas da Uniauto Maceió.'
  )}`;

  return (
    <section id="coberturas" className="py-24 relative bg-white overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#00A859]" />
            Proteção Patrimonial Completa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Coberturas Que Garantem Sua{' '}
            <span className="uniauto-text">Tranquilidade</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Aqui o seu veículo fica 100% blindado contra os imprevistos do dia a dia, com indenização justa e suporte imediato.
          </p>
        </div>

        {/* Coberturas Grid - 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COBERTURAS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCoverage(item)}
              className="group relative rounded-3xl p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#003DA5]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header row with Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:border-blue-300 transition duration-300">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-[#003DA5] border border-blue-200">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#003DA5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom trigger */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#003DA5] transition-colors">
                <span>Ver detalhes</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#00A859]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-slate-900">
              Deseja incluir proteção personalizada para seu veículo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Personalize o teto de terceiros, carro reserva prolongado ou proteção extra de vidros em 1 minuto.
            </p>
          </div>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm whitespace-nowrap shadow-md shadow-emerald-600/20 transition hover:scale-105 active:scale-95"
          >
            Fazer Cotação Personalizada
          </a>
        </div>
      </div>

      {/* Detail Modal if clicked */}
      {selectedCoverage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedCoverage(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                {renderIcon(selectedCoverage.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#00A859]">
                  {selectedCoverage.tag}
                </span>
                <h3 className="text-xl font-black text-slate-900">{selectedCoverage.title}</h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed font-medium">
              {selectedCoverage.detail}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCoverage(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition cursor-pointer"
              >
                Fechar
              </button>
              <a
                href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Gostaria de tirar uma dúvida sobre a cobertura de ${selectedCoverage.title} na Uniauto Maceió.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#003DA5] hover:bg-[#002f80] text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-blue-900/20"
              >
                <span>Cotar esta Cobertura</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

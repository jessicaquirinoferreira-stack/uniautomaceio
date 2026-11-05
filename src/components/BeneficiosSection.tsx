import React from 'react';
import {
  Truck,
  Key,
  Wrench,
  Navigation,
  Disc,
  Fuel,
  Hotel,
  Car,
  HeartPulse,
  Crosshair,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  Lightbulb,
} from 'lucide-react';
import { BENEFICIOS, UNIAUTO_INFO } from '../data/uniautoData';

export const BeneficiosSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 transition-transform duration-200 group-hover:scale-110" };
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb {...props} className="w-6 h-6 text-amber-500" />;
      case 'Truck':
        return <Truck {...props} className="w-6 h-6 text-[#00A859]" />;
      case 'Key':
        return <Key {...props} className="w-6 h-6 text-[#003DA5]" />;
      case 'Wrench':
        return <Wrench {...props} className="w-6 h-6 text-[#003DA5]" />;
      case 'Navigation':
        return <Navigation {...props} className="w-6 h-6 text-[#00A859]" />;
      case 'Disc':
        return <Disc {...props} className="w-6 h-6 text-rose-500" />;
      case 'Fuel':
        return <Fuel {...props} className="w-6 h-6 text-amber-500" />;
      case 'Hotel':
        return <Hotel {...props} className="w-6 h-6 text-purple-600" />;
      case 'Car':
        return <Car {...props} className="w-6 h-6 text-[#00A859]" />;
      case 'HeartPulse':
        return <HeartPulse {...props} className="w-6 h-6 text-rose-500" />;
      case 'Crosshair':
        return <Crosshair {...props} className="w-6 h-6 text-[#003DA5]" />;
      default:
        return <Sparkles {...props} className="w-6 h-6 text-[#003DA5]" />;
    }
  };

  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Quero conhecer mais sobre os benefícios e assistência 24h da Uniauto Maceió.'
  )}`;

  return (
    <section id="beneficios" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-black uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4 text-[#00A859]" />
            Assistência 24 Horas & Clube de Vantagens
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Benefícios Que Vão Muito Além da{' '}
            <span className="uniauto-text">Proteção Básica</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Em Maceió ou em qualquer rodovia do Brasil, você conta com socorro rápido, hotel para sua família, carro reserva e até telemedicina.
          </p>
        </div>

        {/* 10 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFICIOS.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#00A859]/50 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wide uppercase bg-emerald-50 text-[#00A859] border border-emerald-200">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-[#003DA5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859]" />
                <span>Disponível para associados ativos</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Box in Logo Blue */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-[#003DA5] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <PhoneCall className="w-7 h-7 text-emerald-300 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                Central de Emergência e Assistência 24h
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Precisa de socorro agora? Ligue para {UNIAUTO_INFO.whatsappEmergency}
              </h4>
              <p className="text-xs text-blue-100 font-medium">
                Plantão 24 horas, 7 dias por semana em todo o Brasil.
              </p>
            </div>
          </div>

          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm whitespace-nowrap shadow-lg shadow-emerald-900/30 transition hover:scale-105 active:scale-95"
          >
            Quero Me Associar Hoje
          </a>
        </div>
      </div>
    </section>
  );
};

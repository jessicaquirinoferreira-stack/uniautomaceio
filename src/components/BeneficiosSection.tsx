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
import { BorderBeam } from './ui/BorderBeam';
import { CardSpotlight } from './ui/CardSpotlight';

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

        {/* 10 Benefits Cards Grid with CardSpotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFICIOS.map((item) => (
            <CardSpotlight
              key={item.id}
              spotlightColor="rgba(0, 168, 89, 0.12)"
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
            </CardSpotlight>
          ))}
        </div>

        {/* Spotlight Card 04: Rastreamento 24h */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-[#003DA5] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex-1">
            <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              Tecnologia & Segurança
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2">
              Com rastreamento 24h, o cuidado vai junto com você
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
              Monitore a localização exata do seu carro ou moto em tempo real diretamente na tela do seu celular. Alertas de cerca virtual, ignição e bloqueio emergencial com suporte da nossa central 24h.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-lg bg-white/10">App no Celular</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10">Localização em Tempo Real</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10">Bloqueio Remoto</span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-400/20 text-emerald-300">Central Própria 24h</span>
            </div>
          </div>

          <div className="w-48 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 shrink-0 bg-slate-900">
            <img
              src="/assets/uniauto_cards/card_04.jpg"
              alt="Rastreamento 24 Horas Uniauto Brasil"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Emergency Call Box in Logo Blue with BorderBeam */}
        <div className="mt-8 rounded-3xl p-6 sm:p-8 bg-[#003DA5] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/20 relative overflow-hidden">
          <BorderBeam colorFrom="#00A859" colorTo="#38BDF8" size={280} duration={7} />
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
              <PhoneCall className="w-8 h-8 text-emerald-300 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-300 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Central de Emergência e Assistência 24h
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                Precisa de socorro agora? Ligue gratuitamente:{' '}
                <a
                  href={UNIAUTO_INFO.central0800Tel}
                  className="block sm:inline text-emerald-300 hover:text-emerald-200 hover:underline transition font-black tracking-tight"
                >
                  {UNIAUTO_INFO.central0800}
                </a>
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
                Ligação gratuita de qualquer telefone fixo ou celular • Plantão 24 horas em todo o Brasil.
              </p>
              <div className="mt-2 text-xs text-blue-200">
                Atendimento também via WhatsApp Comercial: {' '}
                <a
                  href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Preciso de atendimento da Uniauto.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-emerald-300 underline"
                >
                  {UNIAUTO_INFO.whatsappFormatted}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
            <a
              href={UNIAUTO_INFO.central0800Tel}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-[#003DA5] font-black text-sm flex items-center justify-center gap-2 shadow-lg transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#003DA5]" />
              <span>Ligar {UNIAUTO_INFO.central0800}</span>
            </a>

            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm text-center shadow-lg shadow-emerald-900/30 transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              Quero Me Associar Hoje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

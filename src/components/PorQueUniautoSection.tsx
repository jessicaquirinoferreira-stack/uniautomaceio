import React from 'react';
import { Award, ShieldCheck, Zap, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';
import { NumberTicker } from './ui/NumberTicker';
import { CardSpotlight } from './ui/CardSpotlight';

export const PorQueUniautoSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  const stats = [
    { target: 15000, prefix: '+', suffix: '', label: 'Veículos Protegidos', desc: 'Em Maceió e em todo o Brasil' },
    { target: 99, prefix: '', suffix: ',4%', label: 'Índice de Satisfação', desc: 'Entre nossos associados ativos' },
    { target: 35, prefix: '', suffix: ' min', label: 'Tempo Médio Guincho', desc: 'Atendimento veloz da central 24h' },
    { target: 150, prefix: 'R$ ', suffix: ' mil', label: 'Proteção a Terceiros', desc: 'Tranquilidade garantida em colisões' },
  ];

  const pilares = [
    {
      icon: ShieldCheck,
      title: "Filiada à AAAPV & FAN",
      desc: "Associação amparada pela AAAPV (Agência de Autorregulamentação) e pela FAN (Força Associativa Nacional), com CNPJ regular 46.722.227/0001-41 e plena conformidade legal.",
      color: "from-[#003DA5] to-blue-700",
    },
    {
      icon: Zap,
      title: "Zero Burocracia na Hora H",
      desc: "Sem análise discriminatória de perfil por idade, sem consulta ao SPC/Serasa e com vistoria 100% digital diretamente pelo celular.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado 24h",
      desc: "Central própria de monitoramento com atendimento humano contínuo pelo 0800 940 0587 ou WhatsApp (82) 99644-5705.",
      color: "from-[#00A859] to-emerald-600",
    },
    {
      icon: Award,
      title: "Rede de Oficinas Referenciadas",
      desc: "Reparos realizados com peças de procedência e técnicos qualificados para entregar seu carro ou moto exatamente como novo.",
      color: "from-sky-600 to-cyan-600",
    },
  ];

  return (
    <section id="por-que-uniauto" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-500" />
            Por que escolher a Uniauto?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Não Conte com a Sorte,{' '}
            <span className="uniauto-text">Conte com a Uniauto</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Mais de 15 mil associados confiam na Uniauto Maceió para rodar protegidos todos os dias com tranquilidade, economia e respeito.
          </p>
        </div>

        {/* Impact Numbers with NumberTicker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-[#003DA5]/40 transition duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#003DA5] to-[#00A859]">
                <NumberTicker
                  value={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="text-sm font-black text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Pillars Grid with CardSpotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <CardSpotlight
                key={idx}
                spotlightColor="rgba(0, 61, 165, 0.12)"
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#003DA5]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xs hover:shadow-xl"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pilar.color} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#003DA5] transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {pilar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#00A859] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Diferencial Exclusivo</span>
                </div>
              </CardSpotlight>
            );
          })}
        </div>

        {/* Institutional Spotlight: Card 08 (Collage Nacional) & Card 06 (Monitoramento Real) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
            <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
              <img
                src="/assets/uniauto_cards/card_08.jpg"
                alt="Uniauto Brasil Estrutura Nacional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#003DA5] text-white px-3 py-1 rounded-full text-xs font-black shadow-md">
                Presença Nacional
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-black text-slate-900">Uniauto Brasil • Força Associativa Nacional</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Mais de uma década de história, sede própria, rede credenciada e presença ativa em convenções e feiras do setor de proteção veicular em todo o país.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#003DA5]">
                <span>0800 940 0587</span>
                <a
                  href="https://uniautobrasil.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 font-black"
                >
                  uniautobrasil.org.br &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
            <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
              <img
                src="/assets/uniauto_cards/card_06.jpg"
                alt="Central de Monitoramento e Despacho Uniauto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#00A859] text-white px-3 py-1 rounded-full text-xs font-black shadow-md">
                Monitoramento 24h Real
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-black text-slate-900">Central Própria de Operações & Socorro</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Nossos operadores em tempo real acionam guincho rápido, chaveiro, socorro elétrico ou hospedagem imediatamente ao seu chamado, 24 horas por dia, 365 dias por ano.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#00A859]">
                <span>Plantão Contínuo</span>
                <a
                  href={UNIAUTO_INFO.central0800Tel}
                  className="hover:underline flex items-center gap-1 font-black text-[#003DA5]"
                >
                  Ligar 0800 940 0587 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900">
              Pronto para proteger o seu patrimônio com a Uniauto?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
              Faça sua cotação online em menos de 2 minutos pelo WhatsApp.
            </p>
          </div>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm flex items-center gap-2 whitespace-nowrap shadow-md shadow-emerald-600/20 transition hover:scale-105 active:scale-95"
          >
            <span>QUERO COTAR AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

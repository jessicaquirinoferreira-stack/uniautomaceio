import React from 'react';
import { Award, ShieldCheck, Zap, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const PorQueUniautoSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  const stats = [
    { value: "+15.000", label: "Veículos Protegidos", desc: "Em Maceió e em todo o Brasil" },
    { value: "99,4%", label: "Índice de Satisfação", desc: "Entre nossos associados ativos" },
    { value: "35 min", label: "Tempo Médio Guincho", desc: "Atendimento veloz da central 24h" },
    { value: "R$ 150 mil", label: "Proteção a Terceiros", desc: "Tranquilidade garantida em colisões" },
  ];

  const pilares = [
    {
      icon: ShieldCheck,
      title: "Filiada à FAN & Solidez Jurídica",
      desc: "Associação filiada à FAN (Federação / Associação Nacional de Proteção Veicular), constituída sob o CNPJ 46.722.227/0001-41 e amparada pelo Art. 5º da Constituição Federal.",
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
      desc: "Quando acontece uma colisão ou pane mecânica, nossa equipe atende você de forma ágil, prestativa e sem esperas intermináveis.",
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

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-[#003DA5]/40 transition duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#003DA5] to-[#00A859]">
                {stat.value}
              </div>
              <div className="text-sm font-black text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <div
                key={idx}
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
              </div>
            );
          })}
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

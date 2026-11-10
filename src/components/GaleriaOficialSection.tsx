import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  PhoneCall,
  Eye,
  X,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { UNIAUTO_OFFICIAL_CARDS, UNIAUTO_INFO, UniautoCard } from '../data/uniautoData';
import { TiltCard } from './ui/TiltCard';

export const GaleriaOficialSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedCard, setSelectedCard] = useState<UniautoCard | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Destaques' },
    { id: 'institucional', label: 'Institucional & Paz' },
    { id: 'eletricos', label: 'Elétricos & Híbridos' },
    { id: 'motos', label: 'Motos & Motoboys' },
    { id: 'rastreamento', label: 'Rastreamento 24h' },
    { id: 'central', label: 'Central de Monitoramento' },
    { id: 'acionamento', label: 'Acionamento de Sinistro' },
  ];

  const filteredCards =
    activeCategory === 'todos'
      ? UNIAUTO_OFFICIAL_CARDS
      : UNIAUTO_OFFICIAL_CARDS.filter((c) => c.category === activeCategory);

  return (
    <section id="galeria-oficial" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/50 via-emerald-100/40 to-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs sm:text-sm font-extrabold mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#003DA5]" />
            <span>CAMPANHAS OFICIAIS & MATERIAIS DE COMUNICAÇÃO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Conheça Nossos Serviços e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003DA5] via-[#0066FF] to-[#00A859]">
              Diferenciais em Destaque
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Confira as campanhas oficiais da Uniauto Brasil e Maceió: veículos elétricos, motos, rastreamento 24h com app no celular, nossa central própria de monitoramento e o portal oficial de acionamento de eventos.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#003DA5] text-white shadow-md shadow-blue-900/20 scale-105'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCards.map((card) => (
            <TiltCard key={card.id} maxTilt={5} className="h-full">
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image banner with overlay */}
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setSelectedCard(card)}>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Zoom button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/30">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-black text-xs flex items-center gap-1.5 shadow-xl hover:bg-white">
                      <Eye className="w-4 h-4 text-[#003DA5]" />
                      <span>Ver Imagem Ampliada</span>
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5 pointer-events-none">
                    {card.badges.slice(0, 2).map((b, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black shadow-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#003DA5] transition">
                      {card.title}
                    </h3>
                    <p className="text-xs font-bold text-[#00A859] mt-1">{card.subtitle}</p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Action button */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {card.isExternal ? (
                      <a
                        href={card.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 text-[#003DA5] font-extrabold text-xs flex items-center justify-center gap-2 transition"
                      >
                        <span>{card.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={card.ctaLink}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#003DA5] hover:bg-[#002f80] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition hover:scale-[1.02]"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Fast Action Banner: Acionamento & 0800 */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#003DA5] to-[#00A859] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <PhoneCall className="w-7 h-7 text-emerald-300 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black uppercase text-emerald-300 tracking-wider">
                Em caso de evento ou emergência:
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Ligue imediatamente: {UNIAUTO_INFO.central0800} ou acione online
              </h4>
              <p className="text-xs text-blue-100 mt-0.5">
                Portal oficial de sinistro: <strong className="text-white underline">uniautobrasil.org.br/acionamento</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={UNIAUTO_INFO.central0800Tel}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white text-[#003DA5] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:bg-slate-100 transition"
            >
              <PhoneCall className="w-4 h-4 text-[#003DA5]" />
              <span>Ligar 0800</span>
            </a>

            <a
              href={UNIAUTO_INFO.acionamentoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/30 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition"
            >
              <span>Acessar Portal de Acionamento</span>
              <ExternalLink className="w-4 h-4 text-emerald-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden w-full flex items-center justify-center">
              <img
                src={selectedCard.imageUrl}
                alt={selectedCard.title}
                className="max-h-[72vh] w-auto object-contain rounded-2xl shadow-lg"
              />
            </div>

            <div className="mt-4 text-center max-w-md">
              <h4 className="text-base font-black text-white">{selectedCard.title}</h4>
              <p className="text-xs text-slate-300 mt-1">{selectedCard.description}</p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href={selectedCard.ctaLink}
                  target={selectedCard.isExternal ? '_blank' : undefined}
                  rel={selectedCard.isExternal ? 'noopener noreferrer' : undefined}
                  className="px-5 py-2.5 rounded-xl bg-[#00A859] hover:bg-emerald-600 text-white font-black text-xs inline-flex items-center gap-1.5 shadow-md"
                >
                  <span>{selectedCard.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { UniautoLogo } from './UniautoLogo';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const Footer: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <footer id="contato" className="bg-slate-100 text-slate-600 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      {/* Top logo gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 uniauto-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <UniautoLogo size="lg" darkText={true} />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-3 font-medium">
              {UNIAUTO_INFO.slogan}. A Uniauto Brasil oferece proteção patrimonial de excelência, assistência 24h, planos para motoristas de app e veículos elétricos, além de clube de benefícios com economia de energia em todo o território nacional.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-block px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
                CNPJ: <strong className="text-slate-900 font-bold">{UNIAUTO_INFO.cnpj}</strong>
              </span>
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[11px] font-bold text-[#003DA5] shadow-2xs">
                Filiada à FAN (Nacional)
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={UNIAUTO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-pink-500 flex items-center justify-center text-slate-600 hover:text-pink-600 transition group shadow-2xs"
                aria-label="Instagram da Uniauto Maceió"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#00A859] flex items-center justify-center text-slate-600 hover:text-[#00A859] transition group shadow-2xs"
                aria-label="WhatsApp da Uniauto Maceió"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#inicio" className="hover:text-[#003DA5] transition">Início</a>
              </li>
              <li>
                <a href="#planos" className="text-[#00A859] font-black hover:underline transition">Planos Moto R$50 | Carro R$100</a>
              </li>
              <li>
                <a href="#beneficio-energia" className="text-[#003DA5] font-black hover:underline transition">Conta de Luz -10% Off</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#003DA5] transition">Diferenciais (App & Elétricos)</a>
              </li>
              <li>
                <a href="#coberturas" className="hover:text-[#003DA5] transition">Coberturas Completas</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#003DA5] transition">Assistência 24 Horas</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#003DA5] transition">Como Funciona o Passo a Passo</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#003DA5] transition">Depoimentos de Associados</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#003DA5] transition">Perguntas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Coberturas em Destaque */}
          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4">
              Proteções
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>100% da Tabela FIPE</li>
              <li>Roubo e Furto Qualificado</li>
              <li>Colisão Parcial e Perda Total</li>
              <li>Fenômenos da Natureza</li>
              <li>Incêndio por Colisão</li>
              <li>Terceiros até R$ 150.000</li>
              <li>70% Vidros, Faróis e Lanternas</li>
              <li>Guincho Ilimitado p/ Acidentes</li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Localização */}
          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4">
              Central & Base Alagoas
            </h4>
            <div className="space-y-3 text-xs font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#003DA5] shrink-0 mt-0.5" />
                <span className="text-slate-700">{UNIAUTO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A859] shrink-0" />
                <span className="text-slate-700">WhatsApp: <strong>{UNIAUTO_INFO.whatsappFormatted}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-700">Emergência 24h: <strong>{UNIAUTO_INFO.whatsappEmergency}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <a
                  href={UNIAUTO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003DA5] transition font-bold"
                >
                  {UNIAUTO_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Note on Associativism */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 text-[11px] text-slate-500 leading-relaxed mb-8 shadow-xs font-medium">
          <p>
            <strong>Aviso Legal Institucional:</strong> A Uniauto Maceió / Uniauto Brasil é uma Associação de Proteção Veicular e Patrimonial sem fins lucrativos, regida pelas leis do associativismo mútuo nos termos da Constituição Federal Brasileira (Art. 5º, incisos XVII e XVIII). Não comercializamos apólices de seguro mercantil privado regulamentadas pela SUSEP, operando pelo sistema de rateio colaborativo entre seus associados para assistência e reparação patrimonial mútua.
          </p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} Uniauto Maceió Alagoas • Uniauto Brasil. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-600">
            <span>Desenvolvido com excelência no padrão oficial Uniauto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

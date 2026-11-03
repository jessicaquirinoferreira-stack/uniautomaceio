import React from 'react';
import { Check, X, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const ComparativoSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Análise de perfil do motorista (idade, estado civil)",
      uniauto: "SEM análise de perfil (qualquer habilitado pode dirigir)",
      seguradora: "Análise rígida: jovens e solteiros pagam o dobro",
      uniautoGood: true,
    },
    {
      feature: "Consulta ao SPC e Serasa",
      uniauto: "NÃO consulta SPC/Serasa",
      seguradora: "Recusa clientes com restrição de crédito",
      uniautoGood: true,
    },
    {
      feature: "Forma de Pagamento",
      uniauto: "Mensalidade sem comprometer o limite total do cartão",
      seguradora: "Bloqueia o limite do cartão com a anuidade toda",
      uniautoGood: true,
    },
    {
      feature: "Obrigatoriedade de CNH pelo proprietário",
      uniauto: "NÃO precisa de CNH para ser associado",
      seguradora: "Exige CNH válida do contratante",
      uniautoGood: true,
    },
    {
      feature: "Documento (CRLV) em nome de terceiro",
      uniauto: "Aceito normalmente sem burocracia",
      seguradora: "Gera burocracia extrema e frequentes recusas",
      uniautoGood: true,
    },
    {
      feature: "Preço em relação ao mercado",
      uniauto: "Até 60% mais econômico e justo",
      seguradora: "Valores altíssimos com margens de lucro de seguradora",
      uniautoGood: true,
    },
    {
      feature: "Indenização FIPE & Assistência 24h",
      uniauto: "100% da FIPE + Guincho ilimitado em colisão",
      seguradora: "FIPE padrão com limite rígido de km no guincho",
      uniautoGood: true,
    },
  ];

  return (
    <section className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#00A859]" />
            Transparência Total
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Uniauto vs Seguradoras Tradicionais
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Compare e entenda por que milhares de motoristas em Maceió e Alagoas migraram para a Uniauto.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-900/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-sm">
                <th className="py-5 px-6 font-bold text-slate-700 w-1/3">Critério de Avaliação</th>
                <th className="py-5 px-6 font-black text-[#00A859] bg-emerald-50/70 w-1/3 border-x border-emerald-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#00A859]" />
                    <span>UNIAUTO MACEIÓ</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-bold text-slate-500 w-1/3">Seguradora Tradicional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
              {comparisonItems.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 font-bold text-[#00A859] bg-emerald-50/50 border-x border-emerald-100">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#00A859]/20 text-[#00A859] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{item.uniauto}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </span>
                      <span>{item.seguradora}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Olá! Vi o comparativo com seguradoras e gostaria de saber o valor para proteger o meu veículo na Uniauto.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-[#003DA5] hover:text-[#002f80] transition"
          >
            <span>Descubra quanto você economiza na Uniauto hoje</span>
            <ArrowRight className="w-4 h-4 text-[#00A859]" />
          </a>
        </div>
      </div>
    </section>
  );
};

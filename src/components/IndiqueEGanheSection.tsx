import React, { useState } from 'react';
import {
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Handshake,
  CheckCircle2,
  DollarSign,
  Send,
  Eye,
  X,
  ExternalLink,
  Plus,
  Minus,
  PartyPopper,
  Car,
  Bike,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { UNIAUTO_INFO, INDIQUE_E_GANHE_DATA } from '../data/uniautoData';

export const IndiqueEGanheSection: React.FC = () => {
  // Simulator state
  const [numCarros, setNumCarros] = useState<number>(3);
  const [numMotos, setNumMotos] = useState<number>(2);

  // Quick referral form state
  const [seuNome, setSeuNome] = useState('');
  const [suaChavePix, setSuaChavePix] = useState('');
  const [nomeIndicado, setNomeIndicado] = useState('');
  const [whatsappIndicado, setWhatsappIndicado] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState<'carro' | 'moto'>('carro');

  // Lightbox modal state for flyers
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  // Calculations
  const totalIndicados = numCarros + numMotos;
  const ganhoCarros = numCarros * INDIQUE_E_GANHE_DATA.rewardCar;
  const ganhoMotos = numMotos * INDIQUE_E_GANHE_DATA.rewardMoto;
  const isSuperPixAtivo = totalIndicados >= INDIQUE_E_GANHE_DATA.superPixGoal; // 5 ou mais
  const multiplicadorSuperPix = Math.floor(totalIndicados / INDIQUE_E_GANHE_DATA.superPixGoal);
  const valorBonusSuperPix = isSuperPixAtivo ? multiplicadorSuperPix * INDIQUE_E_GANHE_DATA.superPixAmount : 0;
  const totalGeralPix = ganhoCarros + ganhoMotos + valorBonusSuperPix;

  // Build WhatsApp text for simulator
  const handleSimulacaoWhatsApp = () => {
    let msg = `Olá! Vi o programa INDIQUE E GANHE no site da Uniauto Brasil.\n\n`;
    msg += `🎯 Minha meta de indicação:\n`;
    msg += `🚗 Carros: ${numCarros} (${numCarros}x R$ 100 = R$ ${ganhoCarros})\n`;
    msg += `🏍️ Motos: ${numMotos} (${numMotos}x R$ 50 = R$ ${ganhoMotos})\n`;
    if (isSuperPixAtivo) {
      msg += `🔥 SUPER BÔNUS PIX (5 indicados fechados): R$ ${valorBonusSuperPix},00!\n`;
    }
    msg += `💰 Estimativa Total no PIX: R$ ${totalGeralPix},00!\n\n`;
    msg += `Gostaria de cadastrar minhas indicações para vocês entrarem em contato e creditarem meu PIX!`;

    const url = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Build WhatsApp text for referral form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seuNome || !nomeIndicado || !whatsappIndicado) {
      alert('Por favor, preencha pelo menos o seu nome, o nome do amigo indicado e o WhatsApp dele.');
      return;
    }

    let msg = `🎉 *NOVA INDICAÇÃO - PROGRAMA INDIQUE E GANHE UNIAUTO*\n\n`;
    msg += `👤 *Quem indicou:* ${seuNome}\n`;
    if (suaChavePix) {
      msg += `🔑 *Chave PIX para receber:* ${suaChavePix}\n`;
    }
    msg += `\n📋 *Dados do Amigo Indicado:*\n`;
    msg += `• *Nome:* ${nomeIndicado}\n`;
    msg += `• *WhatsApp:* ${whatsappIndicado}\n`;
    msg += `• *Veículo:* ${tipoVeiculo === 'carro' ? 'Carro (Recompensa R$ 100,00)' : 'Moto (Recompensa R$ 50,00)'}\n\n`;
    msg += `Por favor, entrem em contato com ele para apresentar a proteção veicular. Assim que fechar, avisem para transferir o meu PIX!`;

    const url = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="indique-e-ganhe" className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-extrabold mb-4 shadow-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>INDICOU, FECHOU, GANHOU! • UNIAUTO BRASIL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Indique Amigos e Ganhe{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003DA5] via-[#0066FF] to-[#00A859]">
              Prêmios em Dinheiro no PIX!
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Você que conhece amigos, vizinhos, familiares e colegas de trabalho que tenham carro ou moto em{' '}
            <strong className="text-slate-900">Maceió e em toda Alagoas</strong>... Chegou a oportunidade que você esperava!
            Indique para a Uniauto e receba PIX direto na sua conta assim que a proteção for fechada.
          </p>
        </div>

        {/* TOP HIGHLIGHT: As Duas Recompensas Principais (Cards Carro & Moto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card Carro - R$ 100,00 */}
          <div className="relative rounded-3xl bg-white border-2 border-blue-200 p-6 sm:p-8 shadow-xl shadow-blue-900/5 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#003DA5] font-black text-xs uppercase tracking-wider">
                Indicação de Carro
              </span>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003DA5] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-7 h-7" />
              </div>
            </div>

            <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wide">Indicou um Carro</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-lg font-black text-slate-700">GANHA</span>
              <span className="text-4xl sm:text-5xl font-black text-[#00A859] tracking-tight">R$ 100,00</span>
              <span className="text-sm font-bold text-slate-500">NO PIX</span>
            </div>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Válido para carros de passeio, <strong>motoristas de Uber/99</strong>, táxis, caminhonetes, utilitários e <strong>carros 100% elétricos ou híbridos</strong>.
            </p>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sem limite de carros indicados
              </span>
              <a
                href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Quero indicar um amigo que tem CARRO para ganhar R$ 100 no PIX pelo programa Indique e Ganhe da Uniauto!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#003DA5] hover:text-blue-800 transition group/link"
              >
                <span>Indicar Carro</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card Moto - R$ 50,00 */}
          <div className="relative rounded-3xl bg-white border-2 border-emerald-200 p-6 sm:p-8 shadow-xl shadow-emerald-900/5 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-[#00A859] font-black text-xs uppercase tracking-wider">
                Indicação de Moto
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00A859] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bike className="w-7 h-7" />
              </div>
            </div>

            <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wide">Indicou uma Moto</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-lg font-black text-slate-700">GANHA</span>
              <span className="text-4xl sm:text-5xl font-black text-[#00A859] tracking-tight">R$ 50,00</span>
              <span className="text-sm font-bold text-slate-500">NO PIX</span>
            </div>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Válido para motos de passeio, <strong>motoboys e entregadores de app</strong> (iFood, etc.), mototaxistas e <strong>motos elétricas</strong> de qualquer cilindrada.
            </p>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sem limite de motos indicadas
              </span>
              <a
                href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Quero indicar um amigo que tem MOTO para ganhar R$ 50 no PIX pelo programa Indique e Ganhe da Uniauto!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#00A859] hover:text-emerald-800 transition group/link"
              >
                <span>Indicar Moto</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* MEGA BANNER: SUPER PROMOÇÃO 5 PESSOAS = SUPER PIX R$ 1.000,00 */}
        <div className="mb-14 relative rounded-3xl bg-gradient-to-r from-[#002B7A] via-[#003DA5] to-[#00A859] p-6 sm:p-10 text-white shadow-2xl overflow-hidden border border-blue-400/30">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 font-black text-xs uppercase tracking-wider mb-4">
                <PartyPopper className="w-4 h-4" />
                <span>Super Promoção Uniauto • Meta Oficial Corrigida</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                INDICOU <span className="text-amber-300 underline decoration-amber-400 decoration-wavy">5 PESSOAS</span> QUE FECHARAM...
                <br />
                <span className="text-emerald-300">GANHE SUPER PIX DE R$ 1.000,00!</span>
              </h3>

              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl">
                Basta indicar <strong>5 amigos, vizinhos ou parentes</strong> que fecharem e ativarem a proteção veicular com a Uniauto.
                Você atinge a meta especial e recebe o <strong>SUPER PIX DE R$ 1.000,00</strong> na sua conta bancária!
              </p>

              {/* Clarification badge */}
              <div className="mt-5 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-blue-50 font-medium">
                <Zap className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span>
                  <strong>Importante:</strong> No flyer antigo impresso constavam 10 pessoas, mas a <strong>regra oficial ativa e confirmada é de apenas 5 pessoas</strong>!
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-3xl shadow-lg mb-3">
                PIX
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">Meta: 5 Fechamentos</span>
              <span className="text-3xl sm:text-4xl font-black text-white mt-1">R$ 1.000,00</span>
              <span className="text-xs text-blue-100 mt-1">Super Bônus em Dinheiro</span>

              <a
                href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Quero participar da SUPER PROMOÇÃO de 5 indicados para ganhar o SUPER PIX DE R$ 1.000,00 na Uniauto!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#003DA5] font-black text-xs sm:text-sm text-center shadow-lg transition-transform hover:scale-105"
              >
                Quero Participar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* REGRA DE TRANSPARÊNCIA (Aperto de Mão - Foto 2) */}
        <div className="mb-14 rounded-2xl bg-blue-50 border-2 border-dashed border-[#003DA5]/30 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#003DA5] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Handshake className="w-7 h-7 text-emerald-300" />
          </div>
          <div className="flex-1">
            <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <span>{INDIQUE_E_GANHE_DATA.ruleNotice}</span>
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transparência total e respeito a você: assim que o amigo indicado efetuar o cadastro e a primeira ativação da proteção veicular com nossos consultores em Maceió/Alagoas, seu comprovante de PIX é enviado de imediato!
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-[#00A859] font-black text-xs">
              <ShieldCheck className="w-4 h-4" />
              100% Garantido
            </span>
          </div>
        </div>

        {/* GRID COM DUAS COLUNAS: SIMULADOR INTERATIVO & FORMULÁRIO DE ENVIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Coluna 1: Simulador de Ganhos no PIX */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#003DA5] font-extrabold text-xs flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  Calculadora de PIX
                </span>
                <span className="text-xs font-semibold text-slate-500">Simulação em Tempo Real</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Simule Quanto Você Pode Ganhar no PIX
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste a quantidade de carros e motos que pretende indicar e veja o valor acumulado:
              </p>

              {/* Controles de Carro */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003DA5] flex items-center justify-center">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Carros indicados</div>
                    <div className="text-xs text-slate-500">R$ 100,00 por contrato fechado</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setNumCarros(Math.max(0, numCarros - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95"
                    aria-label="Diminuir carros"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-black text-lg text-slate-900">{numCarros}</span>
                  <button
                    onClick={() => setNumCarros(numCarros + 1)}
                    className="w-8 h-8 rounded-lg bg-[#003DA5] text-white flex items-center justify-center font-bold hover:bg-blue-800 active:scale-95"
                    aria-label="Aumentar carros"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Controles de Moto */}
              <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00A859] flex items-center justify-center">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Motos indicadas</div>
                    <div className="text-xs text-slate-500">R$ 50,00 por contrato fechado</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setNumMotos(Math.max(0, numMotos - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95"
                    aria-label="Diminuir motos"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-black text-lg text-slate-900">{numMotos}</span>
                  <button
                    onClick={() => setNumMotos(numMotos + 1)}
                    className="w-8 h-8 rounded-lg bg-[#00A859] text-white flex items-center justify-center font-bold hover:bg-emerald-700 active:scale-95"
                    aria-label="Aumentar motos"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status da Meta de 5 Pessoas */}
              <div className={`mt-5 p-4 rounded-2xl border transition-all ${
                isSuperPixAtivo
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : 'bg-blue-50/60 border-blue-200 text-slate-700'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                    {isSuperPixAtivo ? (
                      <>
                        <PartyPopper className="w-4 h-4 text-amber-600 animate-bounce" />
                        <strong className="text-amber-800">SUPER BÔNUS DESBLOQUEADO!</strong>
                      </>
                    ) : (
                      <>
                        <Award className="w-4 h-4 text-[#003DA5]" />
                        <span>Faltam {5 - totalIndicados} indicação(ões) para o Super PIX</span>
                      </>
                    )}
                  </span>
                  <span className="text-xs font-extrabold">
                    {totalIndicados}/5 indicações
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-2.5 w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSuperPixAtivo
                        ? 'bg-gradient-to-r from-amber-400 to-emerald-500'
                        : 'bg-gradient-to-r from-[#003DA5] to-[#00A859]'
                    }`}
                    style={{ width: `${Math.min(100, (totalIndicados / 5) * 100)}%` }}
                  />
                </div>

                <div className="mt-2 text-xs flex justify-between">
                  <span>Carros: R$ {ganhoCarros} + Motos: R$ {ganhoMotos}</span>
                  {isSuperPixAtivo && (
                    <span className="font-extrabold text-emerald-700">
                      + R$ {valorBonusSuperPix},00 (Bônus 5 indicados!)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Resultado Final do Simulador */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500">Estimativa Total a Receber</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#00A859]">
                    R$ {totalGeralPix.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>

                <button
                  onClick={handleSimulacaoWhatsApp}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#003DA5] to-[#00A859] hover:from-[#002f80] hover:to-[#008f4c] text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-900/15 transition-transform hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Indicar no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Coluna 2: Formulário Rápido de Cadastro da Indicação */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#00A859] font-extrabold text-xs mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Envio Direto ao Consultor</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Cadastre sua Indicação Agora
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Preencha os dados abaixo para enviarmos via WhatsApp para a nossa equipe entrar em contato com seu amigo:
            </p>

            <form onSubmit={handleFormSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  value={seuNome}
                  onChange={(e) => setSeuNome(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sua Chave PIX (Para receber o valor) *</label>
                <input
                  type="text"
                  placeholder="CPF, Telefone, E-mail ou Aleatória"
                  value={suaChavePix}
                  onChange={(e) => setSuaChavePix(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-black uppercase text-[#003DA5] tracking-wider block mb-2">
                  Dados do Amigo Indicado:
                </span>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nome do seu Amigo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Marcos Santos"
                      value={nomeIndicado}
                      onChange={(e) => setNomeIndicado(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp do seu Amigo *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(82) 99644-5705"
                      value={whatsappIndicado}
                      onChange={(e) => setWhatsappIndicado(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Veículo dele *</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTipoVeiculo('carro')}
                        className={`py-2 px-3 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-1.5 transition ${
                          tipoVeiculo === 'carro'
                            ? 'bg-blue-50 border-[#003DA5] text-[#003DA5]'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        <span>Carro (R$ 100)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTipoVeiculo('moto')}
                        className={`py-2 px-3 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-1.5 transition ${
                          tipoVeiculo === 'moto'
                            ? 'bg-emerald-50 border-[#00A859] text-[#00A859]'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Bike className="w-4 h-4" />
                        <span>Moto (R$ 50)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-4 rounded-xl bg-[#00A859] hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Indicação no WhatsApp Oficial</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Disparo oficial para a central Uniauto Maceió ({UNIAUTO_INFO.whatsappFormatted})
              </p>
            </form>
          </div>
        </div>

        {/* FLYERS OFICIAIS DA CAMPANHA (Imagens 1 e 2 enviadas pelo usuário) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase text-[#003DA5] tracking-wider">
                Flyers Oficiais da Campanha
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Conheça os Materiais Oficiais da Campanha Indique e Ganhe
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Clique nos materiais para visualizar em tamanho ampliado com todas as regras e premiações.
              </p>
            </div>

            <a
              href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de receber os flyers do Indique e Ganhe no meu WhatsApp para divulgar para meus amigos e familiares!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-[#003DA5] font-extrabold text-xs transition"
            >
              <span>Pedir Flyers no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flyer 1 - Indicou Fechou Ganhou (Super Pix 5 pessoas) */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-lg transition group">
              <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={UNIAUTO_INFO.flyerIndique1Url}
                  alt="Flyer Oficial Uniauto - Indicou Fechou Ganhou - Super Pix de R$ 1.000,00"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setSelectedFlyer(UNIAUTO_INFO.flyerIndique1Url)}
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-1.5 shadow-xl hover:bg-blue-50"
                  >
                    <Eye className="w-4 h-4 text-[#003DA5]" />
                    <span>Ampliar Flyer 1</span>
                  </button>
                </div>
                {/* Badge de Correção Oficial sobre o flyer */}
                <div className="absolute top-3 left-3 right-3 bg-amber-400 text-slate-950 font-black text-[11px] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>REGRA OFICIAL ATUALIZADA: 5 PESSOAS = SUPER PIX R$ 1.000!</span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="text-xs font-black text-slate-900">Flyer 01 • Super Promoção Super PIX</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Indicou 5 pessoas e fecharam = SUPER PIX DE R$ 1.000,00 direto na sua conta!
                </div>
              </div>
            </div>

            {/* Flyer 2 - Indique Ganhe! Carro R$ 100 / Moto R$ 50 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-lg transition group">
              <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={UNIAUTO_INFO.flyerIndique2Url}
                  alt="Flyer Oficial Uniauto - Indique e Ganhe Carro R$ 100 Moto R$ 50"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setSelectedFlyer(UNIAUTO_INFO.flyerIndique2Url)}
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-1.5 shadow-xl hover:bg-blue-50"
                  >
                    <Eye className="w-4 h-4 text-[#003DA5]" />
                    <span>Ampliar Flyer 2</span>
                  </button>
                </div>
                <div className="absolute top-3 left-3 bg-[#00A859] text-white font-black text-[11px] px-3 py-1.5 rounded-lg shadow-md">
                  TABELA DE PRÊMIOS OFICIAL
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="text-xs font-black text-slate-900">Flyer 02 • Valores por Veículo</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Carro = R$ 100,00 no PIX | Moto = R$ 50,00 no PIX. Pago na ativação da proteção!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO A PASSO (Como Funciona) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {INDIQUE_E_GANHE_DATA.steps.map((st) => (
            <div key={st.step} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative group hover:border-blue-400 transition">
              <span className="text-3xl font-black text-blue-100 group-hover:text-blue-200 transition">
                {st.step}
              </span>
              <h4 className="text-base font-black text-slate-900 mt-2">{st.title}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal para visualização ampliada do Flyer */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-2 flex flex-col items-center">
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[85vh] overflow-auto w-full flex items-center justify-center p-2">
              <img
                src={selectedFlyer}
                alt="Flyer Oficial Uniauto Ampliado"
                className="max-h-[80vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

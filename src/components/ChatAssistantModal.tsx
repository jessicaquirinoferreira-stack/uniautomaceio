import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Phone, ArrowRight, CheckCheck } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    url: string;
    type: 'whatsapp' | 'instagram';
  };
}

export const ChatAssistantModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Professional consultant photo with corporate blue styling
  const consultantPhoto = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Sou a Luma, assistente virtual da Uniauto Maceió. Como posso te ajudar hoje?',
      timestamp: 'Agora',
    },
  ]);

  const quickQuestions = [
    { label: '🚗 Trabalho na Uber / 99', query: 'Sou motorista de aplicativo (Uber/99). Como funciona?' },
    { label: '⚡ Carros e Motos Elétricas', query: 'Vocês protegem carros elétricos e motos elétricas?' },
    { label: '💡 Desconto 10% na Conta de Luz', query: 'Como funciona o benefício de desconto na conta de energia?' },
    { label: '💰 Planos (Moto R$50 | Carro R$100)', query: 'Quais os valores dos planos da Uniauto?' },
    { label: '🛡️ Quais são as coberturas?', query: 'Quais são as coberturas?' },
    { label: '👤 Falar com atendente humano', query: 'Quero falar com um consultor humano' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let botReply = '';
      let action: Message['actionButton'] = undefined;

      if (lower.includes('uber') || lower.includes('99') || lower.includes('aplicativo') || lower.includes('app') || lower.includes('motorista')) {
        botReply = 'Sim! A Uniauto Brasil oferece proteção veicular especialmente desenhada para motoristas de Uber, 99, táxi e entregadores. Não temos acréscimos abusivos por rodar muito e você conta com guincho ilimitado e carro reserva para não ficar sem faturamento!';
        action = {
          label: 'Cotar Plano para App no WhatsApp',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Sou motorista de aplicativo (Uber/99) e gostaria de fazer uma cotação especial.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('elétrico') || lower.includes('eletrico') || lower.includes('elétrica') || lower.includes('eletrica') || lower.includes('hibrid') || lower.includes('byd')) {
        botReply = 'Agora a Uniauto Brasil também protege Carros Elétricos (EVs), Híbridos e Motos Elétricas! Cobrimos colisão, roubo, furto, alagamentos e danos elétricos com suporte especializado e 100% da Tabela FIPE!';
        action = {
          label: 'Cotar Veículo Elétrico no WhatsApp',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho um veículo elétrico/híbrido e gostaria de cotar a proteção na Uniauto Brasil.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('energia') || lower.includes('luz') || lower.includes('fatura') || lower.includes('10%') || lower.includes('conta')) {
        botReply = 'Esse é o nosso grande benefício exclusivo! Associados Uniauto têm direito a uma economia a partir de 10% direto na fatura de energia da sua casa ou empresa. Sem precisar fazer obras e sem instalar placas solares!';
        action = {
          label: 'Ativar Desconto na Conta de Luz',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de ativar meu desconto de 10% na fatura de energia como associado Uniauto.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('cot') || lower.includes('preço') || lower.includes('valor') || lower.includes('quanto') || lower.includes('plano') || lower.includes('50') || lower.includes('100')) {
        botReply = 'Nossos planos são super acessíveis: Plano para moto a partir de R$ 50,00/mês e Plano para carro a partir de R$ 100,00/mês! Todos com 100% da FIPE, guincho ilimitado e filiação à FAN.';
        action = {
          label: 'Fazer Cotação no WhatsApp Agora',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá Luma! Gostaria de fazer uma cotação com os planos a partir de R$ 50 (moto) ou R$ 100 (carro).')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('cobertura') || lower.includes('cobre') || lower.includes('prote')) {
        botReply = 'A Uniauto Maceió protege seu patrimônio contra: 100% da Tabela FIPE em perda total, Roubo e Furto, Colisão (parcial e total), Incêndio decorrente de colisão, Fenômenos da Natureza (alagamentos/queda de árvores), Proteção para Terceiros até R$ 150.000,00 e 70% para vidros, retrovisores e faróis!';
        action = {
          label: 'Ver Planos no WhatsApp',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de detalhes sobre as coberturas completas para o meu carro.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('seguro') || lower.includes('diferen')) {
        botReply = 'A proteção veicular é um sistema associativo mútuo amparado pela Constituição. Ao contrário do seguro tradicional: NÃO consultamos SPC/Serasa, NÃO cobramos a mais por condutores jovens (sem análise de perfil), o pagamento é mensal sem bloquear limite de cartão e custa até 60% menos!';
        action = {
          label: 'Economizar com a Uniauto',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de comparar o valor da Uniauto com meu seguro.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('cnh') || lower.includes('habilita') || lower.includes('nome') || lower.includes('crlv') || lower.includes('doc')) {
        botReply = 'Essa é uma das grandes vantagens da Uniauto! O associado NÃO precisa ter CNH e o veículo NÃO precisa estar em seu nome no documento (CRLV). Qualquer pessoa devidamente habilitada pode dirigir o carro sem perder a cobertura!';
        action = {
          label: 'Proteger Veículo sem Burocracia',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Quero proteger meu veículo mesmo sem CNH/com CRLV em outro nome.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('guincho') || lower.includes('assist') || lower.includes('24h') || lower.includes('pane')) {
        botReply = 'Nossa Assistência 24 Horas atende em todo o território nacional! Em caso de colisão, o guincho é ILIMITADO até a oficina de reparo. Também inclui: chaveiro 24h, socorro elétrico/mecânico, troca de pneus, auxílio falta de combustível, transporte alternativo (táxi/app) e hospedagem para até 5 pessoas!';
        action = {
          label: 'Falar com Atendimento 24h',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o atendimento de guincho 24h.')}`,
          type: 'whatsapp',
        };
      } else if (lower.includes('humano') || lower.includes('atendente') || lower.includes('pessoa') || lower.includes('falar') || lower.includes('consultor')) {
        botReply = 'Perfeito! Nossos especialistas da base Uniauto Maceió estão prontos para te atender pessoalmente via WhatsApp ou Instagram com total agilidade.';
        action = {
          label: 'Falar com Consultor Humano',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Estava no chat do site da Uniauto Maceió e gostaria de falar com um consultor humano.')}`,
          type: 'whatsapp',
        };
      } else {
        botReply = 'Excelente pergunta! Como cada veículo e situação pode ter particularidades, o mais rápido é falar diretamente com nosso especialista de Maceió no WhatsApp ou conferir nosso Instagram oficial.';
        action = {
          label: 'Conversar com Consultor',
          url: `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de tirar uma dúvida sobre: ${text}`)}`,
          type: 'whatsapp',
        };
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        actionButton: action,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Button on bottom-left */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-1 rounded-full uniauto-gradient shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Abrir assistente virtual da Uniauto"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white bg-white">
            <img
              src={consultantPhoto}
              alt="Luma - Assistente Virtual Uniauto"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#00A859] border-2 border-white shadow-md">
              <span className="absolute inset-0 rounded-full bg-[#00A859] animate-ping opacity-75" />
            </span>
          </div>

          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-rose-600 text-white font-bold text-[10px] shadow-lg animate-bounce">
              1
            </span>
          )}
        </button>

        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex flex-col bg-white border border-slate-200 rounded-2xl py-2 px-3.5 shadow-lg cursor-pointer hover:border-[#003DA5] transition-all max-w-[210px]"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#00A859]" />
              <span>Dúvidas? Fale com a Luma</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium truncate">
              Assistente Virtual Uniauto Maceió
            </span>
          </div>
        )}
      </div>

      {/* Floating Chat Panel - Light Theme */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[390px] h-[550px] max-h-[82vh] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-blue-900/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header in Brand Blue */}
          <div className="p-4 bg-[#003DA5] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden p-0.5 bg-white">
                <img
                  src={consultantPhoto}
                  alt="Luma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-white text-sm">Luma • Uniauto</h4>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-[#00A859] text-white">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-blue-100 font-medium">Assistente Virtual Uniauto Maceió</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-blue-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/60">
            <div className="text-center my-1">
              <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-2xs">
                Atendimento Imediato • Maceió & Brasil
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 border border-slate-200 bg-white">
                    <img src={consultantPhoto} alt="Bot" className="w-full h-full object-cover" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed font-medium ${
                    msg.sender === 'user'
                      ? 'bg-[#003DA5] text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-200 shadow-2xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  {msg.actionButton && (
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <a
                        href={msg.actionButton.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00A859] hover:bg-[#008f4c] text-white font-bold text-xs transition duration-200 shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{msg.actionButton.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div
                    className={`text-[9px] mt-1 flex items-center justify-end gap-1 ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-blue-200" />}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-slate-500">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white">
                  <img src={consultantPhoto} alt="Bot" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompt chips */}
          <div className="p-2 bg-slate-100/80 border-t border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold border border-slate-200 transition cursor-pointer shadow-2xs"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-[#003DA5] hover:bg-[#002f80] disabled:opacity-40 text-white transition cursor-pointer shadow-xs"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

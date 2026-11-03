export interface Cobertura {
  id: string;
  title: string;
  shortDesc: string;
  detail: string;
  iconName: string;
  tag: string;
}

export interface Beneficio {
  id: string;
  title: string;
  desc: string;
  highlight: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  vehicle: string;
  comment: string;
  rating: number;
  avatar: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const UNIAUTO_INFO = {
  name: "Uniauto Maceió Alagoas",
  nationalBrand: "Uniauto Brasil",
  segment: "Associação de Proteção Veicular & Patrimonial",
  slogan: "Especializada em Proteção Veicular | Confiança | Tranquilidade",
  impactPhrase: "Não conte com a sorte, conte com a Uniauto",
  cnpj: "46.722.227/0001-41",
  whatsappNumber: "5582999998877", // Maceió DDD 82
  whatsappFormatted: "(82) 99999-8877",
  whatsappEmergency: "0800 770 1234",
  instagramUrl: "https://www.instagram.com/uniautomaceio/",
  instagramHandle: "@uniautomaceio",
  address: "Av. Fernandes Lima, 2500 - Farol, Maceió - AL, 57057-000",
  coverageArea: "Maceió, todo o estado de Alagoas e território nacional",
  defaultWhatsAppMessage: "Olá! Vi o site da Uniauto Maceió e gostaria de fazer uma cotação.",
};

export const COBERTURAS: Cobertura[] = [
  {
    id: "fipe",
    title: "100% da Tabela FIPE",
    shortDesc: "Indenização integral baseada no valor de mercado oficial da FIPE para o seu modelo.",
    detail: "Em caso de perda total, roubo ou furto sem recuperação, você recebe 100% do valor da Tabela FIPE vigente, garantindo que seu patrimônio seja totalmente restituído sem surpresas.",
    iconName: "ShieldCheck",
    tag: "100% FIPE",
  },
  {
    id: "roubo",
    title: "Roubo e Furto Qualificado",
    shortDesc: "Proteção completa contra ações criminosas em qualquer lugar do Brasil.",
    detail: "Equipe especializada em rastreamento e busca e apreensão imediata. Caso o veículo não seja localizado ou recuperado, a indenização total é acionada.",
    iconName: "Lock",
    tag: "Busca & Indenização",
  },
  {
    id: "colisao",
    title: "Colisão (Parcial e Perda Total)",
    shortDesc: "Reparação em oficinas credenciadas de primeira linha ou indenização total.",
    detail: "Cobertura completa para batidas, capotamentos e choques. O veículo é reparado com peças novas ou, se os danos superarem 75%, é declarada perda total com ressarcimento integral.",
    iconName: "CarFront",
    tag: "Oficinas de Ponta",
  },
  {
    id: "incendio",
    title: "Incêndio por Colisão",
    shortDesc: "Proteção patrimonial contra danos causados pelo fogo decorrente de colisão.",
    detail: "Acidentes com curto-circuito ou vazamento de combustível após colisão têm cobertura integral para reparar ou ressarcir o veículo do associado.",
    iconName: "Flame",
    tag: "Fogo & Colisão",
  },
  {
    id: "natureza",
    title: "Fenômenos da Natureza",
    shortDesc: "Amparo contra enchentes, alagamentos, queda de árvores e granizo.",
    detail: "Maceió e várias regiões sofrem com tempestades e pontos de alagamento. Na Uniauto você está protegido contra intempéries climáticas que danifiquem a lataria ou parte mecânica.",
    iconName: "CloudRain",
    tag: "Alagamento & Granizo",
  },
  {
    id: "sem-perfil",
    title: "Sem Perfil de Condutor",
    shortDesc: "Qualquer pessoa habilitada pode dirigir o seu veículo sem encarecer a mensalidade.",
    detail: "Aqui não existe questionário sobre quem mais dirige o carro, idade de jovens condutores ou se o carro dorme em garagem fechada. Seu veículo está protegido nas mãos de qualquer habilitado.",
    iconName: "Users",
    tag: "Livre Condutor",
  },
  {
    id: "terceiros",
    title: "Proteção para Terceiros até R$ 150.000",
    shortDesc: "Tranquilidade garantida caso você se envolva em acidente com outro veículo.",
    detail: "Cobrimos os danos materiais e corporais involuntários causados a terceiros até R$ 150.000,00, evitando prejuízos astronômicos no seu bolso e desentendimentos.",
    iconName: "CarTaxiFront",
    tag: "Até R$ 150.000",
  },
  {
    id: "vidros",
    title: "Vidros, Faróis, Lanternas e Retrovisores",
    shortDesc: "70% de cobertura nacional para troca e reparo de vidros e sinalização.",
    detail: "Pedra na estrada trincou o para-brisa? Alguém quebrou a lanterna no estacionamento? Com a Uniauto você tem proteção de 70% nacional para reposição com agilidade.",
    iconName: "Sparkles",
    tag: "70% Nacional",
  },
];

export const BENEFICIOS: Beneficio[] = [
  {
    id: "guincho",
    title: "Guincho Ilimitado (Colisão)",
    desc: "Em caso de colisão, o reboque é ilimitado até a oficina referenciada. Para pane, ampla quilometragem nacional.",
    highlight: "Sem Limite de KM p/ Acidentes",
    iconName: "Truck",
  },
  {
    id: "chaveiro",
    title: "Chaveiro 24 Horas",
    desc: "Perdeu a chave, trancou com a chave dentro ou quebrou na ignição? Um profissional vai até você para resolver.",
    highlight: "Atendimento Rápido",
    iconName: "Key",
  },
  {
    id: "socorro",
    title: "Socorro Elétrico e Mecânico",
    desc: "Bateria descarregou ou pane mecânica leve? Enviamos um auto socorro para tentar restabelecer o veículo no local.",
    highlight: "Carga de Bateria",
    iconName: "Wrench",
  },
  {
    id: "transporte",
    title: "Transporte Alternativo",
    desc: "Se o veículo ficar imobilizado, enviamos táxi ou transporte por aplicativo para levar você e seus passageiros em segurança.",
    highlight: "Volta para Casa",
    iconName: "Navigation",
  },
  {
    id: "pneu",
    title: "Auxílio Troca de Pneus",
    desc: "Pneu furou na chuva ou à noite? Um profissional da assistência 24h realiza a substituição pelo estepe com segurança.",
    highlight: "Segurança Total",
    iconName: "Disc",
  },
  {
    id: "combustivel",
    title: "Pane Seca (Falta de Combustível)",
    desc: "O combustível acabou inesperadamente? Levamos combustível suficiente até o veículo ou reboque até o posto mais próximo.",
    highlight: "Socorro Imediato",
    iconName: "Fuel",
  },
  {
    id: "hospedagem",
    title: "Hospedagem Emergencial",
    desc: "Pane ou sinistro a mais de 50km da sua cidade natal? Cobrimos 1 diária de hotel para até 5 pessoas do veículo.",
    highlight: "Até 5 Pessoas",
    iconName: "Hotel",
  },
  {
    id: "carro-reserva",
    title: "Carro Reserva",
    desc: "Fique rodando enquanto o seu carro é reparado: opção de 15 dias ou até planos estendidos conforme categoria contratada.",
    highlight: "15 Dias ou +",
    iconName: "Car",
  },
  {
    id: "unimedicos",
    title: "Uni Médicos - Clube de Benefícios",
    desc: "Acesso exclusivo a consultas de telemedicina, descontos em exames e remédios para você e sua família.",
    highlight: "Saúde Associativa",
    iconName: "HeartPulse",
  },
  {
    id: "rastreador",
    title: "Rastreamento e App em Tempo Real",
    desc: "Para veículos elegíveis, instalação de rastreador de alta precisão com aplicativo para celular 24 horas por dia.",
    highlight: "GPS no Celular",
    iconName: "Crosshair",
  },
];

export const DIFERENCIAIS = [
  {
    title: "Não precisa ter CNH",
    desc: "O proprietário associado não é obrigado a ter habilitação para proteger seu patrimônio.",
    icon: "FileCheck",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "CRLV não precisa estar no seu nome",
    desc: "Comprou financiado, de parente ou ainda vai transferir? Você pode proteger o veículo imediatamente.",
    icon: "FileText",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Assistência 24h em todo o Brasil",
    desc: "Rodando em Maceió, na rota ecológica de Alagoas ou em qualquer estado, a central 0800 está pronta.",
    icon: "MapPin",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Cotação em 2 minutos sem consulta",
    desc: "Sem consulta ao SPC ou Serasa. Zero burocracia, vistoria 100% online por fotos no celular.",
    icon: "Clock",
    color: "from-purple-500 to-pink-600",
  },
];

export const COMO_FUNCIONA_STEPS = [
  {
    step: "01",
    title: "Faça sua Cotação",
    desc: "Informe o modelo e ano do seu carro, moto ou utilitário no nosso formulário ou diretamente pelo WhatsApp em menos de 2 minutos.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Escolha o Plano Ideal",
    desc: "Nossos consultores apresentam as melhores opções de cobertura e assistência sob medida para a sua necessidade e bolso.",
    time: "Personalizado",
  },
  {
    step: "03",
    title: "Vistoria 100% Digital",
    desc: "Envie as fotos do veículo através do WhatsApp pelo próprio celular, sem precisar agendar vistoriador presencial.",
    time: "100% Online",
  },
  {
    step: "04",
    title: "Veículo 100% Protegido",
    desc: "Com a adesão confirmada, seu veículo já conta com a proteção integral da Uniauto e assistência 24h em todo o país.",
    time: "Ativação Imediata",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Eduardo Santos",
    role: "Motorista por Aplicativo",
    location: "Maceió - AL (Pajuçara)",
    vehicle: "Chevrolet Onix Plus 2023",
    comment: "Eu dependo do carro pra sustentar minha família. Quando bateram na minha traseira na Fernandes Lima, a Uniauto me atendeu em 20 minutos com guincho e ainda me deu o carro reserva. Foi um alívio gigante!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    badge: "Associado há 2 anos",
  },
  {
    id: "2",
    name: "Dra. Mariana Lins",
    role: "Médica Veterinária",
    location: "Maceió - AL (Ponta Verde)",
    vehicle: "Jeep Renegade 2022",
    comment: "Cotei no seguro tradicional e o valor era absurdo pelo meu perfil jovem. Na Uniauto Maceió fechei por menos da metade do preço, com 100% da FIPE e cobertura de vidros completa. Recomendo de olhos fechados!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    badge: "Associada Verificada",
  },
  {
    id: "3",
    name: "Roberto Tenório",
    role: "Empresário & Produtor",
    location: "Arapiraca / Maceió - AL",
    vehicle: "Toyota Hilux 4x4",
    comment: "Minha caminhonete roda Alagoas inteira a trabalho. Tive uma pane mecânica na BR-101 e o guincho chegou rápido. O atendimento da central é diferenciado e humanizado. Nota 10!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    badge: "Hilux Protegida",
  },
  {
    id: "4",
    name: "Larissa Menezes",
    role: "Representante Comercial",
    location: "Maceió - AL (Mangabeiras)",
    vehicle: "Honda HR-V",
    comment: "O que mais me impressionou foi a facilidade: não pediram consulta no SPC e a vistoria foi toda feita pelo WhatsApp tirando foto no meu condomínio. Sem filas, sem papelada!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    badge: "Cliente Satisfeita",
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "O que é Proteção Veicular e como ela funciona?",
    answer: "A proteção veicular é realizada por meio de uma associação civil sem fins lucrativos (como a Uniauto Brasil / Uniauto Maceió). Os associados dividem de forma mútua os custos dos eventos ocorridos (colisões, roubos, furtos, etc.). Amparada pela Constituição Federal (Artigo 5º, incisos XVII e XVIII), é uma modalidade legal, moderna e justa para proteger o seu patrimônio por um valor muito mais acessível.",
    category: "Geral",
  },
  {
    question: "Qual a diferença entre a Proteção Veicular da Uniauto e o Seguro Tradicional?",
    answer: "As principais diferenças são: na Uniauto você NÃO tem análise de perfil (idade, solteiro, cep de risco, garagem), não há consulta ao SPC/Serasa, o pagamento é mensal sem comprometer o limite total do cartão de crédito, e o valor chega a ser até 60% mais econômico, oferecendo as mesmas garantias essenciais de 100% da FIPE e assistência 24h.",
    category: "Comparativo",
  },
  {
    question: "Quem pode conduzir o meu veículo protegido?",
    answer: "Qualquer pessoa devidamente habilitada perante as leis de trânsito brasileiras pode conduzir o veículo. Se seu filho, cônjuge, funcionário ou amigo estiver dirigindo e acontecer um sinistro, a cobertura é válida normalmente sem nenhuma redução.",
    category: "Regras",
  },
  {
    question: "Preciso ter CNH ou o carro quitado e no meu nome?",
    answer: "NÃO! O associado que contrata a proteção veicular não é obrigado a ter CNH. Além disso, o veículo não precisa estar transferido para o seu nome no CRLV (ótimo para quem comprou financiado, de parentes ou está em processo de inventário/transferência).",
    category: "Adesão",
  },
  {
    question: "Como funciona a cobertura de 100% da Tabela FIPE?",
    answer: "Caso seu veículo sofra perda total por colisão, incêndio, desastre natural ou seja roubado/furtado e não recuperado, você é ressarcido com base em 100% do valor da Tabela FIPE do mês do evento, conforme regulamento da associação.",
    category: "Coberturas",
  },
  {
    question: "A Assistência 24h funciona fora de Alagoas?",
    answer: "Sim! A Uniauto possui cobertura e assistência 24 horas em todo o território nacional. Se você viajar para São Paulo, Rio, Bahia, Pernambuco ou qualquer outro estado e precisar de guincho, chaveiro ou socorro mecânico, nossa central 0800 atenderá prontamente.",
    category: "Assistência",
  },
  {
    question: "Em quanto tempo meu veículo já estará protegido?",
    answer: "Assim que você realiza o envio das fotos para a vistoria digital e a taxa de adesão é confirmada, seu veículo já entra na base ativa com proteção imediata, muitas vezes no mesmo dia em poucas horas!",
    category: "Adesão",
  },
];

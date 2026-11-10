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

export interface PlanoItem {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  priceStartingAt: string;
  pricePeriod: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  highlightTag: string;
}

export const UNIAUTO_INFO = {
  name: "Uniauto Maceió Alagoas",
  nationalBrand: "Uniauto Brasil",
  segment: "Associação de Proteção Veicular & Patrimonial",
  affiliation: "Filiada à AAAPV (Agência de Autorregulamentação) e à FAN (Força Associativa Nacional)",
  fanBadgeText: "Filiada à AAAPV & FAN • Certificada e Regularizada",
  nationalPortalUrl: "https://uniautobrasil.org.br",
  acionamentoUrl: "https://uniautobrasil.org.br/acionamento",
  slogan: "Especializada em Proteção Veicular | Confiança | Tranquilidade",
  impactPhrase: "Não conte com a sorte, conte com a Uniauto",
  alwaysWithYouPhrase: "Sempre com Você!",
  cnpj: "46.722.227/0001-41",
  whatsappNumber: "5582996445705", // Alagoas DDD 82 99644-5705
  whatsappFormatted: "(82) 99644-5705",
  whatsappEmergency: "(82) 99644-5705",
  central0800: "+55 800 940 0587",
  central0800Display: "0800 940 0587",
  central0800Tel: "tel:+558009400587",
  instagramUrl: "https://www.instagram.com/Uniautomaceio/",
  instagramHandle: "@Uniautomaceio",
  address: "Av. Fernandes Lima, 2500 - Farol, Maceió - AL, 57057-000",
  coverageArea: "Maceió, todo o estado de Alagoas e território nacional",
  defaultWhatsAppMessage: "Olá! Vi o site da Uniauto e gostaria de fazer uma cotação.",
  officialLogoUrl: "https://i.postimg.cc/QdsDWQ6P/Logo-UNIAUTO-com-Gradiente-Vibrante.png",
  energyBenefitImageUrl: "https://i.postimg.cc/xjXCFhSv/Whats-App-Image-2026-11-04-at-19-02-41.jpg",
  flyerIndique1Url: "/assets/aistudio/image_06881d10.png",
  flyerIndique2Url: "/assets/aistudio/image_4897bb1c.png",
};

export interface UniautoCard {
  id: string;
  imageUrl: string;
  category: 'institucional' | 'eletricos' | 'motos' | 'rastreamento' | 'central' | 'acionamento';
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
}

export const UNIAUTO_OFFICIAL_CARDS: UniautoCard[] = [
  {
    id: "card-01",
    imageUrl: "/assets/uniauto_cards/card_01.jpg",
    category: "institucional",
    title: "Seu carro protegido. Sua paz garantida.",
    subtitle: "Com a Uniauto você dirige tranquilo sabendo que cuidamos de tudo por você!",
    description: "Proteção veicular completa com respaldo associativo da AAAPV e da FAN em Maceió e em todo o Brasil.",
    badges: ["Filiada AAAPV", "Filiada FAN", "Proteção Total"],
    ctaText: "Simular Proteção do Carro",
    ctaLink: "#planos",
  },
  {
    id: "card-02",
    imageUrl: "/assets/uniauto_cards/card_02.jpg",
    category: "eletricos",
    title: "Proteção Completa para Elétricos e Híbridos",
    subtitle: "Novidade Uniauto com suporte especializado para EVs e Híbridos",
    description: "Cobertura de colisão, roubo, furto, terceiros, assistência 24h, vidros/retrovisores e carro reserva para veículos elétricos (BYD, GWM, etc.).",
    badges: ["100% Elétricos", "Híbridos", "100% FIPE", "Assistência 24h"],
    ctaText: "Cotar Veículo Elétrico",
    ctaLink: "#planos",
  },
  {
    id: "card-03",
    imageUrl: "/assets/uniauto_cards/card_03.jpg",
    category: "institucional",
    title: "Não confie na sorte. Confie na UniAuto",
    subtitle: "Proteção e Segurança para Carro e Moto",
    description: "Não deixe seu patrimônio desprotegido. Conte com a segurança e solidez da maior associação de proteção veicular.",
    badges: ["Proteção", "Segurança", "Moto & Carro"],
    ctaText: "Fazer Cotação Grátis",
    ctaLink: "#inicio",
  },
  {
    id: "card-04",
    imageUrl: "/assets/uniauto_cards/card_04.jpg",
    category: "rastreamento",
    title: "Com rastreamento 24h, o cuidado vai junto com você",
    subtitle: "Localização em tempo real e bloqueio emergencial",
    description: "Acompanhe seu veículo na palma da mão via aplicativo móvel, com central de monitoramento 24 horas pronta para agir.",
    badges: ["Rastreamento 24h", "App no Celular", "Telemetria"],
    ctaText: "Conhecer Rastreamento",
    ctaLink: "#beneficios",
  },
  {
    id: "card-05",
    imageUrl: "/assets/uniauto_cards/card_05.jpg",
    category: "motos",
    title: "Sua moto protegida de segunda a segunda",
    subtitle: "Plano para Motos a partir de R$ 50,00 por mês",
    description: "Ideal para entregadores de app, motoboys e motociclistas do dia a dia. Guincho 24h ilimitado em colisão e 100% da Tabela FIPE.",
    badges: ["Plano Moto R$ 50", "Sem Perfil de Condutor", "Assistência 24h"],
    ctaText: "Proteger Minha Moto",
    ctaLink: "#planos",
  },
  {
    id: "card-06",
    imageUrl: "/assets/uniauto_cards/card_06.jpg",
    category: "central",
    title: "Monitoramento 24h é com a Uniauto",
    subtitle: "Central própria de atendimento e despacho em todo o Brasil",
    description: "Equipe profissional de plantão contínuo pronta para enviar guincho, socorro mecânico, chaveiro ou apoio emergencial.",
    badges: ["Central Própria 24h", "Plantão Nacional", "Atendimento Humano"],
    ctaText: "Ligar na Central 0800",
    ctaLink: "tel:+558009400587",
  },
  {
    id: "card-07",
    imageUrl: "/assets/uniauto_cards/card_07.jpg",
    category: "rastreamento",
    title: "Roubaram, e agora? Calma, com localização em tempo real resolve",
    subtitle: "Sem Uniauto vs Com Uniauto",
    description: "Enquanto quem não tem proteção entra em desespero, o associado Uniauto aciona nossa central com geolocalização precisa e apoio imediato.",
    badges: ["Recuperação Veicular", "Sem Burocracia", "100% FIPE"],
    ctaText: "Garantir Minha Tranquilidade",
    ctaLink: "#coberturas",
  },
  {
    id: "card-08",
    imageUrl: "/assets/uniauto_cards/card_08.jpg",
    category: "institucional",
    title: "Uniauto Brasil • Estrutura Nacional",
    subtitle: "0800 940 0587 • uniautobrasil.org.br",
    description: "Centenas de colaboradores, eventos com associados, oficinas credenciadas e presença sólida em todo o território nacional.",
    badges: ["Presença Nacional", "Sede Própria", "Oficinas Credenciadas"],
    ctaText: "Acessar Portal Nacional",
    ctaLink: "https://uniautobrasil.org.br",
    isExternal: true,
  },
  {
    id: "card-09",
    imageUrl: "/assets/uniauto_cards/card_09.jpg",
    category: "acionamento",
    title: "Caro associado, em caso de evento:",
    subtitle: "Acionamento rápido e descomplicado na palma da sua mão",
    description: "1. Ligue imediatamente para a Assistência 24h (0800 940 0587). 2. Realize a abertura pelo link oficial uniautobrasil.org.br/acionamento enviando fotos e vídeos do local.",
    badges: ["0800 940 0587", "Acionamento Online", "Sempre com Você"],
    ctaText: "Abrir Acionamento Online",
    ctaLink: "https://uniautobrasil.org.br/acionamento",
    isExternal: true,
  },
];

export interface IndiqueGanheConfig {
  title: string;
  badge: string;
  slogan: string;
  headline: string;
  description: string;
  rewardCar: number;
  rewardMoto: number;
  superPixGoal: number; // Corrigido para 5 pessoas
  superPixAmount: number; // R$ 1.000,00
  ruleNotice: string;
  steps: { step: string; title: string; desc: string; icon: string }[];
}

export const INDIQUE_E_GANHE_DATA: IndiqueGanheConfig = {
  title: "Programa Indique e Ganhe",
  badge: "PIX Direto na Sua Conta • Sem Limites de Indicação",
  slogan: "INDICOU, FECHOU, GANHOU!",
  headline: "Indique Amigos, Familiares ou Conhecidos e Ganhe Prêmios em Dinheiro!",
  description: "Você que conhece amigos, vizinhos e parentes que tenham carro ou moto em Maceió e em toda Alagoas... Chegou a oportunidade que você esperava! Indique para a Uniauto Brasil e lucre a cada contrato fechado.",
  rewardCar: 100,
  rewardMoto: 50,
  superPixGoal: 5, // CORRIGIDO CONFORME PEDIDO DO USUÁRIO: 5 pessoas
  superPixAmount: 1000, // R$ 1.000,00
  ruleNotice: "O valor só será pago via PIX se a proteção for fechada e ativada com o cliente indicado.",
  steps: [
    {
      step: "01",
      title: "Você Indica",
      desc: "Envie o nome e WhatsApp de amigos, familiares ou vizinhos com carro ou moto.",
      icon: "UserPlus",
    },
    {
      step: "02",
      title: "A Uniauto Apresenta",
      desc: "Nossos consultores fazem a cotação personalizada sem compromisso e sem burocracia.",
      icon: "FileCheck",
    },
    {
      step: "03",
      title: "O Amigo Fecha",
      desc: "Assim que seu indicado contratar a proteção (carro a partir de R$ 100 / moto a partir de R$ 50)...",
      icon: "Handshake",
    },
    {
      step: "04",
      title: "Você Ganha Dinheiro no PIX!",
      desc: "R$ 100 por carro, R$ 50 por moto. E se indicar 5 pessoas que fecharem, leva o SUPER PIX DE R$ 1.000,00!",
      icon: "Coins",
    },
  ],
};

export const PLANOS_DATA: PlanoItem[] = [
  {
    id: "moto",
    badge: "Super Econômico",
    title: "Plano Moto & Moto Elétrica",
    subtitle: "Motos a combustão e 100% elétricas",
    priceStartingAt: "50,00",
    pricePeriod: "/mês",
    idealFor: "Entregadores de app, motoboys e quem roda todo dia",
    highlightTag: "A partir de R$ 50,00",
    features: [
      "100% da Tabela FIPE (Roubo e Furto)",
      "Proteção para Motos Elétricas e Convencionais",
      "Especial para Trabalhadores de Aplicativo (iFood, etc.)",
      "Guincho 24 horas em todo o Brasil",
      "Socorro mecânico e elétrico no local",
      "Troca de pneu e chaveiro emergencial",
      "Sem consulta ao SPC / Serasa",
      "Benefício exclusivo: Economia de até 10% na conta de luz",
    ],
  },
  {
    id: "carro",
    badge: "Mais Escolhido • Especial App & Elétricos",
    title: "Plano Carro, App & Elétricos",
    subtitle: "Passeio, Uber, 99, Carros Elétricos & Híbridos",
    priceStartingAt: "100,00",
    pricePeriod: "/mês",
    popular: true,
    idealFor: "Motoristas de aplicativo (Uber/99), carros elétricos e famílias",
    highlightTag: "A partir de R$ 100,00",
    features: [
      "100% da Tabela FIPE (Perda Total, Roubo e Furto)",
      "Especial para Motoristas de Aplicativo (sem taxa extra)",
      "Cobertura para Carros Elétricos (EVs) e Híbridos",
      "Colisão Parcial e Total em oficinas credenciadas",
      "Proteção para Terceiros até R$ 150.000,00",
      "Guincho Ilimitado em caso de colisão",
      "Carro reserva (15 dias ou mais)",
      "Cobertura de vidros, faróis e retrovisores (70%)",
      "Benefício exclusivo: Economia a partir de 10% na conta de luz",
    ],
  },
  {
    id: "utilitario",
    badge: "Trabalho Pesado & Frotas",
    title: "Plano Pick-ups, Vans & Comerciais",
    subtitle: "Caminhonetes, Vans, Utilitários e Caminhões",
    priceStartingAt: "150,00",
    pricePeriod: "/mês",
    idealFor: "Empresas, transporte executivo, produtores e fretes",
    highlightTag: "Cotação Sob Medida",
    features: [
      "100% da Tabela FIPE garantida",
      "Sem análise de perfil de condutor",
      "Proteção de terceiros até R$ 150.000,00",
      "Guincho pesado e socorro rápido 24h",
      "Hospedagem emergencial para passageiros",
      "Rastreamento e telemetria inclusos (veículos elegíveis)",
      "Uni Médicos: Telemedicina para você e sua equipe",
      "Benefício exclusivo: Economia a partir de 10% na fatura de energia",
    ],
  },
];

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
    id: "app-uber",
    title: "Proteção Especial Motorista de App",
    shortDesc: "Feita sob medida para motoristas de Uber, 99 e entregadores, sem travas ou custos abusivos.",
    detail: "Enquanto seguradoras tradicionais cobram o dobro ou recusam quem roda em aplicativo, na Uniauto Brasil você é acolhido com planos justos a partir de R$ 100, guincho rápido e suporte para não perder corridas.",
    iconName: "CarTaxiFront",
    tag: "Uber & 99",
  },
  {
    id: "eletricos",
    title: "Carros & Motos Elétricas (EVs)",
    shortDesc: "Proteção tecnológica especializada para veículos 100% elétricos e híbridos modernos.",
    detail: "Cobrimos componentes elétricos, sistemas de tração, danos por colisão, alagamento e roubo de veículos elétricos e híbridos. Tecnologia de ponta com oficinas capacitadas.",
    iconName: "Zap",
    tag: "Elétricos & Híbridos",
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
    id: "natureza",
    title: "Fenômenos da Natureza",
    shortDesc: "Amparo contra enchentes, alagamentos, queda de árvores e granizo.",
    detail: "Maceió e várias regiões sofrem com tempestades e pontos de alagamento. Na Uniauto você está protegido contra intempéries climáticas que danifiquem a lataria ou parte mecânica.",
    iconName: "CloudRain",
    tag: "Alagamento & Granizo",
  },
  {
    id: "terceiros",
    title: "Proteção para Terceiros até R$ 150.000",
    shortDesc: "Tranquilidade garantida caso você se envolva em acidente com outro veículo.",
    detail: "Cobrimos os danos materiais e corporais involuntários causados a terceiros até R$ 150.000,00, evitando prejuízos astronômicos no seu bolso e desentendimentos.",
    iconName: "Users",
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
    id: "energia",
    title: "Economia a partir de 10% na Conta de Luz",
    desc: "Benefício exclusivo para associados Uniauto: desconto direto na fatura de energia da sua residência ou empresa todo mês!",
    highlight: "Exclusivo Associado",
    iconName: "Lightbulb",
  },
  {
    id: "guincho",
    title: "Guincho Ilimitado (Colisão)",
    desc: "Em caso de colisão, o reboque é ilimitado até a oficina referenciada. Para pane, ampla quilometragem nacional.",
    highlight: "Sem Limite KM p/ Acidente",
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
];

export const DIFERENCIAIS = [
  {
    title: "Especial para Motoristas de App",
    desc: "Proteção completa para Uber, 99 e táxi sem restrições ou cancelamentos. Você roda tranquilo e com renda garantida.",
    icon: "CarTaxiFront",
    color: "from-blue-600 to-[#003DA5]",
    tag: "Uber & 99",
  },
  {
    title: "Carros & Motos Elétricas",
    desc: "Amparo inovador para veículos 100% elétricos e híbridos com oficinas preparadas para baterias e eletrônica.",
    icon: "Zap",
    color: "from-emerald-500 to-[#00A859]",
    tag: "Veículos Elétricos",
  },
  {
    title: "Planos Justos: Moto R$ 50 | Carro R$ 100",
    desc: "Valores transparentes e acessíveis que cabem no bolso, sem fidelidade abusiva e com 100% da Tabela FIPE.",
    icon: "BadgePercent",
    color: "from-amber-500 to-orange-500",
    tag: "Valores Imbatíveis",
  },
  {
    title: "Sem CNH & CRLV de Terceiro",
    desc: "Você não precisa ter habilitação para ser associado e o veículo não precisa estar transferido para o seu nome.",
    icon: "FileCheck",
    color: "from-sky-500 to-blue-600",
    tag: "Zero Burocracia",
  },
  {
    title: "Filiada à FAN • Amparo Nacional",
    desc: "Segurança de uma associação regularizada e filiada à Federação/Associação Nacional de Proteção Veicular.",
    icon: "ShieldCheck",
    color: "from-indigo-600 to-purple-600",
    tag: "Filiada à FAN",
  },
  {
    title: "Sem consulta ao SPC e Serasa",
    desc: "Adesão 100% digital em 2 minutos pelo celular sem travar por score ou restrição de crédito.",
    icon: "Clock",
    color: "from-teal-500 to-emerald-600",
    tag: "Adesão Imediata",
  },
];

export const COMO_FUNCIONA_STEPS = [
  {
    step: "01",
    title: "Faça sua Cotação",
    desc: "Informe seu veículo (carro, moto, elétrico ou app) e receba o valor exato no WhatsApp em menos de 2 minutos.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Escolha o Plano Ideal",
    desc: "Planos a partir de R$ 50,00 para motos e R$ 100,00 para carros com personalização de guincho e terceiros.",
    time: "Sob Medida",
  },
  {
    step: "03",
    title: "Vistoria 100% Digital",
    desc: "Envie as fotos do veículo através do WhatsApp pelo próprio celular, sem precisar agendar vistoriador presencial.",
    time: "100% Online",
  },
  {
    step: "04",
    title: "Veículo Protegido + Conta de Luz -10%",
    desc: "Seu veículo já conta com proteção integral da Uniauto Brasil e você já pode ativar a economia na sua conta de energia.",
    time: "Ativação Imediata",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Eduardo Santos",
    role: "Motorista Uber & 99",
    location: "Maceió - AL (Pajuçara)",
    vehicle: "Chevrolet Onix Plus 2023",
    comment: "Eu rodo mais de 200 km por dia na Uber. As seguradoras queriam me cobrar uma fortuna por ser aplicativo. Na Uniauto pago um valor justo a partir de R$ 100, tenho guincho rápido e ainda ativei o desconto na conta de luz de casa!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    badge: "Motorista de App Verificado",
  },
  {
    id: "2",
    name: "Guilherme Fontes",
    role: "Proprietário de Carro Elétrico (BYD)",
    location: "Maceió - AL (Ponta Verde)",
    vehicle: "BYD Dolphin EV 2024",
    comment: "Tive muita dificuldade de achar proteção com preço coerente para carro elétrico em Maceió. A Uniauto Brasil tem suporte especializado para elétricos com 100% da FIPE. Sensacional!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    badge: "Veículo Elétrico Protegido",
  },
  {
    id: "3",
    name: "Marcos Vinícius",
    role: "Entregador Motoboy (iFood)",
    location: "Maceió - AL (Benedito Bentes)",
    vehicle: "Honda CG 160 Start",
    comment: "Plano para moto por R$ 50 reais que realmente cobre roubo, furto e me dá guincho 24h não existe em outro lugar. Fechei tudo pelo WhatsApp em 10 minutos!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    badge: "Plano Moto R$ 50",
  },
  {
    id: "4",
    name: "Dra. Mariana Lins",
    role: "Médica Veterinária",
    location: "Maceió - AL (Jatiúca)",
    vehicle: "Jeep Renegade",
    comment: "Além da proteção do meu carro ser super completa e sem burocracia, a economia de mais de 10% na minha conta de energia veio direto na fatura. Vale cada centavo ser associada!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    badge: "Associada há 2 anos",
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "A Uniauto cobre motoristas de aplicativo (Uber, 99, táxi e entregadores)?",
    answer: "SIM, COM CERTEZA! A Uniauto Brasil oferece proteção veicular especialmente desenhada para quem trabalha com aplicativo (Uber, 99, táxi e entregadores de moto). Diferente de seguradoras tradicionais que aumentam absurdamente o valor ou recusam motoristas de app, nós temos planos justos com assistência 24h e suporte total para você nunca ficar na mão.",
    category: "App",
  },
  {
    question: "Carros elétricos e motos elétricas têm cobertura na Uniauto?",
    answer: "Sim! Agora a proteção Uniauto Brasil também está disponível para carros elétricos (EVs), híbridos e motos elétricas. Cobrimos colisão, roubo, furto, danos elétricos decorrentes de sinistro e fenômenos naturais, com rede de assistência e guincho preparados para veículos eletrificados.",
    category: "Elétricos",
  },
  {
    question: "Quanto custam os planos da Uniauto Brasil?",
    answer: "Nossos planos são extremamente acessíveis: plano para moto a partir de R$ 50,00/mês e plano para carro a partir de R$ 100,00/mês! Todos com 100% da Tabela FIPE, assistência 24h e sem consulta ao SPC/Serasa.",
    category: "Valores",
  },
  {
    question: "Como funciona a economia a partir de 10% na conta de energia?",
    answer: "É um benefício exclusivo para associados Uniauto Brasil! Através da nossa parceria de energia limpa compartilhada, você garante um desconto a partir de 10% todo mês direto na sua fatura de energia elétrica residencial ou comercial. Sem necessidade de obras, sem placas solares no telhado e sem nenhum custo de instalação.",
    category: "Benefícios",
  },
  {
    question: "A Uniauto Brasil é filiada à FAN?",
    answer: "Sim! A Uniauto Brasil é filiada à FAN (Federação / Associação Nacional de Proteção Veicular), o que atesta a conformidade das nossas regras associativas, solidez patrimonial, transparência de rateio mútuo e respaldo aos direitos de cada associado.",
    category: "Institucional",
  },
  {
    question: "Preciso ter CNH ou o carro quitado e no meu nome?",
    answer: "NÃO! O associado que contrata a proteção veicular não é obrigado a ter CNH. Além disso, o veículo não precisa estar transferido para o seu nome no CRLV (ótimo para quem comprou financiado, de parentes ou está em processo de inventário/transferência).",
    category: "Adesão",
  },
  {
    question: "A Assistência 24h funciona fora de Alagoas?",
    answer: "Sim! A Uniauto possui cobertura e assistência 24 horas em todo o território nacional. Se você viajar para São Paulo, Rio, Bahia, Pernambuco ou qualquer outro estado e precisar de guincho, chaveiro ou socorro mecânico, nossa Central 24h no +55 800 940 0587 (0800 940 0587) ou pelo WhatsApp (82) 99644-5705 atenderá prontamente.",
    category: "Assistência",
  },
  {
    question: "Como funciona a promoção 'Indique e Ganhe' (Indicou, Fechou, Ganhou)?",
    answer: "É muito simples: você indica amigos, conhecidos ou familiares que tenham carro ou moto em Maceió ou qualquer cidade de Alagoas. Quando o cliente fechar e ativar a proteção veicular com a Uniauto, você ganha R$ 100,00 por carro indicado e R$ 50,00 por moto indicada direto no seu PIX! E com a SUPER PROMOÇÃO: indicando 5 pessoas que fecharem o contrato, você garante um SUPER PIX DE R$ 1.000,00! Não há limite de indicações.",
    category: "Indique e Ganhe",
  },
];

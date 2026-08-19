export interface Treatment {
  id: string;
  nome: string;
  tag: string;
  resumo: string;
  descricao: string;
  beneficios: string[];
  duracao: string;
  sessoes: string;
  recuperacao: string;
  indicacao: string;
  src: string;
  alt: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "skincare-avancado",
    nome: "Skincare Avançado & Glow",
    tag: "Revitalização facial",
    resumo: "Hidratação celular profunda, renovação dérmica e viço radiante imediato.",
    descricao: "Protocolo exclusivo que combina higienização ultrassônica, infusão de ativos antioxidantes biocompatíveis e fototerapia LED para restauração da barreira cutânea e viço radiante.",
    beneficios: [
      "Nutrição e hidratação profunda em múltiplas camadas",
      "Redução visível de poros dilatados e linhas finas",
      "Luminosidade instantânea sem descamação agressiva",
      "Estímulo à oxigenação celular e renovação dérmica"
    ],
    duracao: "60 minutos",
    sessoes: "Recomendado mensalmente ou pré-evento",
    recuperacao: "Sem necessidade de repouso (retorno imediato)",
    indicacao: "Peles desidratadas, opacas, com poros dilatados ou sinais de estresse urbano",
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
    alt: "Skincare Avançado e Glow"
  },
  {
    id: "terapia-corporal",
    nome: "Terapia Corporal Avançada",
    tag: "Remodelação e drenagem",
    resumo: "Remodelação estética, desintoxicação linfática e alívio da retenção hídrica.",
    descricao: "Associação de drenagem linfática manual especializada com tecnologia de compressão pneumática e ultrassom estético. Estimula a circulação, reduz medidas e firma os tecidos corporais.",
    beneficios: [
      "Redução imediata do inchaço e da retenção de líquidos",
      "Melhora visível da celulite e do contorno corporal",
      "Ativação profunda da circulação sanguínea e linfática",
      "Sensação imediata de leveza e relaxamento muscular"
    ],
    duracao: "75 minutos",
    sessoes: "Ciclos de 4 a 8 sessões",
    recuperacao: "Sem necessidade de repouso",
    indicacao: "Retenção de líquidos, pré ou pós-viagem, fadiga muscular ou redução de medidas",
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
    alt: "Terapia Corporal e Remodelação"
  },
  {
    id: "harmonizacao-bioestimulador",
    nome: "Harmonização & Bioestimuladores",
    tag: "Estruturação e colágeno",
    resumo: "Realce sutil dos contornos faciais e estímulo natural e contínuo de colágeno.",
    descricao: "Aplicação clínica com microcânulas de ácido hialurônico de alta pureza e bioestimuladores de colágeno, respeitando a anatomia individual para resultados naturais e elegantes.",
    beneficios: [
      "Estímulo duradouro de colágeno e elastina",
      "Definição suave do contorno mandibular, malar e lábios",
      "Efeito lifting não cirúrgico progressivo",
      "Preservação integral da mímica e naturalidade facial"
    ],
    duracao: "50 minutos",
    sessoes: "1 a 3 sessões conforme plano clínico",
    recuperacao: "24 a 48 horas (leve sensibilidade)",
    indicacao: "Flacidez facial, perda de sustentação, linhas de expressão e contorno indefinido",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    alt: "Harmonização Facial e Bioestimuladores"
  },
  {
    id: "laser-premium",
    nome: "Laser Premium & Luz Pulsada",
    tag: "Textura e uniformidade",
    resumo: "Atenuação de manchas solares, melasma e vasinhos, com uniformização do tom da pele.",
    descricao: "Tecnologia de laser fracionado não ablativo e luz intensa pulsada de última geração. Atua com precisão micrométrica nas camadas profundas para renovação celular sem lesionar a superfície.",
    beneficios: [
      "Clareamento uniforme de manchas e hiperpigmentações",
      "Fechamento de poros e refinamento da textura da pele",
      "Atenuação de cicatrizes de acne e vasinhos faciais",
      "Uniformização completa da tonalidade da pele"
    ],
    duracao: "45 minutos",
    sessoes: "3 a 5 sessões personalizadas",
    recuperacao: "2 a 3 dias (leve rubor transitório)",
    indicacao: "Manchas solares, melasma, olheiras pigmentadas e textura irregular",
    src: "/images/laser-premium.jpg",
    alt: "Laser Premium e Luz Pulsada"
  },
  {
    id: "criofrequencia-lifting",
    nome: "Criofrequência & Lifting 3D",
    tag: "Firmeza e tônus",
    resumo: "Choque térmico dérmico para contração instantânea das fibras de colágeno e elastina.",
    descricao: "Combina o resfriamento superficial de até -10 °C com radiofrequência multipolar profunda, promovendo tensão imediata das fibras colágenas e remodelação tecidual.",
    beneficios: [
      "Efeito tensor e de firmeza imediato",
      "Redução visível da papada e flacidez no pescoço e colo",
      "Firmeza dérmica progressiva ao longo das semanas",
      "Procedimento confortável e não invasivo"
    ],
    duracao: "50 minutos",
    sessoes: "4 a 6 sessões quinzenais",
    recuperacao: "Sem tempo de repouso",
    indicacao: "Flacidez facial e corporal, e contorno mandibular com perda de definição",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop",
    alt: "Criofrequência e Firmeza 3D"
  },
  {
    id: "peeling-regenerador",
    nome: "Peeling Enzimático",
    tag: "Renovação celular",
    resumo: "Esfoliação biológica inteligente para renovação suave e desobstrução profunda.",
    descricao: "Aplicação de enzimas vegetais e ácidos orgânicos de liberação gradual que dissolvem células mortas sem agredir o manto lipídico protetor da pele, devolvendo maciez e luminosidade sedosa.",
    beneficios: [
      "Renovação suave sem descamação agressiva ou vermelhidão excessiva",
      "Pele com toque sedoso e viço imediato",
      "Melhora na absorção de cosméticos e rotinas de autocuidado",
      "Ação antioxidante contra radicais livres"
    ],
    duracao: "40 minutos",
    sessoes: "Sessões a cada 21 a 30 dias",
    recuperacao: "Sem necessidade de repouso",
    indicacao: "Todos os tipos de pele, especialmente sensíveis ou com sinais de cansaço",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    alt: "Peeling Enzimático Regenerador"
  }
];

export interface Testimonial {
  id: string;
  nome: string;
  idade: string;
  tratamento: string;
  depoimento: string;
  nota: number;
  foto: string;
  resultado: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    nome: "Helena Albuquerque",
    idade: "38 anos",
    tratamento: "Harmonização Natural & Bioestimulador",
    depoimento: "Meu maior receio era ficar com um aspecto artificial. A equipe da Aura entendeu exatamente o que eu buscava: realçar meu contorno sem descaracterizar meus traços. O resultado ficou impecável e a pele ganhou uma luminosidade incrível.",
    nota: 5,
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    resultado: "Firmeza restaurada e contorno elegante"
  },
  {
    id: "2",
    nome: "Carolina Mendes",
    idade: "32 anos",
    tratamento: "Laser Premium & Glow Facial",
    depoimento: "Tratava manchas de sol e melasma há bastante tempo. Após o protocolo personalizado de 4 sessões com o Laser Premium, minha pele transformou-se por completo. O tom ficou uniforme e hoje me sinto muito segura sem maquiagem pesada.",
    nota: 5,
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    resultado: "Tom uniforme e manchas atenuadas significativamente"
  },
  {
    id: "3",
    nome: "Patrícia Vianna",
    idade: "44 anos",
    tratamento: "Criofrequência & Terapia Corporal",
    depoimento: "A experiência na clínica é um verdadeiro momento de pausa e autocuidado. O atendimento privativo, a pontualidade e a atenção a cada detalhe transmitem muita confiança. Os resultados corporais superaram minhas expectativas.",
    nota: 5,
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    resultado: "Redução de medidas e firmeza cutânea"
  }
];

export interface BeforeAfterItem {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  tempoTratamento: string;
  imagemAntes: string;
  imagemDepois: string;
}

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: "ba-1",
    titulo: "Uniformização de manchas e rejuvenescimento",
    categoria: "Laser Premium & Glow",
    descricao: "Tratamento de hiperpigmentação solar e estímulo de colágeno dérmico após 4 sessões.",
    tempoTratamento: "60 dias (4 sessões)",
    imagemAntes: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    imagemDepois: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ba-2",
    titulo: "Harmonização de terço médio e mandíbula",
    categoria: "Bioestimulador & Preenchimento sutil",
    descricao: "Definição do arco mandibular e suporte malar respeitando as proporções naturais da paciente.",
    tempoTratamento: "Resultado após 30 dias",
    imagemAntes: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    imagemDepois: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
  }
];

export interface FAQItem {
  pergunta: string;
  resposta: string;
  categoria: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    categoria: "Avaliação",
    pergunta: "Como funciona a primeira consulta de avaliação?",
    resposta: "Em sua primeira visita, realizamos um escaneamento dérmico detalhado e uma análise clínica das necessidades da sua pele e contornos. Juntos, definimos um protocolo individualizado, alinhando expectativas a resultados naturais e seguros."
  },
  {
    categoria: "Conforto",
    pergunta: "Os procedimentos estéticos causam dor ou desconforto?",
    resposta: "Priorizamos o máximo conforto. Utilizamos anestésicos tópicos de alta potência, técnicas com microcânulas atraumáticas e equipamentos com resfriamento cutâneo contínuo, tornando as sessões muito confortáveis e praticamente indolores."
  },
  {
    categoria: "Recuperação",
    pergunta: "Qual é o tempo de recuperação após as sessões?",
    resposta: "A maioria dos nossos tratamentos não exige afastamento da sua rotina de trabalho ou atividades diárias. No caso de lasers mais profundos, pode haver um leve rubor ou inchaço transitório de 24 a 48 horas, facilmente manejável com as orientações pós-procedimento."
  },
  {
    categoria: "Personalização",
    pergunta: "Posso combinar mais de um procedimento no mesmo dia?",
    resposta: "Sim. Trabalhamos com o conceito de protocolos combinados e integrados (por exemplo: higienização profunda, laser e hidratação celular). Essa sinergia potencializa os resultados e otimiza o seu tempo."
  },
  {
    categoria: "Pagamento",
    pergunta: "Quais são as formas e condições de pagamento?",
    resposta: "Aceitamos cartões de crédito com parcelamento em até 10 vezes sem juros, Pix e transferências bancárias. Planos de tratamento e pacotes personalizados possuem condições facilitadas."
  },
  {
    categoria: "Segurança",
    pergunta: "Todos os produtos e equipamentos são certificados?",
    resposta: "Sim. Todos os nossos insumos (como ácido hialurônico, bioestimuladores e ativos cosmecêuticos) e tecnologias possuem aprovação da ANVISA e são manuseados exclusivamente por profissionais de saúde especializados."
  }
];

export const CLINIC_STATS = [
  { valor: "+4.800", label: "Pacientes atendidos" },
  { valor: "99,4%", label: "Índice de satisfação" },
  { valor: "8+", label: "Anos de experiência" },
  { valor: "100%", label: "Protocolos personalizados" }
];

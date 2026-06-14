import { Landmark } from '../types';

export const LANDMARKS_DATA: Landmark[] = [
  {
    id: 'rosa-dos-ventos',
    name: 'Rosa dos Ventos de Cícero Dias',
    shortDescription: 'O magnífico mosaico colorido que cobre o chão da Praça Barão do Rio Branco (Marco Zero).',
    longDescription: 'Inaugurado em 1999 como parte da revitalização do Recife Antigo, este mosaico monumental de 900 metros quadrados cobre a Praça Barão do Rio Branco, conhecida popularmente como Praça do Marco Zero. Desenhada pelo célebre pintor pernambucano Cícero Dias e inspirada em sua obra modernista, a Rosa dos Ventos traz cores vibrantes inspiradas no sol, mar e folhagens do nosso estado, integrando o imponente obelisco central que marca o quilômetro zero das estradas federais e estaduais do estado. Ao redor, está escrita a famosa frase de Capistrano de Abreu: "Aqui nasce o Brasil".',
    image: 'https://images.unsplash.com/photo-1628153401140-5477038e235e?auto=format&fit=crop&w=1200&q=80',
    category: 'arte',
    year: '1999',
    author: 'Cícero Dias',
    locationTip: 'Fica exatamente no centro da Praça Barão do Rio Branco (Marco Zero). Recomenda-se olhar de um ângulo elevado para ver o desenho completo.',
    curiosity: 'A praça oficialmente se chama Praça Barão do Rio Branco, sendo o marco de fundação da cidade e do porto comercial de Pernambuco. Cícero Dias estava com 91 anos quando desenhou esse piso magnífico diretamente de Paris.',
    mapCoords: { x: 50, y: 55 }
  },
  {
    id: 'parque-esculturas',
    name: 'Parque das Esculturas Francisco Brennand',
    shortDescription: 'O icônico museu a céu aberto construído sobre o recife natural.',
    longDescription: 'Construído no ano 2000 em comemoração aos 500 anos do descobrimento do Brasil, o Parque das Esculturas abriga mais de 90 obras de cerâmica e bronze do genial artista Francisco Brennand. O monumento central é a imponente "Coluna de Cristal", com 32 metros de altura, cercada por guerreiros, sereias e figuras mitológicas que parecem guardar a rica entrada do porto histórico do Recife.',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=1200&q=80',
    category: 'arte',
    year: '2000',
    author: 'Francisco Brennand',
    locationTip: 'Fica no molhe de pedras em frente à praça. Para chegar lá, você pega uma charmosa travessia de barco típica com os barqueiros do Marco Zero.',
    curiosity: 'A Coluna de Cristal de Brennand é inspirada em uma flor e foi confeccionada em argila vitrificada, brilhando intensamente sob o sol do final de tarde de Pernambuco.',
    mapCoords: { x: 82, y: 35 }
  },
  {
    id: 'centro-artesanato',
    name: 'Centro de Artesanato de Pernambuco',
    shortDescription: 'A maior vitrine de arte popular e artesanato do estado.',
    longDescription: 'Ocupando um antigo armazém portuário requalificado, o Centro de Artesanato reúne milhares de peças criadas por mestres artesãos de todo o estado. Ali se encontram esculturas em barro inspiradas por Mestre Vitalino, rendas de bilro, xilogravuras do cordel, e obras em madeira e metal, representando o pulsar da rica identidade de Pernambuco.',
    image: 'https://images.unsplash.com/photo-1513519107129-14a172e38d75?auto=format&fit=crop&w=1200&q=80',
    category: 'arquitetura',
    year: '2012',
    locationTip: 'Localizado no Armazém 11, bem ao lado esquerdo da praça principal do Marco Zero.',
    curiosity: 'É considerado o maior centro de artesanato de todo o Brasil focado em produção regional, aglutinando trabalhos de mais de 1.400 artesãos pernambucanos.',
    mapCoords: { x: 30, y: 40 }
  },
  {
    id: 'rua-bom-jesus',
    name: 'Rua do Bom Jesus',
    shortDescription: 'Uma das ruas mais bonitas do mundo, cheia de cores, casarões e história.',
    longDescription: 'Votada pela revista norte-americana Architectural Digest como uma das ruas mais deslumbrantes do planeta, a antiga "Rua dos Judeus" abriga a Sinagoga Kahal Zur Israel, que é a primeira sinagoga das Américas, fundada no século XVII. Próxima a ela, a famosa estátua de bronze do cantor Chico Science saúda os pedestres com sua pose clássica de manguebeat.',
    image: 'https://images.unsplash.com/photo-1596738141905-51e94b519d69?auto=format&fit=crop&w=1200&q=80',
    category: 'historia',
    year: 'Século XVII',
    locationTip: 'A apenas 150 metros da praça do Marco Zero, caminhando em direção ao norte.',
    curiosity: 'Durante a ocupação holandesa sob a liderança de Maurício de Nassau, a rua foi o polo financeiro e residencial mais importante dos mercadores judeus que chegaram de Amsterdã.',
    mapCoords: { x: 38, y: 15 }
  },
  {
    id: 'bonecos-gigantes',
    name: 'Embaixada dos Bonecos Gigantes',
    shortDescription: 'Um espaço fantástico onde ficam expostos os famosos e expressivos bonecos carnavalescos.',
    longDescription: 'Localizada no Recife Antigo, a Embaixada dos Bonecos Gigantes é o lar permanente de dezenas de personagens esculpidos com cabeças monumentais de argila e fibra de vidro. Esses gigantes de até 4 metros de altura representam figuras influentes da cultura nacional e internacional, do esporte à política, prontas para encantar os visitantes e ilustrar a essência da folia de Pernambuco o ano inteiro.',
    image: 'https://images.unsplash.com/photo-1512411995873-1fcfbf25539d?auto=format&fit=crop&w=1200&q=80',
    category: 'arte',
    year: '2008',
    locationTip: 'Fica na charmosa Rua do Bom Jesus, número 183. Perfeito para visitar em conjunto com a Sinagoga.',
    curiosity: 'Cada boneco carnavalesco pode pesar em média 20 kg e requer grande habilidade e preparo físico do brincante que o carrega por baixo das vestes nas ladeiras de Olinda e avenidas do Recife.',
    mapCoords: { x: 42, y: 22 }
  },
  {
    id: 'caixa-cultural',
    name: 'Caixa Cultural & Prédio da Associação Comercial',
    shortDescription: 'Magníficos palacetes ecléticos transformados em espaços de arte e cultura.',
    longDescription: 'Estes imponentes edifícios de arquitetura eclética e neoclássica do início do século XX testemunharam a glória do comércio cafeeiro e açucareiro do porto do Recife. Hoje, as fachadas preservadas abrigam galerias de arte contemporânea, museus de fotografia, salas de cinema alternativo e exposições interativas gratuitas de grande importância nacional.',
    image: 'https://images.unsplash.com/photo-1582555762499-79aef45a42f6?auto=format&fit=crop&w=1200&q=80',
    category: 'arquitetura',
    year: '1912',
    locationTip: 'Localizados diretamente na praça principal Rio Branco, de frente para a Rosa dos Ventos.',
    curiosity: 'A cúpula de vidro do Prédio da Associação Comercial de Pernambuco é uma joia da engenharia francesa do início do século, trazida de navio em peças individuais.',
    mapCoords: { x: 18, y: 72 }
  },
  {
    id: 'arrecifes-porto',
    name: 'Os Arrecifes do Recife Antigo',
    shortDescription: 'As barreiras de coral naturais que deram nome à Veneza Brasileira.',
    longDescription: 'Os recifes de arenito natural datam de milhões de anos e formam uma barreira de proteção espetacular que permitiu o nascimento do Porto do Recife e deu nome à própria capital pernambucana. Eles acalmam a fúria das ondas do Atlântico e criam uma bacia portuária tranquila perfeita para a observação da vida marinha, passeios fotográficos e contemplação da brisa marítima.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
    category: 'natureza',
    locationTip: 'Podem ser vistos em toda a extensão do molhe onde fica o Parque das Esculturas de Brennand.',
    curiosity: 'A palavra "Recife" deriva do árabe "ar-raçif", que significa "calçada", "estrada assentada" ou "dique", uma rampa perfeita de pedra esculpida pelo vento e oceano.',
    mapCoords: { x: 75, y: 70 }
  }
];

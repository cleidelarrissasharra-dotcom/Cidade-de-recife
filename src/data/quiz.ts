import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Quem é o artista consagrado responsável pelo design colorido no piso da praça do Marco Zero?',
    options: [
      'Francisco Brennand',
      'Cícero Dias',
      'Romero Britto',
      'Mestre Vitalino'
    ],
    correctIndex: 1,
    explanation: 'A famosa Rosa dos Ventos do Marco Zero foi projetada pelo artista modernista Cícero Dias em 1999, medindo 900 metros quadrados de puro granito colorido.'
  },
  {
    id: 2,
    question: 'A Coluna de Cristal de 32 metros de altura está localizada em qual espaço em frente ao Marco Zero?',
    options: [
      'Parque das Esculturas Francisco Brennand',
      'Rua do Bom Jesus',
      'Instituto Ricardo Brennand',
      'Cais do Sertão'
    ],
    correctIndex: 0,
    explanation: 'A monumental Coluna de Cristal, obra do ceramista Francisco Brennand, ergue-se imponente no Parque das Esculturas, situado na barreira natural de recifes que protege o porto.'
  },
  {
    id: 3,
    question: 'A Rua do Bom Jesus, votada como uma das mais bonitas do mundo, abriga um marco pioneiro na história das Américas. Qual é?',
    options: [
      'O primeiro arranha-céu americano',
      'O primeiro farol marítimo do Atlântico Sul',
      'A primeira sinagoga das Américas (Kahal Zur Israel)',
      'O primeiro teatro de ópera neoclássico'
    ],
    correctIndex: 2,
    explanation: 'Fundada em 1636 durante o período holandês liderado por Maurício de Nassau, a Kahal Zur Israel é a sinagoga mais antiga do continente americano.'
  },
  {
    id: 4,
    question: 'O que o imponente obelisco central do Marco Zero marca geograficamente para o estado de Pernambuco?',
    options: [
      'O ponto de maior altitude do estado',
      'O quilômetro zero para a medição das rodovias do estado',
      'O local exato onde desembarcaram os generais holandeses',
      'O túmulo secreto do fundador Duarte Coelho'
    ],
    correctIndex: 1,
    explanation: 'O Marco Zero marca o início físico da contagem das distâncias de todas as estradas federais e estaduais que partem de Pernambuco.'
  },
  {
    id: 5,
    question: 'Qual manifestação cultural, patrimônio imaterial da humanidade, domina o Marco Zero com guarda-chuvas coloridos e passos frenéticos no Carnaval?',
    options: [
      'Maracatu Nação',
      'Frevo',
      'Caboclinho',
      'Coco de Roda'
    ],
    correctIndex: 1,
    explanation: 'O Frevo, famoso por seu andamento acelerado, som de metais vibrantes e as famosas sombrinhas multicoloridas, tem o Marco Zero como um de seus pontos clássicos de celebração cultural.'
  }
];

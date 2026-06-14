export interface Landmark {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: 'arte' | 'historia' | 'arquitetura' | 'natureza';
  year?: string;
  author?: string;
  locationTip: string;
  curiosity: string;
  // Canvas coordinate for the visual interactive map
  mapCoords: { x: number; y: number };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Postcard {
  id: string;
  senderName: string;
  receiverName: string;
  message: string;
  backgroundImage: string;
  stamp: string; // 'frevo' | 'lighthouse' | 'sun' | 'brennand'
  stampPosition: string; // css coords
  createdAt: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    type: 'mega' | 'dj-night';
    rules?: string[];
    registerInfo?: {
      fee: string;
      prizes: string[];
      date: string;
      contact: string;
    };
    freeEntry?: boolean;
    venue: string;
    time: string;
    eventDate: string;
    qrCode?: string;
  }
  
  export interface Club {
    id: string;
    name: string;
    description: string;
    image: string;
  }

  export interface ClubEvent {
    id: string;
    title: string;
    description: string;
    rules: string[];
    date: string;
    time: string;
    fee: string;
    prize1: string;
    prize2: string;
    image: string;
  }
export interface CardContentTitle {
  text: string;
}

export interface CardContentBody {
  text: string;
}

export interface CardDateConfig {
  cardUrl?: string;
  cardDate: string;
  cardContentTitle: CardContentTitle;
  cardContentBody: CardContentBody;
}

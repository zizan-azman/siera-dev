export interface CardContentTitle {
  text: string;
}

export interface CardContentBody {
  text: string;
}

export interface CardDateConfig {
  cardURL?: string;
  cardDate: string;
  cardContentTitle: CardContentTitle;
  cardContentBody: CardContentBody;
}

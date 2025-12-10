import { CardTeaserConfig } from '@siera-dev/maine-shared';

export const MockCardGhostTeaser: CardTeaserConfig = {
  heading: 'Tentang Kami',
  cardsType: 'ghost',
  cards: [
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Siapa kami',
        priority: 'low',
      },
      cardContentTitle: { text: 'Siapa kami' },
      cardContentBody: {
        text: `Siera.my ialah pusat perlindungan kucing yang memberi tumpuan kepada penyelamatan, rawatan, dan perlindungan berterusan untuk kucing terbiar di Malaysia.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Misi Siera.my',
        priority: 'low',
      },
      cardContentTitle: { text: 'Misi kami' },
      cardContentBody: {
        text: `Kami berusaha menyediakan penjagaan veterinar mampu milik, meningkatkan kesedaran masyarakat, dan membantu lebih banyak kucing mendapatkan kehidupan lebih baik.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Cara operasi kami',
        priority: 'low',
      },
      cardContentTitle: { text: 'Cara kami beroperasi' },
      cardContentBody: {
        text: `Dengan pasukan sukarelawan dan doktor bertauliah, kami memastikan setiap kucing menerima perhatian, keselesaan dan rawatan sewajarnya.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Inisiatif komuniti',
        priority: 'low',
      },
      cardContentTitle: { text: 'Komuniti & tanggungjawab' },
      cardContentBody: {
        text: `Kami menjalankan program komuniti menjangkau sekolah, perumahan dan komuniti setempat bagi memupuk penjagaan kucing beretika.`,
      },
    },
  ],
};

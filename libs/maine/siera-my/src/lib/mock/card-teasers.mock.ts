import { CardTeaserConfig } from '@siera-dev/maine-shared';

// export const MockCardTeasers: CardTeaserConfig[] = [
//   {
//     cardsType: 'default',
//     cards: [
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-2.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'Title' },
//         cardContentBody: {
//           text: `Siera is equipped with spacious and comfortable indoor shelter.`,
//         },
//       },
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-1.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'New' },
//         cardContentBody: {
//           text: `Beautiful.`,
//         },
//       },
//     ],
//   },
//   {
//     cardsType: 'default',
//     cards: [
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-2.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'Title' },
//         cardContentBody: {
//           text: `Siera is equipped with spacious and comfortable indoor shelter.`,
//         },
//       },
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-1.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'New' },
//         cardContentBody: {
//           text: `Beautiful.`,
//         },
//       },
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-1.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'New' },
//         cardContentBody: {
//           text: `Beautiful.`,
//         },
//       },
//     ],
//   },
//   {
//     cardsType: 'default',
//     cards: [
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-2.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'Title' },
//         cardContentBody: {
//           text: `Siera is equipped with spacious and comfortable indoor shelter.`,
//         },
//       },
//       {
//         cardType: 'default',
//         cardURL: '/',
//         cardImage: {
//           path: 'maine-assets/images/siera-1.png',
//           alt: 'Test',
//           priority: 'low',
//         },
//         cardContentTitle: { text: 'New' },
//         cardContentBody: {
//           text: `Beautiful.`,
//         },
//       },
//     ],
//   },
// ];

export const MockCardTeasers: CardTeaserConfig[] = [
  // --- Top Row (2 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Siera.my pusat perlindungan kucing',
          priority: 'low',
        },
        cardContentTitle: { text: 'Menyelamat & Melindungi Kucing Malaysia' },
        cardContentBody: {
          text: `Pasukan kami berdedikasi dalam menyelamatkan kucing terbiar, terabai, atau cedera — memberikan mereka rawatan dan harapan baharu.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Siera.my habitat semula jadi kucing',
          priority: 'low',
        },
        cardContentTitle: { text: 'Habitat Selesa Untuk Pemulihan' },
        cardContentBody: {
          text: `Setiap ruang disusun dengan teliti untuk meniru suasana semula jadi, membantu kucing berehat, pulih, dan membina keyakinan.`,
        },
      },
    ],
  },

  // --- Middle Row (3 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Siera.my program penjagaan kesihatan',
          priority: 'low',
        },
        cardContentTitle: { text: 'Penjagaan Kesihatan Menyeluruh' },
        cardContentBody: {
          text: `Doktor veterinar kami memastikan setiap kucing menerima vaksinasi, pemeriksaan berkala, rawatan kecemasan, dan sokongan pemulihan.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Siera.my program angkat kucing',
          priority: 'low',
        },
        cardContentTitle: {
          text: 'Program Pengangkatan yang Bertanggungjawab',
        },
        cardContentBody: {
          text: `Kami memadankan kucing dengan keluarga yang sesuai melalui proses angkat yang teliti, memastikan keserasian dan komitmen jangka panjang.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Siera.my komuniti penyayang',
          priority: 'low',
        },
        cardContentTitle: { text: 'Membina Komuniti Penyayang Haiwan' },
        cardContentBody: {
          text: `Ikuti bengkel, kempen kesedaran, dan program komuniti kami untuk menyebarkan ilmu tentang penjagaan haiwan dan pemilikan yang bertanggungjawab.`,
        },
      },
    ],
  },

  // --- Bottom Row (2 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Pengalaman lawatan Siera.my',
          priority: 'low',
        },
        cardContentTitle: { text: 'Alami Suasana Tenang & Mesra Haiwan' },
        cardContentBody: {
          text: `Tempah lawatan dan nikmati masa bersama kucing yang diselamatkan sambil belajar tentang cara penjagaan dan rehabilitasi mereka.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Sumbangan dan impak',
          priority: 'low',
        },
        cardContentTitle: { text: 'Sumbangan Anda Mengubah Kehidupan' },
        cardContentBody: {
          text: `Setiap derma dan sokongan membantu kami menyediakan makanan, rawatan, dan ruang perlindungan yang lebih selamat untuk lebih banyak kucing.`,
        },
      },
    ],
  },
];

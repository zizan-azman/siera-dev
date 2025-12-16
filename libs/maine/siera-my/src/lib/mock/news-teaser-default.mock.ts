import { NewsTeaserDefaultConfig } from '@siera-dev/maine-shared';

export const MockNewsTeaserDefault: NewsTeaserDefaultConfig = {
  heading: 'Berita terkini',
  news: [
    {
      cardUrl: '/',
      cardDateDay: '9',
      cardDateMonth: 'Jul',
      cardContentTitle: 'Berita',
      cardContentBody:
        'Siera.my melancarkan kempen bantuan makanan kucing jalanan di seluruh Lembah Klang.',
    },
    {
      cardUrl: '/',
      cardDateDay: '25',
      cardDateMonth: 'Jun',
      cardContentTitle: 'Berita',
      cardContentBody:
        'Program pemvaksinan percuma Siera.my menarik lebih 500 pemilik kucing dalam sehari.',
    },
    {
      cardUrl: '/',
      cardDateDay: '7',
      cardDateMonth: 'Jun',
      cardContentTitle: 'Pengumuman',
      cardContentBody:
        'Pusat penjagaan baharu di Shah Alam kini dibuka dengan kapasiti 50 ekor kucing.',
    },
    {
      cardUrl: '/',
      cardDateDay: '16',
      cardDateMonth: 'Mei',
      cardContentTitle: 'Berita',
      cardContentBody:
        'Siera.my bekerjasama dengan NGO tempatan untuk menyelamatkan koloni kucing terbiar.',
    },
    {
      cardUrl: '/',
      cardDateDay: '5',
      cardDateMonth: 'Apr',
      cardContentTitle: 'Berita',
      cardContentBody:
        'Program angkat kucing Siera.my mencatat peningkatan 40% dalam sebulan.',
    },
    {
      cardUrl: '/',
      cardDateDay: '12',
      cardDateMonth: 'Mar',
      cardContentTitle: 'Pengumuman',
      cardContentBody:
        'Siera.my memperkenalkan portal pendidikan baharu mengenai penjagaan kucing yang betul.',
    },
  ],
  cta: {
    url: '/',
    color: 'primary',
    type: 'ghost',
    linkArrowText: { text: 'Lihat semua berita', textSize: 'default' },
    isRouteNavigation: true,
  },
};

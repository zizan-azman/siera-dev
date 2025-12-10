import { HeroDefaultConfig } from '@siera-dev/maine-shared';

export const MockHeroDefault: HeroDefaultConfig = {
  heroHeading: false,
  heroHeadingText: `Perlindungan dan <span class="ma-hero-default__highlight">kasih sayang</span> untuk setiap kucing yang memerlukan`,
  heroImage: {
    imagePath: 'siera-my-assets/images/hero/siera-shelter-1.jpg',
    imageAlt: 'Ilustrasi Pusat Perlindungan Kucing Siera di Malaysia',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Di Siera, kami menyediakan tempat perlindungan, rawatan veterinar, serta peluang penjagaan dan pengambilan angkat untuk kucing dari pelbagai latar belakang.',
    ctaArrow: {
      url: '/perkhidmatan',
      linkArrowText: { text: 'Lihat perkhidmatan', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `Misi kami adalah untuk membina komuniti penyayang di mana setiap kucing diberi peluang hidup yang lebih baik — dengan keselamatan, penjagaan dan perhatian yang berkualiti.`,
    ctaDefault: {
      url: '/tentang',
      type: 'outline',
      linkDefaultText: {
        text: 'Ketahui lebih lanjut',
        textSize: 'default',
      },
    },
  },
};

export const MockHeroDefault2: HeroDefaultConfig = {
  heroHeading: true,
  heroHeadingText: `Santai bersama <span class="ma-hero-default__highlight">kucing</span>, alami ketenangan di Siera`,
  heroImage: {
    imagePath: 'maine-assets/images/siera-1.png',
    imageAlt: 'Ilustrasi Pengunjung di Pusat Kucing Siera',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Kunjungi pusat perlindungan kami yang mesra pengunjung, temui kucing-kucing manja, dan pelajari tentang usaha kami menjaga serta menyelamatkan haiwan yang memerlukan.',
    ctaArrow: {
      url: '/lawatan',
      linkArrowText: { text: 'Tempah lawatan', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `Siera menawarkan pengalaman penuh ketenangan dan kasih sayang — satu tempat di mana anda boleh berhubung dengan alam, haiwan, dan komuniti penyayang.`,
    ctaDefault: {
      url: '/tentang',
      type: 'outline',
      linkDefaultText: {
        text: 'Ketahui lebih lanjut',
        textSize: 'default',
      },
    },
  },
};

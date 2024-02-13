import { SiSketchup } from "react-icons/si";
import { Enscape, Lumion, Sketchup } from "./icons";

type Icon = {
  SvgIcon: any;
  title: string;
};

type Project = {
  title: string;
  shortDescription: string;
  descriptions: Array<string>;
  urlDirect?: string;
  srcImage: string;
  srcImages: Array<string>;
  githubRepo?: string;
  tags?: Array<string>;
  icons: Array<Icon>;
};

export const Projects: Array<Project> = [
  {
    title: 'Bedroom Set',
    shortDescription: `Dengan keselarasan dan perhatian terhadap detail, bedroom set ini mencerminkan sentuhan estetika modern. Saya sebagai perancangnya, secara pribadi menekuni setiap elemen untuk menciptakan tempat beristirahat ramah keluarga dengan sentuhan pribadi yang unik.`,

    descriptions: [`Keselarasan dan perhatian terhadap detail benar-benar menghidupkan bedroom set ini, mengambil inspirasi dari estetika modern. Terletak di lingkungan yang tenang, proyek ini mencerminkan dedikasi penuh saya sebagai perancang tanpa melibatkan kontribusi eksternal. Saya dengan tekun merancang bedroom set ini agar menjadi tempat beristirahat modern yang ramah keluarga, menggambarkan selera pribadi saya dengan cermat, dan menjadi rumah bagi koleksi seni, perabotan, dan objek berharga yang saya kumpulkan.`, `Gaya desain yang menggabungkan elemen-elemen halus dan kepraktisan fungsional desain modern membuat twin bed menjadi pusat perhatian, memberikan sentuhan kenyamanan dan gaya. Setiap elemen, dari cermin ornamen hingga garis bersih lemari dapur Poliform tanpa bingkai, dipilih dengan cermat untuk meningkatkan keindahan keseluruhan.`, `Melalui dokumentasi visual proyek ini, saya berusaha menunjukkan bagaimana elemen-elemen tradisional dan kontemporer dapat menyatu dengan harmonis, menciptakan bedroom set yang tidak hanya memenuhi kebutuhan praktis kehidupan modern, tetapi juga menjadi ekspresi pribadi yang mencerminkan desain unik dan selera saya sebagai perancangnya.`],
    srcImage: '/img/projects/p1.webp',
    srcImages: [
      '/img/projects/p1.webp',
      '/img/projects/p2.webp',
      '/img/projects/p3.webp',
      '/img/projects/p4.webp',
      '/img/projects/p5.webp',
      '/img/projects/p6.webp',
      '/img/projects/p7.webp',
    ],
    tags: ['Interior'],
    icons: [
      {
        SvgIcon: Sketchup,
        title: 'Sketchup',
      },
      {
        SvgIcon: Lumion,
        title: 'Lumion',
      },
      {
        SvgIcon: Enscape,
        title: 'Enscape',
      },
    ],
  },
];

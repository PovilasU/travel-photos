import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Sun from '../images/sun.jpg';

const IMAGES = [
  {
    src: 'https://i.ibb.co/58d7hth/20191122-101021.jpg',
    thumbnail: 'https://i.ibb.co/58d7hth/20191122-101021.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 174,
    isSelected: false,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
    // thumbnailCaption: 'Image 1',
  },
  {
    src: 'https://i.ibb.co/zPNwXtb/20191122-091929.jpg',
    thumbnail: 'https://i.ibb.co/zPNwXtb/20191122-091929.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // tags: [
    //   { value: 'Ocean', title: 'Ocean' },
    //   { value: 'People', title: 'People' },
    // ],
    // caption: 'Boats (Jeshu John - designerspics.com)',
    // thumbnailCaption: 'Image 2',
  },

  {
    src: 'https://i.ibb.co/cCt30cT/20191120-224516.jpg',
    thumbnail: 'https://i.ibb.co/cCt30cT/20191120-224516.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Night view',
  },
  {
    src: 'https://i.ibb.co/kg39yy8/20191121-110104.jpg',
    thumbnail: 'https://i.ibb.co/kg39yy8/20191121-110104.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Image 4',
  },
  {
    src: 'https://i.ibb.co/vcY0vQp/20191122-091111.jpg',
    thumbnail: 'https://i.ibb.co/vcY0vQp/20191122-091111.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Image 5',
  },
  {
    src: 'https://i.ibb.co/9nGMzvB/20191122-090535.jpg',
    thumbnail: 'https://i.ibb.co/9nGMzvB/20191122-090535.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Image 6',
  },
  {
    src: 'https://i.ibb.co/KWd6Kxs/20191121-163957.jpg',
    thumbnail: 'https://i.ibb.co/KWd6Kxs/20191121-163957.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Image 7',
  },
  {
    src: 'https://i.ibb.co/m4YZrCC/20191123-131400.jpg',
    thumbnail: 'https://i.ibb.co/M7jwyDD/20191123-131400.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 212,
    // thumbnailCaption: 'Image 3',
  },
];
export default function Gallery1() {
  return (
    <div>
      <h2>Brazil, Rio 2019</h2>
      <Gallery images={IMAGES} />
    </div>
  );
}

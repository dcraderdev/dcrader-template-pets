import type { ImageMetadata } from 'astro';

import img1438 from '../assets/images/photo-1438761681033-6461ffad8d80.webp';
import img1472 from '../assets/images/photo-1472099645785-5658abf4ff4e.webp';
import img1494 from '../assets/images/photo-1494790108377-be9c29b29330.webp';
import img1500 from '../assets/images/photo-1500648767791-00dcc994a43e.webp';
import img1505 from '../assets/images/photo-1505628346881-b72b27e84530.webp';
import img1507 from '../assets/images/photo-1507003211169-0a1dd7228f2d.webp';
import img1510 from '../assets/images/photo-1510771463146-e89e6e86560e.webp';
import img1518 from '../assets/images/photo-1518717758536-85ae29035b6d.webp';
import img1529 from '../assets/images/photo-1529472119196-cb724127a98e.webp';
import img1534 from '../assets/images/photo-1534361960057-19889db9621e.webp';
import img1537 from '../assets/images/photo-1537151608828-ea2b11777ee8.webp';
import img1546 from '../assets/images/photo-1546238232-20216dec9f72.webp';
import img1548 from '../assets/images/photo-1548199973-03cce0bbc87b.webp';
import img1559 from '../assets/images/photo-1559839734-2b71ea197ec2.webp';
import img1560g from '../assets/images/photo-1560743641-3914f2c45636.webp';
import img1560b from '../assets/images/photo-1560807707-8cc77767d783.webp';
import img1561 from '../assets/images/photo-1561037404-61cd46aa615b.webp';
import img1576 from '../assets/images/photo-1576201836106-db1758fd1c97.webp';
import img1580 from '../assets/images/photo-1580489944761-15a19d654956.webp';
import img1583a from '../assets/images/photo-1583511655826-05700d52f4d9.webp';
import img1583b from '../assets/images/photo-1583512603806-077998240c7a.webp';
import img1587 from '../assets/images/photo-1587300003388-59208cc962cb.webp';
import img1588 from '../assets/images/photo-1588943211346-0908a1fb0b01.webp';
import img1601 from '../assets/images/photo-1601758125946-6ec2ef64daf8.webp';

export const images: Record<string, ImageMetadata> = {
  '1438761681033': img1438,
  '1472099645785': img1472,
  '1494790108377': img1494,
  '1500648767791': img1500,
  '1505628346881': img1505,
  '1507003211169': img1507,
  '1510771463146': img1510,
  '1518717758536': img1518,
  '1529472119196': img1529,
  '1534361960057': img1534,
  '1537151608828': img1537,
  '1546238232': img1546,
  '1548199973': img1548,
  '1559839734': img1559,
  '1560743641': img1560g,
  '1560807707': img1560b,
  '1561037404': img1561,
  '1576201836106': img1576,
  '1580489944761': img1580,
  '1583511655826': img1583a,
  '1583512603806': img1583b,
  '1587300003388': img1587,
  '1588943211346': img1588,
  '1601758125946': img1601,
};

export function img(id: string): ImageMetadata {
  const found = images[id];
  if (!found) throw new Error(`Image not found: ${id}`);
  return found;
}

import indoor from '../assets/indoor.png';
import outdoor from '../assets/outdoor.png';
import rotate from '../assets/rotate.png';
import kiosk from '../assets/kiosk.png';
import aframe from '../assets/aframe.png';
import podium from '../assets/podium.png';

export const site = {
  name: 'AD2 Digital',
  tagline: 'Live in the digital world.',
  intro:
    'LED walls, kiosks, signage and immersive displays – designed, built and installed for retail, hospitality, transport, education and more.',
  phone: '+919874629194',
  phoneDisplay: '+91 98746 29194',
  email: 'ad2digitalteams@gmail.com',
  website: 'https://www.ad2digital.net',
  websiteDisplay: 'www.ad2digital.net',
};

export const navLinks = [
  { label: 'Displays', href: '#displays' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Our work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const products = [
  { title: 'Indoor LED video wall', text: 'Pixel pitch P1.25–P4, seamless and flicker-free, built for 24/7 use.', image: indoor, alt: 'Indoor LED video wall in an office lobby', cover: true },
  { title: 'Outdoor LED wall', text: 'IP65 water and dust resistant, P2.5–P10, with a 1,00,000-hour lifespan.', image: outdoor, alt: 'Outdoor LED wall on a building facade', cover: true },
  { title: 'Rotatable 4K screen', text: '32" display, 8MP camera, Android 14, rotates 90° to portrait.', image: rotate, alt: 'Rotatable 32-inch 4K screen' },
  { title: 'Floor mount kiosk', text: 'Touch or non-touch, 32–75 inches, controlled centrally.', image: kiosk, alt: 'Floor mount digital kiosk' },
  { title: 'A-frame standee', text: 'Lightweight, plug-and-play, 32, 43 or 55 inches for indoor use.', image: aframe, alt: 'A-frame digital standee' },
  { title: 'Digital podium', text: 'Built-in amplifier and speaker, PCAP touch display, your branding.', image: podium, alt: 'Digital podium with touch display' },
];

export const solutions = {
  heading: 'More than screens.',
  text: 'LCD and transparent walls, 3D anamorphic and curved LED, interactive panels, and everything that lights up a brand.',
  industries:
    'Retail, corporates, education, government, hospitality, events, banks, healthcare, real estate, stadiums, smart cities, museums, transport, restaurants and jewellery shops.',
  items: [
    '3D anamorphic LED', 'Flexible and curve LED', 'Transparent LED', 'LCD video walls',
    'Interactive flat panels', 'Digital bus stands', 'Metro and railway displays', 'Self-ordering kiosks',
    'Digital menu boards', 'ACP letter and LED signage', 'Kinetic LED screens', 'Interactive floors',
    'Holographic displays', 'Projection mapping', '3D drone shows', 'LED rentals',
  ],
};

/** Add { title, category, image, alt } objects here to launch the gallery. */
export const projects = [];

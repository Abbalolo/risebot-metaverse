// Clogo.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import logo1 from '../assets/logo1.png';
import logo2  from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import logo13 from '../assets/logo13.png';
import logo14 from '../assets/logo14.png';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.png';


interface LogoType {
  id: number;
  image: StaticImageData;
}

const logos: LogoType[] = [
  { id: 1, image: logo1 },
  { id: 2, image: logo2 },
  { id: 3, image: logo3 },
  { id: 4, image: logo4 },
  { id: 5, image: logo5 },
  { id: 6, image: logo6 },
  { id: 7, image: logo7 },
  { id: 8, image: logo8 },
  { id: 9, image: logo9 },
  { id: 10, image: logo10 },
  { id: 11, image: logo11 },
  { id: 12, image: logo12 },
  { id: 13, image: logo13 },
  { id: 14, image: logo14 },
  { id: 15, image: logo15 },
  { id: 16, image: logo16 }
];

const Clogo: React.FC = () => {
  return (
    <div className='grid grid-cols-2 place-items-center md:flex md:flex-wrap gap-3 mt-10'>
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.image}
          width={200}
          height={100}
          alt={`Logo ${logo.id}`}
          className="opacity-25 hover:opacity-100 duration-300 transition-all"
        />
      ))}
    </div>
  );
}

export default Clogo;

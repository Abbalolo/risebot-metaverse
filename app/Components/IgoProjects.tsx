import React from 'react';
import { SlSocialPintarest, SlSocialReddit, SlSocialSteam, SlSocialStumbleupon, SlSocialTwitter } from 'react-icons/sl';
import image1 from "../assets/download (18).png";
import image2 from "../assets/download (19).png";
import image3 from "../assets/download (8).png";
import image4 from "../assets/download (6).png";
import Image from 'next/image';

interface coinsTypes {
  id: number;
  name: string;
  raise: string;
  image: any;
  price: string;
  claimIn: number[];
  socials: JSX.Element[];
}

const coins: coinsTypes[] = [
  {
    id: 1,
    name: "Zombie plant 2",
    raise: "$3970",
    image: image1,
    price: "0.05 USDT",
    claimIn: [-47, -14, -18, -20],
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    id: 2,
    name: "Codyfight IGO",
    raise: "$3970",
    image: image2,
    price: "0.05 USDT",
    claimIn: [-47, -14, -18, -20],
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    id: 3,
    name: "Asphalt Legends",
    raise: "$3970",
    image: image3,
    price: "0.05 USDT",
    claimIn: [-47, -14, -18, -20],
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    id: 4,
    name: "Garena Free Fire MAX",
    raise: "$3970",
    image: image4,
    price: "0.05 USDT",
    claimIn: [-47, -14, -18, -20],
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
];

function IgoProjects() {
  return (
    <div className='flex flex-col gap-10 md:mt-20'>
      {coins.map((coin) => (
        <div key={coin.id} className="relative glassbg justify-between flex flex-col md:flex-row items-center px-5 py-5 md:py-0 gap-3 md:gap-0">
          <div className="flex flex-col justify-center md:items-start items-center md:flex-row gap-3 md:-translate-y-7">
            <Image src={coin.image} className="w-[60px] md:w-[70px] object-contain h-full" alt="photo" />
            <h3 className='text-white font-extrabold'>{coin.name}</h3>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h3 className='text-gray-500'>Total raise</h3>
            <p className='text-white'>{coin.raise}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className='text-gray-500'>Price</h3>
            <p className='text-white'>{coin.price}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className='text-gray-500'>Claim In</h3>
            <div className="flex items-center gap-2">
              {coin.claimIn.map((claim, index) => (
                <p key={index} className='text-white'>{claim}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            {coin.socials.map((icon, index) => (
              <div key={index} className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
                {icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IgoProjects;

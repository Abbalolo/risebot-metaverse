import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/download.png";

import { SlSocialPintarest, SlSocialReddit, SlSocialSteam, SlSocialStumbleupon, SlSocialTwitter } from 'react-icons/sl';

function Footer() {
  return (
    <footer className="bg-[#09121D] flex flex-col gap-5  md:py-20 py-10">

<div className="flex flex-col md:flex-row divide-x-2 divide-gray-800 md:justify-around ">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image src={logo} width={200} height={200} alt="risebot logo" />
          </Link>
          <p className="text-gray-500 ">
            A one-stop destination for web3 gaming.
          </p>
        </div>

   

        <div className="mt-5 md:pl-16">
          <h3 className="text-white font-semibold text-xl">Contact Us</h3>

          <div className="flex flex-col gap-2 mt-3 text-sm">
            <div className="flex flex-col ">
              <p className="text-gray-500 ">Address</p>
              <p className="text-white">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-white">+33 7 00 55 57 60</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Email</p>
              <Link href={"/"} className="text-white underline">
                risebot@support.com
              </Link>
            </div>
          </div>
        </div>
   

 
      
      <div className="mt-5 md:pl-16">
        <h3 className="text-white font-semibold text-xl">Quick Link</h3>

        <div className="flex flex-col gap-2 mt-3 text-white">
          <Link href={"#"} className="text-sm">
            Home
          </Link>
          <Link href={"#"} className="text-sm">
            Project
          </Link>
          <Link href={"#"} className="text-sm">
            Blog
          </Link>
          <Link href={"#"} className="text-sm">
            Our Team
          </Link>
        </div>
      </div>
      <div className="mt-5 md:pl-16">
        <h3 className="text-white font-semibold text-xl">Support</h3>

        <div className="flex flex-col gap-2 mt-3 text-white">
          <Link href={"#"} className="text-sm">
            Connect Wallet
          </Link>
          <Link href={"#"} className="text-sm">
            Forget Password
          </Link>
          <Link href={"#"} className="text-sm">
            FAQs
          </Link>
          <Link href={"#"} className="text-sm">
            Contact
          </Link>
        </div>
      </div>

      </div>

      <div className="w-[80%] mx-auto mt h-[1px] bg-gray-800 mt-5 mb-5"></div>
    
    <div className="md:flex md:justify-between items-center">
        <p className="text-gray-500 text-center md:text-start">Copyright © 2024. Designed by Themesflat</p>
    <div className="flex gap-3 p-5 justify-center">
    <div  className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center"><SlSocialPintarest/></div>
    <div  className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center"><SlSocialReddit/></div>
    <div  className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center"><SlSocialSteam/></div>
    <div  className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center"><SlSocialStumbleupon/></div>
    <div  className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center"><SlSocialTwitter/></div>
    </div>
    </div>
    </footer>
  );
}

export default Footer;

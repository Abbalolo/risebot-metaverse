"use client"
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../assets/download.png";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCaret, setIsCaret] = useState(false);
  const [isCaret2, setIsCaret2] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`transition-all duration-200 flex justify-between items-center p-5 fixed top-0 left-0 w-full  z-40 ${scrolled ? 'bg-black' : ''}`}>
      <Link href="/">
        <Image src={logo} width={100} height={100} alt="risebot logo" />
      </Link>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="w-full h-screen absolute top-0 left-0 bg-[#ffffff00] z-30"></div>
      )}
  
      <nav
        className={`text-black lg:text-white absolute bg-slate-50 top-16 z-50 left-0 w-full lg:flex lg:justify-center lg:shadow-none lg:bg-transparent lg:opacity-100 lg:translate-y-[0%] lg:static shadow-md transition-opacity  duration-500  ease-in-out${
          isOpen ? " opacity-100 visible" : " translate-y-[-150%] opacity-0 "
        }`}
      >
        <ul className="flex md:flex-row flex-col">
          <li className="border md:border-none transition-all duration-300 py-2 px-4">
            <Link className="hover:text-[#7FF200]" href="/">
              Home
            </Link>
          </li>
          <li className="border md:border-none py-2 px-4 flex items-center justify-between transition-all duration-300">
            <Link className="hover:text-[#7FF200]" href="/">
              Project
            </Link>{" "}
            <button
              className="text-[20px]"
              onClick={() => setIsCaret(!isCaret)}
            >
              {isCaret ? <RxCaretUp /> : <RxCaretDown />}
            </button>
          </li>
          <li className="border md:border-none py-2 px-4 flex items-center justify-between transition-all duration-300">
            <Link className="hover:text-[#7FF200]" href="/">
              Page
            </Link>{" "}
            <button
              className="text-[20px]"
              onClick={() => setIsCaret2(!isCaret2)}
            >
              {isCaret2 ? <RxCaretUp /> : <RxCaretDown />}
            </button>
          </li>
          <li className="border md:border-none py-2 px-4 transition-all duration-300">
            <Link className="hover:text-[#7FF200]" href="/">
              Roadmap
            </Link>
          </li>
          <li className="border md:border-none py-2 px-4 transition-all duration-300">
            <Link className=" hover:text-[#7FF200]" href="/">
              Blog
            </Link>
          </li>
          <li className="border md:border-none py-2  px-4 transition-all duration-300">
            <Link className=" hover:text-[#7FF200]" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3 items-center text-white">
        <button className="polygon font-semibold bg-[#798DA3] px-5 py-2 ">
          connect
        </button>
        <button
          onClick={() => {setIsOpen(!isOpen)
           
          }}
          className="text-[25px] transition-all duration-300 cursor-pointer lg:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
}

export default NavBar;

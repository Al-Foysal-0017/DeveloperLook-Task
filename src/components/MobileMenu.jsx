"use client";
import React from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
    style={{background:"#FCB8FA"}}
      className={`md:hidden inline fixed inset-0 z-[100] bg-[#FCB8FA] transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* --- Top Bar: Logo & Close Button --- */}
      <div className="flex justify-between items-start px-[5vw] pt-[5vw]">
        {/* Branding Logo */}
        <div className="text-[8vw] font-black tracking-tighter text-black uppercase leading-none border-[0.4vw] border-black px-[2vw] py-[0.5vw]">
          GETHYPED
        </div>

        {/* Close Button */}
        <button
        //   onClick={() => setIsOpen(false)}
          className="w-[12vw] h-[12vw] min-w-[50px] min-h-[50px] bg-white border-[0.3vw] border-black rounded-[1.5vw] flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          {/* <span className="text-[6vw] font-light text-black">✕</span> */}
        </button>
      </div>

      {/* --- Menu Links Section --- */}
      <div className="flex flex-col items-center justify-center h-[70%] gap-[3vw] px-[5vw]">
        {["Expertises", "Work", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="w-full max-w-[60vw] bg-white text-black py-[4vw] rounded-full text-[6vw] font-bold text-center shadow-sm border border-black/5 hover:scale-105 transition-transform"
          >
            {item}
          </Link>
        ))}

        {/* Get Results Button with Fire Icon */}
        <button className="w-full max-w-[60vw] bg-black text-white py-[4vw] rounded-full text-[6vw] font-bold flex items-center justify-center gap-[2vw] mt-[2vw] hover:scale-105 transition-transform">
          Get Results
          <span className="bg-white rounded-full w-[8vw] h-[8vw] flex items-center justify-center">
            🔥
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
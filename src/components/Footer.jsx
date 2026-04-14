"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // মাউসের পজিশন ট্র্যাক করার জন্য
  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <footer 
      className="relative bg-[#F5F2EA] pt-32 overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- 1. Custom Hover Label (GETHYPED) --- */}
      {isHovered && (
        <div 
          className="fixed pointer-events-none z-[9999] px-4 py-2 bg-[#2B87FF] text-white rounded-full font-black text-xs uppercase tracking-tighter shadow-xl transition-transform duration-150 ease-out"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            transform: "translate(-50%, -50%) rotate(-5deg)" 
          }}
        >
          GETHYPED
        </div>
      )}

      {/* --- 2. Main CTA Section --- */}
      <div className="container mx-auto px-6 text-center pb-40 relative z-10">
        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter text-black leading-none mb-12">
          Let&apos;s Get Hyped!
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="cursor-auto flex items-center gap-2 px-8 py-4 border-2 border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all">
            Mail ons direct <span>✉️</span>
          </button>
          <button className="cursor-auto flex items-center gap-2 px-8 py-4 bg-[#FF5F2E] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
            Get Results <span>🔥</span>
          </button>
        </div>
      </div>

      {/* --- 3. Slanted Bottom Bar Section --- */}
      <div className="relative mt-20">
        {/* ধূসর বাঁকানো ব্যাকগ্রাউন্ড (The Slanted Shape) */}
        <div className="absolute inset-0 bg-[#EBE8DF] origin-bottom-left -skew-y-[3deg] transform translate-y-16 md:translate-y-24 h-[120%]"></div>

        {/* Footer Real Content */}
        <div className="relative z-20 pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            {/* Branding */}
            <div className="text-5xl md:text-7xl font-black tracking-tighter text-black">
              GETHYPED
            </div>

            {/* Links & Info */}
            <div className="flex flex-col md:items-end gap-8 w-full md:w-auto">
              {/* Pill-style Navigation */}
              <div className="flex flex-wrap gap-3 md:gap-5">
                {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="cursor-auto bg-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Socials & Contact Detail */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 w-full justify-between border-t border-black/5 pt-8">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[10px] uppercase text-gray-400 tracking-widest">Follow us</span>
                  <div className="flex gap-2">
                    {['in', 'tk', 'ig', 'yt'].map((social) => (
                      <div key={social} className="cursor-auto w-9 h-9 bg-white rounded-full flex items-center justify-center text-[10px] font-black shadow-sm hover:scale-110 transition-transform uppercase">
                        {social}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right font-bold">
                  <p className="text-[10px] uppercase text-gray-400 mb-1">Contact</p>
                  <p className="text-sm">info@gethyped.nl</p>
                  <p className="text-sm text-gray-500">+31 6 1533 7498</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
            <p>© 2026 GET HYPED CLONE</p>
            <div className="flex gap-8">
              <span className="cursor-auto hover:text-black transition-colors">Privacy Policy</span>
              <span className="cursor-auto hover:text-black transition-colors">Terms of Service</span>
            </div>
            <p>DESIGN BY DYLAN</p>
          </div>
        </div>

        {/* Floating Pink Badge (Rotating Circle) */}
        <div className="absolute right-12 top-0 md:-top-10 w-24 h-24 bg-[#F2A1E2] rounded-full hidden md:flex items-center justify-center text-center p-3 shadow-xl rotate-12 z-30">
           <p className="text-[9px] font-black leading-tight uppercase animate-spin-slow">
             Get Noticed • Get Results • Get Hyped •
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
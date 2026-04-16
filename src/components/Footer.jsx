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
      className="h-screen w-screen relative bg-[#F5F2EA] pt- overflow-hidden "
    >
      {/* --- 1. Custom Hover Label (GETHYPED) --- */}
      {isHovered && (
        <div 
          className="fixed pointer-events-none z-[9999] text-white rounded-full font-black text-xs uppercase tracking-tighter shadow-xl transition-transform duration-150 ease-out"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            transform: "translate(-50%, -50%) rotate(-5deg)" 
          }}
        >
          <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" alt=""/>
        </div>
      )}

      {/* --- 2. Main CTA Section --- */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
        className="border-t-2 border-black/5 h-[60%] flex flex-col justify-end container mx-auto px-6 text-center relative z-10"
      >
        <h1 className="pb-6 text-[clamp(3rem,7vw,12rem)] font-semibold leading-[0.85] tracking-tighter text-black">
          Let&apos;s Get Hyped!
        </h1>
        <div className="pb-4 flex flex-wrap justify-center gap-4">
            <button className="border bg-white mt-4 flex items-center gap-2 px-1.5 py-1 rounded-xl font-semibold text-sm hover:bg-black hover:text-white transition-all duration-300 group">
              Mail ons direct
              <span className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              ✉️
              </span>
            </button>
            <button style={{background:"#FA5425", borderColor:"#FA5425"}} className="border bg-white text-white mt-4 flex items-center gap-2 px-1.5 py-1 rounded-xl font-semibold text-sm hover:bg-black hover:text-white transition-all duration-300 group">
              Get Results 
              <span className="w-8 h-8 bg-white text-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              🔥
              </span>
            </button>
        </div>
      </div>

      {/* --- 3. Slanted Bottom Bar Section --- */}
      <div className=" relative">
        {/* ধূসর বাঁকানো ব্যাকগ্রাউন্ড (The Slanted Shape) */}
        {/* <div className="absolute inset-0 bg-[#EBE8DF] origin-bottom-left -skew-y-[12deg] transform translate-y-16 md:translate-y-48 h-[120%]"></div> */}
        <div className="mx-8 absolute inset-0 bg-[#EBE8DF] origin-bottom-left footer-skew rounded-t-3xl transform translate-y-16 md:translate-y-48 h-[120%]"></div>

        {/* Footer Real Content */}
        <div className="relative z-20 pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="flex-shrink-0"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208 84"
                className="w-[clamp(8rem,20vw,20rem)] h-auto"
                fill="none"
              >
                <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC" />
                <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
                <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
                <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
                <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
                <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
                <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white" />
                <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
                <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
                <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
              </svg>
            </div>

            {/* Links & Info */}
            <div className="flex flex-row md:items-end justify-between gap-8 md:w-aut">
              {/* Pill-style Navigation */}
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="flex gap-3">
                {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="cursor-auto bg-white px-3 py-2 rounded-xl text-sm font-medium shadow-sm hover:bg-black hover:text-white transition-all"
                  >
                    {item}
                  </Link>
                ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[14px] ">
                    Follow us
                  </span>
                  <div className="flex gap-2">
                    {['in', 'tk', 'ig', 'yt'].map((social) => (
                      <div key={social} className="cursor-auto w-9 h-9 bg-white rounded-full flex items-center justify-center text-[10px] font-black shadow-sm hover:scale-110 transition-transform uppercase">
                        {social}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-gray-600 text-[10px] ">
                    @ 2025 Get Hyped
                  </span>
                  <span className="text-[10px] text-gray-600">
                    @ Desiged by Al Foysal
                  </span>
                </div>
              </div>

              {/* Socials & Contact Detail */}
              <div style={{width:"224px"}} className="flex flex-col items-start md:items-center gap- w-full justify-between">
                <div className="">
                  <p className="text-[14px] font-bold">Contact</p>
                  <p className="text-[12px]">info@gethyped.nl</p>
                  <p className="text-[12px]">+31 6 1533 7498</p>
                </div>
                <div className="mt-3">
                  <p className="text-[14px] font-bold">Adres</p>
                  <p className="text-[12px]">Beltrumsestraat 6,</p>
                  <p className="text-[12px]">7141 AL Groenlo</p>
                </div>
                <div className="mt-5">
                  <p className="text-gray-600 text-[10px]">Privacyvoorwaarden</p>
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
        <div className="absolute right-12 top-0 md:-top-10 bg-[#F2A1E2] rounded-full hidden md:flex items-center justify-center text-center shadow-xl rotate-12 z-30">
           {/* <p className="text-[9px] font-black leading-tight uppercase animate-spin-slow">
             Get Noticed • Get Results • Get Hyped •
           </p> */}
           
           <div className="flex items-center justify-center">
              <div className="relative flex items-center justify-center w-32 h-32 bg-[#f0b3ff] rounded-full shadow-lg overflow-hidden"> 
                <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="text-[10px] font-semibold uppercase fill-black">
                      <textPath href="#circlePath">
                        GET HYPED •• GET NOTICED •• GET RESULT ••
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="relative z-10 transform -rotate-12">
                  <h1 className="-rotate-12 text-4xl font-bold tracking-tighter text-black select-none">
                    GH
                  </h1>
                </div>
                
              </div>
            </div>



           {/* END */}
        </div>



      </div>
    </footer>
  );
};

export default Footer;




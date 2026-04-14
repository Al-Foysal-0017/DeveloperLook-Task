"use client";
import { useState } from "react";
import Image from 'next/image';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Main Headline */}
      <div className="max-w-4xl">
        <h1 style={{fontWeight:"600"}} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-black">
          Get Hyped. Get <br /> Noticed. Get Results.
        </h1>
        <p className="mt-8 text-lg md:text-2xl font-medium text-black/80 max-w-sm">
          Klaar met gokken op content <br /> die niets oplevert?
        </p>
      </div>

      {/* Tilted Cards Container */}
      <div className="mt-16 flex flex-wrap md:flex-nowrap gap-4 justify-center items-end">
        
        {/* Card 1: Blue (Organic views) */}
        <div style={{background:"#0D8CFF"}} className="relative w-full md:w-72 h-96 bg-brandBlue rounded-3xl p-6 flex flex-col justify-between -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl z-10">
          <h3 className="text-5xl font-black text-black">10M+</h3>
          <div>
            <p className="font-bold text-lg">Organische views</p>
            <p className="text-sm">Groei door slimme content</p>
          </div>
        </div>

        {/* Card 2: Image Card (Woman) */}
        <div className="relative w-full md:w-72 h-96 rounded-3xl overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl z-20 -ml-4">
          {/* Thumbnail Image */}
          {!loaded && (
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif"
              alt="thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source
              src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Card 3: Green (Merken geholpen) */}
        <div style={{background:"#32C791"}} className="relative w-full md:w-72 h-96 bg-brandGreen rounded-3xl p-6 flex flex-col justify-between -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl z-10 -ml-4">
          <h3 className="text-5xl font-black text-black">30+</h3>
          <div>
            <p className="font-bold text-lg">Merken geholpen</p>
            <p className="text-sm">Van start-up tot multinational</p>
          </div>
        </div>

        {/* Card 4: Video/Car Card */}
        <div className="relative w-full md:w-72 h-96 rounded-3xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl z-20 -ml-4">
          {/* Thumbnail Image */}
          {!loaded && (
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif"
              alt="thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source
              src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
              type="video/mp4"
            />
          </video>
          {/* <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded text-white font-bold text-xs uppercase">
            Carbon Dak.
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;
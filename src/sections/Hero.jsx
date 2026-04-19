"use client";
import { useState } from "react";
import Container from "@/components/Container";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  return (
    <Container>
      <section className="relative pt-[4vw] pb-[5vw] overflow-hidden">
        {/* Main Headline */}
        <div className="max-w-[90vw]">
          <h1 className="text-[clamp(3rem,7vw,12rem)] font-semibold leading-[0.85] tracking-tighter text-black">
            Get Hyped. Get <br /> Noticed. Get Results.
          </h1>
          <p className="mt-[2vw] text-[clamp(1.2rem,1.8vw,2.5rem)] font-medium max-w-md text-black/80 leading-snug">
            Klaar met gokken op content <br /> die niets oplevert?
          </p>
        </div>

        {/* Tilted Cards Container */}
        <div className="w-full mt-[5vw] flex flex-nowrap justify-center items-end gap-[4vw]">
          
          {/* Card 1: Blue */}
          <div 
            style={{ backgroundColor: "#0D8CFF" }}
            className="cardHeight cardHover relative w-[35vw] sm:w-[26vw] md:w-[23vw] h-[32vw] min-h-[350px] max-h-[580px] rounded-[3vw] p-[2vw] flex flex-col justify-between -rotate-3 hover:rotate-0 transition-all duration-500 z-10"
          >
            <h3 className="text-[4vw] font-semibold text-black leading-none uppercase">10M+</h3>
            <div>
              <p className="font-semibold text-[1.5vw] leading-tight">Organische views</p>
              <p className="text-[1vw] ">Groei door slimme content</p>
            </div>
          </div>

          {/* Card 2: Image/Video Card */}
          <div className="cardHover relative w-[35vw] sm:w-[26vw] md:w-[23vw] h-[32vw] min-h-[350px] max-h-[580px] rounded-[3vw] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-500 z-40 -ml-[4vw]">
            {!loaded && (
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif"
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setLoaded(true)}
              className="w-full h-full object-cover"
            >
              <source src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Card 3: Green */}
          <div 
            style={{ backgroundColor: "#32C791" }}
            className="cardHover hidden sm:flex flex-col justify-between  relative w-[35vw] sm:w-[26vw] md:w-[23vw] h-[32vw] min-h-[350px] max-h-[550px] rounded-[3vw] p-[2vw] -rotate-6 hover:rotate-0 transition-all duration-500 z-40 -ml-[4vw]"
          >
            <h3 className="text-[4vw] font-semibold text-black leading-none uppercase">30+</h3>
            <div>
              <p className="font-semibold text-[1.5vw] leading-tight">Merken geholpen</p>
              <p className="text-[1vw]">Van start-up tot multinational</p>
            </div>
          </div>

          {/* Card 4: Video/Car Card */}
          <div className="cardHover hidden md:flex relative w-[35vw] sm:w-[26vw] md:w-[23vw] h-[32vw] min-h-[350px] max-h-[580px] rounded-[3vw] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 z-50 -ml-[4vw]">
            {!loaded2 && (
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif"
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setLoaded2(true)}
              className="w-full h-full object-cover"
            >
              <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>
    </Container>
  );
};

export default Hero;
const logos = [
  { name: "Brand 1", url: "/logos/brand1.svg" },
  { name: "Brand 2", url: "/logos/brand2.svg" },
  { name: "Brand 3", url: "/logos/brand3.svg" },
  { name: "Brand 4", url: "/logos/brand4.svg" },
  { name: "Brand 5", url: "/logos/brand5.svg" },
  { name: "Brand 6", url: "/logos/brand6.svg" },
];

const BrandLogos = () => {
  return (
    <section className="py-20 bg-background border-y border-black/5 overflow-hidden">
      <div className="flex flex-col gap-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          Trusted by the best
        </p>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div key={index} className="mx-12 flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-black text-black/20 uppercase hover:text-black transition-colors cursor-default">
                  {logo.name}
                </span>
                {/* যদি ইমেজ ব্যবহার করতে চান: 
                <img src={logo.url} alt={logo.name} className="h-8 md:h-12 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all" /> 
                */}
              </div>
            ))}
            {/* Second Set of Logos (Duplicate for infinite loop) */}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="mx-12 flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-black text-black/20 uppercase hover:text-black transition-colors cursor-default">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
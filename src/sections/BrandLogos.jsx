const logos = [
  { name: "Brand 1", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg" },
  { name: "Brand 2", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg" },
  { name: "Brand 3", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg" },
  { name: "Brand 4", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg" },
  { name: "Brand 5", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg" },
  { name: "Brand 6", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg" },
  { name: "Brand 7", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg" },
  { name: "Brand 8", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg" },
  { name: "Brand 9", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg" },
  { name: "Brand 10", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg" },
  { name: "Brand 11", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg" },
  { name: "Brand 12", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg" },
  { name: "Brand 13", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg" },
  { name: "Brand 14", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg" },
  { name: "Brand 15", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg" },
  { name: "Brand 16", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg" },
  { name: "Brand 17", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg" },
  { name: "Brand 18", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg" },
  { name: "Brand 19", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg" },
  { name: "Brand 20", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg" },
  { name: "Brand 21", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg" },
  { name: "Brand 22", url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg" },
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
import Container from "@/components/Container";

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

export default function BrandLogos() {
  return (
    <section className="py-[8vw] bg-[#F5F2EA] overflow-hidden">
      <div className="flex flex-col gap-[3vw]">
        
        {/* Title */}
        <Container className="w-full">
          <h1 className="text-[clamp(2rem,4vw,5rem)] font-semibold leading-[0.9] tracking-tighter text-black">
            These brands <br />got hyped.
          </h1>
        </Container>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden w-full">
          {/* globals.css থেকে marquee-container ক্লাসটি এখানে ব্যবহার করা হয়েছে */}
          <div className="marquee-container whitespace-nowrap items-center">
            
            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div key={index} className="border border-black/20 rounded-xl mx-[0.4vw] flex items-center justify-center shrink-0">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-[20vw] sm:h-[21vw] md:h-[22vw] w-auto"
                />
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="mx-[4vw] flex items-center justify-center shrink-0">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-[clamp(1.5rem,2.5vw,4rem)] w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
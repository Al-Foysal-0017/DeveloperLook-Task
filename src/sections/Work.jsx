"use client";
import Container from '@/components/Container';
import Button from '../components/Button';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    client: "Bullit",
    imageLink: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif", 
    videoLink:"https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    bgColor: "bg-[#FF5F2E]", // Orange
    borderColor: "border-[#FF5F2E]",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    imageLink: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif",
    videoLink:"https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    bgColor: "bg-[#2B87FF]", // Blue
    borderColor: "border-[#2B87FF]",
  },
  {
    id: 3,
    title: "Content die écht smaakt (en raakt)",
    client: "Loco",
    imageLink: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif",
    videoLink:"https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    bgColor: "bg-[#40C78E]", // Green
    borderColor: "border-[#40C78E]",
  }
];


const Work = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container id="work">
      <section className="bg-[#F5F2EA] py-[8vw]">
        {/* Header Section */}
        <div className="max-w-[100%]">
          <h2 className="text-[clamp(3rem,7vw,10rem)] font-bold tracking-tighter leading-[0.85] text-black">
            Content <br /> <span className="">dat</span> scoort.
          </h2>
          <p className="mb-[12vw] sm:mb-[7vw] md:mb-0 mt-[2vw] text-[clamp(1.2rem,1.5vw,1.5rem)] font-semibold max-w-full md:max-w-[24vw] text-black/80 leading-tight">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. 
            Met creatieve content die werkt en het verschil maakt.
          </p>
          <div className="mt-[1vw]">
            <button className="flex items-center gap-[1vw] px-[0.2vw] py-[0.2vw] border-[0.1vw] border-black rounded-xl font-semibold text-[clamp(0.8rem,1vw,1.2rem)] hover:bg-black hover:text-white transition-all group">
              Bekijk al ons werk 
              <span className="bg-black text-white rounded-xl w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Grid Section - Masonry Style */}
        <div style={{marginTop:"-64px"}} className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] items-start">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`relative overflow-hidden rounded-[3vw] border-[0.6vw] ${project.borderColor} bg-white shadow-2xl transition-all duration-500 hover:-translate-y-4 ${
                // জুম আউটে পজিশন ঠিক রাখতে vw ব্যবহার
                index === 0 ? 'md:mt-[10vw]' : index === 1 ? 'md:mt-[5vw]' : 'md:mt-0'
              }`}
            >
              {/* Project Image/Video Container */}
              <div className="aspect-[4/5] overflow-hidden relative">
                {!loaded && (
                  <img
                    src={project.imageLink}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <source src={project.videoLink} type="video/mp4" />
                </video>
              </div>

              {/* Floating Info Box - জুম করলেও এর সাইজ ও ফন্ট স্থির থাকবে */}
              <div className={`absolute bottom-[1vw] left-[1vw] right-[1vw] p-[1.8vw] ${project.bgColor} rounded-[2.5vw] text-white shadow-lg`}>
                <div className="flex justify-between items-start gap-[1vw]">
                  <h3 className="text-[clamp(1rem,1.6vw,2.2rem)] font-black leading-tight uppercase">
                    {project.title}
                  </h3>
                  <div className="bg-white text-black w-[3vw] h-[3vw] min-w-[35px] min-h-[35px] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <span className="rotate-[-45deg] font-black text-[1.2vw]">→</span>
                  </div>
                </div>
                <div className="mt-[1vw]">
                  <span className="text-[clamp(0.6rem,0.8vw,1rem)] font-black uppercase tracking-widest bg-black/10 px-[1vw] py-[0.4vw] rounded-[0.8vw]">
                    {project.client}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};


export default Work;
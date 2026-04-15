import Container from '@/components/Container';
import Button from '../components/Button';

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
  return (
    <Container id="work" className="bg-[#F5F2EA] px-6 md:px-12 py-24">
      {/* Header Section */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black">
          Content <br /> <span className="text-black/40">dat</span> scoort.
        </h2>
        <p className="mt-8 text-xl font-bold max-w-md text-black/80">
          Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. 
          Met creatieve content die werkt en het verschil maakt.
        </p>
        <div className="mt-8">
          <button className="flex items-center gap-2 px-6 py-2.5 border-2 border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all group">
            Bekijk al ons werk 
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Grid Section - Masonry Style */}
      <div className="border grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`max-w-sm group relative overflow-hidden rounded-[2.5rem] border-[8px] ${project.borderColor} bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 ${
              // index === 0 ? 'md:mt-24' : index === 1 ? 'md:mt-48' : 'md:mt-0' 
              index === 0 ? 'md:mt-40' : index === 1 ? 'md:mt-20': index === 2 ? 'md:mt-0' : 'md:mt-0'
              /* স্ক্রিনশট অনুযায়ী কার্ডগুলোকে উঁচু-নিচু করার জন্য এই মার্জিন সেট করা হয়েছে */
            }`}
          >
            {/* Project Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Info Box */}
            <div className={`absolute bottom-3 left-3 right-3 p-6 ${project.bgColor} rounded-[2rem] text-white`}>
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-black leading-tight uppercase">
                  {project.title}
                </h3>
                <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="rotate-[-45deg] font-bold text-lg">→</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/10 px-3 py-1 rounded-md">
                  {project.client}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Work;
import Card from '../components/Card';

const expertisesData = [
  {
    number: "01",
    title: "Strategy First.",
    description: "Wij geloven niet in losse flodders. Alles wat we doen begint bij een ijzersterke strategie.",
    bgColor: "bg-brandOrange",
    bgColor2:"#FFFFFF"
  },
  {
    number: "02",
    title: "Content Creation.",
    description: "Van high-end video's tot snappy TikToks. Wij maken content die stopt met scrollen.",
    bgColor: "bg-brandPink",
    bgColor2:"#FCB8FA"
  },
  {
    number: "03",
    title: "Activation.",
    description: "Bereik de juiste mensen op het juiste moment. Wij zorgen voor maximale impact.",
    bgColor: "bg-brandGreen",
    bgColor2:"#32C791"
  },
  {
    number: "04",
    title: "Data & Results.",
    description: "Meten is weten. We optimaliseren continu voor het beste resultaat.",
    bgColor: "bg-brandBlue",
    bgColor2:"#0D8CFF"
  }
];

const Expertises = () => {
  return (
    <section id="expertises" className="px-6 md:px-12 py-20 relative">
      <div className="flex flex-col gap-0"> {/* Gap 0 রাখা হয়েছে কারণ কার্ডের মার্জিন স্ট্যাকিং কন্ট্রোল করবে */}
        {expertisesData.map((item, index) => (
          <Card 
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
            bgColor2={item.bgColor2}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertises;
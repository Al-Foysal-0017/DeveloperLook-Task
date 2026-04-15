"use client";
import Card from '../components/Card';

const expertisesData = [
  {
    number: "01",
    title: "Social strategy",
    descriptionTitle:"Slimme strategie. Sterke start.",
    description: "Wij geloven niet in losse flodders. Alles wat we doen begint bij een ijzersterke strategie.",
    bgColor: "bg-brandOrange",
    imgLink:"https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
    videoLink:"https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    bgColor2:"#FFFFFF"
  },
  {
    number: "02",
    title: "Content Creation",
    descriptionTitle:"Content die opvalt en raakt.",
    description: "Van high-end video's tot snappy TikToks. Wij maken content die stopt met scrollen.",
    bgColor: "bg-brandPink",
    imgLink:"https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
    videoLink:"https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    bgColor2:"#FCB8FA"
  },
  {
    number: "03",
    title: "Activation",
    descriptionTitle:"Zichtbaar waar en wanneer het telt.",
    description: "Bereik de juiste mensen op het juiste moment. Wij zorgen voor maximale impact.",
    bgColor: "bg-brandGreen",
    imgLink:"https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
    videoLink:"https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    bgColor2:"#32C791"
  },
  {
    number: "04",
    title: "Data & Results",
    descriptionTitle:"Inzichten die impact maken.",
    description: "Meten is weten. We optimaliseren continu voor het beste resultaat.",
    bgColor: "bg-brandBlue",
    imgLink:"https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
    videoLink:"https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    bgColor2:"#0D8CFF"
  }
];

const Expertises = () => {
  return (
    <section id="expertises" className="px-6 md:px-12 py-20 relative">
      <div className="flex flex-col gap-0"> 
        {expertisesData.map((item, index) => (
          <Card 
            key={index}
            number={item.number}
            title={item.title}
            descriptionTitle={item.descriptionTitle}
            description={item.description}
            bgColor={item.bgColor}
            bgColor2={item.bgColor2}
            imgLink={item.imgLink}
            videoLink={item.videoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertises;
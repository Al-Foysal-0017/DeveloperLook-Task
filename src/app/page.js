import Expertises from "@/components/Expertises";
import Footer from "@/components/Footer";
import BrandLogos from "@/sections/BrandLogos";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Work from "@/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Intro/>
      <Expertises/>
      <Work/>
      <BrandLogos/>
      <Footer/>
    </div>
  );
}

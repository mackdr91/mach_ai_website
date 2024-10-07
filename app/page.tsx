import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroHead from "@/components/HeroHead";
import Services from "@/components/Services";
import RoadMap from "@/components/RoadMap";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>

      <Navbar />
      <HeroHead />
      <Services />
      <RoadMap />
      <Footer />



    </div>
  );
}

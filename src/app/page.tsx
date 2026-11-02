import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import Showcase from "@/components/Showcase";
import Performance from "@/components/Performance";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Highlights from "@/components/Highlights";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

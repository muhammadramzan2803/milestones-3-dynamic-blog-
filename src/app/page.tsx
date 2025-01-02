import BlogCard from "@/components/BlogCard";
import AboutSection from "./about/page";
import TechInnovations from "./techinnovation/page";
import HeroSection from "./Hero/page";
export default function Home() {
  return (
    <>
     <HeroSection />
     <BlogCard />
     <AboutSection />
     <TechInnovations />
    </>
  );
}
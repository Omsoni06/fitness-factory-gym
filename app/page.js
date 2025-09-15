import MobileNavigation from "@/components/MobileNavigation";
import Hero from "@/components/Hero";
import GymTour from "@/components/GymTour";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MobileNavigation />
      <main>
        <Hero />
        <div id="gym-tour">
          <GymTour />
        </div>
        <Pricing />
        <Contact />
      </main>
    </>
  );
}

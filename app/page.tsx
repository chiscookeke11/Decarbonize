import CarbonOffset from "./components/homepage_components/CarbonOffset";
import Features from "./components/homepage_components/Features";
import Hero from "./components/homepage_components/Hero";
import HowItWorks from "./components/homepage_components/HowItWorks";


export default function Home() {
  return (
    <div  >
      <Hero />
      <Features />
      <HowItWorks />
      <CarbonOffset />
    </div>
  );
}

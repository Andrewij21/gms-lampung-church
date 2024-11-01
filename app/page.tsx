import About from "./sections/About";
import ConnectGroup from "./sections/ConnectGroup";
import GembalaInfo from "./sections/GembalaInfo";
import Hero from "./sections/Hero";
import Highlight from "./sections/Highlight";
import Services from "./sections/Services";
import VisiMisi from "./sections/VisiMisi";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <About />
      <VisiMisi />
      <ConnectGroup />
      <GembalaInfo />
      <Highlight />
    </main>
  );
}

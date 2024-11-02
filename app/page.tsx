import About from "./components/sections/About";
import ConnectGroup from "./components/sections/ConnectGroup";
import GembalaInfo from "./components/sections/GembalaInfo";
import Hero from "./components/sections/Hero";
import Highlight from "./components/sections/Highlight";
import Services from "./components/sections/Services";
import VisiMisi from "./components/sections/VisiMisi";

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

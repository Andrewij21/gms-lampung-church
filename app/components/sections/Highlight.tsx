import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = Array.from({ length: 37 }, (_, i) => `/highlight/${i + 1}.jpg`);
export default function Highlight() {
  return (
    <section className="min-h-screen p-4 space-y-12 overflow-clip">
      <h3 className="text-4xl uppercase tracking-wider font-bold text-primary">
        Highlight
      </h3>
      <ParallaxScroll images={images} />
    </section>
  );
}

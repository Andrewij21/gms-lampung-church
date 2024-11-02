"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CardContent, Card } from "@/components/ui/card";

export default function ConnectGroup() {
  return (
    <section className="relative p-4 h-screen space-y-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 uppercase">
          <TypewriterEffectSmooth
            cursorClassName="bg-transparent"
            words={[
              {
                text: "Connect",
                className: "text-6xl md:text-7xl lg:text-8xl font-semibold",
              },
              {
                text: "Group",
                className: "text-6xl md:text-7xl lg:text-8xl font-semibold",
              },
            ]}
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Connect Group (CG) adalah kelompok sel GMS, sebuah komunitas di mana
            Anda menemukan keluarga rohani dengan tujuan untuk dimuridkan
            menjadi semakin serupa dengan Kristus.
          </p>
          <br />
          <p className="text-lg text-gray-700 dark:text-gray-300 drop-shadow-xl mb-4">
            Setiap anggota bisa saling membangun melalui sharing
            firman/kesaksian hidup dan saling melayani satu dengan lainnya. Di
            sinilah Anda akan menemukan &quot;A home for everyone&quot;
          </p>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Join Connect Group
          </button>
        </div>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex aspect-square items-center justify-center p-6 bg-cover bg-center rounded-xl cursor-grab"
                    style={{
                      backgroundImage: `url(/hangout.jpg)`,
                      aspectRatio: "16/9",
                      height: "auto",
                    }}
                  ></CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

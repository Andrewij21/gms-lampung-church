import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Highlight } from "@/components/ui/hero-highlight";

export default function VisiMisi() {
  return (
    <section className="px-4 py-8 text-center space-y-12">
      <div className="flex font-bold">
        <div className="w-1/2">
          <h2 className="text-6xl font-light mb-4 uppercase tracking-wider">
            Visi
          </h2>
          <Highlight className="text-3xl lg:text-6xl leading-normal">
            Gereja Sel yang Apostolik dan Profetik
          </Highlight>
        </div>

        <div className="w-1/2">
          <h2 className="text-6xl font-light mb-4 uppercase tracking-wider">
            Misi
          </h2>
          <Highlight className="text-3xl lg:text-6xl leading-normal">
            1.000 Gereja Lokal yang Kuat & 1.000.000 Murid
          </Highlight>
        </div>
      </div>

      <div>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="relative text-4xl font-semibold text-black dark:text-white drop-shadow-2xl">
                <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  THE YEAR OF
                </span>
                <br />
                <span className="text-4xl sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold mt-1 leading-none drop-shadow-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  GREAT SHIFTS & MIRACLES 2024
                </span>
              </h1>
            </>
          }
        >
          {/* <video
            className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
            src={`/videos/praise.mp4`} // Path ke video di folder public
            autoPlay
            loop
            muted
          /> */}
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/HP0OG9Et7Iw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ContainerScroll>
      </div>
    </section>
  );
}

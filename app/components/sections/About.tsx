import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col items-center gap-2 px-4 bg-cover bg-center py-20 relative"
      style={{
        backgroundImage: "url(/about/about.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex justify-center items-center z-50">
        <Image src="/logo/logogms.png" width={200} height={200} alt="" />
      </div>

      {/* Bagian Text */}
      <div className="text-center">
        <TextGenerateEffect
          duration={0}
          className="font-medium"
          words="
        Gereja Mawar Sharon Lampung, didirikan pada tahun [tahun berdiri],
        hadir dengan visi menjadi “Rumah bagi Semua Orang” di mana kasih
        Tuhan dapat dirasakan oleh setiap pribadi. Dipimpin oleh Gembala
        [Nama Gembala], kami berkomitmen untuk memberdayakan jemaat melalui
        pengajaran Alkitab yang relevan dan pelayanan yang berdampak bagi
        komunitas. Melalui misi membawa harapan dan cinta kasih Tuhan ke
        tengah masyarakat, kami terus berupaya menjadi terang di kota
        Lampung dan melahirkan generasi yang memiliki integritas, iman, dan
        kepedulian.
        "
        />
      </div>
    </section>
  );
}

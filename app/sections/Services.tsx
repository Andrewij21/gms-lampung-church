import { Tabs } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SpeakerProps {
  name: string;
  img: string;
}

interface ServiceCardProps {
  title: string;
  descriptions: string[];
  location: string;
  times: string[];
  video: string;
  speaker: SpeakerProps;
}

const ServiceCard = ({
  title,
  descriptions,
  location,
  times,
  speaker,
  video,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "w-full h-full overflow-hidden relative rounded-md shadow-2xl mx-auto flex border border-transparent dark:border-neutral-800",
        "transition-all duration-500"
      )}
    >
      {/* Text Content on the Left */}
      <div className="flex flex-col justify-center p-6 w-1/2 bg-white text-primary relative z-10">
        <h1 className="font-bold text-xl md:text-6xl uppercase tracking-wider">
          {title}
        </h1>
        {descriptions.map((desc, i) => (
          <p className="font-normal text-base my-4" key={i}>
            {desc}
          </p>
        ))}
        <br />
        <div className="">
          <h3 className="text-lg font-semibold">Tempat & Waktu</h3>
          <p className="font-normal text-sm mb-2">{location}</p>
          <div className="flex gap-2">
            <p className="font-semibold capitalize">Minggu,</p>
            {times.map((time, i) => (
              <Badge key={i}>{time}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Image and Video Overlay on the Right */}
      <div
        className={cn("w-1/2 bg-cover relative overflow-hidden group")}
        style={{ backgroundImage: `url(/persons/${speaker.img})` }}
      >
        {/* Video Overlay */}
        <p className="capitalize text-lg bg-primary/50 text-primary-foreground p-4 w-fit items-center rounded-r-xl  font-semibold ">
          {speaker.name}
        </p>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          src={`/videos/${video}`} // Path ke video di folder public
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Family",
    value: "Family",
    content: (
      <ServiceCard
        title="Family"
        descriptions={[
          "Ibadah Raya adalah sebuah pengalaman bagi jemaat untuk merasakan kasih Tuhan dan kasih yang ada dalam gereja sebagai keluarga rohani mereka.",
          " Sebuah kesempatan untuk berkumpul bersama saudara seiman dalam pujian dan penyembahan, mendapatkan impartasi firman, pengajaran, visi dan arahan Tuhan bagi kehidupan pribadi mereka dan sebagai gereja, persekutuan dengan tubuh Kristus melalui Perjamuan Kudus, mendapatkan layanan doa dan menaikkan doa korporat, memeteraikan keputusan untuk mengikut Kristus melalui baptisan, serta menyambut jiwa baru sebagai keluarga rohani GMS.",
        ]}
        location="Gedung Golden Bistro, Jl. Yos Sudarso No.272, Sukaraja, Kec. Bumi
            Waras, Kota Bandar Lampung."
        times={["09:00", "11:00", "17:00"]}
        video="praise.mp4"
        speaker={{ name: "pd.eddy yanto tan", img: "pdmeddyyantotan.jpg" }}
      />
    ),
  },
  {
    title: "Army of god",
    value: "Army of god",
    content: (
      <ServiceCard
        title="Army of god"
        descriptions={[
          "Gereja anak muda di GMS dikenal dengan sebutan Army of God. Di tempat inilah anak-anak muda berjumpa dengan Tuhan dan mengalami perubahan hidup. Kami percaya bahwa Tuhan menjanjikan masa depan yang penuh harapan dan di dalam perjalanan iman, Anda tidak sendiri di rumah ini. Karena Army of God menjadi sahabat dan keluarga rohani yang selalu mendukung, membimbing dan mendoakan.",
        ]}
        location="Gedung Golden Bistro, Jl. Yos Sudarso No.272, Sukaraja, Kec. Bumi
              Waras, Kota Bandar Lampung."
        times={["17:00"]}
        video="praise.mp4"
        speaker={{ name: "pdp. Hendri Angelo", img: "pdphendriangelo.png" }}
      />
    ),
  },
  {
    title: "Eaglekidz",
    value: "Eaglekidz",
    content: (
      <ServiceCard
        title="Eaglekidz"
        descriptions={[
          "Selamat datang di Ibadah Gereja Anak Eaglekidz, tempat dimana iman anak-anak akan terus bertumbuh dalam suasana yang seru dan penuh urapan!",
          "Di sini, mereka dapat merasakan hadirat Tuhan melalui pujian dan penyembahan yang penuh sukacita. Tidak hanya itu, ada drama ber kostum tematik yang mengajarkan cara menerapkan Firman Tuhan dalam kehidupan sehari-hari. Kebenaran Firman Tuhan juga disampaikan dengan cara kreatif dan sesuai usia anak-anak. Di akhir ibadah, anak-anak juga akan membuat kerajinan tangan yang akan mengingatkan mereka pada pesan-pesan Firman Tuhan yang telah mereka pelajari.",
        ]}
        location="Gedung Golden Bistro, Jl. Yos Sudarso No.272, Sukaraja, Kec. Bumi
              Waras, Kota Bandar Lampung."
        times={["17:00"]}
        video="praise.mp4"
        speaker={{ name: "Mrs.Nessya", img: "mrsnessya.png" }}
      />
    ),
  },
];
export default function Services() {
  return (
    <section className="p-4 h-screen mb-36">
      <h2 className="pb-2 text-3xl font-semibold tracking-wider uppercase">
        Services
      </h2>
      <Tabs tabs={tabs} />
    </section>
  );
}

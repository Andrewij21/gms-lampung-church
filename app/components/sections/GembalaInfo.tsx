import Image from "next/image";
// import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/client";
// import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
export const _social = [
  {
    href: "#",
    icon: InstagramLogoIcon,
  },
  {
    href: "#",
    icon: LinkedInLogoIcon,
  },
  {
    href: "#",
    icon: GitHubLogoIcon,
  },
];
export default function GembalaInfo() {
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-x-12 max-w-screen-xl rounded-xl p-4 pb-8 bg-accent"
    >
      <HeroDescriptions />
      <HeroImage />
    </div>
  );
}

function SocialsLinks() {
  return (
    <div className="flex gap-x-4">
      {_social.map((link, index) => (
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: index * 0.1,
          }}
          target="_blank"
          href={link.href}
          key={index}
          className="p-2 rounded-full ring-2 group relative overflow-clip"
        >
          <span className="absolute inset-0 group-hover:bg-primary rounded scale-0 group-hover:scale-100 duration-200 ease-out origin-center"></span>
          <link.icon className=" group-hover:text-accent z-10 block relative" />
        </motion.a>
      ))}
    </div>
  );
}

function HeroDescriptions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="gap-y-8 flex flex-col items-center md:items-start md:text-left text-center"
    >
      <div>
        <p>GEMBALA LOKAL</p>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 capitalize">
          Ps. eddy yanto
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, modi
          saepe? Nulla rerum nisi ipsum vero voluptas totam accusantium cumque
          cupiditate incidunt cum, excepturi ut. Explicabo deleniti hic deserunt
          autem, laboriosam consequatur vitae odio dignissimos. Repudiandae
          ipsam quisquam rem vero harum! Dignissimos sed asperiores similique,
          harum odit ea! Molestias, nam. Et dolore ipsa, nesciunt fuga, id quod,
          dolorem placeat numquam aperiam rem delectus architecto provident
          exercitationem ducimus maiores tenetur! Odio soluta accusamus impedit
          quos ad! Eligendi minima error eaque pariatur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum
          ipsum, ad, quibusdam at cum hic inventore tenetur nulla molestiae
          commodi mollitia harum neque ullam libero pariatur exercitationem
          dolorem, ab fugit! Commodi voluptatum dolor quas nisi. Aperiam
          laboriosam, assumenda quisquam accusantium autem doloremque esse
          laborum porro? Minima dignissimos explicabo necessitatibus.
        </p>
      </div>
      <SocialsLinks />
    </motion.div>
  );
}

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        borderRadius: 100,
        opacity: 1,
        scale: 1, // Zoom sedikit saat hover
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Bayangan 3D
      }}
      transition={{
        ease: "easeIn",
      }}
      className="mt-8 md:mt-0 max-h-screen overflow-clip"
    >
      <Image
        src={"/persons/pdmeddyyantotan-png.png"}
        alt="pastor"
        loading="lazy"
        width={1000}
        height={0}
        className="object-cover"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%)",
        }}
      />
    </motion.div>
  );
}

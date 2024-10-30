import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/client";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
export const _social = [
  {
    href: "https://www.instagram.com/andrewijaya_21/",
    icon: InstagramLogoIcon,
  },
  {
    href: "https://www.linkedin.com/in/andre-wijaya-366911256/",
    icon: LinkedInLogoIcon,
  },
  {
    href: "https://github.com/Andrewij21",
    icon: GitHubLogoIcon,
  },
];
export default function GembalaInfo() {
  return (
    <div
      id="home"
      className="flex items-center max-w-screen-xl rounded-xl p-4 bg-accent"
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
      className="w-1/2 gap-y-8 flex flex-col items-center md:items-start md:text-left text-center"
    >
      <SocialsLinks />
      <div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 text-nowrap">
          Hello, im
          <motion.span
            animate={{
              scale: 1, // Zoom sedikit saat hover
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Bayangan 3D
            }}
            className="perspective transform-style-preserve-3d  inline-block text-secondary bg-primary p-2 rounded-lg ml-1"
          >
            Andre Wijaya
          </motion.span>
        </h1>
        <p className="">
          im a fullstack web developer with long time experience in this field,
          my journey in tech has been driven by a love for problem-solving.
        </p>
      </div>

      <div className="flex gap-x-4">
        <Button asChild>
          <Link href={"#about"}>About Me</Link>
        </Button>
        <Button variant={"link"}>
          <a href={"/hero/profile.pdf"} download>
            CV
          </a>
        </Button>
      </div>
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
      className="w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 max-h-screen overflow-clip"
    >
      <Image
        src={"/persons/pdmeddyyantotan-png.png"}
        alt="Andre Wijaya"
        loading="lazy"
        width={500}
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

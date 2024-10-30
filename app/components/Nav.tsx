"use client";
import Link from "next/link";
import * as motion from "framer-motion/client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const _navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Services" },
  { href: "#", label: "About" },
  { href: "#", label: "Skills" },
  { href: "#", label: "Experiences" },
  { href: "#", label: "Work" },
];

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="p-4 absolute top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
          }}
        >
          <Image src="/logo/logogms.png" alt="logo" width={80} height={40} />
        </motion.div>
        <nav className="hidden sm:flex items-center justify-center gap-x-4">
          <NavLinks togglePopOver={setOpen} />
        </nav>
        <div className="block ml-auto sm:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="cursor-pointer">
              <Menu className="text-primary-foreground" />
            </PopoverTrigger>
            <PopoverContent>
              <NavLinks togglePopOver={setOpen} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}

function NavLinks({ togglePopOver }: { togglePopOver: (p: boolean) => void }) {
  return (
    <>
      {_navLinks.map((link, index) => (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: index * 0.1,
          }}
          key={index}
          onClick={() => {
            togglePopOver(false);
          }}
        >
          <Link
            href={link.href}
            className="relative text-primary-foreground hover:text-primary group px-2 py-1 block"
          >
            <span className="block rounded absolute inset-0 group-hover:bg-primary-foreground scale-0 group-hover:scale-100 duration-300 ease-out origin-center"></span>
            <p className="relative z-10 inline-block">{link.label}</p>
          </Link>
        </motion.div>
      ))}
    </>
  );
}

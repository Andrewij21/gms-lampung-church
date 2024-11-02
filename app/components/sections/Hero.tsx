import * as motion from "framer-motion/client";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="min-h-full object-cover"
          height={500}
          src="/videos/praise.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <Image
          src={"/logo/welcome-home.svg"}
          className="h-full w-full"
          width={500}
          height={500}
          alt="welcome"
        />
      </motion.div>
    </section>
  );
}

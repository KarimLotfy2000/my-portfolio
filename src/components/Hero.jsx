"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="pl-7 xl:px-32 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Hey, I’m <span className="text-green-500">Karim Lotfy</span> 👋
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            I'm a full-stack developer with a B.Sc. in Software Engineering and
            a strong focus on building clean, responsive, and user-friendly web
            applications. I enjoy solving problems, learning new things, and
            turning ideas into meaningful digital experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-84 h-84 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Karim Lotfy"
              width={350}
              height={350}
              className="object-cover object-top w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

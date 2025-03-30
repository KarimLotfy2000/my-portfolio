"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          I'm always open to interesting opportunities or a quick chat. Feel
          free to reach out!
        </p>
        <div className="flex flex-col items-center gap-4 mb-8 text-green-700 dark:text-green-200">
          <div className="group inline-flex items-center gap-2 text-lg font-medium  hover:text-emerald-500 transition-colors duration-300">
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            <a
              href="mailto:karimlotfy00@yahoo.com"
              className="group-hover:underline transition-all"
            >
              karimlotfy00@yahoo.com
            </a>
          </div>

          <div className="group inline-flex items-center gap-2 text-lg font-medium   hover:text-emerald-500 transition-colors duration-300">
            <Phone className="w-5 h-5 group-hover:animate-bounce" />
            <a
              href="tel:+4915906412404"
              className="group-hover:underline transition-all"
            >
              +49 1590 6412404
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-2 text-foreground">
          <Link
            href="https://github.com/KarimLotfy2000"
            target="_blank"
            aria-label="GitHub"
            className="transition-transform hover:scale-125 duration-300 hover:text-emerald-500 hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]"
          >
            <Github className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/karim-lotfy2000"
            target="_blank"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-125 duration-300 hover:text-emerald-500 hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

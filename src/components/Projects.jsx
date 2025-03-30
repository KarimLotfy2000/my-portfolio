"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Fashion Fusion (E-Commerce)",
    description:
      "A complete e-commerce solution with categorized products, dynamic filtering, shopping cart functionality, order management",
    image: "/fashion-fusion.png",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Redux",
      "Java Spring Boot",
      "Spring Data JPA",
      "MySQL",
    ],
    github: "https://github.com/KarimLotfy2000/e-commerce-spring-boot",
    live: "https://fashion-fusion-ff.vercel.app/",
  },
  {
    title: "KLIMDB (Movie Review)",
    description:
      "A movie rating platform offering search, filtering, user ratings, reviews, personal watchlists, and authenticated user experiences.",
    image: "/klimdb-screenshot.png",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/KarimLotfy2000/Movie-Rating-App--KLIMDB-",
    live: "https://klimdb.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
        Projects
      </h2>

      <div className="space-y-20 md:px-14 px-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-3">
                {project.description}
              </p>

              <div className="flex gap-4 mt-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <ExternalLink className="w-5 h-5 text-green-500 hover:scale-110 transition" />
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <Github className="w-5 h-5 text-green-500 hover:scale-110 transition" />
                  </Link>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-sm px-3 py-1.5 hover:scale-105 transition-transform"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

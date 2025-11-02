"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "CHECK24 (Cruises)",
    role: "Working Student – Frontend Development",
    location: "Düsseldorf, Germany",
    date: "Jan 2024 – Sep 2024",
    points: [
      "Developed and optimized UI components using Next.js and TailwindCSS.",
      "Integrated CMS and backend services via gRPC (Protocol Buffers).",
      "Worked in an agile environment with Jira and Bitbucket.",
    ],
  },
  {
    company: "PwC (PwC Store)",
    role: "Intern – Frontend Development",
    location: "Munich, Germany",
    date: "Jul 2023 – Jan 2024",
    points: [
      "Built UI components using Mantine UI and Next.js with i18n support.",
      "Used DatoCMS and GraphQL for dynamic content delivery.",
      "Contributed to CI/CD and version control via Azure DevOps.",
    ],
  },
  {
    company: "Bachelor Thesis Project - University of Duisburg-Essen ",
    role: "B.Sc. in Software Engineering",
    location: "Duisburg, Germany",
    date: "Nov 2019 – Nov 2024",
    points: [
      "Graduated with a thesis grade of 1.3 focused on learning analytics.",
      "Developed reusable indicator creation features for a data analytics platform (OpenLAP).",
      "Integrated unique user identifiers from MOOC platforms for secure identity linking in analytics workflows.",
      "Used React, Redux and MaterialUI for the frontend, and Java Spring Boot and MongoDB for the backend.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="border-l-2 border-green-500 pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full left-[-7px] top-1.5" />
              <h3 className="text-xl font-semibold text-foreground">
                {job.company}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {job.location}
              </p>
              <p className="text-sm text-green-500 mb-3">
                {job.role} | {job.date}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

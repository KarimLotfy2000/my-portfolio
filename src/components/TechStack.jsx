"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Palette, Server, Wrench } from "lucide-react";

const techStack = [
  {
    title: "Frontend",
    icon: <Palette className="text-green-700 w-5 h-5" />,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "MaterialUI",
      "Redux",
      "Storybook.js",
      "Cypress",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-700 w-5 h-5" />,
    items: [
      "Java",
      "Spring Boot",
      "JUnit",
      "Node.js",
      "Express",
      "ORM frame-works (Hibernate, Sequelize)",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="text-green-700 w-5 h-5" />,
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Postman",
      "Jira",
      "Github",
      "Bitbucket",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 20 },
  show: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

export default function TechStack() {
  return (
    <section id="techstack" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
      >
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((stack) => (
            <motion.div
              key={stack.title}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full flex flex-col shadow-md dark:bg-card bg-accent border border-border hover:shadow-xl">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-green-700 text-lg flex items-center gap-2">
                    {stack.icon}
                    {stack.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-wrap gap-2 mt-2">
                  {stack.items.map((tech) => (
                    <motion.div
                      whileHover={{
                        boxShadow: "0px 0px 12px rgba(34,197,94,0.5)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      key={tech}
                    >
                      <Badge className="bg-green-700 text-green-100 dark:bg-green-900/40 dark:text-green-300 text-sm rounded-lg px-3 py-1.5 cursor-pointer transition-all">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

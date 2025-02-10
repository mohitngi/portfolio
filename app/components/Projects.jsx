"use client"

import { motion } from "framer-motion"
import { Utensils, Github, ScrollText } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Burger House",
      description:
        "A revolutionary web application built using React and Next.js, focused on performance and an engaging UI.",
      link: "https://burger-house-coral.vercel.app/",
      repoLink: "https://github.com/mohitngi/Burger-House",
    },
    
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "BizBasket",
      description:
        "An API-driven project integrating RESTful and GraphQL endpoints for seamless data flow.",
      link: "https://bizbasket.vercel.app/",
      repoLink: "https://github.com/mohitngi/BizBasket",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              {(project.link || project.repoLink) && (
                <div className="mt-4 flex gap-6">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-500 dark:text-blue-300 hover:underline"
                    >
                      Learn More
                    </a>
                  )}
                  {project.repoLink && (
                    <a 
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 dark:text-blue-300 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
      </div>
    </section>
  )
}


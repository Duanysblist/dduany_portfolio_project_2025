"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/lib/data";
import type { ProjectStatus } from "@/lib/data";

const statusColors: Record<ProjectStatus, string> = {
  Complete: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "In Development":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Planned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "Phase 1 complete":
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function ProjectsContent() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects spanning full-stack development, machine learning,
            game development, and cloud-native architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ml-3 ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-sm text-gray-400 dark:text-gray-500 italic">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

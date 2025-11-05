"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m Dan Duany
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full-Stack Developer",
              2000,
              "React Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-6 mt-8"
        >
          <Link
            href="https://github.com/Duanysblist"
            className="text-3xl hover:text-primary-500 transition-colors"
          >
            <FaGithub className="text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com/in/danielduany"
            className="text-3xl hover:text-primary-500 transition-colors"
          >
            <FaLinkedin className="text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
          </Link>
          <Link
            href="mailto:dduany919@gmail.com"
            className="text-3xl hover:text-primary-500 transition-colors"
          >
            <FaEnvelope className="text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            View My Work
          </Link>
          <a
            href="/Daniel_Duany_Resume_2025.pdf"
            download
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

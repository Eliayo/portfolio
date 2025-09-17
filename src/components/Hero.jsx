import React from "react";
import { motion } from "framer-motion";
import heroIllustration from "../assets/hero-illustration.svg";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-600">Oluwatosin Elijah Aduragbemi</span>{" "}
            👋
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            I’m a passionate{" "}
            <span className="font-semibold">Full-Stack Developer </span>
            building modern web applications with React, Node.js, and Django.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-center"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition text-center"
            >
              Contact Me
            </Link>
            <a
              href="/Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              download="Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 transition text-center"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={heroIllustration}
            alt="Developer at work illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

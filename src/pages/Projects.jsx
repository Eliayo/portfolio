// src/pages/Projects.jsx
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

const allProjects = [
  {
    title: "Maternal Health Monitoring System",
    description:
      "A health monitoring platform for managing maternal records, appointments, and notifications with AI chatbot support.",
    tech: ["React", "Django", "PostgreSQL"],
    image: project2,
    link: "https://github.com/Eliayo/maternal-health-monitoring-system",
    category: "Fullstack",
  },
  {
    title: "Multi-Vendor Fashion Marketplace",
    description:
      "An e-commerce platform for multiple vendors with product listings, secure payments, and analytics dashboard.",
    tech: ["React", "Django", "PostgreSQL"],
    image: project1,
    link: "https://github.com/Eliayo/fashion-marketplace-backend",
    category: "Fullstack",
  },
  {
    title: "Faithful Life Bible Church Website",
    description:
      "A modern responsive church website showcasing sermons, events and ministries.Designed with a clean green theme that aligns with the church's brand identity",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: project5,
    link: "https://flbc.vercel.app/",
    category: "Frontend",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experience with a sleek UI.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: project3,
    link: "https://github.com/Eliayo/portfolio",
    category: "Frontend",
  },
  {
    title: "Travel Agency Web App",
    description:
      "A travel booking platform with destination listings, user reviews, and booking management for Allicom Travels.",
    tech: ["Tailwind", "REST API"],
    image: project4,
    link: "https://github.com/Eliayo/allicom-tourism",
    category: "Fullstack",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="text-center py-16 px-6 bg-white shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Projects
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A selection of projects I’ve worked on — showcasing my skills in
          frontend, backend, and full-stack development.
        </p>
      </section>

      {/* Filters */}
      <section className="py-8 flex justify-center gap-4 flex-wrap">
        {["All", "Frontend", "Fullstack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? "bg-blue-600 text-white shadow"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Project Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
}

export default Projects;

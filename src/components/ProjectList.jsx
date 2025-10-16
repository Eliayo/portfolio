import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project5 from "../assets/project5.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Multi-Vendor Fashion Marketplace",
    description:
      "A scalable e-commerce platform with product listings, cart, and secure payments.",
    tech: ["React", "Django", "PostgreSQL"],
    image: project1,
    link: "https://github.com/Eliayo/fashion-marketplace-backend",
  },
  {
    title: "Maternal Health Monitoring System",
    description:
      "A maternal health monitoring system for tracking patients, appointments, and reports.",
    tech: ["React", "Django", "PostgreSQL"],
    image: project2,
    link: "https://github.com/Eliayo/maternal-health-monitoring-system",
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
];

export default function ProjectList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-3">
            A glimpse of some projects I’ve worked on recently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

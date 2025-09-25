import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaPython,
  FaDownload,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Profile */}
        <div className="w-48 md:w-80 h-48 rounded-full overflow-hidden shadow-lg border-4 border-purple-500">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Hi 👋, I’m{" "}
            <span className="font-semibold">Oluwatosin Elijah Aduragbemi</span>,
            a passionate{" "}
            <span className="text-blue-600">Full-Stack Developer</span> with
            hands-on experience in building scalable and user-friendly web
            applications. I specialize in React, Node.js, Django, and databases,
            and I enjoy transforming ideas into impactful digital products.
          </p>
        </div>

        <a
          href="/Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
          download="Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 transition"
        >
          <FaDownload /> Resume
        </a>
      </section>

      {/* Skills */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <FaReact className="text-blue-500 text-5xl" />,
                name: "React.js",
              },
              {
                icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
                name: "TailwindCSS",
              },
              {
                icon: <FaNodeJs className="text-green-500 text-5xl" />,
                name: "Node.js",
              },
              {
                icon: <SiDjango className="text-green-700 text-5xl" />,
                name: "Django",
              },
              {
                icon: <FaPython className="text-yellow-500 text-5xl" />,
                name: "Python",
              },
              {
                icon: <FaDatabase className="text-green-600 text-5xl" />,
                name: "SQL",
              },
              {
                icon: <SiPostgresql className="text-indigo-600 text-5xl" />,
                name: "PostgreSQL",
              },
              {
                icon: <FaGithub className="text-gray-800 text-5xl" />,
                name: "GitHub",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300 cursor-pointer"
              >
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">My Journey</h2>
          <div className="relative border-l border-gray-300 pl-8 space-y-10">
            <div>
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold">
                Instructor (Web Development) – Aptech Computer Education, Ota
              </h3>
              <p className="text-sm text-gray-600">Sept 2025 – Present</p>
              <p className="mt-2 text-gray-700">
                Teaching core concepts of frontend and backend development,
                mentoring students, and guiding them on industry best practices.
              </p>
            </div>
            <div>
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold">
                Fullstack Developer Intern – Allicom Travels
              </h3>
              <p className="text-sm text-gray-600">Oct 2024 – April 2025</p>
              <p className="mt-2 text-gray-700">
                Built supplier dashboards and integrated APIs for travel
                services, focusing on authentication and role-based access.
              </p>
            </div>
            <div>
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold">
                Frontend Developer Intern – Aptech Computer Education, Ota
              </h3>
              <p className="text-sm text-gray-600">April 2024 - Sept 2024</p>
              <p className="mt-2 text-gray-700">
                Worked on building responsive interfaces using React and
                TailwindCSS.
              </p>
            </div>
            <div>
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold">
                B.Sc. Computer Science - University of Lagos
              </h3>
              <p className="text-sm text-gray-600">Nov 2018 – Sept 2025</p>
              <p className="mt-2 text-gray-700">
                Completed degree in Computer Science with a focus on software
                engineering and web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Certifications
          </h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-center">
            <li className="p-4 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
              HackerRank – JavaScript
            </li>
            <li className="p-4 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
              HackerRank – Frontend Developer (React)
            </li>
            <li className="p-4 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
              HackerRank – SQL
            </li>
            <li className="p-4 rounded-lg bg-gray-50 shadow hover:shadow-md transition">
              HackerRank – Python
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want to work together?
        </h2>
        <p className="mt-3 text-lg text-gray-200">
          Let’s collaborate on exciting projects and build something amazing!
        </p>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default About;

// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="py-10 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">MyPortfolio</h3>
          <p className="mt-2 text-md text-gray-400">
            Full Stack Developer | Building modern, scalable web solutions.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col md:items-center">
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-md">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col md:items-end">
          <h4 className="font-semibold text-white mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl">
            <Link
              to="https://github.com/Eliayo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://linkedin.com/in/elijah-ayomide-261085282"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </Link>
            {/* <Link 
            to="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </Link> */}
            <Link
              to="mailto:elijamide@gmail.com"
              className="hover:text-white transition"
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

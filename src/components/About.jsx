import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-blue-600"
          />
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify tracking-wide">
            I’m a <span className="font-semibold">Full-Stack Developer </span>
            with experience in building scalable web applications using modern
            technologies. I love solving real-world problems and turning ideas
            into digital products.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

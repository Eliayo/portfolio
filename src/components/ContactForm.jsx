import { motion } from "framer-motion";

function ContactForm() {
  return (
    <section className=" pb-16 px-6">
      <div className="w-full md:max-w-6xl mx-auto p-0 md:p-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800"
        >
          🚀 Ready to Work Together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-gray-600"
        >
          Let’s create something amazing. Reach out and let’s talk about your
          next project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;

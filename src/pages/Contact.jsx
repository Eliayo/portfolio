import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_527g4o8", // Service ID
        "template_w4kqfvk", // Template ID
        form.current,
        "FgwLr8r3Vmx2YOJih" // Public Key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <section className="text-center py-16 px-6 bg-white shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in Touch
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project idea, collaboration, or just want to say hello? I’d
          love to hear from you!
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">Send me a message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-xl font-semibold">Other Ways to Reach Me</h2>
          <p className="text-gray-600">
            Feel free to connect with me directly through any of these
            platforms:
          </p>
          <div className="flex flex-col space-y-4 text-lg">
            <a
              href="mailto:elijamide@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <MdEmail /> elijamide@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/elijah-ayomide-26108528"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <FaLinkedin /> Elijah (Aduragbemi) Ayomide
            </a>
            <a
              href="https://github.com/Eliayo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <FaGithub /> Eliayo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

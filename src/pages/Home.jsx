import Hero from "../components/Hero";
import About from "../components/About";
import ProjectList from "../components/ProjectList";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <About preview />
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2> */}
          <ProjectList limit={3} />
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <ContactForm compact />
      </section>
    </div>
  );
}

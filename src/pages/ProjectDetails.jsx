import React from "react";

const ProjectDetails = () => {
  // Example project data
  const project = {
    title: "My Awesome Project",
    description: "This is a brief description of my awesome project.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/yourusername/awesome-project",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;

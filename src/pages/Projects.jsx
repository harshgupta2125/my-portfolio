import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-6 py-20"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-center text-primary dark:text-primary-dark mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} data-aos="zoom-in-up">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

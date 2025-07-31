import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-night text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
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

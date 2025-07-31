const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl hover:scale-[1.02] transition">
      <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span key={idx} className="text-xs bg-teal-600/20 text-teal-300 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>

      <div className="flex gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="bg-purple-600 text-white px-4 py-2 text-sm rounded hover:bg-purple-700 transition"
          >
            Live Project
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700 transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

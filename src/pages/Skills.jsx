import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gradient-night text-white" data-aos="fade-up"
>
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">Tech Stack</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map((skill, i) => (
                <li key={i}>
                  <span className="font-medium text-teal-300">{skill.name}</span>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

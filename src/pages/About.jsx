

const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 bg-[#0f0c29] text-white">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="./Profile.jpg"
          alt="Harsh Gupta"
          className="rounded-2xl w-72 h-72 object-cover shadow-lg border border-white/20 backdrop-blur-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
         I'm Harsh Gupta, a passionate and focused BCA student at Galgotias University (Batch of 2026), with a strong interest in full-stack web development and backend systems.
          <br /><br />
          I’ve completed hands-on internships in Web Development and IT Support, where I built responsive user interfaces and worked with real-world systems. I'm also an open-source contributor through the GirlScript Summer of Code program, where I earned 8 badges and collaborated on live projects.
          <br /><br />
          My current stack includes React, Tailwind CSS, Python, and Django, and I’m always exploring new tools and frameworks to build efficient, user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default About;

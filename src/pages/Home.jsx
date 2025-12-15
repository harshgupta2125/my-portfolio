const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative z-10 text-center px-4"
        data-aos="zoom-in"
      >
        <div className="p-6 md:p-8 bg-surface dark:bg-surface-dark border border-text-main/10 dark:border-text-main-dark/10 rounded-2xl shadow-sm max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-text-main dark:text-text-main-dark mb-4">
            Hey, I'm <span className="text-primary dark:text-primary-dark">Harsh Gupta</span>
          </h2>
          <p className="text-lg md:text-xl text-text-main/80 dark:text-text-main-dark/80 mb-6">
            Full-Stack Developer | Python & AI Enthusiast
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md bg-primary text-white hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="/Harsh-Gupta.pdf"
              download
              className="px-5 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-night"
    >
      {/* Blurred glowing blobs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full top-10 left-[-80px] blur-3xl animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-teal-500 opacity-30 rounded-full bottom-10 right-[-100px] blur-3xl animate-ping" />

      {/* Content */}
      <div
        className="relative z-10 text-center px-4"
        data-aos="zoom-in"
      >
        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg max-w-xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wide">
            Hey, I'm <span className="text-teal-400">Harsh Gupta</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Web Developer | AI Enthusiast | Tech Explorer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Explore Projects
            </a>
            <a
              href="./Resume.pdf"
              download
              className="border border-teal-400 px-5 py-2 rounded-full text-teal-300 hover:bg-teal-600/20 transition"
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

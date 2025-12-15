import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(0,70,140,0.05),transparent_60%)]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 space-y-24 md:space-y-32" role="main">
        <section id="home" className="scroll-mt-24 md:scroll-mt-28"><Home /></section>
        <section id="about" className="scroll-mt-24 md:scroll-mt-28"><About /></section>
        <section id="projects" className="scroll-mt-24 md:scroll-mt-28"><Projects /></section>
        <section id="skills" className="scroll-mt-24 md:scroll-mt-28"><Skills /></section>
        <section id="contact" className="scroll-mt-24 md:scroll-mt-28"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

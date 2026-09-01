import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Journey from "./components/Journey.jsx";
import Projects from "./components/Projects.jsx";
import Recognition from "./components/Recognition.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

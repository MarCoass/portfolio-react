import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";
import Estudios from "./components/Estudios";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import Footer from "./components/footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={`h-full w-full mx-auto  
                    ${darkMode ? "dark" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Nav>
        <div>
          <Section id="about">
            <AboutMe></AboutMe>
          </Section>
          <Section id="estudios">
            <Estudios></Estudios>
          </Section>
          <Section id="proyectos">
            <Proyectos></Proyectos>
          </Section>
          <Section id="tecnologias">
            <Tecnologias></Tecnologias>
          </Section>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;

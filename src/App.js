import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";
import Estudios from "./components/Estudios";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={`h-full w-full mx-auto py-2 
                    ${darkMode ? "dark" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Nav>
        <div>
          <Section>
            <AboutMe></AboutMe>
          </Section>
          <Section>
            <Estudios></Estudios>
          </Section>
          <Section><Proyectos></Proyectos></Section>
          <Section><Tecnologias></Tecnologias></Section>
        </div>
      </div>
    </div>
  );
}

export default App;

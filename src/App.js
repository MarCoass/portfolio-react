import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";

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
          <Section titulo="Sobre mi">
          <AboutMe></AboutMe>
          </Section>
          <Section titulo="Estudios y experiencia"> </Section>
          <Section titulo="Proyectos"></Section>
          <Section titulo="Tecnologias"></Section>
        </div>
      </div>
    </div>
  );
}

export default App;

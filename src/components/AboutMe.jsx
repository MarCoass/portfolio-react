import React from "react";
import { ButtonGroup, Button, Typography } from "@material-tailwind/react";

export default function AboutMe() {
  return (
    <div className="flex justify-center flex-col">
      <Typography variant="h4">¡Hola!</Typography>
      <div className="flex justify-between ">
        <div className="my-auto ">
          <h3>Martina Coassin-Fernandez</h3>
          <p>Tecnica Universitaria en Desarrollo Web</p>
          <p className="mr-36">
            Soy una desarrolladora web de de Argentina. Buscando aprender nuevas
            tecnologias y lenguajes. Disfruto tanto del desafío del backend como
            de la creatividad del frontend. Estoy en la búsqueda de mi primer
            empleo como desarrolladora, ansiosa por sumergirme en proyectos que
            me permitan crecer y seguir aprendiendo.
          </p>
          <div>
            <h4>Contacto</h4>
            <ButtonGroup>
              <Button>Linkedin</Button>
              <Button>GitHub</Button>
              <Button>Correo</Button>
              <Button>CV</Button>
            </ButtonGroup>
          </div>
        </div>

        <img
          alt="foto de perfil"
          className="h-60 w-60 rounded-full object-cover object-center"
          src="https://avatars.githubusercontent.com/u/76189888?v=4"
        />
      </div>
    </div>
  );
}

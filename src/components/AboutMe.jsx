import React from "react";
import { ButtonGroup, Button, Typography } from "@material-tailwind/react";

export default function AboutMe() {
  return (
    <div className="flex justify-center flex-col">
      <Typography variant="h2" className="text-rose-700 dark:text-rose-500">
        ¡Hola, soy Martina!
      </Typography>
      <div className="flex justify-between ">
        <div className="">
          <Typography variant="h6" className="text-rose-600 dark:text-rose-400">
            Tecnica Universitaria en Desarrollo Web
          </Typography>
          <p className="mr-36 my-5">
            Soy una desarrolladora web de de Argentina. Buscando aprender nuevas
            tecnologias y lenguajes. Disfruto tanto del desafío del backend como
            de la creatividad del frontend. Estoy en la búsqueda de mi primer
            empleo como desarrolladora, ansiosa por sumergirme en proyectos que
            me permitan crecer y seguir aprendiendo.
          </p>
          <div>
            <ButtonGroup>
              <Button className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-400 dark:hover:bg-rose-300 dark:active:bg-rose-500 dark:text-rose-950">
                <a
                  href="https://www.linkedin.com/in/martina-coassin-142942197/"
                  target="__blank"
                >
                  Linkedin
                </a>
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-400 dark:hover:bg-rose-300 dark:active:bg-rose-500 dark:text-rose-950">
                <a href="https://github.com/MarCoass" target="__blank">
                  GitHub
                </a>
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-400 dark:hover:bg-rose-300 dark:active:bg-rose-500 dark:text-rose-950">
                Correo
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-400 dark:hover:bg-rose-300 dark:active:bg-rose-500 dark:text-rose-950">
                CV
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <img
          alt="foto de perfil"
          className="h-60 w-60 rounded-full object-cover object-center shadow-xl shadow-rose-500 "
          src="https://avatars.githubusercontent.com/u/76189888?v=4"
        />
      </div>
    </div>
  );
}

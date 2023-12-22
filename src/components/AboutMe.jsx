import React from "react";
import { ButtonGroup, Button, Typography } from "@material-tailwind/react";

export default function AboutMe() {
  return (
    <div className="flex justify-center flex-col">
      <Typography variant="h4">Sobre Mi</Typography>
      <div className="flex justify-between">
        <div className="my-auto">
          <h3>Martina Coassin-Fernandez</h3>
          <p>Tecnica Universitaria en Desarrollo Web</p>
          <p>
            blablablablabla blablablablabla blablablablabla blablablablabla
            blablablablabla blablablablabla
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

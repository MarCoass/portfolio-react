import React from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";

export default function AboutMe() {
  return (
    <div className="flex justify-center">
    <div>
         <h3>Martina Coassin-Fernandez</h3>
      <p>Tecnica Universitaria en Desarrollo Web</p>
      <p>
        blablablablabla blablablablabla blablablablabla blablablablabla
        blablablablabla blablablablabla
      </p>
      <div>
        <h4>Contacto</h4>
        <ButtonGroup>
          <Button>Linkdn</Button>
          <Button>GitHub</Button>
          <Button>Correo</Button>
          <Button>CV</Button>
        </ButtonGroup>
      </div>
    </div>
     
      <img
        alt="foto de perfil"
        className="h-60 w-60 rounded-full object-cover object-center"
        src="https://i.pinimg.com/564x/a0/a2/5f/a0a25f748f48c3e3463c4f499520ffdb.jpg"
      />
    </div>
  );
}

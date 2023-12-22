import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Estudios() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <Typography variant="h4">Estudios</Typography>
        <div>
          <p>Tecnicatura Universitaria en Desarrollo Web</p>
          <p>2021 - 2023</p>
          <p>Universidad Nacional del Comahue</p>
        </div>
      </div>
      <div className="w-1/2">
        <Typography variant="h4">Experiencia</Typography>
        <div>
          <p>Beca de Capacitación Pre-Profesionales Universitarias PPU</p>
          <p>2022 - 2023</p>
          <p>Universidad Nacional del Comahue</p>
        </div>
      </div>
    </div>
  );
}

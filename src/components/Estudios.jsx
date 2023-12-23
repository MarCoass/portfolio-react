import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Estudios() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <div className="md:w-1/2">
        <Typography
          variant="h3"
          className="text-rose-700 dark:text-rose-500 my-5"
        >
          Estudios
        </Typography>
        <div>
          <Typography variant="h6">
            Tecnicatura Universitaria en Desarrollo Web
          </Typography>
          <div className="pl-5">
            <p>2021 - 2023</p>
            <p>Universidad Nacional del Comahue</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <Typography
          variant="h3"
          className="text-rose-700 dark:text-rose-500 my-5"
        >
          Experiencia
        </Typography>
        <div>
          <Typography variant="h6">
            Beca de Capacitación Pre-Profesionales Universitarias PPU
          </Typography>
          <div className="pl-5">
            <p>2022 - 2023</p>
            <p>Universidad Nacional del Comahue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

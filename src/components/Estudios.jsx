import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Estudios() {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
        <Typography
          variant="h3"
          className="text-rose-700 dark:text-rose-500 my-5"
        >
          Experiencia
        </Typography>
        <div className="my-5">
          <Typography variant="h6">
            Frontend Developer - Dotcom
          </Typography>
          <div className="pl-5">
            <p>Julio 2025 - Actualidad</p>
            <p>Implementacion de nuevas funcionalidad en sistema empresarial. <br />
              Refactorizacion de funcionalidades existentes. <br />
              Armado de app móviles con CapacitorJS y Google Play Console. <br />
            </p>
          </div>
        </div>
        <div className="my-5">
          <Typography variant="h6">
            Frontend Developer - AltoValleStudio
          </Typography>
          <div className="pl-5">
            <p>Julio 2024 - Julio 2025</p>
            <p>Desarrollo de componentes y servicios en Angular.
              Integración con Firebase (Firestore, Cloud Functions). <br />
              Mantenimiento y optimización de sistemas en producción. <br />
              Armado de app móviles con CapacitorJS y Google Play Console. <br />
            </p>
          </div>
        </div>
        <div>
          <Typography variant="h6">
            Fullstack Developer - Freelance
          </Typography>
          <div className="pl-5">
            <p>Febrero 2024 - Septiembre 2024</p>
            <p>Desarrollo de sitio web para emprendimiento inmobiliario con ReactJS y Laravel.
              Referencia: sitio web <a href="https://buenosairesconfort.com" target="_blank" rel="noopener noreferrer">Buenos Aires Confort</a>
            </p>
          </div>
        </div>
        <div className="my-5">
          <Typography variant="h6">
            Beca de Capacitación Pre-Profesionales Universitarias PPU
          </Typography>
          <div className="pl-5">
            <p>2022 - 2023</p>
            <p>Universidad Nacional del Comahue</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <Typography
          variant="h3"
          className="text-rose-700 dark:text-rose-500 my-5"
        >
          Estudios
        </Typography>
        <div className="my-5">
          <Typography variant="h6">
            Licenciatura en Ciencias de la Computación
          </Typography>
          <div className="pl-5">
            <p>2024 - Actualidad</p>
            <p>Universidad Nacional del Comahue</p>
          </div>
        </div>
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

    
    </div>
  );
}

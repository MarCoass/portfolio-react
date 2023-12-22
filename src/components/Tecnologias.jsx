import React from "react";
import { Typography, Chip } from "@material-tailwind/react";

const tecnologias = [
  { nombre: "tailwindcss", svg: "tailwindcss.svg", desde: "2023" },
  { nombre: "nextjs", svg: "nextjs.svg", desde: "2023" },
  { nombre: "laravel", svg: "laravel.svg", desde: "2023" },
  { nombre: "react", svg: "", desde: "2023" },
  { nombre: "bootstrap", svg: "", desde: "2022" },
  { nombre: "github", svg: "", desde: "2019" },
  { nombre: "html", svg: "", desde: "2018" },
  { nombre: "javascript", svg: "", desde: "2018" },
  { nombre: "css", svg: "", desde: "2018" },
  { nombre: "sql", svg: "", desde: "2021" },
  { nombre: "vuejs", svg: "", desde: "2020" },
];

export default function Tecnologias() {
  return (
    <div>
      <Typography variant="h4">Tecnologias</Typography>
      <div className=" flex flex-wrap gap-5">
        {tecnologias.map((tec, index) => (
          <div key={index} className="flex items-center gap-4 ">
            {tec.svg !== "" && (
              <img
                src={`/assets/tecnologias/${tec.svg}`}
                alt={tec.nombre}
                className="w-12"
              />
            )}
            <div>
              <Typography variant="h6">{tec.nombre}</Typography>
              <Typography variant="small"  className="font-normal">
                Desde: {tec.desde}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TecnologiasUsadas({ array }) {
  const tecnologiasFiltradas = tecnologias.filter((tec) =>
    array.includes(tec.nombre)
  );

  return (
    <div className="flex gap-3 flex-wrap">
      {tecnologiasFiltradas.map((tec, index) => (
        <Chip
          variant="ghost"
          className="w-min"
          key={index}
          size="sm"
          value={tec.nombre}
        />
      ))}
    </div>
  );
}

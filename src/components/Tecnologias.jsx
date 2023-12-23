import React from "react";
import { Typography, Chip } from "@material-tailwind/react";

const tecnologias = [
  { nombre: "tailwindcss", svg: "tailwindcss.svg", desde: "2023" },
  { nombre: "nextjs", svg: "nextjs.svg", desde: "2023" },
  { nombre: "laravel", svg: "laravel.svg", desde: "2023" },
  { nombre: "react", svg: "react.svg", desde: "2023" },
  { nombre: "bootstrap", svg: "bootstrap.svg", desde: "2022" },
  { nombre: "github", svg: "github.svg", desde: "2019" },
  { nombre: "html", svg: "html.svg", desde: "2018" },
  { nombre: "javascript", svg: "javascript.svg", desde: "2018" },
  { nombre: "css", svg: "css.svg", desde: "2018" },
  { nombre: "sql", svg: "sql.svg", desde: "2021" },
  { nombre: "vuejs", svg: "vuejs.svg", desde: "2020" },
];

export default function Tecnologias() {
  return (
    <div>
      <Typography variant="h3" className="text-rose-700 dark:text-rose-500">
        Tecnologias
      </Typography>
      <div className=" flex flex-wrap gap-5 ">
        {tecnologias.map((tec, index) => (
          <div
            key={index}
            className=" flex items-center gap-4 border border-rose-500 text-rose-500 dark:text-rose-600 dark:border-rose-600 dark:bg-rose-200 rounded p-2"
          >
            {tec.svg !== "" && (
              <img
                src={`assets/tecnologias/${tec.svg}`}
                alt={tec.nombre}
                className="w-12 "
              />
            )}
            <div>
              <Typography variant="h6" className="uppercase">
                {tec.nombre}
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-rose-950 "
              >
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
    <div className="flex gap-3 flex-wrap ">
      {tecnologiasFiltradas.map((tec, index) => (
        <Chip
          key={tec.nombre}
          size="sm"
          variant="ghost"
          value={tec.nombre}
          className="my-auto w-min h-min bg-rose-400 text-neutral-800 dark:text-neutral-900 dark:bg-rose-600 "
        />
      ))}
    </div>
  );
}

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { TecnologiasUsadas } from "./Tecnologias";

export default function Proyecto({
  titulo,
  tecnologias,
  descripcion,
  imagen,
  tipo,
  tamaño,
}) {
  const cardWidth = tamaño === "grande" ? "md:w-96" : "md:w-64";
  const cardHeaderHeight = tamaño === "grande" ? "md:h-56" : "";

  return (
    <div className="my-3">
      <Card
        className={`mt-6 w-full ${cardWidth} bg-rose-100 dark:bg-rose-950 shadow-lg shadow-rose-500 dark:shadow-rose-800 border border-rose-400`}
      >
        <CardHeader
          className={`relative border border-rose-400 ${cardHeaderHeight}`}
        >
          <img src="https://placehold.co/600x400/EEE/31343C" alt={titulo} />
        </CardHeader>
        <CardBody className="dark:text-rose-100">
          <div className="mb-3 flex flex-wrap align-middle justify-center">
            <Typography
              variant="h4"
              className="my-auto  mr-5 text-rose-800 dark:text-rose-50"
            >
              {titulo}
            </Typography>
            <Chip
              size="sm"
              variant="outlined"
              value={tipo}
              className="my-auto w-min h-min border-rose-500 text-rose-500 dark:text-rose-600 dark:border-rose-600 "
            />
          </div>

          {descripcion && (
            <Typography className="text-black dark:text-rose-50">
              {descripcion}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <TecnologiasUsadas array={tecnologias}></TecnologiasUsadas>
        </CardFooter>
      </Card>
    </div>
  );
}

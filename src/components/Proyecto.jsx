import React, { Children } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";


export default function Proyecto({
  titulo,
  tecnologias,
  descripcion,
  imagen,
  tipo,
}) {
  return (
    <div className="">
      <Card className="mt-6 w-64">
        <CardHeader color="blue-gray" className="relative ">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="blabla" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {titulo}
          </Typography>
          <Chip size="sm" variant="outlined" value={tipo} className="w-min" />
          <Typography>{descripcion}</Typography>
        </CardBody>
        <CardFooter className="pt-0">tecnologias</CardFooter>
      </Card>
    </div>
  );
}

export function ProyectoGrande({
  titulo,
  tecnologias,
  descripcion,
  imagen,
  tipo
}) {
  return (
    <div className="">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="card-image" />
        </CardHeader>
        <CardBody>
          <div className="flex align-middle justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {titulo}
            </Typography>
            <Chip size="sm" variant="outlined" value={tipo} className="h-min" />
          </div>

          <Typography>{descripcion}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
        {Children.map(tecnologias, child =>
        <div className="Row">
          {child}
        </div>
      )}
        </CardFooter>
      </Card>
    </div>
  );
}

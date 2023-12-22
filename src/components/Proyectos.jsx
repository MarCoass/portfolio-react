import React from "react";
import { Typography } from "@material-tailwind/react";
import Proyecto, { ProyectoGrande } from "./Proyecto";

export default function Proyectos() {
  return (
    <div className="">
      <Typography variant="h4">Proyectos</Typography>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-5 justify-around">
          <ProyectoGrande
            tipo="Trabajo Práctico"
            titulo="Mar Nails"
            descripcion="Tienda virtual y gestion de emprendimiento, tiene funcionalidades para controlar stock, precios de insumos, agenda de pedidos, tareas y otras funcionalidad utiles para una manicurista que realiza Press On Nails."
            tecnologias={["laravel", "nextjs", "postgresql", "tailwindcss"]}
          ></ProyectoGrande>
          <ProyectoGrande
            tipo="Trabajo Práctico"
            titulo="NeuPoom"
            descripcion="Administracion de competencias de Poomsae, permite el registro de participantes, creacion de competencias y un pulsador para que los jueces puedan puntuar las competencias."
          ></ProyectoGrande>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          <Proyecto titulo="Indecisos" tipo="Proyecto Personal"></Proyecto>
          <Proyecto titulo="Portfolio" tipo="Proyecto Personal">
            {" "}
          </Proyecto>
          <Proyecto titulo="Otro Proyecto" tipo="Freelance"></Proyecto>
        </div>
      </div>
    </div>
  );
}

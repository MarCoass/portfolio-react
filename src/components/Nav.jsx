import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { Link } from "react-scroll";

export default function Nav(props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lg:flex gap-5">
      <MenuItem className="min-w-max">
        <Link
          to="about" // Este 'to' debe coincidir con el 'id' de la sección a la que quieres desplazar
          spy={true}
          smooth={true}
          offset={-70} // Puedes ajustar el desplazamiento aquí si es necesario
          duration={500}
        >
          Sobre mi
        </Link>
      </MenuItem>
      <MenuItem className="min-w-max">
        <Link
          to="estudios"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Estudios
        </Link>
      </MenuItem>
      <MenuItem className="min-w-max">
        <Link
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Proyectos
        </Link>
      </MenuItem>
      <MenuItem className="min-w-max">
        <Link
          to="tecnologias"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Tecnologias
        </Link>
      </MenuItem>
      {/*  Toggle del tema */}
      <div className="flex">
        <Switch onClick={props.toggleDarkMode} />
      </div>
    </ul>
  );

  return (
    <nav className="sticky-navbar  dark:bg-gray-600 dark:text-white font-bold">
      <Navbar className=" h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-3xl"
          >
            Martina Coassin
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {/* Resto de tu código de iconos */}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </nav>
  );
}

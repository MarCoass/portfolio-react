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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav(props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lg:flex gap-5 text-rose-800 dark:text-rose-500 font-bold text-md">
     <NavItem to='about' texto='sobre mi'></NavItem>
     <NavItem to='estudios' texto='estudios'></NavItem>
     <NavItem to='proyectos' texto='proyectos'></NavItem>
     <NavItem to='tecnologias' texto='tecnologias'></NavItem>
     
      {/*  Toggle del tema */}
      <div className="flex ml-3">
        <Switch onClick={props.toggleDarkMode} />
      </div>
    </ul>
  );

  return (
    <nav className="sticky-navbar rounded-2xl bg-rose-50 border border-1.5 border-rose-400 dark:border-rose-600 dark:bg-rose-950  dark:text-white">
      <Navbar
        color="transparent"
        className=" h-max max-w-full rounded-2xl px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-rose-700 dark:text-rose-50">
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
              className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </nav>
  );
}

export function NavItem({to, texto}) {
  return (
    <MenuItem className="min-w-max uppercase dark:hover:text-white dark:focus:text-white hover:bg-rose-300 active:bg-rose-500 focus:bg-rose-400">
      <Link
        to={to} // Este 'to' debe coincidir con el 'id' de la sección a la que quieres desplazar
        spy={true}
        smooth={true}
        offset={-70} // Puedes ajustar el desplazamiento aquí si es necesario
        duration={500}
      >
        {texto}
      </Link>
    </MenuItem>
  );
}

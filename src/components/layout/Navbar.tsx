import logo from "../../assets/logo.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import Button from "../ui/Button";
import { NavLink } from "react-router";

export const MenuLinks = [
  { id: 1, name: "Inicio", link: "/" },
  { id: 2, name: "Quiénes somos", link: "/AboutPage" },
  { id: 3, name: "Servicios", link: "/ServicesPage" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-[#E9EAEA]/40">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-12 py-3 md:py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo Alta y Precisión"
                className="w-30 md:w-38"
              />
            </NavLink>
          </div>

          {/* Enlaces de navegación (desktop) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="cursor-pointer py-4">
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `text-lg font-medium tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-[#B37A2E] border-b-2 border-[#B37A2E]"
                          : "text-[#222222] hover:text-[#B37A2E]"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              <NavLink to="/ContactPage">
                <Button
                  label="Contáctanos"
                  onClick={() => console.log("Click en botón")}
                  className="bg-[#B37A2E] text-white hover:bg-[#222222] transition-all"
                />
              </NavLink>
            </ul>
          </div>

          {/* Ícono menú móvil */}
          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer text-3xl text-[#222222]"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer text-3xl text-[#222222]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Menú responsive */}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;

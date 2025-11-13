import { NavLink } from "react-router";
import logo from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1D1D1E] via-[#1D1D1E] to-[#1D1D1E] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Izquierda: Logo y descripción */}
          <div className="flex items-center justify-center h-full">
            <a href="#" className="inline-block">
              <img
                src={logo}
                alt="Logo Alta y Precisión"
                className="h-25 w-auto"
              />
            </a>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold text-[#B37A2E]">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <NavLink
                  to="/"
                  className="text-[#E9EAEA] hover:text-[#B37A2E] transition"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AboutPage"
                  className="text-[#E9EAEA] hover:text-[#B37A2E] transition"
                >
                  Quiénes Somos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ServicesPage"
                  className="text-[#E9EAEA] hover:text-[#B37A2E] transition"
                >
                  Servicios
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Soporte y Legal */}
          <div>
            <h3 className="text-xl font-semibold text-[#B37A2E]">
              Soporte & Legal
            </h3>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <a
                  href="#"
                  className="text-[#E9EAEA] hover:text-[#B37A2E] transition"
                >
                  Términos & Condiciones
                </a>
              </li>
              <li>
                <NavLink
                  to="/AvisosPage"
                  className="text-[#E9EAEA] hover:text-[#B37A2E] transition"
                >
                  Avisos de privacidad
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold text-[#B37A2E]">Contacto</h3>
            <div className="mt-4 space-y-3 text-[#E9EAEA] text-base">
              <p className="flex items-center">
                <FaEnvelope className="text-[#B37A2E] mr-2" />
                contacto@altayprecision.com
              </p>
              <p className="flex items-center">
                <FaFacebook className="text-[#B37A2E] mr-2" />
                Alta y Precisión
              </p>
              <p className="flex items-center">
                <FaInstagram className="text-[#B37A2E] mr-2" />
                @altayprecision
              </p>
            </div>
          </div>
        </div>

        {/* Pie inferior */}
        <div className="mt-8 border-t border-[#E9EAEA]/60 pt-4 text-center text-[#E9EAEA] text-sm">
          <p>
            © 2025 Alta y Precisión S.A. de C.V. — Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/ServicioUno.jpg";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection = () => {
  return (
    <section className="relative bg-[#FFFFFF] pt-16 pb-16 px-8 md:pb-24 md:px-20 lg:px-20 xl:px-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
        {/* Imagen izquierda — sin modificar tamaños */}
        <div className="relative w-full h-[400px] md:h-auto">
          <img
            src={diagonalImg}
            alt="Servicio de construcción"
            className="w-full h-full object-cover md:h-full md:absolute md:inset-0"
          />
        </div>

        {/* Texto derecho (solo más ancho) */}
        <div className="flex flex-col justify-center space-y-6 max-w-[700px]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#343434]">
            <span className="text-[#343434]">Servicios de construcción</span>
          </h2>

          <p className="text-[#5A5D5D] text-lg md:text-xl text-justify leading-relaxed">
            Ejecución de obras civiles, arquitectónicas y de interiorismo con
            enfoque en calidad, seguridad y cumplimiento. Cada proyecto se
            desarrolla bajo estrictos estándares técnicos y estéticos,
            garantizando precisión y resultados duraderos en cada etapa
            constructiva.
          </p>

          {/* Lista de puntos */}
          <ul className="space-y-3 text-[#5A5D5D] text-base md:text-lg ">
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Obras nuevas, remodelaciones y ampliaciones.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Construcción de mobiliario arquitectónico especializado.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Supervisión técnica y control de calidad estructural.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Cumplimiento normativo en cada obra.
            </li>
          </ul>

          {/* Botón */}
          <NavLink to="/ContactPage">
            <Button
              label="Contáctanos"
              onClick={() => console.log("Click en botón")}
              className="bg-[#B37A2E] text-white hover:bg-[#222222] transition-all"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

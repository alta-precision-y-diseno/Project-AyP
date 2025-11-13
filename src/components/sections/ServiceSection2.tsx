import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/ServicioDos.jpg";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection2 = () => {
  return (
    <section className="relative bg-[#FFFFFF] pb-16 px-8 md:pb-24 md:px-20 lg:px-20 xl:px-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
        {/* Texto izquierdo */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1 max-w-[700px]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#343434]">
            <span className="text-[#343434]">
              Asesoría en proyectos y mobiliario especial
            </span>
          </h2>

          <p className="text-[#5A5D5D] text-lg md:text-xl font-light text-justify leading-relaxed">
            Diseñamos, desarrollamos y asesoramos proyectos de mobiliario
            arquitectónico a medida, integrando ingeniería, diseño y ergonomía.
            Nuestro equipo técnico analiza materiales, procesos y metodologías
            constructivas para ofrecer soluciones funcionales, duraderas y
            visualmente impecables.
          </p>

          {/* Lista de puntos */}
          <ul className="space-y-3 text-[#5A5D5D] text-base md:text-lg font-light">
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Espacios corporativos, comerciales y residenciales.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Hospitales, laboratorios y centros educativos.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Mobiliario urbano y arquitectónico especializado.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#BA863D] text-2xl" />
              Pruebas de calibración y control de calidad post-servicio.
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

        {/* Imagen derecha — sin cambiar tamaños */}
        <div className="relative w-full h-[400px] md:h-auto order-1 md:order-2">
          <img
            src={diagonalImg}
            alt="Servicio de mantenimiento industrial"
            className="w-full h-full object-cover md:absolute md:inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;

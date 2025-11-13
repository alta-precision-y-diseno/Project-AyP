import { NavLink } from "react-router";
import Button from "../ui/Button";
import diagonalImg from "../../assets/servicios_hero.png";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:h-[680px] font-[Avenir Next LT Pro,Host Grotesk] bg-gradient-to-l from-[#1D1D1E] via-[#1D1D1E] to-[#5A5D5D]">
      {/* Fondo diagonal con imagen - solo en desktop */}
      <div
        className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${diagonalImg})`,
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda vacía (solo layout en desktop) */}
        <div className="hidden md:block"></div>

        {/* Columna derecha con contenido */}
        <div className="flex flex-col justify-center text-[#FFFFFF]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 text-center md:text-left">
            Soluciones que impulsan tu empresa
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto md:mx-0 font-light text-[#F7F7F8] text-center md:text-left leading-relaxed">
            En <span className="font-bold text-[#BA863D]">Alta Precisión y Diseño</span> desarrollamos proyectos integrales que
            combinan ingeniería, planeación y ejecución constructiva con
            exactitud técnica, eficiencia y compromiso. Cada solución está
            diseñada para optimizar recursos y garantizar resultados duraderos.
          </p>

          <NavLink to="/ContactPage">
            <Button
              label="Más información"
              onClick={() => console.log("Click en botón")}
              className="bg-[#B37A2E] text-white border-2 border-transparent
               hover:!bg-transparent hover:text-[#B37A2E] hover:border-[#B37A2E]
               transition-all duration-300"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

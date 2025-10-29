import logogris from "../../assets/logogris2.png";
import elegirnos from "../../assets/elegirnos.png";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const About = () => {
  return (
    <section className="bg-[#FFFFFF] pt-0 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-12 px-6 sm:px-10 lg:px-20 font-[eurostile]">
        {/* Columna izquierda (texto ampliado) */}
        <div className="flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#343434] mb-6 leading-snug">
            ¿Por qué{" "}
            <span className="text-[#BA863D] font-semibold">elegirnos?</span>
          </h2>

          <p className="text-[#5A5D5D] text-lg leading-relaxed font-light mb-10 max-w-2xl mx-auto sm:mx-0">
            Contamos con experiencia comprobada en el sector industrial y técnico.
            Nuestro equipo altamente capacitado brinda atención personalizada y
            soluciones a la medida, siempre con enfoque en precisión, cumplimiento
            y eficiencia. Cada proyecto representa un compromiso con la calidad y
            la exactitud constructiva.
          </p>

          <NavLink to="/AboutPage">
            <Button
              label="Obtener informes"
              className="bg-[#BA863D] hover:bg-[#343434] text-white px-8 py-3 font-medium transition-all duration-300"
              onClick={() => console.log("Click en botón")}
            />
          </NavLink>
        </div>

        {/* Columna derecha (imagen rectangular) */}
        <div className="flex justify-center sm:justify-end">
          <img
            src={elegirnos}
            alt="Sección ilustrativa"
            className="rounded-lg w-full max-w-2xl h-[300px] md:h-[340px] lg:h-[380px] object-cover object-center shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

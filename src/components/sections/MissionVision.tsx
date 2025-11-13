import React from "react";
import CustomIcon from "../ui/CustomIcon";
import mision from "../../assets/mision_y_vision.png";

const MissionVision: React.FC = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen a la izquierda (oculta en móviles) */}
        <div className="hidden md:block">
          <img
            src={mision}
            alt="Equipo Edernanol"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="space-y-8">
          {/* Misión */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#343434]  flex items-center gap-2 mb-6">
              <CustomIcon size={70} color1="#1D1D1E" color2="#BA863D" />
              Misión
            </h2>
            <p className="text-[#5A5D5D] leading-relaxed mb-4 text-lg text-justify">
              Entregar soluciones constructivas y de mobiliario especial con
              precisión técnica, planeación sólida y diseño funcional. Nos
              enfocamos en cumplir altos estándares de calidad, seguridad y
              eficiencia, asegurando resultados confiables y alineados a las
              necesidades de cada cliente.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#343434]  flex items-center gap-2 mb-6">
              <CustomIcon size={70} color1="#1D1D1E" color2="#BA863D" />
              Visión
            </h2>
            <p className="text-[#5A5D5D] leading-relaxed mb-4 text-lg text-justify">
              Ser una empresa reconocida por su precisión, innovación y
              excelencia en proyectos de construcción y diseño especializado,
              destacando por nuestro profesionalismo y capacidad para
              desarrollar obras de alto nivel tanto en México como en el
              extranjero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

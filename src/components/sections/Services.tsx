import Button from "../ui/Button";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import Card from "../ui/Card";
import { NavLink } from "react-router";

const Services = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#343434] mb-6 leading-snug">
            ¡Lo que{" "}
            <span className="text-[#BA863D] font-semibold">ofrecemos!</span>
          </h2>
          <p className="text-[#5A5D5D] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            En <span className="font-bold text-[#BA863D]">Alta Precisión y Diseño</span> ofrecemos soluciones constructivas que
            combinan ingeniería, planeación y ejecución con excelencia técnica.
            Cada proyecto es una muestra de precisión, eficiencia y calidad.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <Card
            image={service1}
            title="Servicios de construcción"
            items={[
              "Ejecución de obras civiles y arquitectónicas.",
              "Control total de calidad, seguridad y tiempos.",
              "Construcción de mobiliario arquitectónico especializado.",
            ]}
          />

          <Card
            image={service2}
            title="Asesoría en proyectos de mobiliario especial"
            items={[
              "Diseño y desarrollo a medida.",
              "Análisis técnico de materiales y procesos.",
              "Soluciones únicas y duraderas.",
            ]}
          />

          <Card
            image={service3}
            title="Planeación y gestión de proyectos"
            items={[
              "Planeación integral nacional e internacional.",
              "Coordinación técnica y normativa.",
              "Cumplimiento estructural y de seguridad.",
            ]}
          />
        </div>

        {/* Botón final */}
        <div className="mt-16 text-center">
          <NavLink to="/ServicesPage">
            <Button
              label="Ver todos los servicios"
              onClick={() => console.log("Click en botón")}
              className="bg-[#BA863D] text-white hover:bg-[#343434] transition-all duration-300"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Services;

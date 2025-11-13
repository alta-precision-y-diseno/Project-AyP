import experienciaImg from "../../assets/50_años_de_experiencia.png";
import CustomIcon from "../ui/CustomIcon";

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          {/* Título con icono */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#343434] flex items-center gap-3 mb-6">
            <CustomIcon size={150} color1="#1D1D1E" color2="#BA863D" />
            Más de una década de experiencia en ingeniería, planeación y ejecución constructiva
          </h2>

          {/* Párrafos */}
          <p className="text-[#5A5D5D] leading-relaxed mb-4 text-lg text-justify">
            En <span className="font-bold text-[#BA863D]">Alta Precisión y Diseño</span> desarrollamos soluciones integrales en
            construcción, arquitectura y mobiliario especial. Combinamos
            ingeniería, planeación y ejecución con exactitud técnica para lograr
            proyectos funcionales, eficientes y sostenibles.
          </p>

          <p className="text-[#5A5D5D] leading-relaxed mb-4 text-lg text-justify">
            Nuestro compromiso es brindar precisión en cada detalle: desde la
            concepción del diseño hasta la entrega final. Implementamos
            metodologías avanzadas y control de calidad estructural para
            garantizar resultados duraderos que superan las expectativas de
            nuestros clientes.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={experienciaImg}
            alt="Ingeniería y proyectos constructivos"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;


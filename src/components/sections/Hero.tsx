import sampleVideo from "../../assets/video.mp4";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-[680px] overflow-hidden text-[var(--color-light)]">
      {/* Video de fondo en blanco y negro */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-[1.1] grayscale"
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa de overlay sólida */}
      <div className="absolute inset-0 bg-[var(--color-dark)]/50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl w-full text-center px-8 sm:px-12 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#BA863D] block">
            Alta Precisión y Diseño
          </span>
          <span className="text-[#F7F7F8]">
            Ingeniería, planeación y ejecución con exactitud constructiva
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#F7F7F8] max-w-3xl mx-auto">
          Desarrolladora especializada en la planeación, construcción y asesoría
          integral de proyectos arquitectónicos y de mobiliario especial.
          Combinamos ingeniería, diseño y precisión para crear espacios que
          reflejan funcionalidad, estética y excelencia técnica.
        </p>

        <NavLink to="/ServicesPage">
          <Button
            label="Conócenos"
            className="mt-8 bg-[#BA863D] hover:bg-[#343434] text-[#F7F7F8] transition-all duration-300"
            onClick={() => console.log('Click en botón')}
          />
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;

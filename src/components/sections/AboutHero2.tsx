import imagen from "../../assets/about.jpg";
import overlay from "../../assets/hero.jpg"; // usa tu imagen de fondo real

const AboutHero2 = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[700px] bg-[#343434] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={overlay}
          alt="Fondo decorativo"
          className="w-full h-full object-cover grayscale brightness-[0.55] contrast-[1.05]"
        />
        {/* Capa oscura semi-transparente */}
        <div className="absolute inset-0 bg-[#1A1A1A]/60"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16 text-[#F7F7F8]">
        {/* Imagen circular */}
        <div className="relative flex items-center justify-center w-[530px] h-[530px]">
  <div className="absolute w-[470px] h-[470px] bg-[#BA863D] rounded-full opacity-90"></div>
  <div className="absolute w-[410px] h-[410px] bg-[#D7DADE] rounded-full"></div>
  <img
    src={imagen}
    alt="Equipo de trabajo"
    className="relative w-[350px] h-[350px] object-cover rounded-full" // ← se quitó grayscale
  />
</div>


        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl space-y-5">
          <p className="text-4xl font-extrabold tracking-tight text-[#D7DADE]">
            Acerca de
          </p>

          {/* Nombre de la empresa en texto bold */}
          <h1 className="text-5xl font-extrabold text-[#BA863D] leading-tight">
            Alta Precisión y Diseño
          </h1>

          <p className="text-lg font-light leading-relaxed text-[#D7DADE]">
            En Alta Precisión y Diseño integramos ingeniería, planeación y
            ejecución constructiva con exactitud, creando soluciones
            personalizadas que reflejan eficiencia, seguridad y compromiso con
            la calidad en cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero2;

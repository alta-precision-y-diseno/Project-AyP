import privacyImage from "../../assets/avisoshero.jpg"; // tu imagen

const PrivacyHero = () => {
  return (
    <section className="relative flex items-center justify-center h-[270px] overflow-hidden text-[var(--color-light)]">
      {/* Imagen de fondo con grises */}
      <img
        src={privacyImage}
        alt="privacy background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-[1.1] grayscale"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[var(--color-dark)]/40"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#F7F7F8]">
          Avisos de privacidad
        </h1>
      </div>
    </section>
  );
};

export default PrivacyHero;

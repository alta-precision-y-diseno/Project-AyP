import "../../styles/Clients.css";

const Clients = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1D1D1E] via-[#1D1D1E] to-[#1D1D1E]">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F7F7F8] mb-6 leading-snug">
            Empresas que respaldan{" "}
            <span className="text-[#BA863D] font-semibold">nuestra visión</span>
          </h2>
          <p className="text-[#F7F7F8] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Colaboramos con aliados estratégicos que garantizan calidad,
            precisión y respaldo en cada proyecto técnico e industrial.  
            Juntos impulsamos soluciones confiables y eficientes.
          </p>
        </div>

        {/* Logos con animación */}
        <div className="relative overflow-hidden py-6 sm:py-8">
          <div className="animate-marquee flex items-center justify-center space-x-10 sm:space-x-16">
            <img
              className="object-contain w-auto h-10 sm:h-12 opacity-90 hover:opacity-100 transition"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-waverio.svg"
              alt="Waverio"
            />
            <img
              className="object-contain w-auto h-10 sm:h-12 opacity-90 hover:opacity-100 transition"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-squarestone.svg"
              alt="Squarestone"
            />
            <img
              className="object-contain w-auto h-10 sm:h-12 opacity-90 hover:opacity-100 transition"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-martino.svg"
              alt="Martino"
            />
            <img
              className="object-contain w-auto h-10 sm:h-12 opacity-90 hover:opacity-100 transition"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-virogan.svg"
              alt="Virogan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

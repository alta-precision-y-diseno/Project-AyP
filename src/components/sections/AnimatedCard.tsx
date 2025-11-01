import { motion } from "framer-motion";
import { useState } from "react";
import { FiTool, FiPackage, FiSettings, FiCpu } from "react-icons/fi";

const cards = [
  {
    icon: <FiTool size={60} />,
    title: "Diseño funcional",
    description:
      "Creamos mobiliario arquitectónico que combina estética, ergonomía y durabilidad. Cada diseño se adapta a las necesidades del cliente, priorizando funcionalidad y confort.",
  },
  {
    icon: <FiPackage size={60} />,
    title: "Análisis técnico",
    description:
      "Evaluamos materiales, procesos y metodologías constructivas para asegurar la calidad, eficiencia y seguridad en cada proyecto desarrollado.",
  },
  {
    icon: <FiSettings size={60} />,
    title: "Optimización constructiva",
    description:
      "Integramos tecnología y técnicas avanzadas para maximizar la precisión estructural y la eficiencia productiva en cada etapa del desarrollo.",
  },
  {
    icon: <FiCpu size={60} />,
    title: "Soluciones personalizadas",
    description:
      "Adaptamos nuestros servicios a proyectos corporativos, industriales o comerciales, garantizando resultados únicos y de alto valor técnico.",
  },
];

const AnimatedCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FFFFFF] pb-16 px-8 md:pb-24 md:px-20 lg:px-20 xl:px-30">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Título principal */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#343434]">
          <span className="text-[#343434]">
            Asesoría en proyectos y mobiliario especial
          </span>
        </h2>

        {/* Descripción breve */}
        <p className="text-[#5A5D5D] text-lg md:text-xl font-light leading-relaxed mt-6 max-w-3xl mx-auto">
          Diseñamos, desarrollamos y asesoramos proyectos de mobiliario
          arquitectónico a medida, integrando ingeniería, diseño y ergonomía.
          Nuestro equipo técnico analiza materiales, procesos y metodologías
          constructivas para ofrecer soluciones funcionales, duraderas y
          visualmente impecables.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative p-[2px] rounded-2xl overflow-hidden"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Efecto líquido animado en hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={
                hoveredIndex === i
                  ? {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      opacity: 1,
                      filter: "blur(4px) brightness(1.3)",
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: hoveredIndex === i ? Infinity : 0,
              }}
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #BA863D, #D7DADE, #343434, #BA863D)",
                backgroundSize: "400% 400%",
              }}
            />

            {/* Tarjeta interior */}
            <div className="relative bg-[#FFFFFF] rounded-2xl p-8 w-[280px] h-[380px] flex flex-col items-center justify-center text-center text-[#343434] border border-[#D7DADE] hover:border-[#BA863D] transition-all duration-500">
              <div className="mb-6 text-[#BA863D]">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-[#5A5D5D] font-light leading-relaxed text-base">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCard;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    company: "GRUPO ARCANO",
    quote:
      "El equipo de Alta Precisión y Diseño superó nuestras expectativas en cada fase del proyecto. Su nivel técnico y compromiso con la calidad es excepcional.",
    name: "ANDREA FLORES",
    position: "Gerente de proyectos",
  },
  {
    company: "CONSTRUCTORA VERTICE",
    quote:
      "Su enfoque en la planeación y precisión estructural marca una gran diferencia. Cumplieron cada entrega con profesionalismo y detalle.",
    name: "LUIS TORRES",
    position: "Director técnico",
  },
  {
    company: "INNOVA BUILD",
    quote:
      "Colaborar con Alta Precisión y Diseño ha sido garantía de eficiencia, seguridad y resultados impecables en obra.",
    name: "MARIA LOPEZ",
    position: "Coordinadora de obra",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const duration = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch font-[eurostile]">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#343434] mb-6 leading-snug">
            Lo que opinan{" "}
            <span className="text-[#BA863D] font-semibold">nuestros clientes</span>
          </h2>
          <p className="text-[#5A5D5D] text-lg font-light mb-10 max-w-md">
            Testimonios de empresas que han confiado en nuestra experiencia
            técnica, precisión y compromiso con la excelencia constructiva.
          </p>

          {/* Barra de progreso animada */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="relative h-[4px] w-20 rounded-full bg-[#D7DADE] overflow-hidden"
              >
                {i === index && (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 h-full bg-[#BA863D]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: duration / 1000, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha centrada */}
        {/* Columna derecha centrada con tamaño fijo */}
<div className="bg-gradient-to-r from-[#1D1D1E] via-[#343434] to-[#1D1D1E] text-[#F7F7F8] flex flex-col justify-center items-center text-center p-16 md:p-20 lg:p-24 h-[500px] min-h-[500px]">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl w-full"
    >
      {/* Nombre de la empresa */}
      <h3 className="text-lg font-semibold uppercase tracking-widest text-[#BA863D] mb-8">
        {testimonials[index].company}
      </h3>

      {/* Cita del testimonio */}
      <p className="italic text-xl leading-relaxed mb-10 text-[#E0E0E0]">
        "{testimonials[index].quote}"
      </p>

      {/* Nombre y puesto */}
      <div>
        <p className="text-sm font-semibold text-[#FFFFFF]">
          {testimonials[index].name}
        </p>
        <p className="text-sm text-[#D7DADE]">
          {testimonials[index].position}
        </p>
      </div>
    </motion.div>
  </AnimatePresence>
</div>

      </div>
    </section>
  );
};

export default Testimonials;

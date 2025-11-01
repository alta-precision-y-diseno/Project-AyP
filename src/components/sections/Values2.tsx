import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import valoresImg from "../../assets/valores.jpg";
import CustomIcon from "../ui/CustomIcon";

const valores = [
  {
    titulo: "Exactitud",
    descripcion:
      "Cada detalle importa. Aplicamos metodologías rigurosas y herramientas de ingeniería avanzada para asegurar precisión en cada etapa del proyecto.",
  },
  {
    titulo: "Innovación",
    descripcion:
      "Integramos tecnología moderna y metodologías BIM para optimizar procesos, recursos y resultados en cada desarrollo constructivo.",
  },
  {
    titulo: "Cumplimiento",
    descripcion:
      "Cumplimos plazos, normativas y expectativas. Nuestra gestión precisa garantiza entregas puntuales y resultados confiables.",
  },
  {
    titulo: "Sostenibilidad",
    descripcion:
      "Promovemos prácticas responsables con el entorno y los recursos, asegurando impacto positivo a largo plazo en cada proyecto.",
  },
];

const ValoresSection = () => {
  const [activo, setActivo] = useState<number>(0);

  return (
    <section className="w-full bg-[#FFFFFF] py-16 pt-0 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#343434] flex items-center gap-3 mb-6">
              <CustomIcon size={70} color1="#1D1D1E" color2="#BA863D" />
              Nuestros valores
            </h2>
            <p className="text-lg text-[#5A5D5D] mb-10">
              Los pilares que guían cada proyecto reflejan nuestra precisión,
              compromiso e innovación dentro del sector industrial y constructivo.
            </p>
          </div>

          {/* TARJETAS */}
          <div className="flex flex-col gap-4 flex-1">
            {valores.map((valor, i) => (
              <motion.div
                key={i}
                layout
                onClick={() => setActivo(i)}
                className={`cursor-pointer border-[1.8px] rounded-xl overflow-hidden transition-all duration-300 ${
                  activo === i
                    ? "border-[#BA863D] bg-[#FFFFFF]"
                    : "border-[#D7DADE] bg-[#FFFFFF]"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                {/* ENCABEZADO */}
                <div
                  className={`flex justify-between items-center px-6 py-5 ${
                    activo === i ? "text-[#BA863D]" : "text-[#343434]"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{valor.titulo}</h3>
                </div>

                {/* CONTENIDO */}
                <AnimatePresence>
                  {activo === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 text-[#5A5D5D] text-base leading-relaxed"
                    >
                      {valor.descripcion}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA - IMAGEN FULL HEIGHT */}
        <div className="flex justify-center items-center h-full">
          <img
            src={valoresImg}
            alt="Valores empresariales"
            className="w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ValoresSection;

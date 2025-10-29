import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { TestimonialsData } from "../../components/mockData/data";

const TestimonialsFramer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const duration = 5000; // 5 segundos

  // Detectar ancho de pantalla
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsToShow) % TestimonialsData.length);
    }, duration);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  return (
    <div className="py-14 mb-14 bg-[#FFFFFF]">
      {/* Título */}
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-[#222222]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B37A2E] via-[#5C5C5C] to-[#222222]">
            Lo que opinan
          </span>{" "}
          nuestros clientes
        </h1>
        <p className="text-[#5C5C5C] text-xl max-w-4xl mx-auto font-light">
          Nos enorgullece la confianza de quienes nos eligen. Su satisfacción
          impulsa nuestra misión de brindar precisión, eficiencia y resultados
          de alta calidad.
        </p>
      </div>

      {/* Carrusel de testimonios */}
      <div className="relative w-full">
        <div className="max-w-9xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: cardsToShow }).map((_, i) => {
                const index = (currentIndex + i) % TestimonialsData.length;
                const data = TestimonialsData[index];
                return (
                  <figure
                    key={data.id}
                    className={`flex flex-col justify-between h-full p-6 sm:p-8 bg-gradient-to-br from-[#E9EAEA] to-[#FFFFFF] rounded-xl shadow-md border border-[#B37A2E]/20 ${
                      cardsToShow === 1 ? "max-w-sm mx-auto px-6" : ""
                    }`}
                  >
                    <FaQuoteLeft className="w-8 h-8 mb-4 text-[#B37A2E]" />
                    <blockquote className="mb-4">
                      <p className="text-base text-[#222222] line-clamp-6">
                        “{data.text}”
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-3 mt-4">
                      <cite className="font-medium text-[#222222]">
                        {data.name}
                      </cite>
                    </figcaption>
                    <div className="flex mt-3 text-[#B37A2E] text-lg space-x-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </figure>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsFramer;

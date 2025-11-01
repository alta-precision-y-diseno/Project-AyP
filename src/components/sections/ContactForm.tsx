import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Enviado!",
          text: "Tu mensaje se envió correctamente 🎉",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#BA863D",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje.",
          confirmButtonText: "Reintentar",
          confirmButtonColor: "#343434",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor.",
        confirmButtonColor: "#343434",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" p-6 rounded-lg">
      <h2 className="text-4xl font-bold tracking-tight text-center mb-12 text-[#343434]">
        <span className="text-[#BA863D]">¡Envíanos un mensaje!</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-medium text-[#343434]">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ejemplo@correo.com"
            className="w-full border border-[#D7DADE] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#BA863D] transition-all"
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-lg font-medium text-[#343434]">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={10}
            inputMode="numeric"
            placeholder="5512345678"
            className="w-full border border-[#D7DADE] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#BA863D] transition-all"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/[^0-9]/g, "");
            }}
          />
          <small className="text-[#5A5D5D] text-sm">
            Ingresa solo 10 números sin espacios ni símbolos.
          </small>
        </div>

        {/* Asunto */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="text-lg font-medium text-[#343434]">
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Motivo del mensaje"
            className="w-full border border-[#D7DADE] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#BA863D] transition-all"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg font-medium text-[#343434]">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Escribe tu mensaje aquí..."
            rows={4}
            className="w-full border border-[#D7DADE] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#BA863D] transition-all"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          disabled={loading}
          className={`w-full rounded-md border-2 px-6 py-3 text-lg font-semibold transition-all duration-300
            ${
              loading
                ? "border-[#D7DADE] bg-[#D7DADE] text-[#5A5D5D] cursor-not-allowed"
                : "border-[#BA863D] text-[#BA863D] bg-white hover:bg-[#BA863D] hover:text-white"
            }`}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


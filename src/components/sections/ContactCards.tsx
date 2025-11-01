import type { IconType } from "react-icons";
import { FiMail, FiPhone, FiMapPin} from "react-icons/fi";



const ContactCards = () => {
  return (
    <div className="p-4 bg-[#F7F7F8] mt-6 sm:mt-10">
      {/* Grid ajustada para 2 arriba y 1 abajo */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Card
          title="Correo electrónico"
          subtitle="altaprecisionydiseno@gmail.com"
          href="mailto:altaprecisionydiseno@gmail.com"
          Icon={FiMail}
        />
        <Card
          title="Teléfono"
          subtitle="+52 55 1234 5678"
          href="tel:+525512345678"
          Icon={FiPhone}
        />
        <Card
          title="Dirección"
          subtitle="Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, México"
          href="#"
          Icon={FiMapPin}
          className="sm:col-span-2"
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
  className?: string;
}

const Card = ({ title, subtitle, Icon, href, className }: CardType) => {
  return (
    <a
      href={href}
      className={`w-full p-4 rounded border-[1px] border-[#D7DADE] relative overflow-hidden group bg-[#FFFFFF] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#BA863D] to-[#E7D4B7] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#D7DADE] group-hover:text-[#BA863D]/50 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#BA863D] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-[#343434] group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-[#5A5D5D] group-hover:text-[#F7F7F8] relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default ContactCards;

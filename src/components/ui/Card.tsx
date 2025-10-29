import { FaSquareCheck } from "react-icons/fa6";

interface CardProps {
  title: string;
  image: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items, image }) => {
  return (
    <div className="max-w-sm bg-white border border-[#D7DADE] rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.03]">
      <img src={image} alt={title} className="w-full rounded-t-lg object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-medium text-[#343434] mb-4">{title}</h3>
        <ul className="space-y-2 font-light text-[#5A5D5D] leading-relaxed">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaSquareCheck className="text-[#343434] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;

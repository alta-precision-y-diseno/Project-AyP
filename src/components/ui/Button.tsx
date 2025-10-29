import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  size = "md",
  color = "primary",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-base",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
  };

  const backgroundColor = !isHovered
    ? color === "primary"
      ? "var(--color-primary)"
      : "var(--color-secondary)"
    : color === "primary"
    ? "var(--color-secondary)"
    : "var(--color-primary)";

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor,
        color: "var(--color-light)",
        transition: "background-color 0.3s ease-in-out",
      }}
      className={`rounded-md font-semibold tracking-wide uppercase ${sizeClasses[size]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 relative group overflow-hidden cursor-pointer select-none text-xs md:text-sm";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3.5 text-xs md:text-sm gap-2.5",
    lg: "px-8 py-4 text-sm gap-3",
  };

  const variantStyles = {
    primary:
      "bg-gold text-dark font-semibold hover:bg-gold-light shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] border border-gold",
    secondary:
      "bg-dark-card text-white border border-dark-border hover:border-gold/50 hover:bg-dark-surface",
    outline:
      "bg-transparent text-white border border-gold/40 hover:border-gold hover:text-gold hover:bg-gold/5",
    ghost:
      "bg-transparent text-gold hover:text-gold-light hover:bg-gold/5 border border-transparent",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

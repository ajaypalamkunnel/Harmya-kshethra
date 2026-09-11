import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-gold font-medium ${centered ? "justify-center" : ""}`}>
          <span className="w-2 h-[1px] bg-gold" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-muted leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

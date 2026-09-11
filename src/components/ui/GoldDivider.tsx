import React from "react";

interface GoldDividerProps {
  className?: string;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 bg-gradient-to-r from-gold to-transparent" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold shadow-[0_0_8px_#FFD700]" />
      <div className="h-[1px] w-24 bg-gradient-to-r from-gold/50 to-transparent" />
    </div>
  );
};

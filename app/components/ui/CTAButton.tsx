import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilitário para merge de classes Tailwind
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ 
  children, 
  variant = "primary", 
  className, 
  onClick 
}: CTAButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm md:text-base flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-black hover:bg-accent hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    secondary: "bg-transparent text-white border border-muted hover:border-white hover:bg-white/5",
  };

  return (
    <button 
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};
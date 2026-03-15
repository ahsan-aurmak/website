import { Link } from "react-router";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  to, 
  onClick, 
  variant = "primary",
  size = "default",
  type = "button",
  disabled = false,
  className = ""
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium normal-case transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative whitespace-nowrap w-full sm:w-auto";
  
  const variants = {
    primary: "border border-[#27aae1] bg-[#27aae1] text-slate-950 shadow-[0_10px_28px_rgba(39,170,225,0.22)] hover:border-[#43b8e7] hover:bg-[#43b8e7] hover:shadow-[0_12px_32px_rgba(39,170,225,0.16)]",
    secondary: "border border-slate-300 bg-white/90 text-[#282973] hover:border-[#27aae1]/40 hover:bg-[#eef7fc] dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white",
    ghost: "text-[#282973] hover:text-[#27aae1] hover:bg-[#eef7fc] dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-[#27aae1]"
  };
  const sizes = {
    default: "px-6 py-3",
    large: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const ButtonContent = ({ children }: { children: ReactNode }) => (
    <span className="relative z-10 flex items-center whitespace-nowrap">{children}</span>
  );

  if (to) {
    // Use anchor tag for hash links, React Router Link for internal routes
    const isHashLink = to.startsWith('#');
    
    return (
      <motion.div 
        className="inline-flex w-full sm:w-auto"
        whileHover={{ scale: disabled ? 1 : 1.05 }} 
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        {isHashLink ? (
          <a href={to} className={combinedClassName}>
            <ButtonContent>{children}</ButtonContent>
          </a>
        ) : (
          <Link to={to} className={combinedClassName}>
            <ButtonContent>{children}</ButtonContent>
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={combinedClassName}
    >
      <ButtonContent>{children}</ButtonContent>
    </motion.button>
  );
}

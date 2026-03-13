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
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium normal-case transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group whitespace-nowrap w-full sm:w-auto";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/30",
    secondary: "bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
    ghost: "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
  };
  const sizes = {
    default: "px-6 py-3",
    large: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const ButtonContent = ({ children }: { children: ReactNode }) => (
    <>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      <span className="relative z-10 flex items-center whitespace-nowrap">{children}</span>
    </>
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

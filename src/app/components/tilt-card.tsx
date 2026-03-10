import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = "", tiltAmount = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {children}
      </motion.div>

      {/* Shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(600px circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />
      )}
    </motion.div>
  );
}

interface Feature3DCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient?: string;
  image?: string;
  badge?: string;
}

export function Feature3DCard({
  title,
  description,
  icon: Icon,
  gradient = "from-cyan-500 to-blue-600",
  image,
  badge,
}: Feature3DCardProps) {
  return (
    <TiltCard>
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden h-full">
        {/* Background image if provided */}
        {image && (
          <div className="absolute inset-0 opacity-10">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />

        <div className="relative z-10">
          {/* Badge - with fixed height container for alignment */}
          <div className="h-8 mb-4">
            {badge && (
              <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                {badge}
              </div>
            )}
          </div>

          {/* Icon */}
          <div
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
            style={{ transform: "translateZ(80px)" }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <h3
            className="text-2xl font-bold text-slate-100 mb-3"
            style={{ transform: "translateZ(60px)" }}
          >
            {title}
          </h3>
          <p
            className="text-slate-400 leading-relaxed"
            style={{ transform: "translateZ(40px)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </TiltCard>
  );
}
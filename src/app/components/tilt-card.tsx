import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
  gradient?: string;
  image?: string;
  badge?: string;
  to?: string;
}

export function Feature3DCard({
  title,
  description,
  icon: Icon,
  gradient = "from-[#2CB5E3] to-[#1B2A6B]",
  image,
  badge,
  to,
}: Feature3DCardProps) {
  const cardContent = (
    <div className="brand-surface relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/88 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 dark:border-slate-700/55 dark:bg-slate-900/88 dark:hover:border-cyan-500/40">
      {/* Background image if provided */}
      {image && (
        <div className="absolute inset-0 opacity-10">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(39,170,225,0.04),transparent_28%,transparent_100%)] dark:bg-[linear-gradient(180deg,rgba(39,170,225,0.03),transparent_28%,transparent_100%)]" />

      <div className="relative z-10 flex h-full flex-col">
        {badge && (
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
              {badge}
            </div>
          </div>
        )}

        <div className="flex h-full items-start gap-5">
          <div
            className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}`}
            style={{ transform: "translateZ(80px)" }}
          >
            <Icon className="h-9 w-9 text-white" strokeWidth={1.75} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <h3
              className="mb-3 min-h-[3.75rem] text-2xl font-bold text-slate-900 dark:text-slate-100"
              style={{ transform: "translateZ(60px)" }}
            >
              {title}
            </h3>
            <p
              className="flex-1 leading-relaxed text-slate-600 dark:text-slate-400"
              style={{ transform: "translateZ(40px)" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <TiltCard className="h-full">
      {to ? (
        <Link to={to} className="block h-full cursor-pointer">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </TiltCard>
  );
}

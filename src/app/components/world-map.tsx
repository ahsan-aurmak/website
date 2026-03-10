import { motion } from "motion/react";
import { MapPin } from "lucide-react";

interface Location {
  name: string;
  x: number; // percentage
  y: number; // percentage
  timezone: string;
}

const locations: Location[] = [
  { name: "London", x: 49, y: 35, timezone: "GMT" },
  { name: "Dubai", x: 62, y: 45, timezone: "GST" },
  { name: "Lahore", x: 70, y: 42, timezone: "PKT" },
];

export function WorldMap() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden backdrop-blur-xl">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="worldgrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(6, 182, 212, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#worldgrid)" />
        </svg>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Simplified world map silhouette */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 150 150 Q 200 100 300 120 L 400 100 Q 500 90 600 110 L 700 120 Q 800 130 850 140 L 900 150 L 920 200 L 900 250 L 850 280 L 800 290 L 700 285 L 600 280 Q 500 285 400 290 L 300 285 Q 200 280 150 270 Z"
          fill="rgba(6, 182, 212, 0.3)"
          stroke="rgba(6, 182, 212, 0.5)"
          strokeWidth="1"
        />
      </svg>

      {/* Location markers */}
      {locations.map((location, index) => (
        <motion.div
          key={location.name}
          className="absolute"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.3,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400" />
          </motion.div>

          {/* Marker pin */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <MapPin className="w-4 h-4 text-white" />
            </div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-lg px-3 py-2 shadow-xl">
                <div className="text-cyan-400 font-semibold text-sm">
                  {location.name}
                </div>
                <div className="text-slate-400 text-xs">{location.timezone}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Connecting lines */}
          {index < locations.length - 1 && (
            <motion.svg
              className="absolute top-0 left-0 pointer-events-none"
              style={{
                width: `${(locations[index + 1].x - location.x) * 10}px`,
                height: `${Math.abs(locations[index + 1].y - location.y) * 10}px`,
              }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <motion.line
                x1="0"
                y1="0"
                x2={`${(locations[index + 1].x - location.x) * 10}`}
                y2={`${(locations[index + 1].y - location.y) * 10}`}
                stroke="rgba(6, 182, 212, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </motion.svg>
          )}
        </motion.div>
      ))}

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-4"
      >
        <div className="text-cyan-400 text-2xl font-bold">3</div>
        <div className="text-slate-400 text-sm">Global Hubs</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-4"
      >
        <div className="text-cyan-400 text-2xl font-bold">24/7</div>
        <div className="text-slate-400 text-sm">Coverage</div>
      </motion.div>
    </div>
  );
}

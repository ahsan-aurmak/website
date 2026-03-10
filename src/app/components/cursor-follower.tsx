import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);

    if (hasTouchScreen) return; // Don't add listeners on touch devices

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {isVisible && (
        <>
          {/* Large outer ring */}
          <motion.div
            className="fixed w-10 h-10 border-2 border-cyan-400/30 rounded-full pointer-events-none z-50 hidden lg:block"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
          />
          
          {/* Small inner dot */}
          <motion.div
            className="fixed w-2 h-2 bg-cyan-400/50 rounded-full pointer-events-none z-50 hidden lg:block"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
            }}
          />
        </>
      )}
    </>
  );
}

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
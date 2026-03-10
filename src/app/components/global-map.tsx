import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Office {
  name: string;
  country: string;
  lat: number;
  lng: number;
  color: string;
  flag: string;
  x: string; // percentage position on map
  y: string; // percentage position on map
}

const offices: Office[] = [
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, color: '#22d3ee', flag: '🇬🇧', x: '30%', y: '35%' },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708, color: '#3b82f6', flag: '🇦🇪', x: '55%', y: '48%' },
  { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587, color: '#a855f7', flag: '🇵🇰', x: '65%', y: '42%' },
];

export function GlobalMap() {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* SVG World Map */}
      <svg 
        viewBox="0 0 1000 500" 
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#grid)" />
        
        {/* Simplified world map paths */}
        <g fill="#475569" stroke="#64748b" strokeWidth="1">
          {/* Europe */}
          <path d="M 250,150 L 280,140 L 300,160 L 290,180 L 260,170 Z" />
          <path d="M 280,160 L 310,150 L 330,170 L 310,190 L 285,180 Z" />
          
          {/* Asia */}
          <path d="M 550,180 L 620,160 L 680,200 L 650,250 L 580,230 Z" />
          <path d="M 620,200 L 680,180 L 720,220 L 690,260 L 630,240 Z" />
          
          {/* Middle East */}
          <path d="M 480,220 L 530,200 L 560,240 L 520,260 Z" />
          
          {/* Africa */}
          <path d="M 420,250 L 480,240 L 500,340 L 440,350 Z" />
          
          {/* Americas */}
          <path d="M 100,180 L 140,160 L 160,220 L 130,240 Z" />
          <path d="M 120,250 L 160,240 L 180,340 L 140,350 Z" />
          
          {/* Australia */}
          <path d="M 750,320 L 820,310 L 840,360 L 770,370 Z" />
        </g>
      </svg>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* London to Dubai */}
        <motion.line
          x1="30%" y1="35%"
          x2="55%" y2="48%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Dubai to Lahore */}
        <motion.line
          x1="55%" y1="48%"
          x2="65%" y2="42%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        
        {/* Lahore to London */}
        <motion.line
          x1="65%" y1="42%"
          x2="30%" y2="35%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
      </svg>

      {/* Office markers */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {offices.map((office, index) => (
          <motion.div
            key={office.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            className="absolute group cursor-pointer"
            style={{ left: office.x, top: office.y, transform: 'translate(-50%, -50%)' }}
          >
            {/* Pulsing outer ring */}
            <div 
              className="absolute inset-0 rounded-full animate-ping"
              style={{ 
                width: '32px', 
                height: '32px',
                backgroundColor: office.color,
                opacity: 0.3,
                left: '-4px',
                top: '-4px'
              }}
            />
            
            {/* Main marker */}
            <div
              className="relative w-6 h-6 rounded-full border-2 border-white shadow-2xl flex items-center justify-center"
              style={{ 
                backgroundColor: office.color,
                boxShadow: `0 0 30px ${office.color}70`
              }}
            >
              <div className="text-xs">{office.flag}</div>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48">
              <div 
                className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-2xl border"
                style={{ borderColor: `${office.color}50` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{office.flag}</span>
                  <div className="font-bold text-lg" style={{ color: office.color }}>
                    {office.name}
                  </div>
                </div>
                <div className="text-slate-300 text-sm">{office.country}</div>
                <div className="text-slate-400 text-xs mt-1">
                  {office.lat.toFixed(4)}°, {office.lng.toFixed(4)}°
                </div>
              </div>
              {/* Arrow pointing down */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0"
                style={{
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: `8px solid ${office.color}50`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Remove TypeScript declarations for Google Maps
declare global {
  interface Window {
    google?: any;
  }
}
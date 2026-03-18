import { useTimezoneTime } from "../hooks/useTimezoneTime";

interface OfficeClockProps {
  offsetHours: number;
  gradient: string;
}

export function OfficeClock({ offsetHours, gradient }: OfficeClockProps) {
  const time = useTimezoneTime(offsetHours);
  
  // Parse time to get hours, minutes, seconds
  const [hours, minutes, seconds] = time.split(':').map(Number);
  
  // Calculate angles for clock hands (12 o'clock = 0 degrees)
  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90; // 6 degrees per minute
  const hourAngle = ((hours % 12) * 30 + minutes * 0.5) - 90; // 30 degrees per hour

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Analogue Clock */}
      <div className="relative w-32 h-32">
        {/* Outer glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-xl rounded-full`}></div>
        
        {/* Clock face */}
        <svg className="relative z-10 w-full h-full" viewBox="0 0 200 200">
          {/* Clock circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="rgba(15, 23, 42, 0.8)"
            stroke="url(#clockGradient)"
            strokeWidth="3"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`text-[#27aae1]`} stopColor="currentColor" />
              <stop offset="100%" className={`text-blue-600`} stopColor="currentColor" />
            </linearGradient>
          </defs>
          
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x1 = 100 + Math.cos(angle) * 75;
            const y1 = 100 + Math.sin(angle) * 75;
            const x2 = 100 + Math.cos(angle) * 85;
            const y2 = 100 + Math.sin(angle) * 85;
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(148, 163, 184, 0.5)"
                strokeWidth={i % 3 === 0 ? "3" : "2"}
              />
            );
          })}
          
          {/* Hour hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + Math.cos(hourAngle * Math.PI / 180) * 45}
            y2={100 + Math.sin(hourAngle * Math.PI / 180) * 45}
            stroke="url(#clockGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ transition: 'all 0.5s ease-out' }}
          />
          
          {/* Minute hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + Math.cos(minuteAngle * Math.PI / 180) * 65}
            y2={100 + Math.sin(minuteAngle * Math.PI / 180) * 65}
            stroke="url(#clockGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ transition: 'all 0.5s ease-out' }}
          />
          
          {/* Second hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + Math.cos(secondAngle * Math.PI / 180) * 75}
            y2={100 + Math.sin(secondAngle * Math.PI / 180) * 75}
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Center dot */}
          <circle cx="100" cy="100" r="6" fill="url(#clockGradient)" />
          <circle cx="100" cy="100" r="3" fill="#0f172a" />
        </svg>
      </div>
      
      {/* Digital time display */}
      <div className="text-center">
        <div className="text-xs text-slate-500 mb-1">Local Time</div>
        <div className="text-xl font-mono font-bold text-[#27aae1] tabular-nums">
          {time}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

export function useTimezoneTime(offsetHours: number) {
  const [time, setTime] = useState(getTimeForOffset(offsetHours));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeForOffset(offsetHours));
    }, 1000);

    return () => clearInterval(interval);
  }, [offsetHours]);

  return time;
}

function getTimeForOffset(offsetHours: number): string {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const offsetTime = new Date(utc + (3600000 * offsetHours));
  
  const hours = offsetTime.getHours();
  const minutes = offsetTime.getMinutes();
  const seconds = offsetTime.getSeconds();
  
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

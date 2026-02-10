"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-full h-[25px]
        bg-[var(--statusbar-bg)]
        text-white
        flex items-center justify-between
        px-4 text-xs
        select-none
        font-sans
      "
    >
      {/* Left */}
      <div className="flex items-center space-x-4">
        <span className="opacity-90">● Portfolio Ready</span>
        <span className="opacity-80">main</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 opacity-90">
        <span>UTF-8</span>
        <span>Prettier</span>
        <span className="flex items-center gap-1">
          🕒 <span>{time}</span>
        </span>
      </div>
    </div>
  );
}

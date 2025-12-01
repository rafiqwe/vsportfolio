"use client";

export default function StatusBar() {
  return (
    <div className="w-full h-[25px] bg-[#007acc] flex items-center justify-between px-4 text-xs">
      <div className="flex items-center space-x-4">
        <span>● Portfolio Ready</span>
        <span>main</span>
      </div>

      <div className="flex items-center space-x-4">
        <span>UTF-8</span>
        <span>Prettier</span>
        <span>🕒 {new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

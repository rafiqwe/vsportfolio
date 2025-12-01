"use client";

export default function Tabs() {
  return (
    <div className="w-full h-[40px] bg-[#2d2d2d] border-b border-[#3c3c3c] flex items-center overflow-x-auto">
      <div className="flex items-center px-4 h-full border-r border-[#3c3c3c] cursor-pointer hover:bg-[#3b3b3b]">
        <span className="text-sm">about-me.md</span>
        <span className="ml-3 text-xs opacity-70 hover:opacity-100">✕</span>
      </div>

      <div className="flex items-center px-4 h-full border-r border-[#3c3c3c] cursor-pointer hover:bg-[#3b3b3b]">
        <span className="text-sm">skills.js</span>
        <span className="ml-3 text-xs opacity-70 hover:opacity-100">✕</span>
      </div>
    </div>
  );
}

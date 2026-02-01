"use client";
import useTaps from "@/app/hook/use-Taps";
import { X } from "lucide-react";
import { useEffect } from "react";

interface EditorTapProps {
  activeTap?: string;
  onTabClick?: (tapName: string) => void;
}

const EditorTap: React.FC<EditorTapProps> = ({ activeTap, onTabClick }) => {
  const { taps, removeTap } = useTaps();

  useEffect(() => {  
    console.log(taps);
  }, [taps])
console.log(taps);

  return (
    <div className="w-full z-20 absolute top-0 left-0 h-9 flex items-center bg-[var(--tabs-bg)] border-b border-[var(--border-color)] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {taps.map((tap, index) => {
        const isActive = tap.TapName === activeTap;
        return (
          <div
            key={index}
            className={`
              flex items-center px-4 sm:px-6 h-full gap-2 border-r border-[var(--border-color)]
              ${isActive ? "bg-[var(--editor-bg)] font-bold text-white" : "bg-[var(--sidebar-bg)] text-[var(--text-muted)]"}
              cursor-pointer select-none
              transition-all duration-200 ease-in-out
            `}
            onClick={() => onTabClick?.(tap.TapName)}
          >
            <p className="text-sm">{tap.TapName}</p>
            <X
              size={14}
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering tab click
                removeTap(tap.TapName);
              }}
              className="hover:text-red-500 transition-colors duration-200"
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditorTap;

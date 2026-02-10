"use client";

import { useTabs } from "@/app/context/TabContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, WheelEvent, DragEvent } from "react";

interface EditorTabProps {
  activeTab?: string;
  onTabClick?: (tabName: string) => void;
}

const EditorTab: React.FC<EditorTabProps> = ({ activeTab, onTabClick }) => {
  const { tabs, removeTab, reorderTabs } = useTabs();
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const dragIndex = useRef<number | null>(null);

  /* ---------------------------------------------
     SCROLL STATE (VS CODE ARROWS)
  --------------------------------------------- */
  const updateScrollState = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollTabs = (dir: "left" | "right") => {
    containerRef.current?.scrollBy({
      left: dir === "left" ? -180 : 180,
      behavior: "smooth",
    });
  };

  /* ---------------------------------------------
     AUTO-FOCUS ACTIVE TAB
  --------------------------------------------- */
  useEffect(() => {
    activeTabRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    updateScrollState();
  }, [activeTab, tabs]);

  /* ---------------------------------------------
     MOUSE WHEEL → HORIZONTAL SCROLL
  --------------------------------------------- */
  const onWheel = (e: WheelEvent) => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft += e.deltaY;
    updateScrollState();
  };

  /* ---------------------------------------------
     DRAG TO REORDER (VS CODE STYLE)
  --------------------------------------------- */
  const onDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const onDrop = (index: number) => {
    if (dragIndex.current === null) return;
    reorderTabs(dragIndex.current, index);
    dragIndex.current = null;
  };

  if (!tabs.length) return null;

  return (
    <div className="relative w-full h-9 bg-[var(--tabs-bg)] border-b border-[var(--border-color)]">
      {/* LEFT ARROW */}
      {canLeft && (
        <button
          onClick={() => scrollTabs("left")}
          className="absolute left-0 h-full w-8 flex items-center justify-center border-r border-[var(--border-color)] hover:bg-[var(--sidebar-bg)]"
        >
          <ChevronLeft size={16} />
        </button>
      )}

      {/* TAB STRIP */}
      <div
        ref={containerRef}
        onScroll={updateScrollState}
        onWheel={onWheel}
        className="h-full flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{
          marginLeft: canLeft ? 32 : 0,
          marginRight: canRight ? 32 : 0,
        }}
      >
        {tabs.map((tab, index) => {
          const isActive =
            pathname === tab.link || pathname.startsWith(tab.link + "/");

          return (
            <div
              key={tab.TabName}
              ref={isActive ? activeTabRef : null}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(index)}
              onClick={() => onTabClick?.(tab.TabName)}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  e.preventDefault();
                  removeTab(tab.TabName);
                }
              }}
              className={`
        group flex items-center h-full px-4 gap-2
        border-r border-[var(--border-color)]
        cursor-pointer whitespace-nowrap select-none
        transition-colors
        ${
          isActive
            ? "bg-[var(--editor-tab-bg)] text-white"
            : "bg-[var(--sidebar-bg)] text-[var(--text-muted)] hover:text-white"
        }
      `}
            >
              <Link href={tab.link}>
                <span className="text-sm">{tab.TabName}</span>
              </Link>

              <X
                size={14}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.TabName);
                }}
                className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition"
              />
            </div>
          );
        })}
      </div>

      {/* RIGHT ARROW */}
      {canRight && (
        <button
          onClick={() => scrollTabs("right")}
          className="absolute right-0 h-full w-8 flex items-center justify-center border-l border-[var(--border-color)] hover:bg-[var(--sidebar-bg)]"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default EditorTab;

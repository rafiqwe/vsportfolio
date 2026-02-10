"use client";

import { useState } from "react";
import SideList from "./SideList";
import Explorer from "../explorer/Explorer";
import Contact from "@/app/components/contact/page";
import Skills from "../skill/Skill";
import About from "../about/About";
import Service from "../service/service";
import Project from "../projects/Project";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleIconClick = (tab: string) => {
    // If clicking the same tab → toggle panel
    if (activeTab === tab) {
      setIsPanelOpen((prev) => !prev);
      return;
    }

    // If clicking a new tab → open panel
    setActiveTab(tab);
    setIsPanelOpen(true);
  };

  return (
    <aside className="h-full flex bg-[var(--sidebar-bg)] border-r border-[var(--border-color)]">
      {/* ================= ICON BAR ================= */}
      <div className="w-[64px] border-r border-[var(--border-color)] flex flex-col items-center pt-4">
        <SideList
          Tab={activeTab}
          setTab={() => {}}
          handleTabClick={handleIconClick}
        />
      </div>

      {/* ================= PANEL ================= */}
      {isPanelOpen && activeTab && (
        <div className="w-[256px] p-3 h-full ">
          {activeTab === "file" && <Explorer />}
          {activeTab === "projects" && <Project />}
          {activeTab === "contact" && <Contact />}
          {activeTab === "about" && <About />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "service" && <Service />}
        </div>
      )}
    </aside>
  );
}

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
  const [sideTap, setsideTap] = useState("file");
  const [IsSideTapOpen, setIsSideTapOpen] = useState(false);

  const handleTapWeight = (tap: string) => {
    if (sideTap === tap) {
      setIsSideTapOpen(!IsSideTapOpen);
      return;
    }
    setsideTap(tap);
    setIsSideTapOpen(false);
  };

  return (
    <aside
      className="
        w-[320px]
        h-full
        bg-[var(--sidebar-bg)]
        border-r border-[var(--border-color)]
        flex flex-col
        select-none
        font-sans
      "
    >
      <div className="flex w-full h-full  ">
        <div className="w-[25%] h-full border-r border-[var(--border-color)] flex flex-col items-center pt-4 ">
          <SideList
            setTap={setsideTap}
            Tap={sideTap}
            handleTapWeight={handleTapWeight}
          />
        </div>
        <div className="w-[75%]">
          <div className="p-3">
            {/*  file explore */}
            {sideTap === "file" && <Explorer />}
            {sideTap === "projects" && <Project />}
            {sideTap === "contact" && <Contact />}
            {sideTap === "about" && <About />}
            {sideTap === "skills" && <Skills />}
            {sideTap === "service" && <Service />}
          </div>
        </div>
      </div>
    </aside>
  );
}

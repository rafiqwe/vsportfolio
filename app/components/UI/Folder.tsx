"use client";
import { useTabs } from "@/app/context/TabContext";
import Link from "next/link";
import React from "react";
import { FaFolder, FaFolderOpen, FaReact } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Folder = ({
  name,
  link,
  from,
}: {
  name?: string;
  link: string;
  from?: string;
}) => {
  const [openFolders, setOpenFolders] = React.useState<boolean>(false);
  const { addTab } = useTabs();

  return (
    <div className="w-full h-full">
      {from === "project" || from === "app" ? (
        ""
      ) : (
        <h1 className="text-sm font-bold">{name}</h1>
      )}
      <div
        onClick={() => setOpenFolders(!openFolders)}
        className="flex items-center gap-2 py-1 rounded hover:bg-white/5 cursor-pointer border-l border-[var(--border-color)] h-full"
      >
        <div>
          <IoIosArrowDown
            className={`transition-transform duration-200 ${
              !openFolders ? "-rotate-90" : ""
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          {openFolders ? (
            <FaFolderOpen size={15} className="text-blue-400" />
          ) : (
            <FaFolder size={15} className="text-blue-400" />
          )}
          <p className="text-sm">{name}</p>
        </div>
      </div>
      {openFolders && (
        <div className="pl-3" onClick={() => addTab(name!, link)}>
          <Link href={link} className="flex items-center gap-2">
            <p className="border-l pl-6 border-[var(--border-color)]">
              <FaReact size={15} color="#008BFF" />
            </p>
            <p className="text-sm">page.tsx</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Folder;

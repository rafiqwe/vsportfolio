import { CircleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFolder, FaFolderOpen, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { SiEslint, SiPostcss, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Folder from "../UI/Folder";
import { useTabs } from "@/app/context/TabContext";

const Explorer = () => {
  const { addTab } = useTabs();

  const Folders = [
    {
      Names: "app",
      element: <></>,
    },
    {
      Names: "public",
      element: <></>,
    },
  ];
  const files = [
    {
      icon: <FaGitAlt color="#FF0000" />,
      name: ".gitignore",
      link: "/.gitignore",
    },
    {
      icon: <SiEslint color="#8CA9FF" />,
      name: "eslint.config.mjs",
      link: "/eslint.config.mjs",
    },
    {
      icon: <TbBrandNextjs size={18} />,
      name: "next.config.ts",
      link: "/next.config.ts",
    },
    {
      icon: <FaNodeJs size={18} color="#08CB00" />,
      name: "package-lock.json",
      link: "/package-lock.json",
    },
    {
      icon: <FaNodeJs size={18} color="#08CB00" />,
      name: "package.json",
      link: "/package.json",
    },
    {
      icon: <SiPostcss size={18} color="#ff0000" />,
      name: "postcss.config.js",
      link: "/postcss.config.js",
    },
    {
      icon: <SiTailwindcss size={18} color="#0000ff" />,
      name: "tailwind.config.js",
      link: "/tailwind.config.js",
    },
    {
      icon: <BiLogoTypescript size={18} color="#5B23FF" />,
      name: "tsconfig.json",
      link: "/tsconfig.js",
    },
    { icon: <CircleAlert size={18} />, name: "readme.md", link: "/readme.md" },
  ];

  const [openFolders, setOpenFolders] = React.useState<Record<string, boolean>>(
    {
      app: false,
      public: false,
    },
  );

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <div className="select-none font-mono">
      <h1 className="text-sm font-bold mb-2">Explorer</h1>

      <Folder name="app" link="/" from="app" />

      <div
        onClick={() => toggleFolder("public")}
        className="flex items-center gap-2 py-1 rounded hover:bg-white/5 cursor-pointer"
      >
        <div>
          <IoIosArrowDown
            className={`transition-transform duration-200 ${
              !openFolders.public ? "-rotate-90" : ""
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          {openFolders.public ? (
            <FaFolderOpen size={15} className="text-blue-400" />
          ) : (
            <FaFolder size={15} className="text-blue-400" />
          )}
          <p className="text-sm">public</p>
        </div>
      </div>

      {/* Files List */}
      <div className="mt-1">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-1 pl-5 rounded hover:bg-white/5 cursor-pointer"
            onClick={() => addTab(file.name, file.link)}
          >
            <Link href={file?.link}>
              <div className="flex items-center gap-1.5 ">
                {file.icon}
                <p className="text-sm">{file.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;

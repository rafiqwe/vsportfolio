"use client";
import React from "react";
import { FaFolder, FaFolderOpen, FaReact } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Folder from "../UI/Folder";

const Skills = () => {
  return (
    <div className="w-full">
      <Folder name="Skills" link="/skills" />
    </div>
  );
};

export default Skills;

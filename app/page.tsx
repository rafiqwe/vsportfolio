"use client";

import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusBar";

export default function Workspace() {
  return (
    <div className="w-full h-screen flex bg-[#1e1e1e] text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main workspace: Tabs + Editor */}
      <div className="flex flex-col flex-1">
        
        {/* Tabs */}
        <Tabs />

        {/* Editor */}
        <Editor />

        {/* Status Bar */}
        <StatusBar />
      </div>
    </div>
  );
}

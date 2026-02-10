"use client";

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { BsLayoutSplit } from "react-icons/bs";

const PreviewReadMe = ({ readme }: { readme: string }) => {
  const [view, setView] = useState<"editor" | "preview" | "split">("split");

  return (
    <>
      <div className="h-[35px] absolute top-0 left-0 w-full flex items-center gap-2 px-3 border-b border-[var(--border-color)] bg-[var(--tabs-bg)] text-xs z-10">
        <button
          onClick={() => setView("editor")}
          className={`px-2 py-1 rounded ${
            view === "editor" ? "bg-white/10" : "hover:bg-white/5"
          } font-bold  flex gap-2 items-center cursor-pointer`}
        >
          <FaRegEdit size={14} color="#fff" /> Editor
        </button>
        <button
          onClick={() => setView("preview")}
          className={`px-2 py-1 rounded ${
            view === "preview" ? "bg-white/10" : "hover:bg-white/5"
          } font-bold  flex gap-2 items-center  cursor-pointer`}
        >
          <FaRegEye size={14} color="#fff" /> Preview
        </button>
        <button
          onClick={() => setView("split")}
          className={`px-2 py-1 rounded ${
            view === "split" ? "bg-white/10" : "hover:bg-white/5"
          } font-bold  flex gap-2 items-center cursor-pointer`}
        >
          <BsLayoutSplit size={14} color="#fff" />
          Split
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden markdown-preview mt-8">
        {/* Editor */}
        {(view === "editor" || view === "split") && (
          <div className={view === "split" ? "w-1/2" : "w-full"}>
            <Editor
              height="100%"
              defaultLanguage="markdown"
              theme="vs-dark"
              value={readme}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                wordWrap: "on",
                fontSize: 14,
              }}
            />
          </div>
        )}

        {/* Preview */}
        {(view === "preview" || view === "split") && (
          <div
            className={`
              ${view === "split" ? "w-1/2" : "w-full"}
              overflow-auto p-6 text-sm h-[90vh] overflow-x-auto no-scrollbar
              prose prose-invert max-w-none font-mono
            `}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
};

export default PreviewReadMe;

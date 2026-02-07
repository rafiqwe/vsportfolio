'use client'
import { Editor } from "@monaco-editor/react";
import React from "react";

const TailwindConfig = () => {
  const tailwindConfigCode = `
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jet-mono)", "monospace"],
      },
    },
  },
};

    `;
  return (
    <div className="w-full h-full">
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={tailwindConfigCode}
        options={{
          readOnly: true,
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default TailwindConfig;

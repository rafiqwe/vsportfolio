'use client'
import { Editor } from "@monaco-editor/react";
import { config } from "process";
import React from "react";

const PostCss = () => {
  const postcss = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`;
  return (
    <div className="h-full w-full">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={postcss}
        options={{
          readOnly:true,
          wordWrap:"on"
        }}
      />
    </div>
  );
};

export default PostCss;

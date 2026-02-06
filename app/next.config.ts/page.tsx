"use client";
import { Editor } from "@monaco-editor/react";

const page = () => {
  const nextConfig = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: true,
  }
};

export default nextConfig;`;
  return (
    <div className="w-full h-full">
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        defaultPath="next.config.ts"
        defaultValue={nextConfig}
        options={{
          readOnly:true,
          wordWrap:"on"
        }}
      />
    </div>
  );
};

export default page;

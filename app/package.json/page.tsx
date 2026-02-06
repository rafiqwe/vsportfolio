"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";

const PackageJson = () => {
  const json = {
    name: "Portfolio of Muhammad Rabbi",
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "eslint",
    },
    dependencies: {
      "@monaco-editor/react": "^4.7.0",
      "lucide-react": "^0.563.0",
      next: "16.0.6",
      react: "19.2.0",
      "react-dom": "19.2.0",
      "react-icons": "^5.5.0",
      gsap: "^3.12.2",
      motion: "^11.1.0",
      "react-spring": "^9.2.1",
      "react-scroll": "^1.8.1",
      "react-router-dom": "^6.15.0",
      "react-router": "^6.15.0",
    },
    devDependencies: {
      "@tailwindcss/postcss": "^4",
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      eslint: "^9",
      "eslint-config-next": "16.0.6",
      tailwindcss: "^4",
      typescript: "^5",
    },
  };

  return (
    <div className="h-full w-full">
      <Editor
        height="90vh"
        defaultLanguage="json"
        theme="vs-dark"
        defaultValue={JSON.stringify(json, null, 2)}
        options={{
          readOnly: true,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default PackageJson;

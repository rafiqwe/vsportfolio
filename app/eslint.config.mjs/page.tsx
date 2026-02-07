"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";

const EslintConfig = () => {
  const eslintConfig = `import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;`;
  return (
    <div className="w-full h-full">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={eslintConfig}
        options={{
          readOnly: true,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default EslintConfig;

"use client";
import { Editor } from "@monaco-editor/react";

const TsConfig = () => {
  const tsconfig = {
    compilerOptions: {
      target: "ES2017",
      lib: ["dom", "dom.iterable", "esnext"],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "react-jsx",
      incremental: true,
      plugins: [
        {
          name: "next",
        },
      ],
      paths: {
        "@/*": ["./*"],
      },
    },
    include: [
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      ".next/types/**/*.ts",
      ".next/dev/types/**/*.ts",
      "**/*.mts",
    ],
    exclude: ["node_modules"],
  };

  return (
    <div className="h-full w-full">
      <Editor
        height="90vh"
        defaultLanguage="json"
        theme="vs-dark"
        options={{
          readOnly: true,
          wordWrap: "on",
        }}
        defaultValue={JSON.stringify(tsconfig, null, 2)}
      />
    </div>
  );
};

export default TsConfig;

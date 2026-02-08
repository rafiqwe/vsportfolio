"use client";
import { Editor } from "@monaco-editor/react";

const GitIgnore = () => {
  const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`;

  return (
    <div className="w-full h-full">
      <Editor
        height="90vh"
        defaultLanguage="gitignore"
        theme="vs-dark"
        defaultValue={gitignore}
        options={{
          readOnly: true,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default GitIgnore;

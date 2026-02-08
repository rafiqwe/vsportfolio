"use client";

import { Editor } from "@monaco-editor/react";

const skillsCode = `
// skills.ts

export const skills = {
  frontend: {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript","Python"],
    frameworks: ["React", "Next.js"],
    styling: ["Tailwind CSS", "CSS Modules","Bootstrap"],
    stateManagement: ["Context API", "Zustand","Redux"],
    uiPractices: ["Responsive Design", "Accessibility", "Component-driven UI"]
  },

  backend: {
    runtime: ["Node.js"],
    frameworks: ["Express.js"],
    databases: ["MongoDB", "PostgreSQL","Prisma / Mongoose (ORM/ODM)"],
    auth: ["JWT", "OAuth"],
    apis: ["REST"]
  },

  tools: {
    versionControl: ["Git", "GitHub"],
    editors: ["VS Code","Antigravity", "Cursor"],
    buildTools: ["Vite", "Webpack"],
    deployment: ["Vercel", "Netlify", "AWS"],
    testing: ["Jest", "Playwright"]
  },

  devPractices: [
    "Clean Code",
    "Reusable Components",
    "Performance Optimization",
    "API Integration",
    "Debugging & Profiling"
    "Scalable system design"
  ]
};

export default skills;

`;

export default function SkillsPage() {
  return (
    <div className="w-full h-full bg-[var(--editor-bg)] ">
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={skillsCode}
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
}

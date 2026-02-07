"use client";

import { Editor } from "@monaco-editor/react";

const servicesCode = `
// services.ts

export const services = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
    focus: ["UI Architecture", "Reusable Components", "Responsive Design", "Performance Optimization"]
  },
  {
    title: "Backend Development",
    description: "Creating robust backend solutions with Node.js, Express, and databases like MongoDB & PostgreSQL.",
    focus: ["REST APIs", "Database Design", "Authentication", "API Integration"]
  },
  {
    title: "Full Stack Projects",
    description: "End-to-end development including frontend, backend, and deployment for scalable applications.",
    focus: ["Project Architecture", "CI/CD", "Deployment", "Cloud Integration"]
  },
  {
    title: "AI & Automation Experiments",
    description: "Experimenting with AI tools and integrating automation into projects to improve workflow efficiency.",
    focus: ["AI Prototyping", "Automation Scripts", "Tool Integration"]
  }
];

export default services;
`;

export default function ServicesPage() {
  return (
    <div className="w-full h-full bg-[var(--editor-bg)]">
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={servicesCode}
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

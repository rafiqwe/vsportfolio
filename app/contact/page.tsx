"use client";

import { Editor } from "@monaco-editor/react";

const contactCode = `
// contact.ts

const contact = {
  name: "Muhammad Rabbi",
  role: "Full Stack Developer",
  email: "muhammedrabbi.dev@gmail.com",
  website: "https://muhammadrabbi.vercel.app",

  social: {
    github: "https://github.com/rafiqwe",
    linkedin: "https://linkedin.com/in/muhammad-rabbi-dev",
    twitter: "https://x.com/rmlrabbi"
  },

  availability: "Open to freelance & full-time roles",
  location: "Remote / Worldwide"
};

export default contact;
`;

export default function ContactPage() {
  return (
    <div className="w-full h-full bg-[var(--editor-bg)]">
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={contactCode}
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

"use client";

export default function Editor() {
  return (
    <div className="flex-1 bg-[#1e1e1e] p-6 text-sm font-mono overflow-auto">
      <pre className="text-gray-200">
{`# Hello, I'm Muhammad Rabbi 👨‍💻

export const developer = {
  name: "Muhammad Rabbi",
  role: "Full Stack Developer",
  stack: ["Next.js", "React", "Node.js"]
};
`}
      </pre>
    </div>
  );
}

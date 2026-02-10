"use client";

import Link from "next/link";
import { Code, FolderOpen, User, Mail } from "lucide-react";
import { Action } from "./components/UI/Action";

export default function HomePage() {
  const Actions = [
    {
      href: "/skills",
      icon: <FolderOpen size={16} />,
      title: "Open Skills",
      name: "Skills",
      desc: "View frontend, backend & tools",
    },
    {
      href: "/projects",
      icon: <FolderOpen size={16} />,
      title: "Open Projects",
      name: "Projects",
      desc: "Browse selected work",
    },
    {
      href: "/about",
      icon: <User size={16} />,
      title: "About Me",
      name: "About Me",
      desc: "Who I am & how I work",
    },
    {
      href: "/contact",
      icon: <Mail size={16} />,
      title: "Contact",
      name: "Contact",
      desc: "Get in touch",
    },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--editor-bg)]">
      <div className="max-w-5xl mt-80 lg:mt-0 w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-10">
        {/* LEFT — VS CODE INTRO */}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <Code className="text-[var(--accent)]" size={28} />
            <h1 className="md:text-2xl text-xl font-semibold">
              Visual Studio Code
            </h1>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            VS Code–style developer portfolio
          </p>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Muhammad Rabbi</h2>
            <p className="text-sm text-[var(--text-muted)]">
              Full Stack Developer — Frontend Focused
            </p>
          </div>

          <p className="text-sm leading-relaxed text-[var(--text-muted)] mt-2">
            Explore my portfolio like a real code editor. Open files, browse
            projects, and use the terminal — just like VS Code.
          </p>
        </div>

        {/* RIGHT — QUICK ACTIONS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase text-[var(--text-muted)]">
            Get Started
          </h3>

          {Actions.map((action, index) => {
            return (
              <Action
                key={index}
                href={action.href}
                icon={action.icon}
                title={action.title}
                desc={action.desc}
                name={action.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

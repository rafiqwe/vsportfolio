"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronUp, X } from "lucide-react";

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Portfolio Terminal v1.0",
    "Type 'help' to see available commands.",
    "",
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(300);
  const scrollRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  // Portfolio configuration
  const config = {
    /* ===============================
     BASIC INFO
     =============================== */
    name: "Muhammad Rabbi",
    role: "Full Stack Developer",
    tagline: "Frontend-focused engineer building clean, scalable web systems",
    location: "Bangladesh",
    availability: "Open for remote & freelance opportunities",

    /* ===============================
     CONTACT
     =============================== */
    email: "muhammedrabbi.dev@gmail.com",
    phone: "+880-1329335954",

    /* ===============================
     SOCIAL LINKS
     =============================== */
    github: "https://github.com/rafiqwe",
    linkedin: "https://linkedin.com/in/muhammad-rabbi-dev",
    portfolio: "https://muhammadrabbi.vercel.app",
    resume: "https://muhammadrabbi.vercel.app/resume.pdf",

    /* ===============================
     SKILLS
     =============================== */
    skills: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "GSAP",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
      ],
      tools: ["Git & GitHub", "VS Code", "Vercel", "Figma", "Postman"],
      concepts: [
        "Component-driven architecture",
        "Clean code",
        "Reusable UI systems",
        "Developer Experience (DX)",
        "Responsive design",
      ],
    },

    /* ===============================
     PROJECTS
     =============================== */
    projects: {
      devguide: {
        name: "DevGuide",
        url: "https://devguide.app",
        description:
          "A developer-focused platform providing structured guides, best practices, and curated learning resources.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
        status: "Active",
      },

      "bgift-social": {
        name: "BGift Social",
        url: "https://bgift.app",
        description:
          "A social gifting platform that allows users to connect, share gifts, and celebrate moments online.",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        status: "In Progress",
      },

      "vscode-portfolio": {
        name: "VS Code Style Portfolio",
        url: "https://your-portfolio-url.com",
        description:
          "A portfolio website that mimics the VS Code interface, allowing users to explore projects like a real editor.",
        stack: ["Next.js", "Tailwind CSS", "Monaco Editor"],
        status: "Active",
      },
    },

    /* ===============================
     TERMINAL META
     =============================== */
    terminal: {
      version: "v1.0.0",
      theme: "VS Code Dark+",
      shortcuts: ["Ctrl + ` (Toggle Terminal)"],
    },
  };

  // Handle keyboard shortcut (Ctrl+` or Cmd+`)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle mouse resize
  /* Resize */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizing.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;
      if (newHeight > 160 && newHeight < window.innerHeight - 100) {
        setHeight(newHeight);
      }
    };

    const onUp = () => (isResizing.current = false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const addHistory = (command: string, output: string | string[]) => {
    const lines = Array.isArray(output) ? output : [output];
    setHistory((prev) => [...prev, `$ ${command}`, ...lines, ""]);
  };

  const runCommand = () => {
    const rawInput = input.trim();
    const cmd = rawInput.toLowerCase();

    if (!cmd) {
      setInput("");
      return;
    }

    switch (cmd) {
      /* ================= HELP ================= */
      case "help":
        addHistory(rawInput, [
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "Available commands:",
          "",
          "  help               Show this help",
          "  about              About me",
          "  contact            Contact information",
          "  skills             Technical skills",
          "  projects           List all projects",
          "  project <name>     Open a project",
          "  github             GitHub profile",
          "  linkedin           LinkedIn profile",
          "  portfolio          Portfolio website",
          "  resume             Download resume",
          "  whoami             Current user",
          "  clear              Clear terminal",
          "",
          "Examples:",
          "  project devguide",
          "  project bgift-social",
          "  skills",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        ]);
        break;

      /* ================= ABOUT ================= */
      case "about":
        addHistory(rawInput, [
          "┌─ ABOUT ME ──────────────────────────────────────────────┐",
          `│ Name: ${config.name}`,
          `│ Role: ${config.role}`,
          "│",
          `│ ${config.tagline}`,
          "│",
          `│ Location: ${config.location}`,
          `│ Status: ${config.availability}`,
          "└─────────────────────────────────────────────────────────┘",
        ]);
        break;

      /* ================= CONTACT ================= */
      case "contact":
        addHistory(rawInput, [
          "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
          "┃              CONTACT INFORMATION                      ┃",
          "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫",
          `┃ Email:  ${config.email}`,
          `┃ Phone:  ${config.phone}`,
          `┃ Location: ${config.location}`,
          "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫",
          "┃ 🔗 SOCIAL LINKS                                      ┃",
          `┃ GitHub:   ${config.github}`,
          `┃ LinkedIn: ${config.linkedin}`,
          `┃ Portfolio: ${config.portfolio}`,
          "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
        ]);
        break;

      /* ================= SKILLS ================= */
      case "skills":
        addHistory(rawInput, [
          "▶ Frontend",
          ...config.skills.frontend.map((s) => `   • ${s}`),
          "",
          "▶ Backend",
          ...config.skills.backend.map((s) => `   • ${s}`),
          "",
          "▶ Tools",
          ...config.skills.tools.map((s) => `   • ${s}`),
          "",
          "▶ Concepts",
          ...config.skills.concepts.map((s) => `   • ${s}`),
        ]);
        break;

      /* ================= PROJECTS ================= */
      case "projects": {
        const projectList = Object.entries(config.projects).map(
          ([key, proj]) => `  ${key.padEnd(18)} ${proj.status}`,
        );

        addHistory(rawInput, [
          "Projects:",
          ...projectList,
          "",
          "Use 'project <name>' to open a project",
        ]);
        break;
      }

      /* ================= LINKS ================= */
      case "github":
        addHistory(rawInput, "Opening GitHub...");
        setTimeout(() => window.open(config.github, "_blank"), 400);
        break;

      case "linkedin":
        addHistory(rawInput, "Opening LinkedIn...");
        setTimeout(() => window.open(config.linkedin, "_blank"), 400);
        break;

      case "portfolio":
        addHistory(rawInput, "Opening Portfolio...");
        setTimeout(() => window.open(config.portfolio, "_blank"), 400);
        break;

      case "resume":
        addHistory(rawInput, "Downloading resume...");
        setTimeout(() => window.open(config.resume, "_blank"), 400);
        break;

      /* ================= SYSTEM ================= */
      case "whoami":
        addHistory(rawInput, `${config.name}@portfolio`);
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      /* ================= PROJECT DETAIL ================= */
      default:
        if (cmd.startsWith("project ")) {
          const key = cmd.replace("project ", "").trim();
          const project = config.projects[key as keyof typeof config.projects];

          if (project) {
            addHistory(rawInput, [
              "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
              `📦 ${project.name}`,
              `Status : ${project.status}`,
              `Stack  : ${project.stack.join(", ")}`,
              "",
              project.description,
              "",
              `🔗 ${project.url}`,
              "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            ]);
            setTimeout(() => window.open(project.url, "_blank"), 500);
          } else {
            addHistory(rawInput, [
              `Project not found: ${key}`,
              "",
              "Available projects:",
              ...Object.keys(config.projects).map((k) => `  • ${k}`),
            ]);
          }
        } else {
          addHistory(rawInput, `${rawInput}: command not found`);
        }
    }

    setInput("");
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-0 p-4 z-40 cursor-pointer">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0f1419] border cursor-pointer font-bold font-fira rounded-3xl border-[#1a1f3a] text-[#00ff00] px-4 py-2 font-mono text-sm hover:bg-[#1a1f3a] transition"
        >
          Terminal (Ctrl + ` )
        </button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 font-fira right-0 w-full bg-[#0a0e27] border-t border-l z-20  border-[#1a1f3a] flex flex-col"
      style={{ height: `${height}px` }}
    >
      {/* Resize Handle */}
      <div
        ref={resizeRef}
        onMouseDown={() => {
          isResizing.current = true;
        }}
        className="h-1 bg-[#1a1f3a] hover:bg-[#00ff00] cursor-ns-resize transition"
      />

      {/* Terminal Header */}
      <div className="bg-[#0f1419] px-4 py-3 flex items-center justify-between gap-2 border-b border-[#1a1f3a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 cursor-pointer rounded-full bg-[#ff5f56]"
            ></div>
            <div className="w-3 h-3 cursor-pointer rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 cursor-pointer rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-xs text-[#00ff00] ml-2 opacity-50">
            portfolio@terminal
          </span>
          <span className="text-xs text-[#00ff00] opacity-30 ml-4">
            Ctrl+` to toggle
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-0"
        style={{ scrollBehavior: "smooth" }}
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-words text-[#00ff00] leading-relaxed text-sm`}
          >
            {line.startsWith("$") ? (
              <span className="text-green-500 font-semibold ">{line}</span>
            ) : (
              <span className="text-[#00ff00] ">{line}</span>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#00ff00] text-sm font-bold">
            muhammadrabbi@portfolio~$
          </span>
          <input
            className="bg-transparent outline-none flex-1 text-[#00ff00] caret-[#00ff00] text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand();
              }
            }}
            spellCheck={false}
            autoFocus
            placeholder=""
          />
          <span className="animate-pulse text-[#00ff00]">▋</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

import PreviewReadMe from "../components/UI/PreviewReadMe";

const ReadMe = () => {
  const readme = `# 💻 VS Code Style Developer Portfolio

> A Visual Studio Code–inspired developer portfolio built to look and feel like a real code editor.

This portfolio is not a traditional website.  
Instead, it simulates a **VS Code workspace**, where visitors explore my profile, skills, and projects through files, tabs, and extensions — just like a real development environment.

---

## 📌 Overview

\`\`\`ts
const portfolio = {
  name: "VS Code Portfolio",
  author: "Muhammad Rabbi",
  role: "Full Stack Developer",
  focus: ["Frontend Systems", "Clean UI", "Developer Experience","Scalable Backend Systems"],
  status: "Active Development"
};
\`\`\`

---

## 👋 About Me

I’m a **Full Stack Developer** with a strong focus on **frontend architecture, UI systems** and **Scalable Backend Systems**.  
I enjoy building interactive, developer-centric experiences and experimenting with modern tools to turn ideas into clean, scalable products.

This portfolio reflects how I think and build — structured, interactive, and detail-oriented.

---

## ✨ Key Features

- 🧠 VS Code–style UI (Explorer, Tabs, Editor, Status Bar)
- 📂 File-based navigation instead of traditional pages
- 🎨 Theme system (VS Code Dark+ with more planned)
- ⌨️ Monaco Editor integration
- 🧩 Extensions-style project showcase
- ⚡ Smooth UI interactions
- 🖱️ Developer-friendly UX patterns
- ⌨️ Terminal commands systems
---

## 🛠 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**

### Editor & UI
- **Monaco Editor**
- **CSS Variables (Theme Tokens)**

### State & Animation
- **Zustand**
- **GSAP**

---

## 🎨 Theme System

Themes are fully token-based and easy to extend.

### Available
- **VS Code Dark+**

### Planned
- Dracula
- Tokyo Night
- Light+

\`\`\`css
[data-theme="dark"] {
  --editor-bg: #1e1e1e;
  --sidebar-bg: #252526;
  --tabs-bg: #2d2d2d;
}
\`\`\`

---

## 📁 Project Structure

\`\`\`bash
vs-code-portfolio/
├── app/
│   ├── components/
│   │   ├── layouts/
│   │   └── ui/
│   ├── workspace/
│   ├── layout.tsx
│   └── page.tsx
│
├── data/
│   ├── about.md
│   ├── skills.ts
│   ├── projects.ts
│   └── contact.json
│
├── styles/
│   └── themes.css
│
├── public/
└── README.md
\`\`\`

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or pnpm

### Installation

\`\`\`bash
git clone https://github.com/rafiqwe/vsportfolio.git
cd vsportfolio
npm install
npm run dev
\`\`\`

Open in browser:

\`\`\`
http://localhost:3000
\`\`\`

---

## 📂 Navigation Concept

Instead of routes like \`/about\` or \`/projects\`:

- \`about-me.md\` → About section
- \`skills.ts\` → Skills
- \`projects/*.md\` → Projects
- \`contact.json\` → Contact details

Each file opens in a **tab**, just like VS Code.

---

## 📬 Contact

\`\`\`json
{
  "email": "muhammedrabbi.dev@gmail.com",
  "github": "https://github.com/rafiqwe",
  "linkedin": "https://linkedin.com/in/muhammad-rabbi-dev"
}
\`\`\`

---

## 🧠 Design Philosophy

- Think like a developer
- Explore like an editor
- Read information as code
- Prioritize clarity and structure

This project is built to **stand out**, not blend in.

---

## 🗺 Roadmap

- [ ] Theme switcher (Command Palette)
- [ ] Extensions panel
- [ ] Fake terminal commands
- [ ] Mobile responsive VS Code layout

---

## 📄 License

MIT License

---

## ⭐ Final Note

If you’re a recruiter, developer, or just curious —  
explore the files, open the tabs, and enjoy the experience.

Thanks for stopping by 👋
`;

  return (
    <div className="w-full h-full flex flex-col bg-[var(--editor-bg)]">
      {/* Toolbar (like VS Code) */}
      <PreviewReadMe readme={readme} />
    </div>
  );
};

export default ReadMe;

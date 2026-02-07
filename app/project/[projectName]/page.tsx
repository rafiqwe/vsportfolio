"use client";

import { useParams } from "next/navigation";
import projectDetails from "../projectDetails.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectPage = () => {
  const params = useParams<{ projectName: string }>();

  const project = projectDetails.projects.find(
    (p) => p.id === params.projectName,
  );

  if (!project) {
    return <div className="p-6 text-red-400">Project not found</div>;
  }

  const screenshotsSection = project.screenshots?.length
    ? `
---

## 🖼 Screenshots

${project.screenshots
  .map((src: string) => `![Screenshot](${src})`)
  .join("\n\n")}
`
    : "";

  const projectReadme = `
# ${project.title}

${project.description}

---

## 🛠 Tech Stack
${project.techStack.map((t: string) => `- ${t}`).join("\n")}

---

## ✨ Features
${project.features.map((f: string) => `- ${f}`).join("\n")}

${screenshotsSection}

---

## 📦 Project Info
- **Category:** ${project.category}
- **Status:** ${project.status}
- **Year:** ${project.year}

---

## 🔗 Links
- **GitHub:** ${project.githubUrl || "N/A"}
- **Live:** ${project.liveUrl || "N/A"}
`;

  return (
    <div className="w-full h-full bg-[var(--editor-bg)] markdown-preview pt-4 pl-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{projectReadme}</ReactMarkdown>
    </div>
  );
};

export default ProjectPage;

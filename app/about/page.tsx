"use client";

import PreviewReadMe from "../components/UI/PreviewReadMe";

const aboutContent = `
# 👋 About Me

Hi! I'm **Muhammad Rabbi**, a Full Stack Developer specializing in **frontend systems, clean UI, and developer experience**.  

I enjoy building **interactive web applications**, experimenting with **AI tools**, and improving one concept at a time. My goal is to create **maintainable, scalable, and elegant code**.

---

## 💻 Skills & Focus

- **Frontend:** React, Next.js, Tailwind CSS, TypeScript  
- **Backend:** Node.js, Express, MongoDB, PostgreSQL  
- **Tools:** Git, VS Code, Vercel, GSAP  
- **Dev Practices:** Clean Code, Component-driven UI, Accessibility, Performance Optimization  

---

## 🧠 Philosophy

I follow a **developer-first mindset**:

- Code should be **clean and readable**  
- UI should be **responsive and accessible**  
- Components should be **reusable and maintainable**  
- Projects should **solve real problems efficiently**  

---

## 🌎 Location & Availability

- Based in **Bangladesh**  
- Open to **remote & freelance opportunities**  

---

## 🎯 Fun Fact

I love **experimenting with AI tools** and integrating them into projects to improve workflow efficiency.

---

## 📬 Contact

\`\`\`json
{
  "email": "muhammedrabbi.dev@gmail.com",
  "github": "https://github.com/rafiqwe",
  "linkedin": "https://linkedin.com/in/muhammad-rabbi-dev"
}`;

export default function AboutPage() {
  return (
    <div className="w-full h-full bg-[var(--editor-bg)]">
      <PreviewReadMe readme={aboutContent} />
    </div>
  );
}

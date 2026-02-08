import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

import Sidebar from "./components/layouts/Sidebar";
import Tabs from "./components/layouts/Tabs";
import StatusBar from "./components/layouts/StatusBar";
import EditorTab from "./components/editorTab/EditorTab";
import { TabProvider } from "./context/TabContext";
import Terminal from "./components/terminal/Terminal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Rabbi | Full-Stack Developer",
    template: "%s | Muhammad Rabbi",
  },
  description:
    "Muhammad Rabbi – Full-stack developer focused on frontend systems, clean UI, and VS Code-style web experiences. Builder of DevGuide and BGift Social Media.",
  keywords: [
    "Muhammad Rabbi",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "VS Code Portfolio",
    "DevGuide",
    "BGift Social Media",
    "Need a developer?",
    "Hire me",
    "Create a website",
    "Create a web application",
    "Create a web app",
    "Create a web app for your business",
    "Create a web app for your business",
  ],
  authors: [{ name: "Muhammad Rabbi" }],
  creator: "Muhammad Rabbi",
  metadataBase: new URL("https://muhammadrabbi.vercel.app"),
  openGraph: {
    title: "Muhammad Rabbi | Full-Stack Developer",
    description:
      "VS Code–style portfolio showcasing projects, skills, and experiments in modern web development.",
    url: "https://muhammadrabbi.vercel.app",
    siteName: "Muhammad Rabbi Portfolio",
    images: [
      {
        url: "/muhammadrabbi.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Rabbi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rabbi | Full-Stack Developer",
    description:
      "Frontend-focused full-stack developer building clean UI and real-world products.",
    images: ["/muhammadrabbi.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${firaCode.variable} antialiased`}
      >
        <TabProvider>
          <div className="h-screen w-full flex bg-var(--background) text-var(--foreground)">
            <div className="flex flex-col w-full h-full">
              <Tabs />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className=" relative flex flex-col w-full h-full ">
                  <EditorTab />
                  <div className="px-3  flex-1 pt-2 overflow-x-auto no-scrollbar  relative">
                    {children}
                  </div>
                  <div className="relative w-full ">
                    <Terminal />
                  </div>
                </div>
              </div>
              <StatusBar />
            </div>
          </div>
        </TabProvider>
      </body>
    </html>
  );
}

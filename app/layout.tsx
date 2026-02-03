import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

import Sidebar from "./components/layouts/Sidebar";
import Tabs from "./components/layouts/Tabs";
import StatusBar from "./components/layouts/StatusBar";
import EditorTap from "./components/editorTap/EditorTap";
import { TapProvider } from "./context/TapContext";
import Terminal from "./components/terminal/Terminal";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
  title: "VS Code Portfolio | Muhammad Rabbi",
  description: "VS Code style developer portfolio",
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
        <TapProvider>
          <div className="h-screen w-full flex bg-var(--background) text-var(--foreground)">
            <div className="flex flex-col w-full h-full">
              <Tabs />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className=" relative flex flex-col w-full h-full ">
                  <EditorTap />
                  <div className="px-3 flex-1 pt-9 overflow-x-auto no-scrollbar relative">
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
        </TapProvider>
      </body>
    </html>
  );
}

"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type TabType = {
  TabName: string;
  link: string;
};

interface TabContextType {
  tabs: TabType[];
  addTab: (TabName: string, link: string) => void;
  removeTab: (TabName: string) => void;
  reorderTabs: (from: number, to: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<TabType[]>([]);
  const router = useRouter();

  const addTab = (TabName: string, link: string) => {
    setTabs((prev) => {
      if (prev.some((tab) => tab.TabName === TabName)) return prev;
      return [...prev, { TabName, link }];
    });
  };

  const removeTab = (TabName: string) => {
    setTabs((prev) => prev.filter((tab) => tab.TabName !== TabName));
    if (tabs.length >= 1) {
      router.push("/");
    }
  };

  const reorderTabs = (from: number, to: number) => {
    setTabs((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });
  };

  return (
    <TabContext.Provider value={{ tabs, addTab, removeTab, reorderTabs }}>
      {children}
    </TabContext.Provider>
  );
};

// Custom hook
export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTabs must be used within a TabProvider");
  return context;
};

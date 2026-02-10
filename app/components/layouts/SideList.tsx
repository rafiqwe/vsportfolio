import {
  Blocks,
  BugOff,
  CircleAlert,
  Files,
  FileUser,
  Router,
} from "lucide-react";
import { MdContactPage } from "react-icons/md";

interface SideListProps {
  setTab: (tab: string | null) => void;
  handleTabClick: (tab: string) => void;
  Tab: string | null;
}

const SideList = ({ setTab, handleTabClick, Tab }: SideListProps) => {
  const list = [
    { icon: <Files />, name: "file" },
    { icon: <MdContactPage size={25} />, name: "contact" },
    { icon: <BugOff />, name: "skills" },
    { icon: <Blocks />, name: "projects" },
    { icon: <Router />, name: "service" },
    { icon: <CircleAlert />, name: "about" },
  ];
  return (
    <div>
      <ul className="flex flex-col gap-1 space-y-4">
        {list.map((item, index) => (
          <li
            onClick={() => {
              handleTabClick(item.name);
            }}
            className={`${item.name === "about" ? "rotate-180" : ""}  ${Tab === item.name ? "bg-[var(--tabs-bg)]" : ""} cursor-pointer hover:bg-[var(--tabs-bg)] text-[#008BFF]  p-2 rounded-md`}
            key={index}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideList;

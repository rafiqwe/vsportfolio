import { useTabs } from "@/app/context/TabContext";
import Link from "next/link";

export const Action = ({
  href,
  icon,
  title,
  desc,
  name
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  name: string;
}) => {
  const { addTab } = useTabs();
  return (
    <Link
      href={href}
      onClick={() => addTab(name, href)}
      className="flex items-start gap-3 p-4 rounded-md
      bg-[var(--sidebar-bg)] border border-[var(--border-color)]
      hover:bg-[var(--tabs-bg)] transition-all duration-200"
    >
      <div className="text-[var(--accent)] mt-1">{icon}</div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-[var(--text-muted)]">{desc}</p>
      </div>
    </Link>
  );
};

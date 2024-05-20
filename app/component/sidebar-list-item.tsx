import { ReactNode } from "react";
import { RxDashboard } from "react-icons/rx";

export function SidebarListItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactNode;
}) {
  return (
    <article className="flex gap-2 text-[#888888] items-center rounded-[10px] w-full hover:bg-[var(--base-100)] pl-[14px] py-[6px] hover:text-[#888888]/80 cursor-pointer">
      {icon}
      <p className="hidden font-medium text-base lg:block">{text}</p>
    </article>
  );
}

import React from "react";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { SidebarListItem } from "@/app/component";
import { TbLogout2 } from "react-icons/tb";

const sidebarItems1 = [
  {
    text: "Monetization",
    icon: <CiMoneyBill className="w-[18px] h-[18px] aspect-square" />,
  },

  {
    text: "Notification",
    icon: (
      <IoNotificationsOutline className="w-[18px] h-[18px] aspect-square" />
    ),
  },
];

const sidebarItems2 = [
  {
    text: "Settings",
    icon: <IoSettingsOutline className="w-[18px] h-[18px] aspect-square" />,
  },

  {
    text: "Log out",
    icon: <TbLogout2 className="w-[18px] h-[18px] aspect-square" />,
  },
];

export function Sidebar() {
  return (
    <aside className="h-screen py-8 px-4 bg-[#121212] overflow-clip">
      <section className="flex flex-col gap-7 h-full">
        <Image
          src="/user.svg"
          width={32}
          height={32}
          className="ml-auto rounded-[25px] border aspect-square object-contain"
          alt="Customer Image"
        />

        <div className="flex flex-col gap-1 h-full">
          <article className="flex gap-2 text-white items-center rounded-[10px] w-full bg-[var(--base-100)] pl-[14px] py-[6px] hover:text-white/50 cursor-pointer">
            <RxDashboard className="w-[18px] h-[18px] aspect-square" />
            <p className="hidden font-medium text-base lg:block">Dashboard</p>
          </article>

          <div className="flex flex-col h-full">
            <div className="flex-1">
              {sidebarItems1.map((item) => (
                <SidebarListItem
                  text={item.text}
                  icon={item.icon}
                  key={item.text}
                />
              ))}
            </div>

            <div>
              {sidebarItems2.map((item) => (
                <SidebarListItem
                  text={item.text}
                  icon={item.icon}
                  key={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}

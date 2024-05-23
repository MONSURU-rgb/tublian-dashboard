"use client";

import { useState } from "react";

const tabLists = [
  "Discover",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
];

export const NavTags = () => {
  const [tabWithGradient, setTabGradient] = useState("Discover");

  function changeActiveState(currentTab: string) {
    setTabGradient(currentTab);
  }

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar overflow-y-hidden">
      {tabLists.map((tab) =>
        tabWithGradient === tab ? (
          <button
            className="bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] p-[8px_24px] rounded-[10px] text-transparent !relative w-fit cursor-pointer min-h-[34px] space-grotesk min-w-fit text-sm md:text-base"
            key={tab}
            onClick={() => changeActiveState(tab)}>
            {tab}
            <span className="bg-[#121212] absolute top-[1px] left-[1px] rounded-[10px] right-[1px] text-[#FEFEFE] whitespace-nowrap p-[7px_22px] cursor-pointer space-grotesk text-sm md:text-base">
              {tab}
            </span>
          </button>
        ) : (
          <button
            className="bg-[#1E1E1E] top-[1px] left-[1px] rounded-[10px] right-[1px] text-[#FEFEFE] whitespace-nowrap p-[7px_22px] cursor-pointer space-grotesk border-[#292929] text-sm md:text-base"
            key={tab}
            onClick={() => changeActiveState(tab)}>
            {tab}
          </button>
        )
      )}
    </div>
  );
};

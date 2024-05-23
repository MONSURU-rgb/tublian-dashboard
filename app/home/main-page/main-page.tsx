"use client";

import {
  CardContainer,
  CardWithImage,
  Header,
  NavTags,
  SearchPoint,
} from "@/app/component";

export function MainPage() {
  return (
    <div className="bg-[#121212] md:pr-2 w-full min-h-screen">
      <div className="mt-2 rounded-[20px_20px_0px_0px] border border-[#1e1e1eeb] flex flex-col md:gap-4 gap-1">
        <Header />

        <SearchPoint />

        <section className="flex justify-between items-center px-7 p-3 overflow-x-auto">
          <NavTags />
        </section>

        <div className="px-7 flex flex-col gap-6">
          <CardContainer />
          <CardWithImage />
        </div>
      </div>
    </div>
  );
}

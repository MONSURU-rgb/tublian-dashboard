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
    <div className="bg-[#121212] md:pr-2 w-full h-screen overflow-y-auto mt-2 rounded-[20px_20px_0px_0px] md:border md:border-[#1e1e1eeb] no-scrollbar">
      <Header />
      <div className="flex flex-col md:gap-4 gap-1 overflow-y-auto no-scrollbar">
        <div className="flex flex-col md:gap-4 gap-1 h-full overflow-y-auto">
          <SearchPoint />

          <section className="flex justify-between items-center md:px-7 p-3 overflow-x-auto">
            <NavTags />
          </section>

          <div className="md:px-7 flex flex-col gap-6 px-3 flex-1 overflow-y-auto h-full">
            <CardContainer />
            <CardWithImage />
          </div>
        </div>
      </div>
    </div>
  );
}

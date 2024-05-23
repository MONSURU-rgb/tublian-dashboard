"use client";

import { Select } from "@mantine/core";
import { ArrowDown2, Filter } from "iconsax-react";

export const Header = () => {
  return (
    <header className="p-3 md:p-5 flex justify-between text-[#FEFEFE] items-center sticky top-0 pr-2 md:pr-7 space-grotesk">
      <h2 className="font-bold md:text-xl text-[#FEFEFE] space-grotesk text-lg">
        Find Developers
      </h2>

      <Select
        placeholder="Sort By high streetcred"
        data={[{ value: "low", label: "Sort By low streetcred" }]}
        rightSection={<ArrowDown2 size="18" color="#FEFEFE" />}
        classNames={{
          input:
            "border-[#292929] text-[#FEFEFE] bg-[#1E1E1E] space-grotesk px-5 flex gap-2",
          root: "md:block hidden",
        }}
        styles={{
          input: {
            "&::placeholder": {
              color: "#888888",
              fontFamily: "Space Grotesk",
            },
          },

          dropdown: {
            zIndex: 999,
          },
        }}
      />
    </header>
  );
};

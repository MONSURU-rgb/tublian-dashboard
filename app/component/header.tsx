"use client";

import { Burger, Overlay, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2, Filter, SearchNormal } from "iconsax-react";
import { HamburgerDropdown } from "./hamburger-dropdown";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <header className="p-3 md:p-5 flex justify-between text-[#FEFEFE] items-center sticky top-0 pr-2 md:pr-7 space-grotesk z-[999] backdrop-opacity-0 bg-[#121212]">
      <section className="md:hidden flex flex-col gap-5 w-full pr-2">
        <div className="flex gap-5 items-center">
          <SearchNormal size="28" color="#FEFEFE" className="flex ml-auto" />
          <section className="md:hidden">
            <Burger
              opened={opened}
              color="#FEFEFE"
              onClick={() => {
                toggle();
              }}
              aria-label="Toggle navigation"
              className="relative z-[999] cursor-pointer"
              transitionDuration={500}
            />

            {opened && (
              <Overlay
                color="#121212"
                opacity={0.7}
                zIndex={10}
                className="h-screen cursor-pointer"
                onClick={() => toggle()}
              />
            )}

            {opened && <HamburgerDropdown toggle={toggle} opened={opened} />}
          </section>
        </div>

        <h2 className="font-bold md:text-xl text-[#FEFEFE] space-grotesk text-lg">
          Find Developers
        </h2>
      </section>

      <h2 className="font-bold md:text-xl text-[#FEFEFE] space-grotesk text-lg hidden md:flex">
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

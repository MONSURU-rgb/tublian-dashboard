"use client";

import { Burger, Overlay, Select, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2, Filter, SearchNormal } from "iconsax-react";
import { HamburgerDropdown } from "./hamburger-dropdown";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure();
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState("");

  function showSearchField() {
    setIsOpened((prevState) => !prevState);
  }
  return (
    <header className="p-3 md:p-5 flex justify-between text-[#FEFEFE] items-center pr-2 md:pr-7 space-grotesk z-[900] backdrop-opacity-0 bg-[#121212] md:!sticky top-0">
      <section className="md:hidden flex flex-col gap-5 w-full pr-2 !sticky top-0">
        <div className="flex gap-5 items-center sticky top-0 z-[999] backdrop-opacity-0 bg-[#121212]">
          {isOpened ? (
            <TextInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              placeholder='Try Searching "full time backend developer" '
              icon={<RiSearch2Line size={16} />}
              w="100%"
              classNames={{
                input:
                  "bg-[#1E1E1E] border-[#292929] text-[#FEFEFE] space-grotesk",
                root: "md:hidden block",
              }}
              styles={{
                input: {
                  "&::placeholder": {
                    color: "#888888",
                    fontFamily: "Space Grotesk",
                  },
                },
              }}
            />
          ) : (
            <SearchNormal
              size="28"
              color="#FEFEFE"
              className="flex ml-auto cursor-pointer"
              onClick={showSearchField}
            />
          )}

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

      <h2 className="font-bold md:text-xl text-[#FEFEFE] space-grotesk text-lg hidden md:flex font-space-grotesk">
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

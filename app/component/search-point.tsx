"use client";

import { Button, ButtonGradient } from "@/app/component/Button";
import { TextInput } from "@mantine/core";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FilterButton } from "./filter-button";

export const SearchPoint = () => {
  const [value, setValue] = useState("");
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);

  function setButton1Gradient() {
    setButton1(true);
    setButton2(false);
  }
  function setButton2Gradient() {
    setButton2(true);
    setButton1(false);
  }

  return (
    <div className="flex flex-col gap-3 px-[14px] pb-3 pt-0 md:px-7 ">
      <h2 className="font-bold md:text-xl text-[#FEFEFE] space-grotesk text-lg flex md:hidden">
        Find Developers
      </h2>
      <div className="flex gap-2 justify-between w-full">
        <TextInput
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder='Try Searching "full time backend developer" '
          icon={<RiSearch2Line size={16} />}
          w="100%"
          classNames={{
            input:
              "bg-[#1E1E1E] border-[#292929] text-[#FEFEFE] space-grotesk h-[54px]",
            root: "md:block hidden",
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

        <article className="flex justify-between items-center md:w-fit flex-1">
          <div className="flex bg-[#1E1E1E] border-[#292929] rounded-[10px] !w-fit p-1">
            <ButtonGradient
              button1={button1}
              setButton1Gradient={setButton1Gradient}
            />
            <Button button2={button2} setButton2Gradient={setButton2Gradient} />
          </div>

          <div className="md:hidden block">
            <FilterButton />
          </div>
        </article>
      </div>
    </div>
  );
};

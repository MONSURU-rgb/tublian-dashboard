"use client";

import { TextInput } from "@mantine/core";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const tabLists = [
  "Discover",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
];

export function MainPage() {
  return (
    <div className="bg-[#121212] pr-2">
      <div className="mt-2 rounded-[20px_20px_0px_0px] border border-[#1e1e1eeb] flex flex-col gap-3">
        <Header />

        <SearchPoint />

        <NavTags />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="p-5 flex justify-between text-[#FEFEFE] items-center sticky top-0 border border-[#1e1e1eeb]">
      <h2 className="font-bold text-xl text-[#FEFEFE]">Find Developers</h2>
    </header>
  );
};

const SearchPoint = () => {
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
    <div className="pl-7 flex gap-2">
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder='Try Searching "full time backend developer" '
        icon={<RiSearch2Line size={16} />}
        w="75%"
        classNames={{
          input: "bg-[#1E1E1E] border-[#292929] text-[#FEFEFE]",
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
      <ButtonGradient
        button1={button1}
        setButton1Gradient={setButton1Gradient}
      />
      <Button button2={button2} setButton2Gradient={setButton2Gradient} />
    </div>
  );
};

const ButtonGradient = ({
  button1,
  setButton1Gradient,
}: {
  button1: boolean;
  setButton1Gradient: (value: boolean) => void;
}) => {
  return (
    <button
      className={`${
        button1
          ? "bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] rounded"
          : "bg-inherit"
      } relative p-[10px] text-[#FEFEFE] font-bold`}
      onClick={() => setButton1Gradient(!button1)}>
      Full Time
    </button>
  );
};
const Button = ({
  button2,
  setButton2Gradient,
}: {
  button2: boolean;
  setButton2Gradient: (value: boolean) => void;
}) => {
  return (
    <button
      className={`${
        button2
          ? "bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] rounded"
          : "bg-inherit"
      } relative p-[10px] text-[#FEFEFE] font-bold`}
      onClick={() => setButton2Gradient(!button2)}>
      Freelance
    </button>
  );
};

const NavTags = () => {
  ``;
  return (
    <button className="bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] p-[8px_24px] rounded-lg text-transparent !relative w-fit cursor-pointer">
      Hover me
      <button className="bg-black absolute top-[1px] left-[1px] rounded-[10px] right-[1px] text-white whitespace-nowrap p-[7px_22px] cursor-pointer">
        Discover
      </button>
    </button>
  );
};

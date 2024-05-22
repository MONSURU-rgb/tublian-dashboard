"use client";

import { button } from "@/app/component/Button";
import { TextInput } from "@mantine/core";
import { Filter } from "iconsax-react";
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

        <section className="flex justify-between items-center px-7">
          <NavTags />
          <FilterButton />
        </section>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="p-5 flex justify-between text-[#FEFEFE] items-center sticky top-0 border border-[#1e1e1eeb] pr-7">
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
    <div className="px-7 flex gap-2 justify-between">
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

      <article className="flex justify-center items-center">
        <ButtonGradient
          button1={button1}
          setButton1Gradient={setButton1Gradient}
        />
        <Button button2={button2} setButton2Gradient={setButton2Gradient} />
      </article>
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
  const [tabWithGradient, setTabGradient] = useState("Discover");

  function changeActiveState(currentTab: string) {
    setTabGradient(currentTab);
  }

  return (
    <div className="flex gap-2">
      {tabLists.map((tab) =>
        tabWithGradient === tab ? (
          <button
            className="bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] p-[8px_24px] rounded-lg text-transparent !relative w-fit cursor-pointer max-h-[34px] space-grotesk"
            key={tab}
            onClick={() => changeActiveState(tab)}>
            {tab}
            <span className="bg-[#121212] absolute top-[1px] left-[1px] rounded-[10px] right-[1px] text-[#FEFEFE] whitespace-nowrap p-[7px_22px] cursor-pointer">
              {tab}
            </span>
          </button>
        ) : (
          <button
            className="bg-[#1E1E1E] top-[1px] left-[1px] rounded-[10px] right-[1px] text-[#FEFEFE] whitespace-nowrap p-[7px_22px] cursor-pointer space-grotesk border-[#292929]"
            key={tab}
            onClick={() => changeActiveState(tab)}>
            {tab}
          </button>
        )
      )}
    </div>
  );
};

const FilterButton = () => {
  return (
    <button className="p-[7px_24px] border-[#292929] border flex justify-center items-center rounded-lg cursor-pointer">
      <Filter size="18" color="#FEFEFE" />;
    </button>
  );
};

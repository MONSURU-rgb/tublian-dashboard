"use client";

import { button } from "@/app/component/Button";
import { TextInput } from "@mantine/core";
import { Filter } from "iconsax-react";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";

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

        <div className="px-7 flex flex-col gap-6">
          <CardContainer />

          <section className="p-6 bg-[#1E1E1E] border-[#292929] rounded-[10px] flex flex-col gap-7">
            <CardHeader
              name="John Doe"
              location="Lagos, Nigeria"
              amount="$1000-3000 (USD)"
              src="/user.png"
            />

            <div className="flex gap-1">
              <Card
                key="My_Resume"
                buttonTitle="Other"
                cardTitle="My_Resume"
                cardDetails="I am updating my resume, as completing my projects."
              />

              <Image
                src="/designcode.png"
                alt="user image"
                width={320}
                height={60}
              />

              <Card key="Portfolio" buttonTitle="Other" cardTitle="Portfolio" />
            </div>
          </section>
        </div>
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

const CardHeader = ({
  name,
  location,
  amount,
  src,
}: {
  name: string;
  location: string;
  amount: string;
  src: string;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[14px]">
        <Image src={src} alt="user image" width={60} height={60} />

        <div>
          <h2 className="font-bold text-lg/[32px] text-[#FEFEFE]">{name}</h2>

          <article>
            <h3 className="font-medium text-base text-[#888888] flex items-center gap-1">
              <span>{location}</span>
              <span className="w-1 h-1 rounded-full bg-[#888888]" />
              <span>{amount}</span>
            </h3>
            <span></span>
          </article>
        </div>
      </div>
      <button className="p-[8px_16px] bg-[#FDD649] rounded-[30px] font-medium text-[#121212] max-h-[40px]">
        Hire Me
      </button>
    </div>
  );
};

const CardContainer = () => {
  return (
    <section className="p-6 bg-[#1E1E1E] border-[#292929] rounded-[10px] flex flex-col gap-7">
      <CardHeader
        name="John Doe"
        location="New jersey, USA"
        amount="$250, 000(USD)"
        src="/john.png"
      />

      <section className="flex gap-1">
        {cardDetails.map(({ buttonTitle, cardTitle, cardDetails }) => (
          <Card
            key={cardTitle}
            buttonTitle={buttonTitle}
            cardTitle={cardTitle}
            cardDetails={cardDetails}
          />
        ))}
      </section>
    </section>
  );
};

const cardDetails = [
  {
    buttonTitle: "Other",
    cardTitle: "My_Resume",
    cardDetails: "I am updating my resume, as completing my projects.",
  },

  {
    buttonTitle: "Other",
    cardTitle: "Portfolio",
  },
];

const Card = ({
  buttonTitle,
  cardTitle,
  cardDetails,
}: {
  buttonTitle: string;
  cardTitle: string;
  cardDetails?: string;
}) => {
  return (
    <section className="border-[#414141] bg-[#292929] rounded-[10px] p-3 gap-2 flex flex-col w-[320px]">
      <span className="p-[4px_12px] border border-[#FEFEFE] border-solid font-medium text-[#FEFEFE] rounded-[20px] bg-[#292929] w-fit">
        {buttonTitle}
      </span>
      <article className="flex flex-col flex-1">
        <h3 className="font-bold text-[18px]/[30px] text-[#FEFEFE] flex-1">
          {cardTitle}
        </h3>
        <p className="font-normal text-[12px] text-[#B7B7B7] max-w-[280px]">
          {cardDetails}
        </p>

        <div>
          <span className="text-[12px] text-[#B7B7B7] font-normal">
            Last Updated:{" "}
          </span>
          <time className="font-normal text-[12px] text-[#FEFEFE]">
            Tue, Dec 13, 2022
          </time>
        </div>
      </article>
    </section>
  );
};

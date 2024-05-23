"use client";

import { Card } from "./card";
import { CardHeader } from "./card-header";
import Image from "next/image";

export function CardWithImage() {
  return (
    <section className="p-6 bg-[#1E1E1E] border-[#292929] rounded-[10px] flex flex-col gap-7 no-scrollbar">
      <CardHeader
        name="John Doe"
        location="Lagos, Nigeria"
        amount="$1000-3000 (USD)"
        src="/user.png"
      />

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Card
          key="My_Resume"
          buttonTitle="Other"
          cardTitle="My_Resume"
          cardDetails="I am updating my resume, as completing my projects."
        />

        <Image src="/designcode.png" alt="user image" width={320} height={60} />

        <Card key="Portfolio" buttonTitle="Other" cardTitle="Portfolio" />
      </div>
    </section>
  );
}

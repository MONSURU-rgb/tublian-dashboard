import { Card } from "./card";
import { CardHeader } from "./card-header";

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

export const CardContainer = () => {
  return (
    <section className="p-3 md:p-6 bg-[#1E1E1E] border-[#292929] rounded-[10px] flex flex-col gap-4 md:gap-7 space-grotesk no-scrollbar">
      <CardHeader
        name="John Doe"
        location="New jersey, USA"
        amount="$250, 000(USD)"
        src="/John.png"
      />

      <section className="flex gap-2 overflow-x-auto no-scrollbar">
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

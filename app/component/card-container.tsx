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
  {
    buttonTitle: "Other",
    cardTitle: "Portfolio",
  },
];

export const CardContainer = () => {
  return (
    <section className="p-6 bg-[#1E1E1E] border-[#292929] rounded-[10px] flex flex-col gap-7 space-grotesk">
      <CardHeader
        name="John Doe"
        location="New jersey, USA"
        amount="$250, 000(USD)"
        src="/john.png"
      />

      <section className="flex gap-2 overflow-x-auto">
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

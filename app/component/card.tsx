export const Card = ({
  buttonTitle,
  cardTitle,
  cardDetails,
}: {
  buttonTitle: string;
  cardTitle: string;
  cardDetails?: string;
}) => {
  return (
    <section className="border-[#414141] bg-[#292929] rounded-[10px] p-3 gap-2 flex flex-col min-w-[320px] space-grotesk max-w-[320px]">
      <span className="p-[4px_12px] border border-[#FEFEFE] border-solid font-medium text-[#FEFEFE] rounded-[20px] bg-[#292929] w-fit space-grotesk">
        {buttonTitle}
      </span>
      <article className="flex flex-col flex-1 space-grotesk">
        <h3 className="font-bold text-[18px]/[30px] text-[#FEFEFE] flex-1">
          {cardTitle}
        </h3>
        <p className="font-normal text-[12px] text-[#B7B7B7] max-w-[280px]">
          {cardDetails}
        </p>

        <div>
          <span className="text-[12px] text-[#B7B7B7] font-normal space-grotesk">
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

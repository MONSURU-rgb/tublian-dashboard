import Image from "next/image";

export const CardHeader = ({
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
      <div className="flex gap-[6px] md:gap-[14px] space-grotesk justify-start items-start">
        <figure className="!relative md:w-[60px] w-[30px] aspect-square">
          <Image
            src={src}
            alt="user image"
            sizes="(max-width: 768px) 30px, 60px"
            className="aspect-square object-contain"
            fill
          />
        </figure>

        <div className="space-grotesk">
          <h2 className="font-bold text-lg/[32px] text-[#FEFEFE]">{name}</h2>

          <article className="flex gap-1 flex-col">
            <h3 className="font-medium text-sm md:text-base text-[#888888] flex md:flex-row flex-col items-start md:items-center gap-1">
              <span>{location}</span>
              <span className="w-1 h-1 rounded-full bg-[#888888] md:block hidden" />
              <span>{amount}</span>
            </h3>
            <span className="font-bold text-[12px]/[16px] md:text-[16px]/[24px] space-grotesk text-[#FEFEFE] border rounded-[20px] p-[4px_10px] w-fit whitespace-nowrap">
              Frontend developer
            </span>
          </article>
        </div>
      </div>
      <button className="p-[8px_16px] bg-[#FDD649] rounded-[30px] font-medium text-[#121212] max-h-[40px]text-sm md:text-base h-fit whitespace-nowrap">
        Hire Me
      </button>
    </div>
  );
};

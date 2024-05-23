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
      <div className="flex gap-[14px] space-grotesk justify-start items-start">
        <Image
          src={src}
          alt="user image"
          width={60}
          height={60}
          className="aspect-square object-contain"
        />

        <div className="space-grotesk">
          <h2 className="font-bold text-lg/[32px] text-[#FEFEFE]">{name}</h2>

          <article className="flex gap-1 flex-col">
            <h3 className="font-medium text-base text-[#888888] flex items-center gap-1">
              <span>{location}</span>
              <span className="w-1 h-1 rounded-full bg-[#888888]" />
              <span>{amount}</span>
            </h3>
            <span className="font-bold text-[16px]/[24px] space-grotesk text-[#FEFEFE] border rounded-[20px] p-[4px_10px] w-fit">
              Frontend developer
            </span>
          </article>
        </div>
      </div>
      <button className="p-[8px_16px] bg-[#FDD649] rounded-[30px] font-medium text-[#121212] max-h-[40px]">
        Hire Me
      </button>
    </div>
  );
};

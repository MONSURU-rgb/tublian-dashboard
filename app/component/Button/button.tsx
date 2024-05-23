export const ButtonGradient = ({
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
          ? "bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] rounded space-grotesk"
          : "bg-inherit "
      } relative p-[10px] text-[#FEFEFE] font-bold space-grotesk whitespace-nowrap`}
      onClick={() => setButton1Gradient(!button1)}>
      Full Time
    </button>
  );
};
export const Button = ({
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
      } relative p-[10px] text-[#FEFEFE] font-bold space-grotesk`}
      onClick={() => setButton2Gradient(!button2)}>
      Freelance
    </button>
  );
};

import Link from "next/link";
export function HamburgerDropdown({
  toggle,
  opened,
}: {
  toggle?: (opened: boolean) => void | undefined;
  opened?: boolean;
}) {
  return (
    <ul
      className="
              space-grotesk text-base font-normal cursor-pointer whitespace-nowrap flex flex-col p-6 gap-5 text-white absolute right-[0px] z-[50] md:hidden duration-500 bg-[#1E1E1E] border-[#292929] rounded-[10px] mt-4">
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="/" className="hover:text-white/50">
          Dashboard
        </Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        {" "}
        <Link href="/" className="hover:text-white/50">
          Monetization
        </Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="/" className="hover:text-white/50">
          Notification
        </Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="/" className="hover:text-white/50">
          Settings
        </Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="/" className="hover:text-white/50">
          Log out
        </Link>
      </li>
    </ul>
  );
}

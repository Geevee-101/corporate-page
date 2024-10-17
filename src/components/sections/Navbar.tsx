import { useState } from "react";

import Link from "next/link";
import NavbarLink from "../NavbarLink";
import NavbarButton from "../NavbarButton";

const NavbarLinkData: { linkPath: string; title: string }[] = [
  {
    linkPath: "",
    title: "Jobs",
  },
  {
    linkPath: "",
    title: "About",
  },
  {
    linkPath: "",
    title: "Candidates",
  },
  {
    linkPath: "",
    title: "Clients",
  },
  {
    linkPath: "",
    title: "Join Us",
  },
  {
    linkPath: "",
    title: "Insights",
  },
  {
    linkPath: "",
    title: "Contact Us",
  },
];

export default function Navbar() {
  const [menuIsOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-40">
      <div className="container mx-auto flex justify-between h-20">
        <div className="flex items-center border-t-8 border-transparent">
          <Link href="" className="text-4xl text-white font-extrabold">
            volcanic
          </Link>
        </div>

        <div className="h-full py-3 xl:py-0 border-t-8 xl:border-t-0 border-transparent">
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="xl:hidden flex items-center h-full px-3"
          >
            <svg width="30" height="30" fill="none" viewBox="0 0 20 20">
              <path
                fill="white"
                fillRule="evenodd"
                d="M19 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 7a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"
              />
            </svg>
          </button>
          <div
            className={
              menuIsOpen ? "block xl:h-full" : "hidden xl:block xl:h-full"
            }
          >
            <div className="absolute xl:static flex flex-col xl:flex-row left-0 xl:h-full w-screen xl:w-fit mt-5 xl:mt-0 pt-3 xl:pt-0 xl:gap-14 uppercase text-black xl:text-white bg-white xl:bg-transparent">
              <ul className="flex flex-col xl:flex-row xl:gap-6">
                {NavbarLinkData.map((item, index) => (
                  <NavbarLink key={index} linkPath={item.linkPath}>
                    {item.title}
                  </NavbarLink>
                ))}
              </ul>
              <div className="flex justify-center items-center py-3 xl:py-0 xl:border-t-8 border-transparent bg-secondaryDark xl:bg-transparent">
                <NavbarButton linkPath="">Login</NavbarButton>
                <NavbarButton linkPath="">Register</NavbarButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

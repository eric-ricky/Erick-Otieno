import React from "react";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const NavItems = [
  {
    label: "Projects",
    link: "projects",
  },
  {
    label: "About",
    link: "about",
  },
  {
    label: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center py-0 lg:px-[108px] px-[12px]  text-[#24242a] h-[96px] lg:h-[156px]">
      <div className="flex items-center justify-between w-full">
        <div
          className="font-bold text-[1.8rem] lg:text-[2.8rem]"
          onClick={() => router.push("/")}
        >
          <span className="italic">R</span>icky
        </div>
        <nav className="hidden lg:flex items-center justify-center">
          {NavItems.map((item, i) => (
            <li
              key={i}
              className="mx-[40px] text-[1rem] lg:text-[1rem] cursor-pointer hover:text-[#123456]"
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </nav>

        <div className="hidden lg:flex ">
          <p className="text-[#24242a] pb-[12px] cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Let's work togther
            </Link>
          </p>
        </div>

        <div className="flex lg:hidden pr-4">
          <p className="text-[#24242a] text-2xl">👋</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

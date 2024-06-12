"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";
import { usePathname } from "next/navigation";

const NavItems = [
  { id: "1", name: "Home", route: "#home" },
  { id: "2", name: "About", route: "#about-us" },
  { id: "3", name: "Our Team", route: "#ourteam" },
  { id: "4", name: "Pricing", route: "#pricing" },
  { id: "5", name: "Gallery", route: "#gallery" },
  { id: "6", name: "Contact Us", route: "#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white z-[999] text-primary-foreground border-b-2 border-secondary">
      <Container>
        <header className=" mx-auto flex justify-between items-center z-50 ">
          {/* //*Company name */}
          <div>
            <Link href="/" className="cursor-pointer">
              <Image
                src={logo}
                alt="my-image"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-20 bg-[#ffffff65] backdrop-filter backdrop-blur-sm bg-opacity-100"
              />
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:static absolute top-[30px] left-0 lg:bg-none bg-white transition-all duration-500 lg:z-0 -z-50"
                : " w-full lg:static absolute top-[-550px] left-0 transition-all duration-500 lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <Link key={navItem.id} href={navItem.route}>
                    <li className="lg:mb-0 mb-5 cursor-pointer font-semibold text-sm group relative text-primary-foreground py-[17px] px-2 hover:bg-secondary hover:text-secondary-foreground duration-500">
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10 bg-white border-b border-secondary">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full lg:w-fit text-center py-2 cursor-pointer group relative text-foreground hover:bg-secondary hover:text-secondary-foreground duration-500"
                  >
                    <Link href={navItem.route}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* //*Icons */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;

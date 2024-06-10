/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo/logo.png";

import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20">
      <div className="bg-[#FFDFA5] text-primary-foreground pt-10 pb-5">
        <Container>
          <h1 className=" mb-3 text-primary-foreground font-bold">
            <Image
              src={logo}
              alt="my-image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-15 w-28 drop-shadow-2xl backdrop-blur-3xl"
            />
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:justify-items-center items-start">
            <div className="mb-5 lg:mb-0">
              <p>
                Welcome to Iqra Daycare, where we nurture and care for your
                little ones with love and dedication. Our mission is to provide
                a safe, stimulating, and educational environment for children
                from infancy to preschool age. At Iqra Daycare, we believe in
                fostering a community where every child feels valued, inspired,
                and ready to embark on a lifelong journey of learning. With our
                qualified staff, engaging activities, and a focus on holistic
                development, we ensure that each day is filled with fun,
                exploration, and growth. Trust Iqra Daycare to be your partner
                in your child's early education and development.
              </p>
            </div>
            <div className="mb-5 lg:mb-0 ">
              <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
              <ul>
                <li className="mb-2">
                  21/7 3th Lane, R.K Mission Road Gopibag , Dhaka, Bangladesh
                </li>
                <li className="mb-2">
                  <span className="font-bold"> Phone:</span>{" "}
                  <span className="">+8801677215739</span>
                </li>
                <li className="mb-2">
                  {" "}
                  <span className="font-bold">Email:</span>{" "}
                  <span className="">iqraearly@gmail.com</span>
                </li>
                <li className="mb-2">
                  <div className="flex justify-start items-center gap-5 my-5">
                    <Link
                      href="https://www.facebook.com/profile.php?id=61559139025963&mibextid=JRoKGi"
                      target="_blank"
                    >
                      <FaFacebook className="text-secondary cursor-pointer  text-2xl" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61559139025963&mibextid=JRoKGi"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-secondary cursor-pointer text-2xl" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-10/12 mx-auto mt-20 bg-secondary border-secondary text-secondary" />
          <div className="flex justify-center py-8 text-sm">
            {currentYear} © IQRA DAYCARE. All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

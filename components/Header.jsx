"use client";

import React, { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-3 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-3 xl:mb-[30px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-1 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>+234 (0) 806 476 4446</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>jonzemanfinishingenterprise@gmail.com</span>
              </div>
            </motion.div>

            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <Image
              src="/assets/example.svg"
              width={60}
              height={24}
              priority
              alt=""
            />
          </Link>
        </motion.div>
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

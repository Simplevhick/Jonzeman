"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";
import Link from "next/link";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[354px] h-[300px] xl:w-[500px] xl:h-[500px] mb-8 xl:mb-8  xl:mx-0"
            // className="relative w-[304px] h-[223px] xl:w-[384px] xl:h-[300px] mb-8 xl:mb-8  xl:mx-0"
          >
            <Image
              src={"/assets/interior.jpeg"}
              // src={"/assets/about2.jpg"}
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </motion.div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-4 mx-auto max-w-[540px] xl:max-w-none">
              Committed to the Beauty of every Organization
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Jonzeman Finishing Enterprise is a Entity that has been
              established since 1964. Our mission and vision is to give every
              Home, Company, School and several organization the best look(interior and exterior). 
            </p>
            {/* <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p> */}
            <div className="grid grid-cols-3 gap-[30px] mb-7 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={23} text="Years on Market" />
              </div>
              <div>
                <StatsItem countNum={25} countText="k+" text="Happy Clients" />
              </div>
              <div>
                <StatsItem
                  countNum={99}
                  countText="%"
                  text="Excellence on jobs"
                />
              </div>
            </div>
            <Link href="/contact">
              <button className="btn mx-auto xl:mx-0">Contact us</button>
            </Link>
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

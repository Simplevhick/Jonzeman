"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Link from "next/link";

const Details = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-start xl:max-w-[658px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in quality craftsmanship that transforms your home.
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              List of the services we offer at Jonzeman Finishing Enterprise
              includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-10 xl:mb-10 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[23px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-xl">Pop Installation</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Involves applying a smooth, durable plaster mixture for
                  functional purposes.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[23px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-xl">Window wood art work</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Involves the decorative treatment and enhancement of windows
                  using wooden materials.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[23px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-xl">Wall Screeding</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Wall screeding is a process used to create a smooth, even
                  surface on walls prior to finishing.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[23px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-xl">Wall Effects such as:</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Stuco, tyrolyn, grafiato, 3D wall panels, flunted panels,
                  Swahili effects and also parapet installation.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <button className="btn mx-auto xl:mx-0">Discover more</button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:flex w-[364px] h-[404px] relative"
          >
            <Image
              src="/assets/detail.jpeg"
              fill
              quality={100}
              alt="pix"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;

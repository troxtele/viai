"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    id: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--black)",
    "var(--neutral-900)",
    "var(--slate-900)",
    "var(--black)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--purple-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="py-10"
    >
      <div ref={ref} className="flex justify-center relative space-x-16">
        <div className="div relative flex items-start">
          <div className="max-w-[46rem]">
            {content.map((item, index) => (
              <div
                id={item.id}
                key={item.title + index}
                className="mb-10 lg:my-20 px-4"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="lg:hidden overflow-hidden pb-4"
                >
                  <div className="wrap h-[15rem] rounded-md">
                    {item.content}
                  </div>
                </motion.div>
                {/* <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100 hidden lg:block"
                >
                  {item.title}
                </motion.h2> */}
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className={`text-slate-300 max-w-sm mt-4 lg:mt-10 lg:text-xl ${
                    index > 0 ? "lg:pt-20" : ""
                  }`}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};

"use client";
import React from "react";
import { StickyScroll } from "@components/ui/sticky-scroll-reveal";
import Image from "next/image";

import visionOne from "@/assets/images/home/vision/vision-1.gif";
import visionTwo from "@/assets/images/home/vision/vision-2.jpeg";
import visionThree from "@/assets/images/home/vision/vision-3.jpeg";
import visionFour from "@/assets/images/home/vision/vision-4.jpeg";

const content = [
  {
    title: "Glasses",
    id: "glasses",
    description:
      "Bring your vision to your AI agent to boost productivity for everyday tasks",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={visionOne}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running",
    id: "running",
    description:
      "Vision AI can help motivate you reach short and long term goals in fitness",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={visionTwo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Shopping",
    id: "shopping",
    description:
      "Vision AI can suggest what can be the best food pairings for newer recipes and better diets",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={visionThree}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cooking",
    id: "cooking",
    description: "Vision AI aids in getting just the right spice! Let it cook…",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={visionFour}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Vision() {
  return (
    <section>
      <StickyScroll content={content} />
    </section>
  );
}

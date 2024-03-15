"use client";
import React from "react";
import { StickyScroll } from "@components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Bring your vision to your AI agent to boost productivity for everyday tasks",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Vision AI can help motivate you reach short and long term goals in fitness",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Vision AI can suggest what can be the best food pairings for newer recipes and better diets",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description: "Vision AI aids in getting just the right spice! Let it cook…",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function Vision() {
  return (
    <section className="py-20">
      <StickyScroll content={content} />
    </section>
  );
}

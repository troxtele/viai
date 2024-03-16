"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Button from "@components/ui/moving-border";

import { useScroll, useMotionValueEvent } from "framer-motion";

import { Menu, MenuItem, ProductItem } from "@components/ui/navbar-menu";

import cardImg from "@/assets/images/card.jpg";
import logo from "@/assets/images/logo.png";

import visionOne from "@/assets/images/home/vision/vision-1.gif";
import visionTwo from "@/assets/images/home/vision/vision-2.jpeg";
import visionThree from "@/assets/images/home/vision/vision-3.jpeg";
import visionFour from "@/assets/images/home/vision/vision-4.jpeg";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  const content = [
    {
      title: "Glasses",
      id: "#glasses",
      description:
        "Bring your vision to your AI agent to boost productivity for everyday tasks",
      src: visionOne,
    },
    {
      title: "Running",
      id: "#running",
      description:
        "Vision AI can help motivate you reach short and long term goals in fitness",
      src: visionTwo,
    },
    {
      title: "Shopping",
      id: "#shopping",
      description:
        "Vision AI can suggest what can be the best food pairings for newer recipes and better diets",
      src: visionThree,
    },
    {
      title: "Cooking",
      id: "#cooking",
      description:
        "Vision AI aids in getting just the right spice! Let it cook…",
      src: visionFour,
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <div
      className={`fixed top-0 inset-x-0 mx-auto max-w-[80rem] z-50 transition-all duration-300 before:absolute before:inset-0 before:w-full before:h-full before:backdrop-blur-3xl text-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="relative">
          <Image
            className="max-w-[5rem] h-full"
            width={1243}
            height={496}
            src={logo.src}
            alt="logo"
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Rediscover">
          <div className="text-sm grid sm:grid-cols-2 gap-4 sm:gap-10 p-4">
            {content.map((item, index) => (
              <ProductItem
                key={index}
                title={item.title}
                href={item.id}
                src={item.src.src}
                description="Prepare for tech interviews like never before."
              />
            ))}
          </div>
        </MenuItem>
        <Button className="text-lg">Pre-order</Button>
      </Menu>
    </div>
  );
}

"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Button from "@components/ui/moving-border";

import { useScroll, useMotionValueEvent } from "framer-motion";

import { Menu, MenuItem, ProductItem } from "@components/ui/navbar-menu";

import cardImg from "@/assets/images/card.jpg";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

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
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="#"
              src={cardImg.src}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="#"
              src={cardImg.src}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="#"
              src={cardImg.src}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="#"
              src={cardImg.src}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <Button className="text-lg">Pre-order</Button>
      </Menu>
    </div>
  );
}

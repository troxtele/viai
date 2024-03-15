"use client";
import React, { useState } from "react";

import Link from "next/link";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@components/ui/navbar-menu";

import cardImg from "@/assets/images/card.jpg";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
        }}
      >
        <Nav
          className={`top-2 transition-all duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>
    </AnimatePresence>
  );
}

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#">Logo</Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="#"
              src={cardImg}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="#"
              src={cardImg}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="#"
              src={cardImg}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="#"
              src={cardImg}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <Link href="#">Pre-order</Link>
      </Menu>
    </div>
  );
}

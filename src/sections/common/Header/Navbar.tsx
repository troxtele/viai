"use client";
import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

import Button from "@components/ui/moving-border";

import { useScroll, useMotionValueEvent } from "framer-motion";

import { Menu, MenuItem, ProductItem } from "@components/ui/navbar-menu";

import logo from "@/assets/images/logo.png";

import visionOne from "@/assets/images/home/vision/vision-1.gif";
import visionTwo from "@/assets/images/home/vision/vision-2.jpeg";
import visionThree from "@/assets/images/home/vision/vision-3.jpeg";
import visionFour from "@/assets/images/home/vision/vision-4.jpeg";

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [language, setLanguage] = useState<string>(locale);
  const [dropdownShow, setDropdownShow] = useState(false);
  const t = useTranslations();

  // const changeLanguage = (lng: string) => {
  //   console.log(lng);
  //   i18n.changeLanguage(lng);
  // };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownShow &&
        !(event.target as Element).closest(".language-dropdown")
      ) {
        setDropdownShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownShow]);

  useEffect(() => {
    if (language !== locale) {
      document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    }
  }, [language]);

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
    <nav className="fixed top-4 left-0 right-0 m-auto z-50 px-4 sm:px-10">
      <div
        className={` z-50 transition-all duration-300 text-xl flex justify-between max-w-[80rem] m-auto border rounded-full inset-x-0 py-2.5 px-2.5 sm:px-6 bg-black/80 border-white/[0.1] shadow-input items-center gap-4 w-full before:absolute before:inset-0 before:w-full before:h-full before:backdrop-blur-xl before:rounded-full ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Link href="/" className="relative flex justify-center items-center">
          <Image
            className="max-w-[5rem]"
            width={1243}
            height={496}
            src={logo.src}
            alt="logo"
          />
        </Link>

        <div>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Rediscover">
              <div className="text-sm grid sm:grid-cols-2 gap-4 sm:gap-10 p-4">
                {content.map((item, index) => (
                  <ProductItem
                    key={index}
                    title={item.title}
                    href={item.id}
                    src={item.src.src}
                    description={item.description}
                  />
                ))}
              </div>
            </MenuItem>
          </Menu>
        </div>

        <div className="wrap flex gap-2 items-center">
          <div className="relative dropdown text-base">
            <div
              onClick={() => setDropdownShow(!dropdownShow)}
              className="flex gap-1.5 items-center py-1 px-2 border rounded-lg border-white/40 cursor-pointer w-[7.5rem]"
            >
              {" "}
              <GrLanguage /> {language === "en" ? "English" : "العربية"}{" "}
              <IoIosArrowDown className="absolute right-1.5 top-1/2 transform -translate-y-1/2" />
            </div>
            <div
              className={`options absolute left-0 bg-black rounded-lg border border-white/40 w-full transition-all duration-300 overflow-hidden ${
                dropdownShow ? "top-[130%] opacity-100" : "top-[140%] opacity-0"
              }`}
            >
              <div
                onClick={() => setLanguage("en")}
                className="py-1 cursor-pointer hover:bg-white/20 px-4 transition-all duration-300"
              >
                English
              </div>
              <div
                onClick={() => setLanguage("ar")}
                className="py-1 cursor-pointer hover:bg-white/20 px-4 transition-all duration-300"
              >
                العربية
              </div>
            </div>
          </div>

          <Button className="text-lg">{t("header.preorder")}</Button>
        </div>
      </div>
    </nav>
  );
}

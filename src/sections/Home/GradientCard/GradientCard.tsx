"use client";
import React from "react";
import { BackgroundGradient } from "@components/ui/background-gradient";
import { useTranslations } from "next-intl";
import lensOne from "@/assets/images/lens/lens-1.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function GradientCard() {
  const t = useTranslations();
  return (
    <section className="">
      <div className="container">
        <div className="wrapper pt-20 pb-24 flex gap-12 flex-wrap justify-center items-center">
          <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-zinc-900">
              <Image
                src={lensOne}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain rounded-lg"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                {t("gradientCard.title")}
              </p>

              <p className="text-sm text-neutral-400 min-h-[100px]">
                {t("gradientCard.desc")}
              </p>
              <Link
                href="/preorder"
                className="rounded-full px-4 py-3 text-white flex items-center justify-center space-x-1 mt-4 text-sm font-bold bg-zinc-800 hover:bg-zinc-200 hover:text-zinc-800 transition-all duration-300 bgGradientBtn"
              >
                <span>{t("gradientCard.button.text")}</span>
                <span className="bg-zinc-700 rounded-full text-[0.75rem] px-2 py-0 text-white transition-all duration-300 price">
                  {t("gradientCard.button.price")}
                </span>
              </Link>
            </BackgroundGradient>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

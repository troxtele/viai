"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@components/ui/lamp";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";
import { useTranslations } from "next-intl";

const words = "But one more thing";
export default function Lamp() {
  const t = useTranslations();

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          <TextGenerateEffect words={t("device.lamp")} />
        </motion.h1>
      </LampContainer>
    </>
  );
}

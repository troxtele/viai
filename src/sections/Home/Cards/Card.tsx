"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@components/ui/3d-card";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";
import Link from "next/link";

export function Card({
  image,
  title,
  textEffect,
  description,
  linkPage,
  signup,
}: CardType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.1] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-white">
          {title} <TextGenerateEffect words={textEffect} />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 "
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={linkPage}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            href={signup}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

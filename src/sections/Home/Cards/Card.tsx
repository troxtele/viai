"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@components/ui/3d-card";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";

type CardType = {
  title: string;
  description: string;
  image: any; // replace 'any' with the actual type of your image
};

export function Card({ image, title, description }: CardType) {
  return (
    <CardContainer className="inter-var self-start">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.1] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-white">
          <TextGenerateEffect words={title} />
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
      </CardBody>
    </CardContainer>
  );
}

import React from "react";
import { Card } from "./Card";

import { useTranslations } from "next-intl";

import cardOne from "@/assets/images/home/cards/card-1.jpeg";
import cardTwo from "@/assets/images/home/cards/card-2.jpeg";
import cardThree from "@/assets/images/home/cards/card-3.jpeg";

type CardType = {
  title: string;
  description: string;
  image: any; // replace 'any' with the actual type of your image
};

export default function Cards() {
  const t = useTranslations();

  const card: CardType[] = [
    {
      title: t("cards.one.title"),
      description: t("cards.one.desc"),
      image: cardOne,
    },
    {
      title: t("cards.two.title"),
      description: t("cards.two.desc"),
      image: cardTwo,
    },
    {
      title: t("cards.three.title"),
      description: t("cards.three.desc"),
      image: cardThree,
    },
  ];
  return (
    <section className="pt-6 sm:pt-20">
      <div className="container">
        <div className="heading text-center text-4xl font-bold">
          <h2>{t("cards.title")}</h2>
        </div>
        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
          {card.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

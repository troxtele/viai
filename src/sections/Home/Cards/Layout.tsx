import React from "react";
import { Card } from "./Card";

import cardImg from "@/assets/images/card.jpg";

type CardType = {
  title: string;
  description: string;
  image: any; // replace 'any' with the actual type of your image
};

const card: CardType[] = [
  {
    title: "See clearly with Microoled Display",
    description: "Powered by Activelook",
    image: cardImg,
  },
  {
    title: "Frames for premium comfort",
    description:
      "Can be used while on a jog in the park or sitting at the desk. With no wires to bother you!",
    image: cardImg,
  },
  {
    title: "Prompt Vision AI with instant snapshots",
    description:
      "Let your AI agent see what you see to help you instantaneously",
    image: cardImg,
  },
];

export default function Cards() {
  return (
    <section className="pt-6 sm:pt-20">
      <div className="container">
        <div className="heading text-center text-4xl font-bold">
          <h2>Cards</h2>
        </div>
        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
          {card.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

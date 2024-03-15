import React from "react";
import { Card } from "./Card";

import cardImg from "@/assets/images/card.jpg";

const card: CardType[] = [
  {
    title: "Display module image and",
    textEffect: "See clearly with Microoled Display",
    description: "Powered by Activelook",
    linkPage: "#",
    signup: "#",
    image: cardImg,
  },
  {
    title: "Frames of the glasses image and",
    textEffect: "Frames for premium comfort",
    description:
      "Can be used while on a jog in the park or sitting at the desk. With no wires to bother you!",
    linkPage: "#",
    signup: "#",
    image: cardImg,
  },
  {
    title: "Camera on the glasses and",
    textEffect: "Prompt Vision AI with instant snapshots",
    description:
      "Let your AI agent see what you see to help you instantaneously",
    linkPage: "#",
    signup: "#",
    image: cardImg,
  },
];

export default function Cards() {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="heading text-center text-4xl font-bold">
          <h2>Cards</h2>
        </div>
        <div className="cards grid grid-cols-3 gap-3">
          {card.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

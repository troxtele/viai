"use client";
import React from "react";
import { SparklesCore } from "@components/ui/sparkles";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";
const words = "Vision AI welcomes you to the future";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden rounded-md pt-44">
      <div className="container">
        <div className="wrapper flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-[50rem] font-bold text-center text-white relative z-20">
            <TextGenerateEffect words={words} />
          </h1>
          <div className="w-[50rem] h-40 relative mt-6">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

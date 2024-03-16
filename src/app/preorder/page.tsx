"use client";

import Navbar from "@/sections/common/Header/Navbar";
import Hero from "@/sections/Preorder/Hero/Hero";
import TracingBeam from "@/sections/common/TracingBeam/TracingBeam";

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Navbar />
        <Hero />
      </TracingBeam>
    </>
  );
}

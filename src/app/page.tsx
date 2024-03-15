"use client";

import Navbar from "@/sections/common/Header/Navbar";
import Cards from "@/sections/Home/Cards/Layout";
import Device from "@/sections/Home/Device/Layout";
import Hero from "@/sections/Home/Hero/Hero";
import Vision from "@/sections/Home/Vision/Layout";
import TracingBeam from "@/sections/common/TracingBeam/TracingBeam";

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Navbar />
        <Hero />
        <Vision />
        <Device />
        <Cards />
      </TracingBeam>
    </>
  );
}

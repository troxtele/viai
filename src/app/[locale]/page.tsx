"use client";

import Navbar from "@/sections/common/Header/Navbar";
import Cards from "@/sections/Home/Cards/Layout";
import Device from "@/sections/Home/Device/Layout";
import Hero from "@/sections/Home/Hero/Hero";
import Vision from "@/sections/Home/Vision/Layout";
import Tablet from "@/sections/Home/Tablet/Tablet";

import WaitlistForm from "@/sections/Home/Waitlist/Waitlist";
import TracingBeam from "@/sections/common/TracingBeam/TracingBeam";
import Footer from "@/sections/common/Footer/Footer";
import GradientCard from "@/sections/Home/GradientCard/GradientCard";


export default function Home() {
  return (
    <>
      <TracingBeam>
        <Navbar />
        <Hero />
        <Vision />
        <Device />
        <Cards />
        <Tablet />
        <GradientCard />
        <WaitlistForm />
        <Footer />
      </TracingBeam>
    </>
  );
}

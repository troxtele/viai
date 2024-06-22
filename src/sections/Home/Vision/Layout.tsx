"use client";
import { useRef, useEffect } from "react";
import { StickyScroll } from "@components/ui/sticky-scroll-reveal";
import Image from "next/image";

import { useTranslations } from "next-intl";

import visionOne from "@/assets/images/home/vision/vision-1.gif";
import visionThree from "@/assets/images/home/vision/vision-3.jpeg";
import visionFour from "@/assets/images/home/vision/vision-4.jpeg";

export default function Vision() {
  const videoRef = useRef(null);

  const t = useTranslations();

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current) {
        const videoElement = videoRef.current as HTMLVideoElement;
        if (videoElement) {
          videoElement.muted = true;
          videoElement.play().catch((error) => {
            console.error("Autoplay failed:", error);
          });
        }
      }
    }
  }, []);

  const content = [
    {
      title: "Glasses",
      id: "glasses",
      description: t("vision.one"),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={visionOne}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running",
      id: "running",
      description: t("vision.two"),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          {" "}
          <video
            className="h-full w-full object-cover video"
            ref={videoRef}
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
          >
            <source src="/video/vision-2.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      ),
    },
    {
      title: "Shopping",
      id: "shopping",
      description: t("vision.three"),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={visionThree}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Cooking",
      id: "cooking",
      description: t("vision.four"),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={visionFour}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <section>
      <StickyScroll content={content} />
    </section>
  );
}

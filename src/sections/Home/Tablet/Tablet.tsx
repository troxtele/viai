"use client";
import { useRef, useEffect } from "react";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { useTranslations } from "next-intl";

export default function Tablet() {
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

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              {t("tablet.pera")} <br />
              <span className="text-4xl md:text-7xl font-bold mt-1 leading-none">
                {t("tablet.title")}
              </span>
            </h1>
          </>
        }
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover video"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source src="/video/glass.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </ContainerScroll>
    </div>
  );
}

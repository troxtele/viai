import Image from "next/image";

import "./style.css";

// Import images
import glassOne from "@/assets/images/preorder/glass-1.jpeg";
import glassTwo from "@/assets/images/preorder/glass-2.jpeg";
import glassThree from "@/assets/images/preorder/glass-3.jpeg";
import glassFour from "@/assets/images/preorder/glass-4.jpeg";

const images = [glassOne, glassTwo, glassThree, glassFour];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const t = useTranslations();

  return (
    <main className="min-h-screen pt-32 preorder text-lg font-semibold text-stone-100">
      <div className="container">
        <div className="wrapper grid md:grid-cols-5 gap-10">
          {/* left */}
          <div className="left md:col-span-3 w-full flex justify-center items-start">
            <div className="slider bg-dark md:border border-white/10 md:px-4 md:rounded-xl overflow-hidden w-screen md:max-w-[45rem] -mx-4 md:mx-0">
              {" "}
              <Swiper
                spaceBetween={5}
                pagination={{
                  clickable: true,
                }}
                autoplay={true}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="w-full "
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-sm overflow-hidden"
                  >
                    <div className="img-wrap flex justify-center items-center">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        alt="glass-image"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* right */}
          <div className="right md:col-span-2 space-y-5">
            <div className="heading space-y-5">
              <h1 className="text-5xl font-bold">{t("preorder.title")}</h1>
              <p>{t("preorder.price")}</p>
            </div>

            <div className="content">
              <p className="pb-4 border-b border-white/30">
                {t("preorder.duration")}
              </p>
              <p className="mt-4">{t("preorder.desc")}</p>

              <div className="selects mt-10 space-y-8">
                <div className="bottom">
                  <div className="btn">
                    <a
                      href="https://buy.stripe.com/eVabKxbum55zePe001"
                      className="text-center text-black bg-white w-full py-2.5 px-4 rounded-full uppercase font-semibold flex justify-center items-center"
                    >
                      {t("preorder.button")}
                    </a>
                  </div>
                  <p className="mt-4">{t("preorder.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

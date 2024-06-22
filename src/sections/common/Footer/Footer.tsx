import React from "react";
import { FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="pt-12 sm:pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="icons flex gap-4 text-3xl">
            <a
              target="_blank"
              className=" hover:text-stone-400 transition-all duration-300"
              href="https://www.instagram.com/viai.ae?igsh=NTc4MTIwNjQ2YQ=="
            >
              <FaInstagram />
            </a>
          </div>

          <div className="texts text-sm text-stone-400 pt-4 space-y-2 text-center">
            <p>{t("footer.desc")}</p>

            <p>{t("footer.right")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

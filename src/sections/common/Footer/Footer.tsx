import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
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
            <a
              target="_blank"
              className=" hover:text-stone-400 transition-all duration-300"
              href="https://www.linkedin.com/company/viai/"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="texts text-sm text-stone-400 pt-4 space-y-2 text-center">
            <p>
              Vision AI to boost the productivity of everyday tasks!
            </p>

            <p>© 2024 VIAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

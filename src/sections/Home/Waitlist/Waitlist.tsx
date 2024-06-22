"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@components/ui/background-beams";
import { useTranslations } from "next-intl";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <>
      <div className="h-[40rem] mt-6 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4 relative">
          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-4">
            {t("waitlist.title")}
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t("waitlist.input.placeholder")}
              value={email}
              className="rounded-lg outline-none border border-neutral-800 focus:ring-2 focus:ring-sky-500 transition-all duration-300 w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 py-3 px-4"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex flex-col justify-center items-center relative z-10">
              <button
                className=" mt-5 text-center text-xl cursor-pointer bg-sky-600 px-8 py-2.5 rounded-lg"
                type="submit"
              >
                {t("waitlist.button")}
              </button>

              <p
                className={`mt-2.5 text-center ${
                  message ? "opacity-100" : "opacity-0"
                }`}
              >
                {message && message}
              </p>
            </div>
          </form>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default WaitlistForm;

"use client";
import { getImagePath } from "@/lib/utils/imagePath";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <section className="relative pb-0" id="home-section">
      {/* Removed background image */}
      <div className="overflow-hidden">
        <div className="container lg:pt-20 pt-10 relative">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 my-16 items-center">

              {/* TEXT SECTION */}
              <div className="lg:col-span-7 mb-16 flex flex-col items-center lg:items-start">
                <h1 className="mb-5 text-center lg:text-start sm:leading-snug leading-tight capitalize">
                  Private, elegant and <br /> built with trust
                </h1>

                <p className="text-white font-normal mb-10 max-w-[70%] text-center lg:text-start lg:mx-0 mx-auto capitalize">
                  HelloChats – Bringing conversations to life with zero distractions.
                </p>

                <div className="flex align-middle justify-center lg:justify-start">
                  <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6 cursor-pointer">
                    Get Started
                  </button>

                  <button
                    onClick={openModal}
                    className="bg-transparent flex justify-center items-center text-white cursor-pointer"
                  >
                    <Image
                      src={getImagePath("/images/banner/playbutton.svg")}
                      alt="play"
                      className="mr-3"
                      width={47}
                      height={47}
                    />
                    <span className="hover:text-primary">How It Works</span>
                  </button>
                </div>
              </div>

              {/* REMOVED BANNER IMAGE SECTION */}
              {/* This keeps only the text centered & clean */}

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;

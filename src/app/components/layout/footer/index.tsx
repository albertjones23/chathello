"use client";

import { Footerlinkdata, Sociallinkdata } from "@/lib/data/pageData";
import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-body-bg relative pt-10">
      <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>

      <div className="container relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 md:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          
          {/* LOGO + DESCRIPTION */}
          <div className="lg:col-span-6 sm:col-span-2">
            <img
              className="block h-12 mb-4"
              src={"/images/logo/logo.svg"
}
              alt="HelloChats Logo"
            />

            <p className="text-white/60 text-sm font-normal max-w-96 leading-7 mb-7">
              HelloChats is a fast, private, and secure messaging app designed 
              to keep your conversations protected with end-to-end encryption  
              and an elegant, distraction-free interface.
            </p>

            <div className="flex gap-4">
              {Sociallinkdata.map((items, i) => (
                <Link
                  key={i}
                  href={items.href}
                  target="_blank"
                  className="hover:opacity-70"
                >
                  <img src={items.imgsrc} alt="social-icon" />
                </Link>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="group relative lg:col-span-2">
            <p className="text-white text-xl font-medium mb-9">Useful Links</p>
            <ul>
              {Footerlinkdata.map((link, i) => (
                <li key={i} className="mb-5">
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm font-normal hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div className="lg:col-span-4">
            <p className="text-white text-xl font-medium mb-9">Contact Us</p>

         

            <Link
              href={"mailto:support@hellochats.app"}
              className="text-white/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit"
            >
              <Image
                src={getImagePath("/images/footer/email.svg")}
                alt="email-icon"
                width={20}
                height={20}
              />
              support@hellochats.net
            </Link>

            <div className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={getImagePath("/images/footer/address.svg")}
                alt="address-icon"
                width={20}
                height={20}
              />
              Sofia, Bulgaria
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="py-8 px-4 border-t border-t-lightblue">
        <p className="text-center text-white">
          © {new Date().getFullYear()} HelloChats — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

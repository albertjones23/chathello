"use client";

import { Faqdata } from "@/lib/data/pageData";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Icon } from "@iconify/react";

const Faq = () => {
  return (
    <section id="faq-section" className="scroll-mt-20 overflow-hidden">
      <div className="container relative z-10">
        
        <h2 className="font-bold text-center mb-5">Frequently Asked Questions</h2>

        <p className="text-center lg:text-lg font-normal text-lightblue max-w-2xl mx-auto">
          Learn more about how HelloChats protects your privacy, secures your
          conversations, and keeps communication simple and safe.
        </p>

        <div className="mt-12 w-full px-4">
          {Faqdata?.map((items, i) => (
            <div
              key={i}
              className="mx-auto w-full max-w-5xl rounded-2xl bg-darkmode py-8 px-6 mb-5"
            >
              <Disclosure>
                {({ open }) => (
                  <div> {/* FIX: Removed React.Fragment */}
                    <DisclosureButton className="flex w-full justify-between rounded-lg text-lightpurple sm:px-4 sm:py-2 text-left md:text-2xl font-medium cursor-pointer">
                      <span>{items.heading}</span>
                      <Icon
                        icon="tabler:chevron-up"
                        className={`${open ? "rotate-180 transform" : ""} text-2xl text-primary`}
                      />
                    </DisclosureButton>

                    <DisclosurePanel className="px-4 pt-4 pb-2 md:text-lg text-lightblue font-normal">
                      {items.subheading}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;

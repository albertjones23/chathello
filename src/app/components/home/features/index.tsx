"use client";
import { Featuresdata } from "@/lib/data/pageData";

const Features = () => {
  return (
    <section id="features-section" className="scroll-mt-20">
      <div className="container relative">
        <div className="bg-linear-to-r from-primary to-secondary absolute w-full h-full top-0 -left-1/4 blur-390"></div>

        <div className="gap-x-4 gap-y-4 relative z-10">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-primary text-base sm:text-lg font-semibold mb-4 text-center">
              FEATURES
            </p>

            <h2 className="font-semibold mb-6 text-center max-w-2xl mx-auto sm:leading-14 capitalize">
              Private, Secure & Built for Real Conversations
            </h2>

            <p className="lg:text-lg font-normal text-lightpurple text-center max-w-2xl mx-auto">
              HelloChats gives you a clean, private, and encrypted communication
              experience — with anonymous accounts, secure media sharing, and
              distraction-free messaging.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-4">
            {Featuresdata?.map((items, i) => (
              <div
                key={i}
                className="bg-darkmode p-8 rounded-lg flex flex-col gap-3"
              >
                <h5 className="text-white/80 text-lg font-medium capitalize">
                  {items.heading}
                </h5>

                <p className="text-white/40 text-sm font-normal">
                  {items.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

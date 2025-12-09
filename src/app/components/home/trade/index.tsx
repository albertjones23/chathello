import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";

const Trade = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-1/2 blur-390"></div>

        <div className="flex flex-col items-center text-center gap-8 relative z-10 py-16">
          {/* Title */}
          <h2 className="font-semibold max-w-2xl leading-14">
            Chat Anywhere, Anytime
          </h2>

          {/* Subtitle */}
          <p className="lg:text-lg font-normal text-lightblue max-w-xl">
            Stay connected wherever you go. HelloChats lets you send messages, 
            make HD calls, and share media securely — all on your Android 
            device with complete privacy and zero distractions.
          </p>

          {/* Android Download Icon */}
          <div className="flex justify-center">
            <Image
              src={getImagePath("/images/trade/android.svg")}
              alt="android-image"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;

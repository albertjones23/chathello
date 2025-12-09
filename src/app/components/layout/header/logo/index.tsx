import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo */}
      <div className="relative h-10 w-[40px]">
        <Image
          src={getImagePath("/images/logo/logo.svg")}
          alt="logo"
          fill
          className="object-contain"
          quality={100}
          priority
        />
      </div>

      {/* App Name */}
      <span className="text-white text-xl font-semibold tracking-wide">
        HelloChats
      </span>
    </Link>
  );
};

export default Logo;

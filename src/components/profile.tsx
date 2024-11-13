import React from "react";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
// import { Moon, Sun } from "lucide-react";

export default function BackgroundBeamsWithCollisionDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      id="profile"
      className="flex flex-col h-[60%] md:flex-row w-full items-center justify-between bg-slate-300 dark:bg-gray-800 transition-colors p-4 md:p-0"
    >
      {/* Mobile Theme Toggle */}

      {/* Content Section */}
      <div className="w-full md:w-2/3 mx-3 lg:mx-5 mt-20 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-sans tracking-tight">
          Hey there 👋
        </h2>
        <div className="py-4">
          <p className="text-lg md:text-xl font-medium text-black dark:text-[#ffeffe] ">
            I&apos;m Utkarsh Sharma, a full stack developer from Agra. I&apos;ve
            built a range of projects, including blogging sites, eCommerce
            platforms, and application tracking systems, with a focus on clean,
            user-friendly interfaces.
          </p>
        </div>
      </div>

      {/* Desktop SVG Section - Hidden on Mobile */}
      <div className="hidden relative w-1/3 h-lvh lg:scale-75 laptop:translate-y-8 lg:block  xl:scale-100 2xl:mt-72 xl:translate-y-12 laptop-lg:translate-y-0  laptop-2xl:-translate-y-5  desktop:-translate-y-20 desktop-lg:translate-y-10 desktop-xl:scale-110 desktop-xl:translate-y-56">
        <div
          className="absolute top-10 z-50 cursor-pointer"
          onClick={toggleTheme}
        >
          <Image src="/bulb/setup.svg" alt="" width={420} height={550} />
        </div>
        {theme === "dark" && (
          <div className="absolute lg:top-[100px] laptop-md:scale-[0.95] laptop-md:translate-y-6 laptop-md:translate-x-1 laptop-lg:scale-100 laptop-lg:translate-x-4 laptop-lg:translate-y-9 lg:left-1">
            <Image src="/bulb/beam.svg" alt="beam" width={380} height={350} />
          </div>
        )}
      </div>
    </div>
  );
}

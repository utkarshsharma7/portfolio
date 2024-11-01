import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function BackgroundBeamsWithCollisionDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-auto md:h-96 py-6 md:py-10">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col md:flex-row w-full items-center justify-between bg-gray-200 dark:bg-gray-800 transition-colors p-4 md:p-0">
          {/* Mobile Theme Toggle */}

          {/* Content Section */}
          <div className="w-full md:w-2/3 mx-3 md:mx-5">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-sans tracking-tight">
              Hey there 👋
            </h2>
            <div className="py-4">
              <p className="text-lg md:text-xl font-medium">
                I am Utkarsh Sharma, a full stack developer based in Agra. I
                have worked on a wide range of full stack projects, from
                Blogging sites to eCommerce platforms and Application tracking
                systems, with a focus on creating clean, well-crafted interfaces
                that not only look great but also provide a seamless user
                experience.
              </p>
            </div>
          </div>

          {/* Desktop SVG Section - Hidden on Mobile */}
          <div
            className="hidden md:block relative w-1/3 h-screen"
            onClick={toggleTheme}
          >
            <div className="absolute top-10 z-50">
              <Image src="/bulb/setup.svg" alt="" width={420} height={550} />
            </div>
            {theme === "dark" && (
              <div className="absolute top-32 left-3">
                <Image
                  src="/bulb/beam.svg"
                  alt="beam"
                  width={400}
                  height={370}
                />
              </div>
            )}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

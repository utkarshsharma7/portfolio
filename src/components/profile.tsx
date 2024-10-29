import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import setup from "../../public/bulb/setup.svg";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex w-full items-center justify-between">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold text-black dark:text-white font-sans tracking-tight">
            Hey there 👋
          </h2>
          <div className="py-4">
            <p className="text-xl font-medium">
              I am Utkarsh Sharma, a full stack developer based in Agra. I have
              worked on a wide range of full stack projects, from Blogging sites
              to eCommerce platforms and Application tracking systems, with a
              focus on creating clean, well-crafted interfaces that not only
              look great but also provide a seamless user experience.
            </p>
          </div>
        </div>
        <div className="relative w-1/3 h-screen">
          <div className="absolute top-10 z-50">
            <Image src="/bulb/setup.svg" alt="" width={400} height={400} />
          </div>
          <div className="absolute top-32 left-3">
            <Image src="/bulb/beam.svg" alt="beam" width={380} height={350} />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

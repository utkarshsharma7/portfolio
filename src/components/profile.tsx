import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import bulb from "../../public/bulb/bulb.svg";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex w-full">
        <div className="w-2/3">
          <h2 className="text-lg z-20 mx-10 md:text-4xl lg:text-2xl font-bold text-black dark:text-white font-sans tracking-tight">
            Hey there 👋
            <div className="w-full ">
              <div className="py-4">
                <p className="text-xl font-medium">
                  I am Utkarsh Sharma, a full stack developer based in Agra. I
                  have worked on a wide range of full stack projects, from
                  Blogging sites to eCommerce platforms and Application tracking
                  systems, with a focus on creating clean, well-crafted
                  interfaces that not only look great but also provide a
                  seamless user experience.
                </p>
                <br />
                {/* <span className="text-lg">Full stack developer</span> */}
              </div>
            </div>
          </h2>
        </div>
        <div className="relative">
          {/* <img src="" alt="" /> */}
          <div className="absolute top-5 left-2">
            {" "}
            <Image src="/bulb/bulb.svg" alt="" width={100} height={100} />
            {/* <Image src="/holder" alt="" width={20} height={20} />
            <Image src="/holder" alt="" width={20} height={20} />
            <Image src="/holder" alt="" width={20} height={20} /> */}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

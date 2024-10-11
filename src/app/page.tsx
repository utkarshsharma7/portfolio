"use client";
import { SignupFormDemo } from "@/components/contact";
import { TimelineDemo } from "@/components/experience";
import { BackgroundBeamsWithCollisionDemo } from "@/components/profile";
import { SidebarDemo } from "@/components/Sidebar";
import { AnimatedTooltipPreview } from "@/components/skills";
import { FloatingDockDemo } from "@/components/socials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative w-full h-screen">
      {/* Sidebar */}
      <div className="h-screen  bg-gray-800">
        <SidebarDemo />
      </div>

      {/* Main Content */}
      <div className="ml-1/4 w-full bg-slate-600 overflow-y-auto h-full">
        <BackgroundBeamsWithCollisionDemo />
        <TimelineDemo />
        <AnimatedTooltipPreview />
        <div className="absolute right-5 top-8">
          {" "}
          <FloatingDockDemo />
        </div>
        <SignupFormDemo />
      </div>
    </div>
  );
}

"use client";

import { SignupFormDemo } from "@/components/contact";
import { TimelineDemo } from "@/components/experience";
import BackgroundBeamsWithCollisionDemo from "@/components/profile";
import { ExpandableCardDemo } from "@/components/projects";
import { SidebarDemo } from "@/components/Sidebar";
import { AnimatedTooltipPreview } from "@/components/skills";
import { FloatingDockDemo } from "@/components/socials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Floating Dock - Fixed position */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDockDemo />
      </div>

      {/* Main Layout */}
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div className="h-screen bg-gray-800">
          <SidebarDemo />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-slate-600 overflow-y-auto h-full">
          <BackgroundBeamsWithCollisionDemo />
          <TimelineDemo />
          <ExpandableCardDemo />
          <AnimatedTooltipPreview />
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
}

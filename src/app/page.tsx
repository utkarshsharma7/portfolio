"use client";

import { SignupFormDemo } from "@/components/contact";
import { TimelineDemo } from "@/components/experience";
import BackgroundBeamsWithCollisionDemo from "@/components/profile";
import { ExpandableCardDemo } from "@/components/projects";
import { SidebarDemo } from "@/components/Sidebar";
import { AnimatedTooltipPreview } from "@/components/skills";
import { FloatingDockDemo } from "@/components/socials";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative h-full">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Floating Dock - Responsive positioning */}

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
      <div className="fixed right-4 lg:top-5 lg:left-1/2 lg:-translate-x-1/2 z-50">
        <FloatingDockDemo />
      </div>
    </div>
  );
}

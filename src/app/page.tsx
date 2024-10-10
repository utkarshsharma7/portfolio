import { BackgroundBeamsWithCollisionDemo } from "@/components/profile";
import { SidebarDemo } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex">
      <div className="">
        <SidebarDemo />
      </div>
      <div className="bg-slate-600 w-full">
        <BackgroundBeamsWithCollisionDemo />
      </div>
    </div>
  );
}

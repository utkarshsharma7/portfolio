// // components/Sidebar.tsx
// import React from "react";
// import { User, Briefcase, Code, Settings, Mail } from "lucide-react";

// const Sidebar: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center w-16 h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out hover:w-28">
//       <div className="flex flex-col items-center mt-4 group hover:text-opacity-100">
//         <SidebarItem icon={<User />} title="Profile" />
//         <SidebarItem icon={<Briefcase />} title="Experience" />
//         <SidebarItem icon={<Code />} title="Projects" />
//         <SidebarItem icon={<Settings />} title="Skills" />
//         <SidebarItem icon={<Mail />} title="Contact" />
//       </div>
//     </div>
//   );
// };

// const SidebarItem: React.FC<{ icon: React.ReactNode; title: string }> = ({
//   icon,
//   title,
// }) => {
//   return (
//     <button className="flex flex-col w-full items-center my-4" onClick={}>
//       <div className="text-2xl">{icon}</div>
//       <span className="mt-1 text-sm opacity-0 w-full transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100">
//         {title}
//       </span>
//     </button>
//   );
// };

// export default Sidebar;
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";
import {
  IconBriefcase2,
  IconUserCircle,
  IconCode,
  IconPencilPlus,
  IconPhone,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function SidebarDemo() {
  const links = [
    {
      label: "Profile",
      href: "#profile", // Anchor link to the section
      icon: (
        <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Experience",
      href: "#experience", // Anchor link to the section
      icon: (
        <IconBriefcase2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "#projects", // Anchor link to the section
      icon: (
        <IconPencilPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Skills",
      href: "#skills", // Anchor link to the section
      icon: (
        <IconCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "#contact", // Anchor link to the section
      icon: (
        <IconPhone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 items-center justify-center flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 items-center">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className=" flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

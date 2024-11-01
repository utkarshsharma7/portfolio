"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import bulb from "../../public/bulb/bulb.svg";

const people = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image: "/html 5.png",
  },
  {
    id: 2,
    name: "CSS",
    designation: "",
    image: "/css.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "",
    image: "/js.png",
  },
  {
    id: 4,
    name: "TypeScript",
    designation: "",
    image: "/typescript.png",
  },
  {
    id: 5,
    name: "ReactJS",
    designation: "",
    image: "/react.png",
  },
  {
    id: 6,
    name: "NodeJS",
    designation: "",
    image: "/node.webp",
  },
  {
    id: 7,
    name: "ExpressJS",
    designation: "",
    image: "/express.png",
  },
  {
    id: 8,
    name: "MongoDB",
    designation: "",
    image: "/mongo.svg",
  },
  {
    id: 9,
    name: "NextJS",
    designation: "",
    image: "/nexjs.png",
  },
  {
    id: 10,
    name: "PostgreSQL",
    designation: "",
    image: "/pg.png",
  },
  {
    id: 11,
    name: "Prisma",
    designation: "",
    image: "/prisma.svg",
  },
  {
    id: 12,
    name: "Sequelize",
    designation: "",
    image: "/sequelize.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center justify-center my-10 py-10 bg-gray-800 mb-10 w-full">
      <h1 className="text-md md:text-2xl dark:text-gray-300 text-gray-900 text-center font-semibold mb-10">
        Also, coming to my tech stack I'm proficient in{" "}
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

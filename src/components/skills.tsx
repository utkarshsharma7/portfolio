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
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

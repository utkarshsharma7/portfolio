"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div id="projects" className="py-10">
      <h1 className="text-md md:text-2xl dark:text-gray-300 text-gray-900 text-center font-semibold">
        What I have Built
      </h1>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-8 z-50 right-4 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[800px] h-[100%] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative w-full"
              >
                <Image
                  priority
                  width={850}
                  height={450}
                  src={active.src}
                  alt={active.title}
                  className="w-full aspect-[16/9] sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                  quality={95}
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 py-2 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-[90%] md:w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-2 md:px-4 py-4 flex flex-col dark:bg-slate-600 bg-slate-200 hover:bg-neutral-100/50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 p-2 md:p-4 flex-col mx-auto w-[90%] md:w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="relative w-[90%] mx-auto md:w-full"
              >
                <Image
                  width={630}
                  height={338}
                  src={card.src}
                  alt={card.title}
                  className="rounded-lg w-full aspect-[16/9] object-cover"
                  quality={90}
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 pb-4 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  //   {
  //     description: "Lana Del Rey",
  //     title: "Saas Application",
  //     src: "/projects/saas.JPG",
  //     ctaText: "Visit",
  //     ctaLink: "https://ui.aceternity.com/templates",
  //     content: () => {
  //       return (
  //         <p>
  //           Lana Del Rey, an iconic American singer-songwriter, is celebrated for
  //           her melancholic and cinematic music style. Born Elizabeth Woolridge
  //           Grant in New York City, she has captivated audiences worldwide with
  //           her haunting voice and introspective lyrics. <br /> <br /> Her songs
  //           often explore themes of tragic romance, glamour, and melancholia,
  //           drawing inspiration from both contemporary and vintage pop culture.
  //           With a career that has seen numerous critically acclaimed albums, Lana
  //           Del Rey has established herself as a unique and influential figure in
  //           the music industry, earning a dedicated fan base and numerous
  //           accolades.
  //         </p>
  //       );
  //     },
  //   },
  {
    description: "Youtube backend with integrated twitter features",
    title: "Youtube Backend",
    src: "/projects/YT+Twitter.JPG",
    ctaText: "Visit",
    ctaLink: "https://github.com/utkarshsharma7/youtube-backend",
    content: () => {
      return (
        <p>
          This dynamic backend project merges YouTube and Twitter features,
          delivering user management with authentication, profile customization,
          watch history, and seamless content creation. Users can upload videos,
          publish tweets, and manage playlists, subscriptions, and comments.
          With real-time analytics, health checks, and content liking, it is a
          full suite for media engagement. Built on Node.js, Express.js,
          MongoDB, and Cloudinary, this project showcases robust functionality
          and scalability, perfect for any media-driven platform.
        </p>
      );
    },
  },
  {
    description: "Upcoming project",
    title: "Jeevanrakshak(Under development)",
    src: "/projects/medicalHistory.JPG",
    // ctaText: "Visit",
    // ctaLink: "https://github.com/utkarshsharma7/hackwithuttarakhand",
    content: () => {
      return (
        <p>
          The Emergency Medical History Access System is a secure, life-saving
          platform designed for critical medical situations. It grants
          healthcare providers rapid access to a patient’s full medical history
          with consent from a designated caretaker. With blockchain-backed
          record integrity, AI-driven risk assessment, and real-time
          notifications, EMHAS enables informed decisions while safeguarding
          patient privacy. Multi-tiered permissions and potential integration
          with wearables keep data current, aiming to streamline emergency care
          and enhance outcomes through faster, accurate, and privacy-conscious
          medical support.
        </p>
      );
    },
  },

  {
    description: "A freelance project for a tour and travels company",
    title: "Tour and Travels",
    src: "/projects/travels.JPG",
    ctaText: "Visit",
    ctaLink: "https://tour-travels-mauve.vercel.app/",
    content: () => {
      return (
        <p>
          The platform includes a user-friendly system where inquiries and
          contact numbers are directly emailed to the admin. An intuitive admin
          dashboard allows for effortless addition of services or tours and
          images can be uploaded without any coding changes, eliminating future
          costs for modifications. Recent packages and plans can be easily
          updated through this dashboard. Additionally, a blog page enables the
          admin to showcase recent tours and share details, making the site
          engaging for visitors.
        </p>
      );
    },
  },
  {
    description: "An e-commerce store",
    title: "Apni-shop",
    src: "/projects/apni-shop.JPG",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Designed and developed an intuitive user interface that allows
          seamless browsing through various item categories and a convenient
          search bar, enabling users to add items to their cart effortlessly.
          The project integrates the secure and user-friendly Stripe payment
          platform for a smooth checkout experience, ensuring enhanced
          transaction security and customer satisfaction. Built using HTML,
          SASS, JavaScript, React.js, Strapi Headless CMS, and Stripe, this
          project redefines online shopping efficiency and user experience.
        </p>
      );
    },
  },
  {
    description: "A Music course website",
    title: "Music School",
    src: "/projects/music.JPG",
    ctaText: "Visit",
    ctaLink: "https://music-school-lemon.vercel.app/",
    content: () => {
      return (
        <p>
          It is a frontend website built with Next.js and TypeScript, featuring
          the Aeternity UI library. Designed for interactivity and aesthetic
          appeal, this project offers an engaging user experience with sleek
          visuals.
        </p>
      );
    },
  },
];

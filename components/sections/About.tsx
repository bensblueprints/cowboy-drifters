"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  "Licensed & Insured Guides",
  "All Equipment Provided",
  "Lunch Included on Full Days",
  "Beginners Welcome",
];

function GoldCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="#FFC425"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0C0A09" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#FAFAF9" }}
          >
            Our Story
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ backgroundColor: "#FFC425" }}
          />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column - Left */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#A8A29E" }}
            >
              Founded in 2013 by lifelong Wyoming natives Jason &amp; Mark
              Hamrick, Cowboy Drifters was born from a deep passion for the
              waters of Central Wyoming. What started as two friends sharing
              their love of fly fishing has grown into one of the most respected
              guide services on the North Platte River.
            </p>

            <p
              className="mt-6 text-base md:text-lg leading-relaxed"
              style={{ color: "#A8A29E" }}
            >
              We provide first-class fly fishing experiences for men, women,
              children, beginners, and seasoned professionals alike. Our guides
              know every bend, riffle, and run on the Grey Reef, Miracle Mile,
              and Fremont Canyon — because these waters are our backyard.
            </p>

            {/* Feature List */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8 space-y-4"
            >
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={featureItem}
                  className="flex items-center gap-3"
                >
                  <GoldCheck />
                  <span
                    className="text-base md:text-lg font-medium"
                    style={{ color: "#FAFAF9" }}
                  >
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image Column - Right */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Gold corner accent - top right */}
            <div
              className="absolute -top-3 -right-3 w-24 h-24 z-10 pointer-events-none"
              style={{
                borderTop: "3px solid #FFC425",
                borderRight: "3px solid #FFC425",
              }}
            />

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/hero.jpg"
                alt="Fly fishing guide holding a trophy brown trout on the North Platte River"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Subtle overlay on image */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,10,9,0.4) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Gold corner accent - bottom left */}
            <div
              className="absolute -bottom-3 -left-3 w-24 h-24 z-10 pointer-events-none"
              style={{
                borderBottom: "3px solid #FFC425",
                borderLeft: "3px solid #FFC425",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

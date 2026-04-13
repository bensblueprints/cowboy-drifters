"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trips = [
  {
    title: "Grey Reef Float",
    description:
      "Drift through 30 miles of world-class trout water. The Grey Reef section of the North Platte produces trophy rainbow and brown trout year-round.",
    image: "/images/bg-desktop.jpg",
  },
  {
    title: "Miracle Mile",
    description:
      "Fish the legendary Miracle Mile where trophy browns over 20 inches are the norm, not the exception. Remote canyon setting with stunning scenery.",
    image: "/images/hero.jpg",
  },
  {
    title: "Fremont Canyon",
    description:
      "Deep canyon walls and crystal-clear water make Fremont Canyon a unique Wyoming fishing experience. Walk-wade and float options available.",
    image: "/images/fishing-hero.jpg",
  },
  {
    title: "Bighorn River",
    description:
      "Journey to Thermopolis for some of the best dry fly fishing in the West. The Bighorn offers incredible hatches and aggressive trout.",
    image: "/images/fishing-river.jpg",
  },
];

export default function Trips() {
  return (
    <section id="trips" className="relative py-24 sm:py-32 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#FAFAF9] tracking-tight">
            Our Guided Trips
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-[#FFC425] rounded-full" />
          <p className="mt-6 text-lg sm:text-xl text-[#A8A29E] max-w-2xl mx-auto font-body">
            Experience Wyoming&apos;s blue ribbon waters with expert local guides
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="group relative bg-[#1C1917] rounded-xl overflow-hidden border border-[#44403C]/50 hover:border-[#FFC425]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-[#FAFAF9] mb-3">
                  {trip.title}
                </h3>
                <p className="text-[#A8A29E] text-sm leading-relaxed font-body mb-5">
                  {trip.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#FFC425] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

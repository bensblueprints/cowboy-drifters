"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Cabin kitchen" },
  { src: "/images/gallery-2.jpg", alt: "Cabin living room" },
  { src: "/images/gallery-3.jpg", alt: "Grey Reef cabin exterior" },
];

const amenities = [
  {
    label: "Fully Equipped Kitchen",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    label: "Full Size Refrigerator",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
      </svg>
    ),
  },
  {
    label: "Stove & Oven",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    label: "Microwave & Coffee Maker",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    label: "Riverside Location",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: "Private Boat Access",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Lodging() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="lodging" className="relative py-24 sm:py-32 bg-[#0C0A09]">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#44403C]/60 to-transparent" />

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
            Grey Reef Lodging
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-[#FFC425] rounded-full" />
          <p className="mt-6 text-lg sm:text-xl text-[#A8A29E] max-w-2xl mx-auto font-body">
            Stay riverside, just steps from world-class fishing
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Description & Amenities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#A8A29E] text-lg leading-relaxed font-body mb-8">
              Our Grey Reef Cabins sit on the banks of the North Platte River,
              just 23 miles southwest of Casper at the Lusby Boat Access. Fall
              asleep to the sounds of the river and wake up steps from some of
              the best trout water in the West.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {amenities.map((amenity, i) => (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#292524]/60 border border-[#44403C]/30"
                >
                  <span className="text-[#FFC425] flex-shrink-0">
                    {amenity.icon}
                  </span>
                  <span className="text-[#FAFAF9] text-sm font-body">
                    {amenity.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#FFC425] text-[#0C0A09] font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FFC425]/90 hover:shadow-lg hover:shadow-[#FFC425]/20 transition-all duration-300 active:scale-95"
            >
              Book Your Stay
            </a>
          </motion.div>

          {/* Right - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#44403C]/50 group">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/30 to-transparent" />
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    activeImage === i
                      ? "border-[#FFC425] shadow-lg shadow-[#FFC425]/10"
                      : "border-[#44403C]/50 opacity-60 hover:opacity-100 hover:border-[#44403C]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/gallery-4.jpg", span: 2 },
  { src: "/images/gallery-5.webp", span: 1 },
  { src: "/images/gallery-6.jpg", span: 1 },
  { src: "/images/gallery-7.jpg", span: 2 },
  { src: "/images/gallery-8.jpg", span: 1 },
  { src: "/images/gallery-9.jpg", span: 1 },
  { src: "/images/gallery-10.jpg", span: 1 },
  { src: "/images/gallery-11.jpg", span: 2 },
  { src: "/images/gallery-12.webp", span: 1 },
  { src: "/images/gallery-13.webp", span: 1 },
  { src: "/images/gallery-14.webp", span: 2 },
  { src: "/images/gallery-15.webp", span: 1 },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0C0A09" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#FFC425" }}
          >
            Gallery
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#FAFAF9" }}
          >
            On The{" "}
            <span style={{ color: "#FFC425" }}>Water</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                gridRow: `span ${img.span}`,
                border: "1px solid #44403C",
              }}
            >
              <Image
                src={img.src}
                alt="Fly fishing on the North Platte River"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,10,9,0.7) 0%, transparent 50%)",
                }}
              />

              {/* Subtle gold border on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 2px rgba(255,196,37,0.3)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

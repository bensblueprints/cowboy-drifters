"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sharon B.",
    location: "Smithville, Missouri",
    text: "Our guides Dain and Brad provided such an amazing experience fishing the Miracle Mile on the North Platte River. Absolutely world-class service.",
  },
  {
    name: "Pete L.",
    location: "Maine",
    text: "Bar none, Cowboy Drifters is top shelf. You won\u2019t find a harder working, more knowledgeable team than Cowboy Drifters.",
  },
  {
    name: "Chris L.",
    location: "Louisville, Colorado",
    text: "The cabin had everything we needed and the float down the Grey Reef was fantastic. Our guide Jack was excellent \u2014 put us on fish all day.",
  },
  {
    name: "Michael S.",
    location: "Denver, Colorado",
    text: "Took a Spring trip with Zach. He jumped in the river to net a trophy brown for me. That\u2019s dedication. I came back and tipped him more.",
  },
  {
    name: "Brian R.",
    location: "",
    text: "Had a fantastic day on the Upper Platte with guide Zach Hutson and his yellow lab sidekick, Stony. Caught incredible fish all day.",
  },
  {
    name: "Justin S.",
    location: "",
    text: "Cowboy Drifters just set themselves apart from the rest! Went out for big fish in November and did not disappoint!",
  },
];

function GoldStar() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#FFC425"
      className="flex-shrink-0"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="absolute -top-2 -left-1 opacity-30"
    >
      <path
        d="M10.8 18.4C7.6 18.4 5.2 16 5.2 12.8C5.2 6.4 10 2 16 2L16.8 4.4C12.8 5.2 10.4 8 10 10.8C10.4 10.4 11.2 10.4 11.6 10.4C14.4 10.4 16.4 12.4 16.4 15.2C16.4 17.2 14 18.4 10.8 18.4ZM28.8 18.4C25.6 18.4 23.2 16 23.2 12.8C23.2 6.4 28 2 34 2L34.8 4.4C30.8 5.2 28.4 8 28 10.8C28.4 10.4 29.2 10.4 29.6 10.4C32.4 10.4 34.4 12.4 34.4 15.2C34.4 17.2 32 18.4 28.8 18.4Z"
        fill="#FFC425"
      />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0C0A09" }}
    >
      {/* Subtle radial gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, #FFC425 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#FAFAF9" }}
          >
            What Our Guests{" "}
            <span style={{ color: "#FFC425" }}>Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <GoldStar key={i} />
            ))}
          </div>
          <p className="text-lg" style={{ color: "#A8A29E" }}>
            5.0 out of 5 on TripAdvisor &mdash; 18 five-star reviews
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: "#1C1917",
                border: "1px solid #44403C",
              }}
            >
              {/* Quote mark */}
              <div className="relative mb-4">
                <QuoteMark />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <GoldStar key={j} />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#FAFAF9" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid #44403C" }}
              >
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#FAFAF9" }}
                >
                  {t.name}
                </p>
                {t.location && (
                  <p className="text-xs mt-0.5" style={{ color: "#A8A29E" }}>
                    {t.location}
                  </p>
                )}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 40px rgba(255,196,37,0.06)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

function CountUp({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionVal.set(target);
    }
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 13, suffix: "+", label: "Years Experience" },
  { value: 5.0, suffix: "★", decimals: 1, label: "TripAdvisor" },
  { value: 0, suffix: "", label: "Blue Ribbon Waters", isText: true },
  { value: 0, suffix: "", label: "All Skill Levels", isText: true },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0C0A09" }}
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/images/bg-desktop.jpg"
          alt="Wyoming fly fishing landscape"
          className="w-full h-[125%] object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(12,10,9,0.95) 0%, rgba(12,10,9,0.6) 40%, rgba(12,10,9,0.15) 100%)",
          opacity: overlayOpacity,
        }}
      />

      {/* Floating Gold Line Accents */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-px z-[2]"
        style={{ backgroundColor: "#FFC425", height: 120 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.25 }}
        transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-[30%] right-[6%] h-px z-[2]"
        style={{ backgroundColor: "#FFC425", width: 80 }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.2 }}
        transition={{ duration: 1.4, delay: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-[28%] left-[5%] h-px z-[2]"
        style={{ backgroundColor: "#FFC425", width: 60 }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-[22%] right-[12%] w-px z-[2]"
        style={{ backgroundColor: "#FFC425", height: 60 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.18 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            style={{ color: "#FAFAF9" }}
          >
            Wyoming&apos;s Premier
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mt-1 md:mt-2"
          >
            <span style={{ color: "#FFC425" }}>Fly Fishing</span>{" "}
            <span style={{ color: "#FAFAF9" }}>Experience</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "#A8A29E" }}
          >
            Guided trips on the legendary Grey Reef, Miracle Mile &amp; North
            Platte River. Expert guides since 2013.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="px-8 py-4 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,196,37,0.3)]"
              style={{ backgroundColor: "#FFC425", color: "#0C0A09" }}
            >
              Book Your Trip
            </a>
            <a
              href="#packages"
              className="px-8 py-4 text-base font-semibold rounded-md border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "#FFC425",
                color: "#FFC425",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,196,37,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View Packages
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 mx-auto max-w-5xl px-6"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x rounded-xl py-6 px-4 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(28,25,23,0.6)",
              borderColor: "rgba(255,196,37,0.1)",
              borderWidth: 1,
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
                style={{
                  borderColor: "rgba(255,196,37,0.15)",
                }}
              >
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#FFC425" }}
                >
                  {stat.isText ? (
                    stat.label === "Blue Ribbon Waters" ? (
                      "Blue Ribbon"
                    ) : (
                      "All Levels"
                    )
                  ) : (
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  )}
                </span>
                <span
                  className="text-xs md:text-sm mt-1 tracking-wide uppercase"
                  style={{ color: "#A8A29E" }}
                >
                  {stat.isText
                    ? stat.label === "Blue Ribbon Waters"
                      ? "Waters"
                      : "Welcome"
                    : stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

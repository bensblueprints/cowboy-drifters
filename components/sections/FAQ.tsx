"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What experience level do I need?",
    answer:
      "None! We welcome complete beginners to seasoned pros. Our guides are patient teachers who will help you learn the fundamentals or refine advanced techniques.",
  },
  {
    question: "What\u2019s included in a guided trip?",
    answer:
      "All fly fishing equipment, flies, and tackle are provided. Full day trips include a streamside lunch. We supply everything \u2014 just bring yourself, sunscreen, and a sense of adventure.",
  },
  {
    question: "What should I bring?",
    answer:
      "Dress in layers appropriate for the season. We recommend polarized sunglasses, sunscreen, a hat, and a valid Wyoming fishing license. We can help you purchase a license if needed.",
  },
  {
    question: "When is the best time to fish?",
    answer:
      "The North Platte fishes well year-round. Spring and fall offer incredible hatches and aggressive feeding. Summer brings dry fly action. Winter produces trophy-sized fish in uncrowded conditions.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-4 weeks in advance, especially during peak season (May-October). However, we can sometimes accommodate last-minute trips.",
  },
  {
    question: "Can I keep the fish I catch?",
    answer:
      "We practice catch and release to preserve these incredible fisheries for future generations. Your guide will help you safely handle and photograph your catches.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFC425"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex-shrink-0"
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function FAQItem({
  faq,
  index,
  openIndex,
  setOpenIndex,
}: {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: "#1C1917",
        border: `1px solid ${isOpen ? "#FFC425" : "#44403C"}`,
      }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span
          className="text-base md:text-lg font-medium pr-4"
          style={{ color: "#FAFAF9" }}
        >
          {faq.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#A8A29E" }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0C0A09" }}
    >
      {/* Subtle bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse, #FFC425 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#FFC425" }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#FAFAF9" }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#FFC425" }}>Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <FAQItem
                faq={faq}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

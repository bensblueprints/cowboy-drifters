"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Half Day Float",
    location: "Grey Reef",
    priceOne: 500,
    priceTwo: 550,
    featured: false,
    includes: [
      "4-5 hours on the water",
      "All flies & tackle provided",
      "Expert guide",
      "Snacks & drinks",
    ],
  },
  {
    name: "Full Day Float",
    location: "Grey Reef",
    priceOne: 550,
    priceTwo: 650,
    featured: true,
    includes: [
      "Full day 8+ hours",
      "Streamside lunch included",
      "All flies & tackle",
      "Expert guide",
      "Photos of your trip",
    ],
  },
  {
    name: "Miracle Mile Full Day",
    location: "Miracle Mile",
    priceOne: 600,
    priceTwo: 700,
    featured: false,
    includes: [
      "Full day on Miracle Mile",
      "Remote canyon access",
      "All flies & tackle",
      "Streamside lunch",
      "Expert guide",
      "Trophy water access",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="rates" className="relative py-24 sm:py-32 bg-[#0C0A09]">
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
            Trips &amp; Rates
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-[#FFC425] rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className={`relative rounded-2xl border p-8 transition-all duration-500 ${
                plan.featured
                  ? "bg-[#1C1917] border-[#FFC425]/60 shadow-[0_0_40px_rgba(255,196,37,0.1)] scale-[1.03] md:scale-105"
                  : "bg-[#1C1917] border-[#44403C]/50 hover:border-[#44403C]"
              }`}
            >
              {/* Best Value Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-5 py-1.5 bg-[#FFC425] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-[#FFC425]/20">
                    Best Value
                  </span>
                </div>
              )}

              {/* Plan Name & Location */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-[#FAFAF9]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[#A8A29E] font-body uppercase tracking-wider">
                  {plan.location}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8 space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-heading font-bold text-[#FFC425]">
                    ${plan.priceOne}
                  </span>
                  <span className="text-[#A8A29E] text-sm font-body">
                    / 1 angler
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-heading font-bold text-[#FAFAF9]">
                    ${plan.priceTwo}
                  </span>
                  <span className="text-[#A8A29E] text-sm font-body">
                    / 2 anglers
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#44403C]/50 mb-6" />

              {/* Includes */}
              <ul className="space-y-3 mb-8">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#A8A29E] font-body"
                  >
                    <svg
                      className="w-5 h-5 text-[#FFC425] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#FFC425] text-[#0C0A09] hover:bg-[#FFC425]/90 hover:shadow-lg hover:shadow-[#FFC425]/20"
                    : "border border-[#FFC425] text-[#FFC425] hover:bg-[#FFC425] hover:text-[#0C0A09]"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 text-[#A8A29E] text-sm font-body italic"
        >
          Evening Sunset Trophy Trips also available. Contact us for custom
          packages.
        </motion.p>
      </div>
    </section>
  );
}

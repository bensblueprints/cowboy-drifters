"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const tripOptions = [
  "Grey Reef Full Day",
  "Grey Reef Half Day",
  "Miracle Mile",
  "Fremont Canyon",
  "Bighorn River",
  "Lodging Only",
  "Custom Package",
];

const inputClasses =
  "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 placeholder:text-[#A8A29E]/50";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
            Contact
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#FAFAF9" }}
          >
            Book Your{" "}
            <span style={{ color: "#FFC425" }}>Adventure</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              action="/api/submit-lead"
              method="POST"
              className="relative rounded-2xl p-[1px] overflow-hidden"
            >
              {/* Gold gradient border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #FFC425 0%, #44403C 40%, #44403C 60%, #FFC425 100%)",
                }}
              />

              <div
                className="relative rounded-2xl p-6 md:p-8 space-y-5"
                style={{ backgroundColor: "#1C1917" }}
              >
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#FAFAF9" }}
                  >
                    Name <span style={{ color: "#FFC425" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={inputClasses}
                    style={{
                      backgroundColor: "#292524",
                      color: "#FAFAF9",
                      border: "1px solid #44403C",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(255,196,37,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#FAFAF9" }}
                  >
                    Email <span style={{ color: "#FFC425" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                    style={{
                      backgroundColor: "#292524",
                      color: "#FAFAF9",
                      border: "1px solid #44403C",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(255,196,37,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#FAFAF9" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className={inputClasses}
                    style={{
                      backgroundColor: "#292524",
                      color: "#FAFAF9",
                      border: "1px solid #44403C",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(255,196,37,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>

                {/* Trip + Date row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="trip"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FAFAF9" }}
                    >
                      Preferred Trip
                    </label>
                    <select
                      id="trip"
                      name="trip"
                      className={inputClasses + " cursor-pointer"}
                      style={{
                        backgroundColor: "#292524",
                        color: "#FAFAF9",
                        border: "1px solid #44403C",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 0 0 2px rgba(255,196,37,0.4)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                      }
                    >
                      <option value="">Select a trip...</option>
                      {tripOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FAFAF9" }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={inputClasses}
                      style={{
                        backgroundColor: "#292524",
                        color: "#FAFAF9",
                        border: "1px solid #44403C",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 0 0 2px rgba(255,196,37,0.4)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                      }
                    />
                  </div>
                </div>

                {/* Number of Anglers */}
                <div>
                  <label
                    htmlFor="anglers"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#FAFAF9" }}
                  >
                    Number of Anglers
                  </label>
                  <select
                    id="anglers"
                    name="anglers"
                    className={inputClasses + " cursor-pointer"}
                    style={{
                      backgroundColor: "#292524",
                      color: "#FAFAF9",
                      border: "1px solid #44403C",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(255,196,37,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  >
                    <option value="1">1 Angler</option>
                    <option value="2">2 Anglers</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#FAFAF9" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your ideal trip..."
                    className={inputClasses + " resize-none"}
                    style={{
                      backgroundColor: "#292524",
                      color: "#FAFAF9",
                      border: "1px solid #44403C",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(255,196,37,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#FFC425",
                    color: "#0C0A09",
                  }}
                >
                  Request Booking
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#292524" }}
                >
                  <Phone size={22} style={{ color: "#FFC425" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#A8A29E" }}
                  >
                    Call or Text
                  </p>
                  <a
                    href="tel:+13073312031"
                    className="text-xl font-semibold transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#FAFAF9" }}
                  >
                    (307) 331-2031
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#292524" }}
                >
                  <MapPin size={22} style={{ color: "#FFC425" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#A8A29E" }}
                  >
                    Visit Us
                  </p>
                  <p
                    className="text-base font-semibold"
                    style={{ color: "#FAFAF9" }}
                  >
                    18187 Wyoming 220
                  </p>
                  <p className="text-base" style={{ color: "#FAFAF9" }}>
                    Casper, WY 82604
                  </p>
                </div>
              </div>

              {/* Location note */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#292524" }}
                >
                  <Clock size={22} style={{ color: "#FFC425" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#A8A29E" }}
                  >
                    Location
                  </p>
                  <p className="text-base" style={{ color: "#FAFAF9" }}>
                    Located on the North Platte River,
                    <br />
                    23 miles SW of Casper
                  </p>
                </div>
              </div>
            </div>

            {/* Landscape Image */}
            <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[16/9]" style={{ border: "1px solid #44403C" }}>
              <Image
                src="/images/wyoming-landscape.jpg"
                alt="Wyoming landscape along the North Platte River"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,10,9,0.5) 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-xs font-medium tracking-wider uppercase"
                  style={{ color: "#FFC425" }}
                >
                  North Platte River, Wyoming
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

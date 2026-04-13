"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Trips & Rates", href: "#trips" },
  { label: "Lodging", href: "#lodging" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0A09]/85 backdrop-blur-lg border-b border-[#44403C]/40 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="cursor-pointer flex-shrink-0 relative"
            >
              <Image
                src="/images/logo.jpg"
                alt="Cowboy Drifters"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="cursor-pointer relative px-4 py-2 text-sm font-body tracking-wide uppercase transition-colors duration-300 group"
                >
                  <span
                    className={`${
                      activeSection === link.href
                        ? "text-[#FFC425]"
                        : "text-[#A8A29E] hover:text-[#FFC425]"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#FFC425] transition-all duration-300 ${
                      activeSection === link.href ? "w-6" : "w-0 group-hover:w-4"
                    }`}
                  />
                </button>
              ))}

              {/* Book Now CTA */}
              <button
                onClick={() => scrollTo("#contact")}
                className="cursor-pointer ml-4 px-6 py-2.5 bg-[#FFC425] text-[#0C0A09] font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-[#FFC425]/90 hover:shadow-lg hover:shadow-[#FFC425]/20 transition-all duration-300 active:scale-95"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-[#FAFAF9] transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#FAFAF9] transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#FAFAF9] transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0C0A09]/98 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className={`cursor-pointer font-heading text-3xl sm:text-4xl tracking-wide py-3 transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-[#FFC425]"
                      : "text-[#FAFAF9] hover:text-[#FFC425]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 + navLinks.length * 0.06 }}
                onClick={() => scrollTo("#contact")}
                className="cursor-pointer mt-6 px-10 py-4 bg-[#FFC425] text-[#0C0A09] font-heading font-bold text-lg uppercase tracking-wider rounded hover:bg-[#FFC425]/90 transition-all duration-300 active:scale-95"
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import { Phone, MapPin, Mail, ArrowUp, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Trips & Rates", href: "#trips" },
  { label: "Lodging", href: "#lodging" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0C0A09] border-t border-[#FFC425]/30">
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="cursor-pointer group w-12 h-12 rounded-full bg-[#1C1917] border border-[#44403C] hover:border-[#FFC425] flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC425]/10"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#A8A29E] group-hover:text-[#FFC425] transition-colors duration-300" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={scrollToTop} className="cursor-pointer mb-5 block">
              <Image
                src="/images/logo.jpg"
                alt="Cowboy Drifters"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </button>
            <p className="font-body text-[#A8A29E] text-sm leading-relaxed max-w-xs">
              Wyoming&apos;s premier fly fishing guide service. Crafting
              unforgettable fishing experiences on the North Platte River and
              beyond since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[#FAFAF9] text-lg mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="cursor-pointer font-body text-[#A8A29E] text-sm hover:text-[#FFC425] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-[#FAFAF9] text-lg mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+13073312031"
                  className="cursor-pointer flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[#FFC425] flex-shrink-0" />
                  <span className="font-body text-[#A8A29E] text-sm group-hover:text-[#FFC425] transition-colors duration-300">
                    (307) 331-2031
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=18187+Wyoming+220+Casper+WY+82604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-[#FFC425] flex-shrink-0" />
                  <span className="font-body text-[#A8A29E] text-sm group-hover:text-[#FFC425] transition-colors duration-300">
                    18187 Wyoming 220
                    <br />
                    Casper, WY 82604
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cowboydrifters.com"
                  className="cursor-pointer flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[#FFC425] flex-shrink-0" />
                  <span className="font-body text-[#A8A29E] text-sm group-hover:text-[#FFC425] transition-colors duration-300">
                    info@cowboydrifters.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-[#FAFAF9] text-lg mb-5 tracking-wide">
              Follow Us
            </h4>
            <p className="font-body text-[#A8A29E] text-sm mb-5 leading-relaxed">
              Join us on social media for fishing reports, trip photos, and
              Wyoming river updates.
            </p>
            <a
              href="https://www.facebook.com/cowboydrifters"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1917] border border-[#44403C] hover:border-[#FFC425] hover:bg-[#FFC425]/10 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-[#A8A29E] group-hover:text-[#FFC425] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#44403C]/60">
          <p className="font-body text-[#A8A29E]/60 text-xs text-center tracking-wide">
            &copy; 2024 Cowboy Drifters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

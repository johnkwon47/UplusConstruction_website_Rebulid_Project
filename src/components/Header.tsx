"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, PremiumButton } from "./ui";

const navLinks = [
  { label: "COMPANY", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-light-gray"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <span
                className={`text-[22px] font-extrabold tracking-tight transition-colors duration-400 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                UPLUS
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-semibold tracking-[0.15em] transition-all duration-300 hover:opacity-100 ${
                    scrolled
                      ? "text-black/60 hover:text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="w-px h-4 bg-current opacity-20 mx-1" />

              <span
                className={`text-[10px] font-bold tracking-[0.2em] cursor-pointer transition-colors duration-300 ${
                  scrolled ? "text-black/40" : "text-white/40"
                }`}
              >
                KR / EN
              </span>

              <PremiumButton
                href="#contact"
                variant={scrolled ? "primary" : "outline"}
                className="!text-[10px] !px-6 !py-2.5"
              >
                문의하기
              </PremiumButton>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "rotate-45 translate-y-[3.25px] bg-black"
                    : scrolled
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[3.25px] bg-black"
                    : scrolled
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu — HYBE full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-[2.5rem] font-bold text-black tracking-tight leading-tight py-1"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <PremiumButton href="#contact" variant="primary">
                프로젝트 상담
              </PremiumButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

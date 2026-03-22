"use client";

import { motion } from "framer-motion";
import { TextReveal, Reveal } from "./motion";
import { Container, PremiumButton } from "./ui";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-black">
      {/* Background image placeholder */}
      <div className="absolute inset-0 img-placeholder">
        <span className="text-white/20 text-xs tracking-widest">
          HERO — Cinematic aerial of modern industrial facility at twilight
        </span>
      </div>
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated grain overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      <Container className="relative z-10 pb-16 md:pb-24">
        {/* Bold headline block — HYBE style */}
        <div className="mb-10">
          <TextReveal delay={0.3}>
            <h1 className="heading-hero text-white">
              WE BUILD
            </h1>
          </TextReveal>
          <TextReveal delay={0.45}>
            <h1 className="heading-hero text-white">
              PRECISION
            </h1>
          </TextReveal>
          <TextReveal delay={0.6}>
            <h1 className="heading-hero text-white/40">
              SPACES
            </h1>
          </TextReveal>
        </div>

        {/* Supporting Korean copy */}
        <Reveal delay={0.9}>
          <p className="text-body-lg text-white/50 max-w-lg mb-10 leading-relaxed">
            정밀한 설계와 시공으로, 산업 공간의 기준을 다시 만듭니다.
            <br />
            HACCP · GMP · 클린룸 · HVAC — 턴키 솔루션.
          </p>
        </Reveal>

        <Reveal delay={1.1}>
          <div className="flex flex-col sm:flex-row gap-4">
            <PremiumButton href="#contact" variant="outline">
              프로젝트 상담하기
            </PremiumButton>
            <PremiumButton href="#portfolio" variant="ghost" className="!text-white/50 !border-white/30 hover:!text-white">
              포트폴리오 보기
            </PremiumButton>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-6 md:right-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-16 bg-white/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 1, ease }}
            style={{ transformOrigin: "top" }}
          />
          <span className="micro-label text-white/30 text-[9px]">SCROLL</span>
        </motion.div>
      </Container>
    </section>
  );
}

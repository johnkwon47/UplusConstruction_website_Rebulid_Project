"use client";

import { motion } from "framer-motion";
import { TextReveal, Reveal } from "./motion";
import { Container, PremiumButton } from "./ui";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Gradient background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <Container className="relative z-10">
        {/* Headline with gradient text */}
        <div className="mb-12">
          <TextReveal delay={0.2}>
            <h1 className="heading-hero text-white mb-4">
              Building the
            </h1>
          </TextReveal>
          <TextReveal delay={0.35}>
            <h1 
              className="heading-hero mb-4"
              style={{
                background: 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Future of
            </h1>
          </TextReveal>
          <TextReveal delay={0.5}>
            <h1 className="heading-hero text-white/90">
              Industrial Space
            </h1>
          </TextReveal>
        </div>

        {/* Supporting Korean copy */}
        <Reveal delay={0.8}>
          <p className="text-body-lg text-white/60 max-w-2xl mb-12 leading-relaxed">
            최첨단 기술과 정밀한 시공으로 산업 공간의 새로운 기준을 제시합니다.
            <br />
            스마트 팩토리 · HACCP · GMP · 클린룸 — 통합 솔루션
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col sm:flex-row gap-4">
            <PremiumButton 
              href="#contact" 
              variant="outline"
              className="glass-strong !border-purple-500/50 hover:!bg-purple-500/20 !text-white"
            >
              프로젝트 시작하기
            </PremiumButton>
            <PremiumButton 
              href="#portfolio" 
              variant="ghost" 
              className="!text-white/70 !border-white/20 hover:!text-white hover:!border-white/40"
            >
              프로젝트 둘러보기 →
            </PremiumButton>
          </div>
        </Reveal>

        {/* Floating stats */}
        <Reveal delay={1.2}>
          <div className="mt-20 flex gap-12">
            <div>
              <div className="text-4xl font-bold text-white mb-1">500+</div>
              <div className="micro-label text-white/40">완료 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">25년</div>
              <div className="micro-label text-white/40">업계 경력</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">99%</div>
              <div className="micro-label text-white/40">고객 만족도</div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      >
        <span className="micro-label text-white/30 text-[9px]">SCROLL</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

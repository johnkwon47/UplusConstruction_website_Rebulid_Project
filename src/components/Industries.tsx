"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, TextReveal } from "./motion";
import { Container, SectionLabel } from "./ui";

const industries = [
  {
    en: "PHARMACEUTICAL & BIOTECH",
    ko: "제약 · 바이오 · 화장품",
    desc: "GMP 규격의 무균 제조환경, 클린룸, 바이오 연구시설.",
    tag: "GMP",
    image: "Pharma — Sterile white cleanroom corridor with airlock",
  },
  {
    en: "FOOD & BEVERAGE",
    ko: "식품 · 제과 · 제빵",
    desc: "HACCP 인증 기준의 위생적 생산환경 설계·시공.",
    tag: "HACCP",
    image: "Food — Modern food production facility, stainless steel",
  },
  {
    en: "PRECISION & ELECTRONICS",
    ko: "정밀화학 · 전자 · IT",
    desc: "미세 입자 관리와 정전기 제어, 고정밀 환경 설계.",
    tag: "CLEANROOM",
    image: "Electronics — High-tech cleanroom, semiconductor manufacturing",
  },
  {
    en: "LOGISTICS & COLD CHAIN",
    ko: "물류창고 · 냉동냉장창고",
    desc: "초저온 냉동창고부터 대규모 물류센터까지.",
    tag: "COLD CHAIN",
    image: "Logistics — Cold storage warehouse, automated racking",
  },
  {
    en: "MEDICAL & SPECIAL HVAC",
    ko: "병원 · 특수 공조 시설",
    desc: "수술실, 격리병동 등 고도 공기질 관리 시설.",
    tag: "HVAC",
    image: "Medical — Hospital operating room, laminar flow ceiling",
  },
];

function IndustryCard({ ind, index }: { ind: (typeof industries)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <div className="img-placeholder aspect-[3/4] w-full overflow-hidden">
        <span className="text-xs text-center px-4">{ind.image}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end p-6">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-sm text-white/70 leading-relaxed">{ind.desc}</p>
        </div>
      </div>

      {/* Info below image */}
      <div className="mt-5">
        <span className="micro-label text-gray block mb-2">{ind.tag}</span>
        <h3 className="text-lg font-bold text-black tracking-tight">{ind.ko}</h3>
        <span className="text-xs text-mid-gray mt-1 block">{ind.en}</span>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-[var(--spacing-section)]">
      <Container>
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="INDUSTRY EXPERTISE" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-black">
              산업의 본질을
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="heading-display text-black/25">
              이해합니다
            </h2>
          </TextReveal>
        </div>

        {/* HYBE-style card grid — 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.en} ind={ind} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

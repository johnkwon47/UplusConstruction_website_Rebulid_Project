"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, TextReveal } from "./motion";
import { Container, SectionLabel } from "./ui";

const services = [
  {
    en: "ENGINEERING",
    ko: "엔지니어링",
    number: "01",
    desc: "공정 흐름 분석부터 설비 배치, 환경 제어 시스템 설계까지—산업시설의 핵심을 기술력으로 구현합니다.",
    capabilities: [
      "HACCP / GMP 시설 엔지니어링",
      "클린룸 등급별 설계 (Class 100~100,000)",
      "HVAC / 공조 시스템 엔지니어링",
      "온습도·차압·기류 제어 설계",
      "유틸리티 배관 및 전기 설계",
      "밸리데이션 프로토콜 수립",
    ],
    image: "Engineering — HVAC system, ductwork detail in cleanroom facility",
  },
  {
    en: "CONSTRUCTION",
    ko: "시공",
    number: "02",
    desc: "정밀한 설계를 현실의 공간으로. 산업시설 특화 시공 역량으로 설계 의도를 완벽히 구현합니다.",
    capabilities: [
      "턴키 방식 일괄 시공",
      "GMP / HACCP 규격 시공",
      "클린룸 패널·바닥·천장 시공",
      "특수 공조 설비 설치",
      "냉동·냉장 창고 시공",
      "설비 배관 및 전장 공사",
    ],
    image: "Construction — Workers installing cleanroom panels, precision industrial site",
  },
  {
    en: "ARCHITECTURAL DESIGN",
    ko: "건축 설계",
    number: "03",
    desc: "기능과 심미성의 균형. 산업 건축의 전문성과 현대적 디자인 감각을 결합합니다.",
    capabilities: [
      "산업시설 인허가 설계",
      "공장·창고 건축 설계",
      "리모델링 및 증축 설계",
      "BIM 기반 통합 설계",
      "에너지 효율 최적화 설계",
      "규제 적합성 검토 및 컨설팅",
    ],
    image: "Design — 3D render of modern industrial facility exterior",
  },
];

function ServiceBlock({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="glass rounded-3xl p-8 lg:p-12 mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        {/* Number + Label */}
        <div className="lg:col-span-2">
          <span className="text-[4rem] lg:text-[5rem] font-extrabold text-purple-500/30 leading-none tracking-tighter block">
            {service.number}
          </span>
        </div>

        {/* Content */}
        <div className={`lg:col-span-4 ${index % 2 === 0 ? "lg:col-start-3" : "lg:col-start-3"}`}>
          <span className="micro-label text-purple-400 block mb-3">{service.en}</span>
          <h3 className="heading-xl text-white mb-5">{service.ko}</h3>
          <p className="text-body-lg text-white/70 leading-relaxed mb-8">{service.desc}</p>

          <div className="space-y-2.5">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-3">
                <span className="w-[3px] h-[3px] rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                <span className="text-body text-white/60">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 lg:col-start-8">
          <motion.div
            className="img-placeholder aspect-[4/3] w-full overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-center px-6 text-xs">{service.image}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-[var(--spacing-section)] bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]" />
      
      <Container className="relative z-10">
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="WHAT WE DO" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-white">
              설계부터 시공까지,
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 
              className="heading-display"
              style={{
                background: 'linear-gradient(135deg, #14F195 0%, #9945FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              통합 솔루션
            </h2>
          </TextReveal>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceBlock key={service.en} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

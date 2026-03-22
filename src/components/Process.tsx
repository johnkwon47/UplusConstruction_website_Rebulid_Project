"use client";

import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./motion";
import { Container, SectionLabel } from "./ui";

const steps = [
  { number: "01", en: "CONSULTATION", ko: "상담", desc: "요구사항 분석, 현장 조사, 규제 검토" },
  { number: "02", en: "PLANNING", ko: "기획", desc: "공정 흐름, 설비 배치, 전략적 기획" },
  { number: "03", en: "DESIGN", ko: "설계", desc: "건축·기계·전기·공조 통합 설계" },
  { number: "04", en: "ENGINEERING", ko: "엔지니어링", desc: "핵심 시스템 상세 엔지니어링" },
  { number: "05", en: "CONSTRUCTION", ko: "시공", desc: "전문 인력 투입, 체계적 공정 관리" },
  { number: "06", en: "VALIDATION", ko: "검증", desc: "IQ/OQ/PQ 밸리데이션, 인증 취득" },
];

export default function Process() {
  return (
    <section id="process" className="py-[var(--spacing-section)] bg-black text-white">
      <Container>
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="OUR PROCESS" className="!text-gray" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-white">
              체계적 프로세스
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="heading-display text-white/20">
              확실한 결과
            </h2>
          </TextReveal>
        </div>

        {/* Horizontal timeline — HYBE-style bold grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0" staggerDelay={0.06}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className={`relative py-10 px-6 border-t border-white/10 ${
                i < steps.length - 1 ? "lg:border-r lg:border-r-white/5" : ""
              }`}>
                <span className="text-[4rem] lg:text-[5rem] font-extrabold text-white/5 leading-none tracking-tighter block mb-6">
                  {step.number}
                </span>
                <span className="micro-label text-white/30 block mb-2">{step.en}</span>
                <h3 className="text-xl font-bold text-white mb-2">{step.ko}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

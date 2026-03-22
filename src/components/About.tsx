"use client";

import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./motion";
import { Container, SectionLabel, Divider } from "./ui";

const metrics = [
  { number: "20+", en: "Years", ko: "산업시설 전문 경력" },
  { number: "500+", en: "Projects", ko: "누적 프로젝트 수행" },
  { number: "98%", en: "Retention", ko: "고객 재계약률" },
  { number: "50+", en: "Partners", ko: "협력 파트너사" },
];

export default function About() {
  return (
    <section id="about" className="py-[var(--spacing-section)]">
      <Container>
        {/* Statement block — HYBE bold style */}
        <div className="mb-24">
          <Reveal>
            <SectionLabel en="ABOUT UPLUS" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-black max-w-4xl">
              신뢰를 설계하고,
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="heading-display text-black/30 max-w-4xl">
              정밀함을 시공합니다.
            </h2>
          </TextReveal>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — text */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal delay={0.1}>
              <p className="text-body-lg text-dark-gray leading-relaxed mb-6">
                유플러스건설은 제약·바이오·식품·물류 산업시설에 특화된
                설계·시공 전문기업입니다. HACCP, GMP, 클린룸, HVAC 등
                고도의 기술력이 요구되는 특수환경 건설 분야에서 축적된
                경험과 전문성을 바탕으로, 설계부터 시공·밸리데이션까지
                턴키 솔루션을 제공합니다.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-lg text-gray leading-relaxed">
                우리는 단순한 시공사가 아닌, 산업 공간의 본질을 이해하는
                기술 파트너입니다. 공정의 흐름, 환경 제어, 규제 적합성—
                모든 요소를 통합적으로 설계하여, 고객의 생산성과 안전성을
                동시에 실현합니다.
              </p>
            </Reveal>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.2} direction="right">
              <div className="img-placeholder aspect-[4/5] w-full">
                <span className="text-center px-6">
                  Architectural detail — completed facility corridor,
                  controlled lighting, clean finishes
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Metrics — bold numbers, HYBE style */}
        <Divider className="mt-28 mb-16" />
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
          {metrics.map((m) => (
            <StaggerItem key={m.en}>
              <div>
                <span className="text-[3.5rem] md:text-[4.5rem] font-extrabold text-black leading-none tracking-tighter block">
                  {m.number}
                </span>
                <span className="micro-label text-gray block mt-3 mb-1">{m.en}</span>
                <span className="text-sm text-dark-gray">{m.ko}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

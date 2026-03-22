"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";
import { Container, SectionLabel } from "./ui";

const credentials = [
  {
    category: "CERTIFICATIONS",
    items: [
      { name: "ISO 9001:2015", desc: "품질경영시스템" },
      { name: "ISO 14001:2015", desc: "환경경영시스템" },
      { name: "ISO 45001:2018", desc: "안전보건경영시스템" },
      { name: "건설업 종합면허", desc: "건축·토목·기계설비" },
    ],
  },
  {
    category: "AWARDS",
    items: [
      { name: "대한건설협회 우수시공상", desc: "2024 산업시설 부문" },
      { name: "중소벤처기업부 장관 표창", desc: "기술혁신 분야" },
      { name: "HACCP 우수 협력사 선정", desc: "식품의약품안전처" },
      { name: "안전관리 우수업체", desc: "고용노동부 인정" },
    ],
  },
  {
    category: "COMPLIANCE",
    items: [
      { name: "GMP 시설 적합성", desc: "식약처 기준 충족" },
      { name: "HACCP 시설 기준", desc: "인증 취득 지원 100%" },
      { name: "소방·안전 기준", desc: "소방시설법 적합" },
      { name: "에너지효율 1등급", desc: "고효율 설비 적용" },
    ],
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-[var(--spacing-section)] bg-black relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px]" />
      
      <Container className="relative z-10">
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="CREDENTIALS" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-xl text-white mb-6 max-w-3xl">
              검증된 역량, 신뢰할 수 있는 파트너
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {credentials.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div>
                <span className="micro-label text-purple-400 block mb-8 pb-4 border-b-2 border-purple-500/30">
                  {group.category}
                </span>
                <StaggerContainer className="space-y-5" staggerDelay={0.05}>
                  {group.items.map((item) => (
                    <StaggerItem key={item.name}>
                      <div className="py-1">
                        <span className="text-[15px] font-semibold text-white block mb-0.5">
                          {item.name}
                        </span>
                        <span className="text-sm text-white/50">{item.desc}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

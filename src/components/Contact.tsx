"use client";

import { useState, type FormEvent } from "react";
import { Reveal, TextReveal } from "./motion";
import { Container, SectionLabel, PremiumButton } from "./ui";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-[var(--spacing-section)] bg-off-white">
      <Container>
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="CONTACT US" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-black">
              프로젝트를
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="heading-display text-black/25">
              시작하겠습니다
            </h2>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left — Contact info */}
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="text-body-lg text-dark-gray leading-relaxed mb-12">
                새로운 시설의 건설, 기존 시설의 리노베이션, 기술 컨설팅—
                어떤 단계에서든 유플러스건설이 함께합니다.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="border-t border-light-gray pt-6">
                  <span className="micro-label text-gray block mb-2">PHONE</span>
                  <a href="tel:02-1234-5678" className="text-lg font-semibold text-black hover:opacity-60 transition-opacity duration-300">
                    02-1234-5678
                  </a>
                </div>
                <div className="border-t border-light-gray pt-6">
                  <span className="micro-label text-gray block mb-2">EMAIL</span>
                  <a href="mailto:contact@upluscon.co.kr" className="text-lg font-semibold text-black hover:opacity-60 transition-opacity duration-300">
                    contact@upluscon.co.kr
                  </a>
                </div>
                <div className="border-t border-light-gray pt-6">
                  <span className="micro-label text-gray block mb-2">ADDRESS</span>
                  <p className="text-[15px] text-black font-medium">
                    서울특별시 강남구 테헤란로 123
                  </p>
                  <p className="text-sm text-gray mt-1">유플러스건설 빌딩 8층</p>
                </div>
                <div className="border-t border-light-gray pt-6">
                  <span className="micro-label text-gray block mb-2">HOURS</span>
                  <p className="text-sm text-dark-gray">월–금 09:00–18:00</p>
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.3}>
              <div className="img-placeholder aspect-[16/10] mt-12 w-full">
                <span className="text-center px-4 text-xs">
                  MAP — Office location, Gangnam, Seoul
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.2} direction="right">
              <div className="bg-white p-8 md:p-12 border border-light-gray">
                <h3 className="heading-md text-black mb-1">프로젝트 상담</h3>
                <p className="text-sm text-gray mb-10">
                  양식을 작성해 주시면, 담당자가 빠르게 연락드립니다.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="micro-label text-charcoal block mb-3">성함 *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black placeholder:text-mid-gray focus:border-black focus:outline-none transition-colors duration-300"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="micro-label text-charcoal block mb-3">회사명 *</label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black placeholder:text-mid-gray focus:border-black focus:outline-none transition-colors duration-300"
                        placeholder="(주)회사명"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="micro-label text-charcoal block mb-3">이메일 *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black placeholder:text-mid-gray focus:border-black focus:outline-none transition-colors duration-300"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="micro-label text-charcoal block mb-3">연락처</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black placeholder:text-mid-gray focus:border-black focus:outline-none transition-colors duration-300"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="micro-label text-charcoal block mb-3">프로젝트 유형</label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black focus:border-black focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">선택해 주세요</option>
                      <option value="gmp">GMP 시설 (제약/바이오/화장품)</option>
                      <option value="haccp">HACCP 시설 (식품/제과/제빵)</option>
                      <option value="cleanroom">클린룸 (전자/정밀화학)</option>
                      <option value="coldchain">냉동냉장 / 물류창고</option>
                      <option value="hvac">특수 공조 / 의료시설</option>
                      <option value="renovation">리노베이션 / 증축</option>
                      <option value="consulting">기술 컨설팅</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="micro-label text-charcoal block mb-3">프로젝트 개요</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-off-white border border-light-gray px-4 py-3.5 text-sm text-black placeholder:text-mid-gray focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="프로젝트의 규모, 위치, 일정 등을 간략히 알려주세요."
                    />
                  </div>

                  <div className="pt-2">
                    <PremiumButton type="submit" variant="primary" className="w-full sm:w-auto">
                      상담 신청하기
                    </PremiumButton>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

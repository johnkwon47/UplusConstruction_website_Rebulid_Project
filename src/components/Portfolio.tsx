"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, TextReveal } from "./motion";
import { Container, SectionLabel } from "./ui";

const projects = [
  {
    title: "삼성바이오 GMP 생산동",
    type: "GMP Manufacturing Facility",
    sector: "PHARMA",
    location: "인천",
    summary: "Class 10,000 클린룸 기반 바이오의약품 생산시설",
    image: "Large-scale biotech facility exterior, modern industrial architecture",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    title: "CJ 제일제당 HACCP 공장",
    type: "Food Processing Plant",
    sector: "FOOD",
    location: "충북",
    summary: "HACCP 인증 식품 가공 라인 증축",
    image: "Food factory, stainless steel production lines",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    title: "SK 하이닉스 클린룸",
    type: "Cleanroom Renovation",
    sector: "ELECTRONICS",
    location: "경기",
    summary: "Class 1,000 → Class 100 업그레이드",
    image: "Semiconductor cleanroom, yellow safe lights",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    title: "한국콜드체인 냉동물류센터",
    type: "Cold Storage Warehouse",
    sector: "LOGISTICS",
    location: "이천",
    summary: "-25°C 초저온 냉동창고 턴키 시공",
    image: "Cold storage facility, automated racking system",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    title: "서울대병원 수술실 HVAC",
    type: "Hospital HVAC System",
    sector: "MEDICAL",
    location: "서울",
    summary: "양압 수술실 4실 신설, HEPA 필터 시스템",
    image: "Hospital operating room, laminar flow ceiling",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`group cursor-pointer ${project.span}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image with HYBE-style hover */}
      <div className="relative overflow-hidden">
        <div className={`img-placeholder w-full ${project.aspect} transition-transform duration-700 group-hover:scale-105`}>
          <span className="text-center px-4 text-xs">{project.image}</span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
          <span className="text-white text-xs font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            VIEW PROJECT
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="micro-label text-gray">{project.sector}</span>
            <span className="text-light-gray text-xs">·</span>
            <span className="micro-label text-mid-gray">{project.location}</span>
          </div>
          <h3 className="text-lg font-bold text-black tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-gray mt-1">{project.type}</p>
        </div>
        <div className="mt-1 shrink-0 w-8 h-8 border border-light-gray flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-400">
          <svg className="w-3 h-3 text-charcoal group-hover:text-white transition-colors duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[var(--spacing-section)] bg-off-white">
      <Container>
        <div className="mb-20">
          <Reveal>
            <SectionLabel en="FEATURED PROJECTS" />
          </Reveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-display text-black">
              포트폴리오
            </h2>
          </TextReveal>
        </div>

        {/* HYBE-style masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

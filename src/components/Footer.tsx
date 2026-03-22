import { Container } from "./ui";

const footerLinks = {
  services: [
    { label: "엔지니어링", href: "#services" },
    { label: "시공", href: "#services" },
    { label: "건축 설계", href: "#services" },
  ],
  industries: [
    { label: "제약 · 바이오", href: "#industries" },
    { label: "식품 · HACCP", href: "#industries" },
    { label: "전자 · 클린룸", href: "#industries" },
    { label: "물류 · 냉동냉장", href: "#industries" },
    { label: "의료 · 특수공조", href: "#industries" },
  ],
  company: [
    { label: "회사소개", href: "#about" },
    { label: "포트폴리오", href: "#portfolio" },
    { label: "프로세스", href: "#process" },
    { label: "인증", href: "#credentials" },
    { label: "연락처", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <Container>
        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <span className="text-[28px] font-extrabold tracking-tight block mb-6">UPLUS</span>
            <p className="text-sm text-gray leading-relaxed max-w-xs mb-6">
              HACCP · GMP · 클린룸 · HVAC · 턴키 건설 전문기업.
              설계부터 시공, 밸리데이션까지.
            </p>
            <div className="space-y-1.5 text-sm text-dark-gray">
              <p>서울특별시 강남구 테헤란로 123</p>
              <p>02-1234-5678</p>
              <p>contact@upluscon.co.kr</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 lg:col-start-7">
            <span className="micro-label text-gray block mb-5">SERVICES</span>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-dark-gray hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="micro-label text-gray block mb-5">INDUSTRIES</span>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-dark-gray hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="micro-label text-gray block mb-5">COMPANY</span>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-dark-gray hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xs text-dark-gray">
            <span>© 2026 UPLUS Construction. All rights reserved.</span>
            <span>사업자등록번호: 000-00-00000 · 대표: 홍길동</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-dark-gray hover:text-white transition-colors duration-300">
              개인정보처리방침
            </a>
            <a href="#" className="text-xs text-dark-gray hover:text-white transition-colors duration-300">
              이용약관
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

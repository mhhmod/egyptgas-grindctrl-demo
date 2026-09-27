"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroImages } from "@/lib/data";
import { useLang } from "@/lib/i18n";

const routes = (ar: boolean) =>
  [
    { label: ar ? "قدراتنا" : "Capabilities", href: "#capabilities" },
    { label: ar ? "الخبرات" : "Experience", href: "#stories" },
    { label: ar ? "المستثمرون" : "Investors", href: "#investors" },
    { label: ar ? "خدمة العملاء" : "Customers", href: "#customers" }
  ] as const;

export function Hero() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      aria-label={ar ? "غاز مصر — المقدمة" : "Egypt Gas — opening"}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-[#060d18]"
    >
      <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-0">
        <Image
          src={heroImages.main}
          alt={ar ? "منشأة غاز صناعية ليلاً" : "Gas processing facility at night"}
          fill
          priority
          sizes="100vw"
          className={reduce ? "object-cover" : "herodrift object-cover"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/35 to-[#060d18]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/70 via-transparent to-[#060d18]/30" />
      </motion.div>

      {/* Pipeline motif: enters, crosses, exits toward the map */}
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[16%] h-[140px] w-full opacity-70 md:h-[180px]"
      >
        <path d="M-20 150 C 200 150, 260 90, 480 90 S 760 150, 980 120 S 1140 60, 1220 60" fill="none" stroke="#24405f" strokeWidth="2" />
        {!reduce && (
          <path d="M-20 150 C 200 150, 260 90, 480 90 S 760 150, 980 120 S 1140 60, 1220 60" fill="none" stroke="#a9cf38" strokeWidth="2" className="flow-line" />
        )}
        {[180, 480, 780, 1020].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy={[150, 90, 138, 112][i]} r="4" fill="#060d18" stroke="#a9cf38" strokeWidth="2" />
          </g>
        ))}
      </svg>

      <motion.div
        style={reduce ? undefined : { y: typeY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-12 pt-40 md:px-10"
      >
        <p className="mask-line">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono2 block text-[11px] tracking-[0.3em] text-[#a9cf38]"
          >
            {ar ? "غاز مصر — منذ 1983 · 30.05°N 31.32°E" : "EGYPT GAS — EST. 1983 · 30.05°N 31.32°E"}
          </motion.span>
        </p>

        <h1 className="font-display mt-5 font-black tracking-[-0.02em] text-white">
          <span className="mask-line">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3rem,10vw,9rem)] leading-[0.94]"
            >
              {ar ? "مصر تعمل" : "Egypt runs"}
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3rem,10vw,9rem)] font-light leading-[0.96] text-[#9db0c4]"
            >
              {ar ? "على شبكاتنا." : "on our lines."}
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="max-w-[54ch] text-[15px] leading-relaxed text-white/75"
          >
            {ar
              ? "أكبر شركة لتوزيع الغاز الطبيعي في مصر — هندسة وتصميم وخطوط ومحطات وتوصيل وتشغيل وصيانة، ومقاول EPC يعمل في مصر وخارجها."
              : "Egypt's largest natural gas distributor — engineering, pipelines, stations, connections, operation and maintenance, and an EPC contractor at home and abroad."}
          </motion.p>
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78 }}
            aria-label={ar ? "مداخل رئيسية" : "Key routes"}
            className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4 lg:w-[560px]"
          >
            {routes(ar).map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between gap-2 bg-[#060d18]/80 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-[#0c4a90]"
              >
                {r.label}
                <ArrowUpRight size={14} className="text-[#a9cf38] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </motion.nav>
        </div>

        <motion.a
          href="#scale"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/60 hover:text-white"
          aria-label={ar ? "مرر للحجم" : "Scroll to scale"}
        >
          <ArrowDown size={14} className="animate-bounce" />
          {ar ? "الحجم بالأرقام" : "Scale, in numbers"}
        </motion.a>
      </motion.div>
    </section>
  );
}

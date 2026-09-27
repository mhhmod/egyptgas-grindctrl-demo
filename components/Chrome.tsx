"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Masked({
  lines,
  className,
  delay = 0,
  stagger = 0.1,
  as: Tag = "div"
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();
  if (reduce)
    return (
      <Tag className={className}>
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </Tag>
    );
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line">
          <motion.span
            initial={{ y: "112%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(10% 7% 10% 7%)", opacity: 0.35 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal>
      <p className="eyebrow flex items-center gap-3 text-[#a9cf38]">
        <span className="font-mono2 text-[#9db0c4]">{index}</span>
        <span className="inline-block h-px w-10 bg-[#a9cf38]" aria-hidden />
        <span>{children}</span>
      </p>
    </Reveal>
  );
}

/** The pipeline motif: a thin technical line that flows between sections. */
export function FlowDivider({ label }: { label?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto max-w-[1600px] px-5 md:px-10" aria-hidden={label ? undefined : true}>
      <svg viewBox="0 0 1200 60" className="h-[54px] w-full" preserveAspectRatio="none" role={label ? "img" : "presentation"} aria-label={label}>
        <line x1="0" y1="30" x2="1200" y2="30" stroke="#24405f" strokeWidth="1.5" />
        {!reduce && (
          <line x1="0" y1="30" x2="1200" y2="30" stroke="#a9cf38" strokeWidth="1.5" className="flow-line" />
        )}
        {[0, 300, 600, 900, 1200].map((x) => (
          <g key={x}>
            <line x1={x} y1="22" x2={x} y2="38" stroke="#24405f" strokeWidth="1.5" />
            <circle cx={x} cy="30" r="3.5" fill="#060d18" stroke="#a9cf38" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function CountUp({ value, prefix }: { value: number; prefix?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // The final figure is the initial DOM content (SSR / SEO / no-JS truth).
  // Animation only ever counts *toward* it, never replaces a zero.
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const shown = n ?? value;
  return (
    <span ref={ref} aria-label={`${prefix ?? ""}${value.toLocaleString("en-US")}`}>
      {prefix}
      {shown.toLocaleString("en-US")}
    </span>
  );
}

export function useT() {
  const { lang } = useLang();
  return lang;
}

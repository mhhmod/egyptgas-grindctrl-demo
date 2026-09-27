"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { stories } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, ImageReveal, Masked, Reveal } from "./Chrome";

export function Stories() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="stories" aria-label={ar ? "الخبرات" : "Experience"} className="relative bg-[#060d18] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Eyebrow index="04">{ar ? "الخبرات" : "Experience"}</Eyebrow>
        <Masked
          as="h2"
          className="font-display mt-5 max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white"
          lines={ar ? ["أربعون عامًا", "تحت الأرض وفوقها."] : ["Four decades", "above and below ground."]}
        />
      </div>

      <div ref={ref} className="mx-auto mt-14 max-w-[1600px] space-y-16 px-5 md:space-y-24 md:px-10">
        {stories.map((s, i) => (
          <article key={s.year} aria-label={pick(s.title, lang)} className="grid items-center gap-8 lg:grid-cols-12">
            <ImageReveal className={i % 2 === 1 ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
              <div className="img-treatment relative aspect-[16/10] overflow-hidden">
                <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-[-10%_0]">
                  <Image src={s.image} alt={pick(s.title, lang)} fill sizes="(max-width:1024px) 100vw, 58vw" loading="lazy" className="object-cover" />
                </motion.div>
                <span className="font-mono2 absolute bottom-4 start-4 bg-[#060d18]/85 px-3 py-1.5 text-[11px] tracking-[0.2em] text-[#a9cf38]">
                  {s.year}
                </span>
              </div>
            </ImageReveal>
            <div className={i % 2 === 1 ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
              <Reveal>
                <p className="font-mono2 flex items-center gap-3 text-[11px] tracking-[0.24em] text-[#9db0c4]">
                  <span className="text-[#a9cf38]">EV-{String(i + 1).padStart(2, "0")}/04</span>
                  <span aria-hidden className="inline-block h-px w-8 bg-[#24405f]" />
                  <span>{s.year}</span>
                </p>
                <p className="font-mono2 mt-4 text-[11px] tracking-[0.24em] text-[#a9cf38]">{pick(s.place, lang)}</p>
                <h3 className="font-display mt-3 text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-[1.05] text-white">
                  {pick(s.title, lang)}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/70">{pick(s.body, lang)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t.en} className="border border-[#24405f] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9db0c4]">
                      {pick(t, lang)}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

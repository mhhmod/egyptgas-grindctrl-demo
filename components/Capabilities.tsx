"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, type MotionValue } from "motion/react";
import { stages } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, Masked, Reveal } from "./Chrome";

function useScrollSpy(progress: MotionValue<number>, count: number, disabled: boolean, onChange: (i: number) => void) {
  useEffect(() => {
    if (disabled) return;
    const unsub = progress.on("change", (v) => {
      onChange(Math.min(count - 1, Math.max(0, Math.floor(v * count))));
    });
    return unsub;
  }, [progress, count, disabled, onChange]);
}

export function Capabilities() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const reduce = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.65", "end 0.55"] });
  useScrollSpy(scrollYProgress, stages.length, reduce, setActive);

  return (
    <section id="capabilities" aria-label={ar ? "القدرات" : "Capabilities"} className="bg-[#0a1424] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Eyebrow index="03">{ar ? "من المسح إلى الصيانة" : "Survey to maintenance"}</Eyebrow>
        <Masked
          as="h2"
          className="font-display mt-5 max-w-[18ch] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white"
          lines={ar ? ["مؤسسة بنية تحتية", "متكاملة."] : ["One end-to-end", "infrastructure house."]}
        />
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-white/70">
            {ar
              ? "سبع مراحل، مالك واحد: من الرفع المساحي والتصميم، عبر الخطوط والمحطات والإنشاء، إلى التوصيل والتشغيل والصيانة — بما فيها التصنيع."
              : "Seven stages, one owner: from survey and design, through lines, stations and construction, to connection, operation and maintenance — including manufacturing."}
          </p>
        </Reveal>

        <div ref={trackRef} className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <StageReadout index={active} />
              <div className="mt-8 hidden gap-2 lg:flex" aria-hidden>
                {stages.map((s, i) => (
                  <span key={s.no} className={`h-1 flex-1 transition-colors duration-500 ${i <= active ? "bg-[#a9cf38]" : "bg-[#24405f]"}`} />
                ))}
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {stages.map((s, i) => (
              <li key={s.no}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`grid w-full grid-cols-[auto_1fr] gap-5 border-t border-white/10 py-7 text-start transition-colors last:border-b md:grid-cols-[88px_1fr] ${
                    i === active ? "bg-white/[0.03]" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className={`font-mono2 text-sm ${i === active ? "text-[#a9cf38]" : "text-[#9db0c4]"}`}>{s.no}</span>
                  <span>
                    <span className="font-display block text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-tight text-white">
                      {pick(s.name, lang)}
                    </span>
                    <span className="mt-2 block max-w-[52ch] text-[14px] leading-relaxed text-white/70">{pick(s.body, lang)}</span>
                    <span className="font-mono2 mt-3 block text-[11px] tracking-[0.18em] text-[#a9cf38]">{pick(s.proof, lang)}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StageReadout({ index }: { index: number }) {
  const { lang } = useLang();
  const s = stages[index];
  return (
    <div aria-live="polite" className="border border-[#24405f] bg-[#060d18] p-7 md:p-9">
      <p className="font-mono2 text-[64px] font-semibold leading-none text-[#1a6fd0]">{s.no}</p>
      <h3 className="font-display mt-2 text-4xl font-extrabold text-white">{pick(s.name, lang)}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/70">{pick(s.body, lang)}</p>
    </div>
  );
}

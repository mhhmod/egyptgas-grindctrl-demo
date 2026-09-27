"use client";
import Image from "next/image";
import { counters, heroImages } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { CountUp, Eyebrow, Masked, Reveal } from "./Chrome";

export function ScaleBand() {
  const { lang } = useLang();
  const ar = lang === "ar";
  return (
    <section id="scale" aria-label={ar ? "الحجم" : "Scale"} className="relative overflow-hidden bg-[#0a1424] py-24 md:py-32">
      {/* backdrop: engineering drawing feel */}
      <div className="img-treatment pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <Image src={heroImages.field} alt="" fill sizes="100vw" loading="lazy" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1424] via-[#0a1424]/70 to-[#0a1424]" />
      </div>
      {/* measurement grid */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]">
        <defs>
          <pattern id="eg-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="#9db0c4" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#eg-grid)" />
      </svg>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <Eyebrow index="01">{ar ? "الحجم" : "Scale"}</Eyebrow>
        <Masked
          as="h2"
          delay={0.05}
          className="font-display mt-5 max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white"
          lines={ar ? ["ستة ملايين منزل", "يعمل بالغاز."] : ["Six million homes", "on gas."]}
        />
        <Reveal delay={0.15}>
          <p className="font-mono2 mt-5 text-[11px] tracking-[0.22em] text-[#9db0c4]">
            {ar ? "عدادات رسمية منشورة — عملاء الشركة" : "PUBLISHED COMPANY METERS — CUSTOMERS SERVED"}
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-px bg-[#24405f] lg:grid-cols-4">
          {counters.map((c, i) => (
            <Reveal key={c.label.en} delay={i * 0.07} className="bg-[#0a1424]/95">
              <div className="relative overflow-hidden px-5 py-8 md:px-8 md:py-10">
                <span className="font-mono2 absolute end-4 top-4 text-[10px] tracking-[0.2em] text-[#a9cf38]" aria-hidden>
                  MTR-{String(i + 1).padStart(2, "0")}
                </span>
                <dd className="font-mono2 mt-4 text-[clamp(1.6rem,3.4vw,2.9rem)] font-semibold leading-none text-white">
                  <CountUp value={c.value} plain={c.plain} />
                </dd>
                <dt className="mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#9db0c4]">
                  {pick(c.label, lang)}
                </dt>
                <span className="mt-5 block h-[3px] w-full bg-[#24405f]" aria-hidden>
                  <span className="block h-full w-2/3 bg-[#087d59]" aria-hidden />
                </span>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[72ch] text-xs leading-relaxed text-[#9db0c4]">
            {ar
              ? "الأرقام كما تنشرها الشركة على موقعها الرسمي. لا توجد تقديرات أو استنتاجات."
              : "Figures exactly as published on the company's official website. No estimates, no extrapolation."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

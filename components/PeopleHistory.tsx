"use client";
import Image from "next/image";
import { heroImages, timeline } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, ImageReveal, Masked, Reveal } from "./Chrome";

export function PeopleHistory() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <>
      {/* PEOPLE */}
      <section aria-label={ar ? "العاملون" : "People"} className="bg-[#0a1424] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ImageReveal>
                <div className="img-treatment relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={heroImages.crew}
                    alt={ar ? "مهندسو وفنيو غاز مصر في الميدان" : "Egypt Gas engineers and technicians in the field"}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <span className="font-mono2 absolute bottom-4 start-4 bg-[#060d18]/85 px-3 py-1.5 text-[11px] tracking-[0.2em] text-[#a9cf38]">
                    {ar ? "الميدان — لا قاعات الاجتماعات" : "THE FIELD — NOT THE BOARDROOM"}
                  </span>
                </div>
              </ImageReveal>
            </div>
            <div className="lg:col-span-5">
              <Eyebrow index="09">{ar ? "العاملون" : "People"}</Eyebrow>
              <Masked
                as="h2"
                className="font-display mt-5 text-[clamp(2rem,4.4vw,3.8rem)] font-extrabold leading-[1.02] text-white"
                lines={ar ? ["الاستثمار الحقيقي", "عمالة مؤهلة."] : ["The real investment", "is qualified people."]}
              />
              <Reveal delay={0.15}>
                <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
                  {ar
                    ? "هكذا تقول الشركة عن نفسها — وتاريخها يؤكدها: مهندسون وفنيون وأطقم مدربة على أعلى مستوى، من الورش إلى المنصات البحرية."
                    : "The company's own words — and its record backs them: engineers, technicians and highly trained crews, from workshops to offshore platforms."}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history" aria-label={ar ? "التاريخ" : "History"} className="bg-[#060d18] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Eyebrow index="10">{ar ? "التاريخ" : "History"}</Eyebrow>
          <Masked
            as="h2"
            className="font-display mt-5 max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white"
            lines={ar ? ["تاريخ نفخر به.", "ومستقبل نتطلع إليه."] : ["A history of pride.", "A future in sight."]}
          />
          <ol className="mt-14">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={Math.min(i * 0.03, 0.2)}>
                <li
                  className={`grid gap-2 border-t border-white/10 py-6 transition-colors last:border-b hover:bg-white/[0.02] md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8 md:px-2`}
                >
                  <span className="font-mono2 text-lg font-semibold text-[#a9cf38]">{t.year}</span>
                  <span className="font-display max-w-[70ch] text-lg font-bold leading-snug text-white md:text-xl">
                    {pick(t.text, lang)}
                  </span>
                  <span className="font-mono2 hidden text-xs text-[#9db0c4] md:block" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[72ch] text-xs leading-relaxed text-[#9db0c4]">
              {ar
                ? "التواريخ والأحداث كما يوثقها الموقع الرسمي لغاز مصر."
                : "Dates and events exactly as documented on the official Egypt Gas website."}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

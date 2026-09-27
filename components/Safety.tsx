"use client";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { certs } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, ImageReveal, Masked, Reveal } from "./Chrome";

export function Safety() {
  const { lang } = useLang();
  const ar = lang === "ar";
  return (
    <section id="safety" aria-label={ar ? "السلامة" : "Safety"} className="bg-[#f2f0e9] py-24 text-[#0a1424] md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-[#087d59]">
                <span className="font-mono2 text-[#0c4a90]">05</span>
                <span className="inline-block h-px w-10 bg-[#087d59]" aria-hidden />
                <span>{ar ? "السلامة والصحة المهنية" : "Health, safety & environment"}</span>
              </p>
            </Reveal>
            <Masked
              as="h2"
              className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] font-black leading-[1.0]"
              lines={ar ? ["الانضباط قبل", "كل شيء."] : ["Discipline", "before everything."]}
            />
            <Reveal delay={0.15}>
              <div className="mt-6 max-w-[54ch] space-y-4 text-[15px] leading-relaxed text-[#0a1424]/80">
                <p>
                  {ar
                    ? "السلامة مبدأ تشغيلي: استراتيجية وسياسة معلنة، وبرامج تدريب مستمرة، والتزام بمعايير الأيزو لسنوات — مع برامج لتوفير الطاقة ومصادر بديلة."
                    : "Safety is an operating principle: a published strategy and policy, continuous training programmes, multi-year ISO compliance — plus energy-saving and alternative-energy programmes."}
                </p>
                <p>
                  {ar
                    ? "من الورش إلى المنصات البحرية، إجراءات مكتوبة وتدريب موثق ومسؤولية واضحة عن كل عملية."
                    : "From workshops to offshore platforms: written procedures, documented training, clear ownership of every operation."}
                </p>
              </div>
            </Reveal>
            <ul className="mt-8 space-y-px bg-[#0a1424]/15">
              {certs.map((c, i) => (
                <Reveal key={c.title.en} delay={i * 0.06} className="bg-[#f2f0e9]">
                  <li className="flex items-start gap-4 px-5 py-5">
                    <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#0c4a90]" strokeWidth={2} />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c4a90]">
                        {ar ? "معتمد وموثق" : "Certified & documented"}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold leading-snug">{pick(c.title, lang)}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <ImageReveal>
              <div className="img-treatment relative min-h-[420px] overflow-hidden lg:min-h-full lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1600&q=70"
                  alt={ar ? "مهندس ميداني بمعدات سلامة" : "Field engineer in safety gear"}
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </ImageReveal>
            <Reveal delay={0.1}>
              <p className="font-mono2 mt-4 text-[11px] tracking-[0.2em] text-[#0a1424]/60">
                {ar ? "التدريب الميداني — برامج السلامة والصحة المهنية" : "FIELD TRAINING — HSE PROGRAMMES"}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

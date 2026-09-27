"use client";
import Image from "next/image";
import { ArrowUpRight, FileText, Landmark, Newspaper } from "lucide-react";
import { news } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, ImageReveal, Masked, Reveal } from "./Chrome";

const irDocs = (ar: boolean) =>
  [
    { label: ar ? "بيانات المساهمين" : "Shareholders", meta: ar ? "هيكل الملكية" : "OWNERSHIP", href: "https://www.egyptgas.com.eg/Shareholders.aspx" },
    { label: ar ? "أسهم غاز مصر" : "Egypt Gas shares", meta: ar ? "السوق" : "LISTING", href: "https://www.egyptgas.com.eg/Shares.aspx" },
    { label: ar ? "مجلس الإدارة والحوكمة" : "Board & governance", meta: ar ? "الحوكمة" : "GOVERNANCE", href: "https://www.egyptgas.com.eg/BoardMembers.aspx" },
    { label: ar ? "التحميلات والتقارير" : "Downloads & reports", meta: ar ? "وثائق" : "FILINGS", href: "https://www.egyptgas.com.eg/Downloads.aspx" }
  ] as const;

export function InvestorsNews() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const [lead, ...rest] = news;

  return (
    <>
      {/* INVESTORS */}
      <section id="investors" aria-label={ar ? "علاقات المستثمرين" : "Investor relations"} className="bg-[#060d18] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow index="07">{ar ? "علاقات المستثمرين" : "Investor relations"}</Eyebrow>
              <Masked
                as="h2"
                className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white"
                lines={ar ? ["الشفافية جزء", "من البنية."] : ["Disclosure is", "infrastructure too."]}
              />
              <Reveal delay={0.15}>
                <p className="mt-5 max-w-[50ch] text-[15px] leading-relaxed text-white/70">
                  {ar
                    ? "بوابة واضحة لمعلومات الشركة والمساهمين والإفصاحات — فقط ما هو منشور وموثق فعلًا، دون رسوم أو أرقام مختلقة."
                    : "A clear entry to company, shareholder and disclosure information — only what is actually published and documented. No invented charts, no invented figures."}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {irDocs(ar).map((d, i) => (
                  <Reveal key={d.href} delay={i * 0.05}>
                    <li>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-5"
                      >
                        <span className="flex items-center gap-4">
                          <span className="font-mono2 text-xs text-[#9db0c4]">IR-{String(i + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="font-display block text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                              {d.label}
                            </span>
                            <span className="font-mono2 mt-1 block text-[10px] tracking-[0.22em] text-[#9db0c4]">
                              {d.meta} · EGYPTGAS.COM.EG
                            </span>
                          </span>
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#24405f] text-white transition-colors group-hover:border-[#a9cf38] group-hover:bg-[#a9cf38] group-hover:text-[#0a1424]">
                          {i === 0 ? <Landmark size={17} /> : i === 3 ? <FileText size={17} /> : <ArrowUpRight size={17} />}
                        </span>
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.1}>
                <a
                  href="https://www.egyptgas.com.eg/IR.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                >
                  <span className="link-line">{ar ? "صفحة علاقات المستثمرين الرسمية" : "Official IR page"}</span>
                  <ArrowUpRight size={14} className="text-[#a9cf38]" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSROOM */}
      <section id="news" aria-label={ar ? "المركز الإعلامي" : "Newsroom"} className="bg-[#f2f0e9] py-24 text-[#0a1424] md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-[#0c4a90]">
                  <span className="font-mono2 text-[#087d59]">08</span>
                  <span className="inline-block h-px w-10 bg-[#0c4a90]" aria-hidden />
                  <span>{ar ? "المركز الإعلامي" : "Newsroom"}</span>
                </p>
              </Reveal>
              <Masked
                as="h2"
                className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] font-black leading-[1.0]"
                lines={ar ? ["آخر ما يحدث،", "أولًا بأول."] : ["The record,", "as it happens."]}
              />
            </div>
            <Reveal delay={0.15}>
              <a
                href="https://www.egyptgas.com.eg/News.aspx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0a1424] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0c4a90]"
              >
                <Newspaper size={15} /> {ar ? "كل الأخبار" : "All news"}
              </a>
            </Reveal>
          </div>

          {/* Lead */}
          <ImageReveal className="mt-12">
            <article className="img-treatment relative overflow-hidden bg-[#0a1424] text-white">
              <div className="relative min-h-[56vh] md:min-h-[64vh]">
                <Image src={lead.image} alt={pick(lead.title, lang)} fill sizes="100vw" loading="lazy" className="object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424] via-[#0a1424]/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 grid gap-6 p-6 md:grid-cols-12 md:p-12">
                <div className="md:col-span-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a9cf38]">
                    {pick(lead.tag, lang)} · {pick(lead.date, lang)}
                  </p>
                  <h3 className="font-display mt-3 max-w-[22ch] text-[clamp(1.8rem,4.2vw,3.4rem)] font-extrabold leading-[1.02]">
                    {pick(lead.title, lang)}
                  </h3>
                  <p className="mt-3 max-w-[60ch] text-[15px] text-white/75">{pick(lead.body, lang)}</p>
                </div>
              </div>
            </article>
          </ImageReveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {rest.map((n, i) => {
              const tagColor =
                n.tag.en === "Safety" ? "text-[#c8342a]" : n.tag.en === "Events" ? "text-[#0c4a90]" : "text-[#087d59]";
              return (
              <Reveal key={n.title.en} delay={i * 0.07}>
                <article className="group grid h-full grid-cols-[140px_1fr] gap-5 border-t-2 border-[#0a1424] pt-5 md:grid-cols-[180px_1fr]">
                  <div className="img-treatment relative aspect-square overflow-hidden">
                    <Image src={n.image} alt={pick(n.title, lang)} fill sizes="240px" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div>
                    <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${tagColor}`}>
                      {pick(n.tag, lang)} · {pick(n.date, lang)}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-extrabold leading-snug md:text-2xl">{pick(n.title, lang)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#0a1424]/70">{pick(n.body, lang)}</p>
                  </div>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

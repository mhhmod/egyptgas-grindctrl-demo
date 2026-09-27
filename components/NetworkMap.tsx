"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { abroad, mapRegions } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";
import { Eyebrow, Masked, Reveal } from "./Chrome";

export function NetworkMap() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const reduce = useReducedMotion();
  const [active, setActive] = useState("delta");
  const current = mapRegions.find((r) => r.id === active) ?? mapRegions[0];

  return (
    <section id="network" aria-label={ar ? "شبكة مصر" : "The Egypt network"} className="bg-[#060d18] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Eyebrow index="02">{ar ? "شبكة مصر" : "The Egypt network"}</Eyebrow>
        <div className="mt-5 grid gap-8 lg:grid-cols-12">
          <Masked
            as="h2"
            className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white lg:col-span-7"
            lines={ar ? ["أكبر مناطق الامتياز", "في مصر."] : ["The largest concession", "areas in Egypt."]}
          />
          <Reveal delay={0.15} className="self-end lg:col-span-5">
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-white/70">
              {ar
                ? "التطوير والتشغيل والصيانة لشبكات التوزيع في المدن والمناطق الصناعية — من الدلتا إلى الصعيد. اختر منطقة لعرض النشاط الموثق."
                : "Developing, operating and maintaining distribution networks in residential cities and industrial zones — Delta to Upper Egypt. Select a region for documented activity."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Schematic map */}
          <Reveal className="lg:col-span-7">
            <div className="border border-[#24405f] bg-[#0a1424] p-4 md:p-6">
              <div className="flex items-center justify-between px-1 pb-3">
                <p className="font-mono2 text-[10px] tracking-[0.24em] text-[#9db0c4]">
                  EG-GRID · {ar ? "مخطط تواجد" : "PRESENCE SCHEMATIC"}
                </p>
                <p className="font-mono2 text-[10px] tracking-[0.24em] text-[#a9cf38]">● {ar ? "منطقة امتياز" : "CONCESSION"}</p>
              </div>
              <svg viewBox="0 0 460 560" role="img" aria-label={ar ? "مخطط تواجد غاز مصر" : "Egypt Gas presence schematic"} className="h-auto w-full">
                {/* Stylised Egypt outline */}
                <path
                  d="M60 92 L150 78 L230 66 L300 74 L352 84 L398 128 L372 208 L352 232 L336 300 L330 400 L322 442 L180 448 L150 330 L120 220 L60 150 Z"
                  fill="none"
                  stroke="#24405f"
                  strokeWidth="2"
                />
                {/* Sinai */}
                <path d="M352 84 L418 96 L398 128 L372 208 L352 232 Z" fill="rgba(12,74,144,0.18)" stroke="#24405f" strokeWidth="1.5" />
                {/* Nile */}
                <path d="M266 470 L258 380 L252 260 L248 190 L244 150 L232 128" fill="none" stroke="#1a6fd0" strokeWidth="2.5" opacity="0.8" />
                <path d="M232 128 L196 96 M232 128 L244 92 M232 128 L286 92 M232 128 L318 100" stroke="#1a6fd0" strokeWidth="1.5" opacity="0.6" />
                {/* Restrained network links */}
                {!reduce && (
                  <g stroke="#a9cf38" strokeWidth="1.2" opacity="0.55">
                    <line x1="148" y1="96" x2="222" y2="122" />
                    <line x1="222" y1="122" x2="256" y2="152" />
                    <line x1="256" y1="152" x2="302" y2="142" />
                    <line x1="256" y1="152" x2="256" y2="398" />
                    <line x1="256" y1="398" x2="266" y2="468" />
                  </g>
                )}
                {mapRegions.map((r) => {
                  const on = r.id === active;
                  const short = pick(r.name, lang).split("—")[0].split("·")[0].trim();
                  return (
                    <g
                      key={r.id}
                      className="map-node"
                      onMouseEnter={() => setActive(r.id)}
                      onFocus={() => setActive(r.id)}
                      onClick={() => setActive(r.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActive(r.id);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-pressed={on}
                      aria-label={pick(r.name, lang)}
                    >
                      <circle cx={r.x} cy={r.y} r={on ? 26 : 16} fill={on ? "rgba(169,207,56,0.14)" : "transparent"} style={{ transition: "all .4s" }} />
                      <circle cx={r.x} cy={r.y} r={on ? 7 : 4.5} fill={on ? "#a9cf38" : "#0c4a90"} stroke="#f2f0e9" strokeWidth="1.5" style={{ transition: "all .4s" }} />
                      <text
                        x={r.x}
                        y={r.y + (on ? 24 : 20)}
                        textAnchor="middle"
                        fill={on ? "#f2f0e9" : "#9db0c4"}
                        fillOpacity={on ? 1 : 0.75}
                        fontSize={on ? 11 : 9.5}
                        letterSpacing="1"
                        fontFamily="monospace"
                        style={{ transition: "all .4s" }}
                      >
                        {short.toUpperCase().slice(0, 14)}
                      </text>
                    </g>
                  );
                })}
                <text x="18" y="548" fill="#9db0c4" fontSize="10" letterSpacing="3" fontFamily="monospace">
                  22.0°N — 31.5°N · 25.0°E — 35.0°E
                </text>
              </svg>
              <p className="px-1 pt-3 text-[11px] leading-relaxed text-[#9db0c4]">
                {ar
                  ? "تواجد تشغيلي برسم تخطيطي."
                  : "Operating presence, drawn schematically."}
              </p>
            </div>
          </Reveal>

          {/* Region readout + abroad */}
          <div className="lg:col-span-5">
            <div className="border border-[#24405f] bg-[#0a1424] p-6 md:p-8 lg:sticky lg:top-32" aria-live="polite">
              <p className="font-mono2 text-[10px] tracking-[0.26em] text-[#a9cf38]">
                {ar ? "المنطقة" : "REGION"}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reduce ? 0 : 0.35 }}
                >
                  <h3 className="font-display mt-3 text-3xl font-extrabold text-white">{pick(current.name, lang)}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">{pick(current.activity, lang)}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={ar ? "المناطق" : "Regions"}>
                {mapRegions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActive(r.id)}
                    aria-pressed={r.id === active}
                    className={`border px-3 py-2 text-[11px] font-bold transition-colors ${
                      r.id === active
                        ? "border-[#a9cf38] bg-[#a9cf38] text-[#0a1424]"
                        : "border-[#24405f] text-white/70 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {pick(r.name, lang).split("—")[0].split("·")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 border border-[#24405f] bg-[#0a1424] p-6 md:p-8">
              <p className="font-mono2 text-[10px] tracking-[0.26em] text-[#a9cf38]">
                {ar ? "خارج مصر" : "BEYOND EGYPT"}
              </p>
              <ul className="mt-4 space-y-4">
                {abroad.map((a) => (
                  <li key={a.name.en} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="font-display text-xl font-bold text-white">{pick(a.name, lang)}</p>
                    <p className="mt-1 text-sm text-white/65">{pick(a.activity, lang)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

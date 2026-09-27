"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AlertTriangle, ChevronDown, Globe, Menu, Phone, X } from "lucide-react";
import { contact } from "@/lib/data";
import { useLang } from "@/lib/i18n";

const groups = (ar: boolean) =>
  [
    {
      label: ar ? "الشركة" : "Company",
      links: [
        { label: ar ? "نبذة عن غاز مصر" : "About Egypt Gas", href: "#scale" },
        { label: ar ? "التاريخ" : "History", href: "#history" },
        { label: ar ? "الشهادات" : "Certificates", href: "#safety" },
        { label: ar ? "علاقات المستثمرين" : "Investor Relations", href: "#investors" }
      ]
    },
    {
      label: ar ? "القدرات" : "Capabilities",
      links: [
        { label: ar ? "من المسح إلى الصيانة" : "Survey to maintenance", href: "#capabilities" },
        { label: ar ? "شبكة مصر" : "The Egypt network", href: "#network" },
        { label: ar ? "الخبرات والمشاريع" : "Experience & projects", href: "#stories" }
      ]
    },
    {
      label: ar ? "السلامة" : "Safety",
      links: [
        { label: ar ? "الصحة والسلامة والبيئة" : "HSE", href: "#safety" },
        { label: ar ? "تعليمات السلامة" : "Safety instructions", href: "#customers" }
      ]
    },
    {
      label: ar ? "العملاء" : "Customers",
      links: [
        { label: ar ? "إجراءات التعاقد" : "Contracting", href: "#customers" },
        { label: ar ? "الفروع" : "Branches", href: "#customers" },
        { label: ar ? "الأخبار" : "Newsroom", href: "#news" }
      ]
    }
  ] as const;

export function Header() {
  const { lang, toggle } = useLang();
  const ar = lang === "ar";
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      {/* Emergency strip — always visible, never experimental */}
      <div className="fixed inset-x-0 top-0 z-[55] flex items-center justify-center gap-2 bg-[#c8342a] px-4 py-1.5 text-white">
        <AlertTriangle size={13} strokeWidth={2.5} aria-hidden />
        <p className="text-[11px] font-bold tracking-[0.14em]">
          {ar ? "طوارئ الغاز" : "GAS EMERGENCY"}{" "}
          <a href={contact.emergencyHref} className="font-mono2 text-[15px] underline underline-offset-2">
            {contact.emergency}
          </a>
        </p>
      </div>

      <header
        className={`fixed inset-x-0 top-[30px] z-50 transition-all duration-500 ${
          scrolled ? "bg-[#060d18]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3.5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Egypt Gas — top">
            <span className="flex h-9 w-9 items-center justify-center bg-[#0c4a90] font-display text-lg font-extrabold text-white">
              <FlameMark />
            </span>
            <span className="leading-none">
              <span className="font-display block text-[19px] font-extrabold tracking-tight text-white">
                {ar ? "غاز مصر" : "EGYPT GAS"}
              </span>
              <span className="font-mono2 block text-[9px] tracking-[0.3em] text-[#9db0c4]">
                EST. 1983
              </span>
            </span>
          </a>

          <nav aria-label={ar ? "التنقل الرئيسي" : "Primary"} className="hidden items-center gap-1 lg:flex">
            {groups(ar).map((g) => (
              <div key={g.label} className="relative" onMouseLeave={() => setMega(null)}>
                <button
                  onMouseEnter={() => setMega(g.label)}
                  onClick={() => setMega(mega === g.label ? null : g.label)}
                  aria-expanded={mega === g.label}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
                >
                  {g.label}
                  <ChevronDown size={13} className={`transition-transform ${mega === g.label ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mega === g.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: reduce ? 0 : 0.22 }}
                      className="absolute start-0 top-full w-64 border border-[#24405f] bg-[#0a1424] p-2 shadow-2xl"
                    >
                      {g.links.map((l) => (
                        <a
                          key={l.href + l.label}
                          href={l.href}
                          onClick={() => setMega(null)}
                          className="block px-4 py-3 text-sm text-white/80 transition-colors hover:bg-[#0c4a90] hover:text-white"
                        >
                          {l.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={ar ? "Switch to English" : "التحويل إلى العربية"}
              className="flex items-center gap-1.5 border border-white/25 px-3 py-2 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:border-[#a9cf38] hover:text-[#a9cf38]"
            >
              <Globe size={13} /> {ar ? "EN" : "عربي"}
            </button>
            <a
              href={contact.customersHref}
              className="hidden items-center gap-2 bg-[#087d59] px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#0a9a6e] sm:flex"
            >
              <Phone size={13} /> {contact.customers}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label={ar ? "فتح القائمة" : "Open menu"}
              className="bg-white p-2.5 text-[#0a1424] lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ar ? "القائمة" : "Menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#0a1424] text-white"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-xl font-extrabold">{ar ? "غاز مصر" : "EGYPT GAS"}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label={ar ? "إغلاق" : "Close"}
                autoFocus
                className="bg-white p-2.5 text-[#0a1424]"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-8 px-5 pb-10" aria-label={ar ? "أقسام الموقع" : "Sections"}>
              {groups(ar).map((g) => (
                <div key={g.label}>
                  <p className="eyebrow text-[#a9cf38]">{g.label}</p>
                  <div className="mt-3 space-y-1">
                    {g.links.map((l) => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-display block border-b border-white/10 py-3 text-2xl"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid gap-3 pt-2">
                <a href={contact.emergencyHref} className="flex items-center justify-center gap-2 bg-[#c8342a] py-4 text-sm font-bold">
                  <AlertTriangle size={16} /> {ar ? "طوارئ" : "Emergency"} {contact.emergency}
                </a>
                <a href={contact.customersHref} className="flex items-center justify-center gap-2 bg-[#087d59] py-4 text-sm font-bold">
                  <Phone size={16} /> {ar ? "خدمة العملاء" : "Customer service"} {contact.customers}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FlameMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2c1 4-3 5.5-3 10a4.5 4.5 0 0 0 9 .5C18.5 8 14 6 12 2Zm0 19a6.5 6.5 0 0 1-6.5-6.5c0-1 .2-2 .6-2.9C7.6 14 9 15.5 9 15.5c-.5-3 1-5.5 1-5.5s4 3.5 4 7.5A6.5 6.5 0 0 1 12 21Z" />
    </svg>
  );
}

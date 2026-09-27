"use client";
import { AlertTriangle, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { useLang, pick } from "@/lib/i18n";

export function SiteFooter() {
  const { lang } = useLang();
  const ar = lang === "ar";
  return (
    <footer className="border-t border-[#24405f] bg-[#060d18] pb-8 pt-14">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl font-black tracking-tight text-white">
              {ar ? "غاز مصر" : "EGYPT GAS"}
            </p>
            <p className="font-mono2 mt-2 text-[10px] tracking-[0.3em] text-[#9db0c4]">EST. 1983 · CAIRO</p>
            <p className="mt-5 flex max-w-[46ch] items-start gap-2 text-sm leading-relaxed text-white/70">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#a9cf38]" />
              {pick(contact.hq, lang)}
            </p>
          </div>
          <nav aria-label={ar ? "روابط" : "Links"} className="grid grid-cols-2 gap-8 text-sm lg:col-span-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#9db0c4]">{ar ? "الشركة" : "Company"}</p>
              <ul className="mt-4 space-y-2.5 text-white/80">
                {[
                  { label: ar ? "القدرات" : "Capabilities", href: "#capabilities" },
                  { label: ar ? "الخبرات" : "Experience", href: "#stories" },
                  { label: ar ? "السلامة" : "Safety", href: "#safety" },
                  { label: ar ? "التاريخ" : "History", href: "#history" }
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white">
                      <span className="link-line">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#9db0c4]">{ar ? "الخدمات" : "Services"}</p>
              <ul className="mt-4 space-y-2.5 text-white/80">
                {[
                  { label: ar ? "المستثمرون" : "Investors", href: "#investors" },
                  { label: ar ? "الأخبار" : "News", href: "#news" },
                  { label: ar ? "خدمة العملاء" : "Customers", href: "#customers" },
                  { label: "egyptgas.com.eg", href: "https://www.egyptgas.com.eg/" }
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="hover:text-white"
                    >
                      <span className="link-line">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#9db0c4]">{ar ? "اتصال مباشر" : "Direct"}</p>
            <a href={contact.emergencyHref} className="mt-4 flex items-center gap-2 bg-[#c8342a] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#a52820]">
              <AlertTriangle size={16} /> {ar ? "طوارئ" : "Emergency"} <span className="font-mono2">{contact.emergency}</span>
            </a>
            <a href={contact.customersHref} className="mt-2 flex items-center gap-2 border border-[#24405f] px-4 py-3 text-sm font-bold text-white transition-colors hover:border-[#a9cf38]">
              <Phone size={16} className="text-[#a9cf38]" /> <span className="font-mono2">{contact.customers}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <Mail size={15} /> {contact.email}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© 2026 {ar ? "غاز مصر" : "Egypt Gas"} · {ar ? "جميع الحقوق محفوظة للشركة" : "All rights reserved"}</p>
          <p className="text-[11px] uppercase tracking-[0.16em]">
            {ar ? "مفهوم رقمي مستقل من" : "Independent digital concept by"}{" "}
            <a href="https://grindctrl.cloud" className="font-semibold text-[#a9cf38] underline underline-offset-4">
              GrindCTRL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

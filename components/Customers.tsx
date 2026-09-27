"use client";
import { AlertTriangle, FileText, MapPin, Phone, ShieldCheck } from "lucide-react";
import { contact } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Eyebrow, Masked, Reveal } from "./Chrome";

export function Customers() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const actions = [
    {
      icon: FileText,
      title: ar ? "إجراءات التعاقد" : "Contracting procedures",
      body: ar ? "خطوات التعاقد على الغاز الطبيعي للمنازل والمنشآت." : "How households and establishments contract natural gas.",
      cta: ar ? "ابدأ التعاقد" : "Start contracting",
      href: "https://www.egyptgas.com.eg/StaticPages.aspx?Id=47"
    },
    {
      icon: ShieldCheck,
      title: ar ? "تعليمات السلامة" : "Safety instructions",
      body: ar ? "إرشادات الاستخدام الآمن — اقرأها قبل أي عطل." : "Safe-use guidance — read before any fault.",
      cta: ar ? "اقرأ التعليمات" : "Read guidance",
      href: "https://www.egyptgas.com.eg/StaticPages.aspx?Id=48"
    },
    {
      icon: MapPin,
      title: ar ? "الفروع وخدمة العملاء" : "Branches & service points",
      body: ar ? "مقرات خدمة العملاء في مناطق الامتياز." : "Customer offices across the concession areas.",
      cta: ar ? "اعثر على فرع" : "Find a branch",
      href: "https://www.egyptgas.com.eg/StaticPages.aspx?Id=44"
    }
  ];

  return (
    <section id="customers" aria-label={ar ? "خدمة العملاء" : "Customer services"} className="bg-[#0a1424] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Eyebrow index="06">{ar ? "خدمة العملاء" : "Customer services"}</Eyebrow>
        <div className="mt-5 grid gap-8 lg:grid-cols-12">
          <Masked
            as="h2"
            className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1.0] text-white lg:col-span-7"
            lines={ar ? ["نخدم 6.8 مليون عميل.", "نرد على واحد."] : ["Serving 6.8 million.", "Answering one."]}
          />
          <Reveal delay={0.15} className="self-end lg:col-span-5">
            <p className="max-w-[44ch] text-[15px] leading-relaxed text-white/70">
              {ar
                ? "خدمة حقيقية لعملاء حقيقيين: تعاقد، سلامة، فروع — وطوارئ لا تختبئ خلف أي تصميم."
                : "Real service for real customers: contracting, safety, branches — and emergency access hidden behind nothing."}
            </p>
          </Reveal>
        </div>

        {/* Emergency — unmissable */}
        <Reveal>
          <a
            href={contact.emergencyHref}
            className="group mt-12 flex flex-col gap-4 bg-[#c8342a] p-7 transition-colors hover:bg-[#a52820] md:flex-row md:items-center md:justify-between md:p-10"
            aria-label={ar ? "اتصل بالطوارئ 129" : "Call emergency 129"}
          >
            <span className="flex items-center gap-5">
              <AlertTriangle size={40} className="shrink-0 text-white" strokeWidth={1.8} />
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                  {ar ? "رائحة غاز؟ تسرب؟ اتصل فورًا" : "Smell gas? Suspect a leak? Call now"}
                </span>
                <span className="font-mono2 mt-1 block text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-none text-white">
                  {ar ? "طوارئ 129" : "Emergency 129"}
                </span>
              </span>
            </span>
            <span className="flex items-center gap-2 self-start bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c8342a] md:self-center">
              <Phone size={16} /> {contact.emergency}
            </span>
          </a>
        </Reveal>

        <div className="mt-6 grid gap-px bg-[#24405f] md:grid-cols-3">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07} className="bg-[#060d18]">
              <div className="flex h-full flex-col p-7 md:p-8">
                <a.icon size={26} strokeWidth={1.6} className="text-[#a9cf38]" />
                <h3 className="font-display mt-5 text-2xl font-extrabold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{a.body}</p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-block pt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                >
                  <span className="link-line">{a.cta}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 border border-[#24405f] px-7 py-5 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-[#a9cf38]" />
              {ar ? "خدمة العملاء" : "Customer service"}{" "}
              <a href={contact.customersHref} className="font-mono2 font-semibold text-white">{contact.customers}</a>
            </span>
            <span className="font-mono2">{contact.email}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

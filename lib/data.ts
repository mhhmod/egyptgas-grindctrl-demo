import type { Bilingual } from "./i18n";

// Every verifiable claim below comes from egyptgas.com.eg public pages
// (homepage counters, concession scope, history milestones, certificates,
// footer contacts, news). Nothing is invented.

export const contact = {
  emergency: "129",
  emergencyHref: "tel:129",
  customers: "19220",
  customersHref: "tel:19220",
  email: "egyptgas@egyptgas.com.eg",
  hq: {
    en: "30 El-Mofatshin St, Almaza, Heliopolis, Cairo",
    ar: "30 شارع المفتشين، ألماظة، مصر الجديدة، القاهرة"
  } as Bilingual
};

export const counters: { value: number; label: Bilingual; prefix?: string }[] = [
  { value: 6831190, label: { en: "Residential customers", ar: "عميل سكني" } },
  { value: 8901, label: { en: "Commercial customers", ar: "عميل تجاري" } },
  { value: 1465, label: { en: "Industrial customers", ar: "عميل صناعي" } },
  { value: 7000, prefix: "~", label: { en: "Employees", ar: "موظف" } }
];

export interface MapRegion {
  id: string;
  x: number;
  y: number;
  name: Bilingual;
  activity: Bilingual;
}

export const mapRegions: MapRegion[] = [
  { id: "alex", x: 148, y: 96, name: { en: "Alexandria — Amerya", ar: "الإسكندرية — العامرية" }, activity: { en: "Distribution networks, operation & maintenance since 2015", ar: "شبكات توزيع وتشغيل وصيانة منذ 2015" } },
  { id: "portsaid", x: 302, y: 78, name: { en: "Port Said", ar: "بورسعيد" }, activity: { en: "Connected 1997", ar: "تم التوصيل 1997" } },
  { id: "delta", x: 222, y: 122, name: { en: "Delta — Gharbia · Dakahlia · Menoufia · Qalyubia", ar: "الدلتا — الغربية · الدقهلية · المنوفية · القليوبية" }, activity: { en: "Core concession cluster, 860k+ contracted clients across Delta & Upper Egypt (2014)", ar: "قلب مناطق الامتياز، أكثر من 860 ألف عميل متعاقد بالدلتا والصعيد (2014)" } },
  { id: "cairo", x: 256, y: 152, name: { en: "Cairo — Marg · Ain Shams · Shorouk", ar: "القاهرة — المرج · عين شمس · الشروق" }, activity: { en: "First project 1984; headquarters in Heliopolis", ar: "أول مشروع 1984؛ المقر الرئيسي بمصر الجديدة" } },
  { id: "ismailia", x: 302, y: 142, name: { en: "Ismailia — Moustakbal", ar: "الإسماعيلية — المستقبل" }, activity: { en: "Connected 2000; military entity & industrial zone 2018", ar: "تم التوصيل 2000؛ الكيان العسكري والمنطقة الصناعية 2018" } },
  { id: "sinai", x: 332, y: 202, name: { en: "South Sinai", ar: "جنوب سيناء" }, activity: { en: "Connected 2007", ar: "تم التوصيل 2007" } },
  { id: "luxor", x: 256, y: 398, name: { en: "Luxor · Qena", ar: "الأقصر · قنا" }, activity: { en: "Upper Egypt connected 2009 — homes, industry, aluminium, sugar & paper", ar: "توصيل الصعيد 2009 — منازل ومصانع وألومنيوم وسكر وورق" } },
  { id: "aswan", x: 266, y: 468, name: { en: "Aswan", ar: "أسوان" }, activity: { en: "Paper, sugar & iron-and-steel plants connected", ar: "توصيل مصانع الورق والسكر والحديد والصلب" } }
];

export const abroad = [
  { name: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" }, activity: { en: "Industrial O&M since 2008 · branch opened 2019", ar: "تشغيل وصيانة صناعية منذ 2008 · فرع 2019" } },
  { name: { en: "Amman, Jordan", ar: "عمّان، الأردن" }, activity: { en: "Connected 2017 · northern pipeline from 2018", ar: "تم التوصيل 2017 · خط الأنابيب الشمالي من 2018" } },
  { name: { en: "Kuwait", ar: "الكويت" }, activity: { en: "Customer service opened 2019", ar: "خدمة عملاء منذ 2019" } },
  { name: { en: "Iraq · Saudi Arabia", ar: "العراق · السعودية" }, activity: { en: "International representative offices", ar: "مكاتب تمثيل دولية" } }
];

export interface Stage {
  no: string;
  name: Bilingual;
  body: Bilingual;
  proof: Bilingual;
}

export const stages: Stage[] = [
  { no: "01", name: { en: "Survey", ar: "المسح" }, body: { en: "Field survey and customer, appliance and site data collection.", ar: "أعمال الرفع المساحي وتجميع بيانات العملاء والأجهزة والمواقع." }, proof: { en: "Every network begins on foot", ar: "كل شبكة تبدأ من الميدان" } },
  { no: "02", name: { en: "Design", ar: "التصميم" }, body: { en: "Engineering design and execution drawings to international standards, with the latest technology.", ar: "التصميم الهندسي وإصدار الخرائط التنفيذية وفق المعايير الدولية وبأحدث التقنيات." }, proof: { en: "Drawn to code, built to last", ar: "مرسوم بالكود، مبني ليدوم" } },
  { no: "03", name: { en: "Engineer", ar: "الهندسة" }, body: { en: "Steel and HDPE high-pressure lines; pressure-reduction and metering stations in all pressures and capacities.", ar: "خطوط الصلب والبولي إيثيلين عالية الضغط؛ محطات تخفيض الضغط والقياس بجميع الضغوط والسعات." }, proof: { en: "Separators · filters · heaters · meters · regulators · odorization", ar: "فواصل · فلاتر · سخانات · عدادات · منظمات · إضافة رائحة" } },
  { no: "04", name: { en: "Build", ar: "الإنشاء" }, body: { en: "Distribution networks, regulators and service lines — plus integrated civil and mechanical works with own equipment and crews.", ar: "شبكات التوزيع والمنظمات وخطوط الخدمة — مع أعمال مدنية وميكانيكية متكاملة بمعدات وأطقم الشركة." }, proof: { en: "GRE · tanks · offshore platforms · splash-zone coating", ar: "فيبر · خزانات · منصات بحرية · طلاء منطقة الرذاذ" } },
  { no: "05", name: { en: "Connect", ar: "التوصيل" }, body: { en: "Household networks and safe conversion of home and commercial appliances to natural gas.", ar: "شبكات المنازل وتحويل الأجهزة المنزلية والتجارية للعمل بالغاز بأمان وكفاءة." }, proof: { en: "A meter and regulator in every home", ar: "عداد ومنظم في كل وحدة سكنية" } },
  { no: "06", name: { en: "Operate", ar: "التشغيل" }, body: { en: "Operation of networks across concession areas, protecting lives and property.", ar: "تشغيل شبكات مناطق الامتياز بما يضمن سلامة الأعمال والحفاظ على الأرواح والممتلكات." }, proof: { en: "Round-the-clock control", ar: "تحكم على مدار الساعة" } },
  { no: "07", name: { en: "Maintain", ar: "الصيانة" }, body: { en: "Maintenance, rehabilitation and in-house manufacturing of network components in dedicated workshops.", ar: "الصيانة وإعادة التأهيل وتصنيع مكونات الشبكات في ورش الشركة المجهزة." }, proof: { en: "Best materials · latest equipment · international codes", ar: "أجود الخامات · أحدث المعدات · الأكواد الدولية" } }
];

export interface Story {
  year: string;
  title: Bilingual;
  place: Bilingual;
  body: Bilingual;
  image: string;
  tags: Bilingual[];
}

export const stories: Story[] = [
  {
    year: "1996",
    title: { en: "Africa's first natural-gas fueling station", ar: "أول محطة غاز طبيعي للسيارات في أفريقيا والشرق الأوسط" },
    place: { en: "Egypt", ar: "مصر" },
    body: { en: "Egypt Gas put natural gas in the tank — opening the continent's first CNG station and a fuel market that never looked back.", ar: "وضعت غاز مصر الغاز الطبيعي في خزان الوقود — أول محطة في أفريقيا والشرق الأوسط وسوق وقود لم يتوقف منذ ذلك الحين." },
    image: "https://images.unsplash.com/photo-1545262810-77515b6ee1ae?auto=format&fit=crop&w=1800&q=70",
    tags: [{ en: "CNG", ar: "غاز السيارات" }, { en: "First of its kind", ar: "الأول من نوعه" }]
  },
  {
    year: "2015",
    title: { en: "800 metres beneath the Nile", ar: "800 متر تحت نهر النيل" },
    place: { en: "Nile crossing · 16-inch", ar: "تعدية النيل · 16 بوصة" },
    body: { en: "An 800-metre, 16-inch steel crossing beneath the river — feeding Amerya and Alexandria.", ar: "تعدية بطول 800 متر وقطر 16 بوصة تحت النهر — لتغذية العامرية والإسكندرية." },
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1800&q=70",
    tags: [{ en: "High-pressure", ar: "ضغط عالٍ" }, { en: "River crossing", ar: "تعدية نهرية" }]
  },
  {
    year: "2017",
    title: { en: "A new capital, on gas from day one", ar: "عاصمة جديدة تعمل بالغاز من اليوم الأول" },
    place: { en: "New Administrative Capital · Jordan", ar: "العاصمة الإدارية · الأردن" },
    body: { en: "Connecting the New Administrative Capital at home and Amman abroad — then starting the northern pipeline in Jordan a year later.", ar: "توصيل العاصمة الإدارية الجديدة في الداخل وعمّان في الخارج — ثم بدء خط الأنابيب الشمالي بالأردن بعدها بعام." },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=70",
    tags: [{ en: "EPC", ar: "EPC" }, { en: "Cross-border", ar: "عابر للحدود" }]
  },
  {
    year: "2008 — 2019",
    title: { en: "A decade in Abu Dhabi before the branch", ar: "عقد في أبوظبي قبل الفرع" },
    place: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    body: { en: "Operating and maintaining industrial-zone plants since 2008 — the branch in 2019 formalised what the field had already proven.", ar: "تشغيل وصيانة مصانع المناطق الصناعية منذ 2008 — وجاء فرع 2019 ليوثّق ما أثبته الميدان." },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=70",
    tags: [{ en: "O&M", ar: "تشغيل وصيانة" }, { en: "Gulf", ar: "الخليج" }]
  }
];

export interface TimelineEntry {
  year: string;
  text: Bilingual;
  major?: boolean;
}

export const timeline: TimelineEntry[] = [
  { year: "1983", text: { en: "Founded by ministerial decree — Egypt's first natural gas company", ar: "التأسيس بقرار وزاري — أول شركة مصرية للغاز الطبيعي" }, major: true },
  { year: "1984", text: { en: "First project: Ain Shams, Cairo", ar: "أول مشروع: عين شمس بالقاهرة" } },
  { year: "1990", text: { en: "Haram, Giza connected", ar: "توصيل الهرم بالجيزة" } },
  { year: "1996", text: { en: "First CNG station in Africa & the Middle East", ar: "أول محطة غاز سيارات في أفريقيا والشرق الأوسط" }, major: true },
  { year: "1997–2002", text: { en: "Port Said · Menoufia · Ismailia & Qalyubia · Gharbia", ar: "بورسعيد · المنوفية · الإسماعيلية والقليوبية · الغربية" } },
  { year: "2007–08", text: { en: "South Sinai · industrial O&M in Abu Dhabi", ar: "جنوب سيناء · تشغيل صناعي في أبوظبي" } },
  { year: "2009", text: { en: "Upper Egypt: Luxor, Aswan & Qena", ar: "الصعيد: الأقصر وأسوان وقنا" }, major: true },
  { year: "2013–15", text: { en: "Naga Hammadi aluminium, Deshna & Qus plants · 800 m Nile crossing", ar: "ألومنيوم نجع حمادي ومصانع دشنا وقوص · تعدية النيل 800 متر" }, major: true },
  { year: "2016–18", text: { en: "Dakahlia · Jordan & the New Capital · northern Jordan pipeline", ar: "الدقهلية · الأردن والعاصمة الإدارية · خط الأردن الشمالي" } },
  { year: "2019", text: { en: "Abu Dhabi branch · customer service in Kuwait", ar: "فرع أبوظبي · خدمة عملاء في الكويت" }, major: true }
];

export const certs = [
  { title: { en: "ISO — occupational health & safety, held for years", ar: "الأيزو — سلامة وصحة مهنية لعدة سنوات" } as Bilingual },
  { title: { en: "UAE branch — triple ISO: quality, environment, HSE", ar: "فرع الإمارات — ثلاث شهادات: جودة وبيئة وسلامة" } as Bilingual },
  { title: { en: "Calibration lab accredited ISO/IEC 17025:2005 (EGAC)", ar: "اعتماد مختبر المعايرة ISO/IEC 17025:2005" } as Bilingual }
];

export const news = [
  {
    tag: { en: "Safety", ar: "السلامة" } as Bilingual,
    date: { en: "July 2026", ar: "يوليو 2026" } as Bilingual,
    title: { en: "The danger of climbing gas risers", ar: "مخاطر تسلق مواسير الغاز" },
    body: { en: "A public-awareness film on why service pipes are never a ladder.", ar: "فيلم توعية عن خطورة استخدام مواسير الغاز كسلم." },
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=70"
  },
  {
    tag: { en: "Events", ar: "الفعاليات" } as Bilingual,
    date: { en: "March 2026", ar: "مارس 2026" } as Bilingual,
    title: { en: "Egypt Gas at EGYPES 2026", ar: "غاز مصر في إيجيبس 2026" },
    body: { en: "Partners invited to the stand at Egypt's flagship energy show.", ar: "دعوة الشركاء لزيارة الجناح في معرض الطاقة الأول بمصر." },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=70"
  },
  {
    tag: { en: "People", ar: "العاملون" } as Bilingual,
    date: { en: "January 2026", ar: "يناير 2026" } as Bilingual,
    title: { en: "A doctorate in business administration", ar: "دكتوراه في إدارة الأعمال" },
    body: { en: "Congratulations to the deputy chairman on his DBA — expertise from the top down.", ar: "تهنئة لنائب رئيس الشركة على الدكتوراه — خبرة تبدأ من القمة." },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70"
  }
];

export const heroImages = {
  main: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2100&q=70",
  field: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1800&q=70",
  crew: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=70",
  pipes: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1800&q=70"
};

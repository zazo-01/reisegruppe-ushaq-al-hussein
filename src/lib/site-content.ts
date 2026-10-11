export type TripEntry = { id: string; ar: string; de: string; date: string; visible: boolean; aliases?: string[]; hidden?: boolean; programAr?: string; programDe?: string; statusAr?: string; statusDe?: string; descAr?: string; descDe?: string; imageUrl?: string };
export type ContactEntry = { id: string; ar: string; de: string; roleAr: string; roleDe: string; phone: string; whatsapp: string; visible?: boolean; hidden?: boolean };
export type NewsEntry = { ar: string; de: string; bodyAr: string; bodyDe: string; hidden?: boolean };
export type DuaCategory = string;
export const duaCategories: Array<{ id: DuaCategory; ar: string; de: string }> = [
  { id: "karbala", ar: "كربلاء المقدسة", de: "Kerbela" },
  { id: "najaf", ar: "النجف الأشرف", de: "Nadschaf" },
  { id: "kazimiyya", ar: "الكاظمية المقدسة", de: "Al-Kazimiyya" },
  { id: "samarra", ar: "سامراء", de: "Samarra" },
  { id: "mashhad", ar: "مشهد المقدسة", de: "Maschhad" },
  { id: "qom", ar: "قم المقدسة", de: "Qom" },
  { id: "mecca-medina", ar: "مكة والمدينة", de: "Mekka & Medina" },
  { id: "general", ar: "الأدعية العامة والتعقيبات", de: "Allgemeine Bittgebete" },
];
export function duaCategoryOf(d: { id: string; category?: DuaCategory }): DuaCategory {
  return d.category ?? (d.id === "ashura" || d.id === "warith" ? "karbala" : "general");
}
export type Reciter = { name: string; url: string };
export type DuaEntry = { id: string; ar: string; de: string; textAr: string; textDe: string; textEn?: string; link: string; hidden?: boolean; category?: DuaCategory; reciters?: Reciter[] };
export type ItineraryEntry = { id: string; date: string; time: string; titleAr: string; titleDe: string; place: string; notes: string; gathering: boolean; hidden?: boolean };
export type LocationKind = "hotel" | "shrine" | "gathering";
export type LocationEntry = { id: string; kind: LocationKind; ar: string; de: string; address: string; mapsUrl: string; hidden?: boolean };
export type FaqEntry = { id: string; qAr: string; qDe: string; qEn?: string; aAr: string; aDe: string; aEn?: string; hidden?: boolean };
export type ResourceEntry = { id: string; ar: string; de: string; en?: string; textAr: string; textDe: string; textEn?: string; pdfUrl?: string; audioUrl?: string; place?: string; hidden?: boolean };
export type TripTypeEntry = { id: string; ar: string; de: string; statusAr: string; statusDe: string; hidden?: boolean };
export type ShrineEntry = { id: string; ar: string; de: string; imageUrl?: string; hidden?: boolean };
export type NoteEntry = { id: string; ar: string; de: string; hidden?: boolean };
export type EmergencyEntry = { id: string; ar: string; de: string; phone: string; hidden?: boolean };
export type DonationEntry = { id: string; ar: string; de: string; value: string; hidden?: boolean };
export type RoomEntry = { id: string; name: string; city: string; hotel: string; floor: string; room: string; hidden?: boolean };
export type GuidelineEntry = { id: string; ar: string; de: string; destAr?: string; destDe?: string; pdf?: string; images?: string; hidden?: boolean };
export type IraqItem = { id: string; kind: string; ar: string; de: string; bodyAr: string; bodyDe: string; hidden?: boolean };
export type LabelMap = Record<string, { ar: string; de: string; hidden?: boolean; target?: string }>;
/** Returns an admin-renamed title or the given default. */
export function labelOf(c: { labels?: LabelMap | undefined }, key: string, ar: string, de: string) { const l = c.labels?.[key]; return { ar: l?.ar || ar, de: l?.de || de }; }
export type MemoryEntry = { id: string; imageUrl: string; ar: string; de: string; place: string; date: string; hidden?: boolean };
export type ModeLabels = { admin: string; haj: string; leader: string };
export type AlertEntry = { ar: string; de: string; active: boolean };
export type PaymentEntry = { visible: boolean; accountName: string; bankName: string; iban: string; bic: string };
export type SiteContent = {
  duas: DuaEntry[];
  alert: AlertEntry;
  trips: TripEntry[];
  hotels: { kadhimiya: string; karbala: string; najaf: string };
  program: { ar: string; de: string };
  visa: { eu: string; nonEu: string; airportsAr?: string; airportsDe?: string };
  payment: PaymentEntry;
  news: NewsEntry[];
  contacts: ContactEntry[];
  contactsVisible: boolean;
  itinerary: ItineraryEntry[];
  locations: LocationEntry[];
  faqs: FaqEntry[];
  occasions: ResourceEntry[];
  hadiths: ResourceEntry[];
  tripTypes: TripTypeEntry[];
  shrines: ShrineEntry[];
  visaNotes: NoteEntry[];
  emergency: EmergencyEntry[];
  donations: DonationEntry[];
  modeLabels: ModeLabels;
  donationIntro?: { ar: string; de: string } | undefined;
  donationContact?: { ar?: string; de?: string; link?: string } | undefined;
  memories: MemoryEntry[];
  rooms?: RoomEntry[];
  guidelines?: GuidelineEntry[];
  guidelinesPdf?: string | undefined;
  iraqItems?: IraqItem[];
  labels?: LabelMap | undefined;
  reviewUrl?: string | undefined;
  trash?: TrashEntry[];
  cms?: CmsConfig | undefined;
};
export type CmsItem = { id: string; ar: string; de: string; bodyAr?: string; bodyDe?: string; imageUrl?: string; link?: string; pdfUrl?: string; hidden?: boolean };
export type CmsSection = { id: string; ar: string; de: string; icon: string; items: CmsItem[]; hidden?: boolean };
/** Free app structure: tile order, hidden tiles, which folder holds which tile, admin-created sections and app design. */
export type BannerConfig = { image?: string; opacity?: number; blur?: number; titleAr?: string; titleDe?: string; lineAr?: string; lineDe?: string; textAr?: string; textDe?: string };
export type RoomCalcHotel = { id: string; tripKey: string; city: string; name: string; d: number; t: number; q: number; s: number; hidden?: boolean };
export type CmsConfig = { order?: string[]; hiddenTiles?: string[]; parents?: Record<string, string>; sections?: CmsSection[]; hajToolsEnabled?: boolean; columns?: 2 | 3; theme?: string; banner?: BannerConfig; roomCalc?: { ar?: string; de?: string; subAr?: string; subDe?: string; hidden?: boolean; hajToolsEnabled?: boolean; labels?: Record<string, { ar?: string; de?: string }>; hotels?: RoomCalcHotel[] } };
export type TrashEntry = { id: string; section: string; item: Record<string, string | number | boolean | null | undefined | Array<{ name: string; url: string }>>; deletedAt: number };

export const defaultContacts: ContactEntry[] = [
  { id: "yasser", ar: "الحاج ياسر الدر", de: "Hajj Yasser Aldor", roleAr: "المسؤول العام — خادم حملة عشاق الحسين - ألمانيا", roleDe: "Allgemeiner Verantwortlicher der Reisegruppe", phone: "+49 1577 3055365", whatsapp: "https://wa.me/49015773055365" },
  { id: "samia", ar: "الحجة سامية فقيه", de: "Hajje Samia Fakih", roleAr: "للأخوات فقط — عند الاستفسار", roleDe: "Nur für Schwestern – bei Rückfragen", phone: "+49 1578 5616843", whatsapp: "https://wa.me/49015785616843" },
  { id: "khadije", ar: "الحجة خديجة إسماعيل", de: "Hajje Khadije Ismail", roleAr: "للأخوات فقط — عند الاستفسار", roleDe: "Nur für Schwestern – bei Rückfragen", phone: "+49 176 63409995", whatsapp: "https://wa.me/49017663409995" },
];

export const defaultContent: SiteContent = {
  contacts: defaultContacts,
  contactsVisible: true,
  itinerary: [],
  locations: [],
  faqs: [
    { id: "passport", qAr: "ما مدة صلاحية جواز السفر المطلوبة؟", qDe: "Wie lange muss der Reisepass gültig sein?", qEn: "How long must my passport be valid?", aAr: "يجب أن يكون جواز السفر صالحاً لمدة لا تقل عن ستة أشهر عند موعد السفر.", aDe: "Der Reisepass muss zum Reisezeitpunkt noch mindestens sechs Monate gültig sein.", aEn: "Your passport must be valid for at least six months at the time of travel." },
    { id: "visa", qAr: "هل أحتاج إلى فيزا؟", qDe: "Benötige ich ein Visum?", qEn: "Do I need a visa?", aAr: "تعتمد الفيزا ورسومها على نوع جواز السفر والوجهة. تُنشر التفاصيل المؤكدة قبل الرحلة.", aDe: "Visum und Gebühren richten sich nach Reisepass und Reiseziel. Bestätigte Angaben werden vor der Reise veröffentlicht.", aEn: "Visa and fees depend on your passport and destination. Confirmed details are published before the trip." },
    { id: "baggage", qAr: "ما وزن الأمتعة المسموح؟", qDe: "Wie viel Gepäck ist erlaubt?", qEn: "How much baggage is allowed?", aAr: "يُحدد وزن الأمتعة حسب شركة الطيران والحجز، ويُعلن مع البرنامج النهائي للرحلة.", aDe: "Die Freigepäckmenge richtet sich nach Fluggesellschaft und Buchung und wird mit dem endgültigen Reiseprogramm bekannt gegeben.", aEn: "Baggage allowance depends on the airline and booking and is announced with the final programme." },
  ],
  occasions: [],
  hadiths: [],
  tripTypes: [
    { id: "iraq", ar: "زيارة العراق", de: "Irak-Reise", statusAr: "عرض التفاصيل", statusDe: "Details anzeigen" },
    { id: "umrah", ar: "العمرة", de: "Umrah", statusAr: "زيارة عامة", statusDe: "Allgemeine Reiseart" },
    { id: "iran", ar: "إيران — زيارة الإمام الرضا (ع)", de: "Iran — Zyarat Imam Rida (as)", statusAr: "سيُعلن قريباً", statusDe: "Wird bald bekannt gegeben" },
    { id: "hajj", ar: "الحج", de: "Hadsch", statusAr: "سيُعلن قريباً", statusDe: "Wird bald bekannt gegeben" },
  ],
  shrines: duaCategories.filter((c) => c.id !== "general").map((c) => ({ id: c.id, ar: c.ar, de: c.de })),
  visaNotes: [],
  emergency: [],
  donations: [],
  memories: [],
  modeLabels: { admin: "الإدارة", haj: "معاينة كحاج", leader: "مسؤول الحملة" },
  alert: { ar: "", de: "", active: false },
  duas: [
    { id: "ashura", ar: "زيارة عاشوراء", de: "Ziyarat Ashura", textAr: "السَّلامُ عَلَيْكَ يا أبا عَبْدِ اللهِ، السَّلامُ عَلَيْكَ يَا ابْنَ رَسُولِ اللهِ...", textDe: "As-salāmu ʿalayka yā Abā ʿAbdillāh, as-salāmu ʿalayka yabna Rasūlillāh... — Friede sei mit dir, o Abu Abdillah, Friede sei mit dir, o Sohn des Gesandten Gottes.", link: "" },
    { id: "warith", ar: "زيارة وارث", de: "Ziyarat Warith", textAr: "السَّلامُ عَلَيْكَ يا وارِثَ آدَمَ صَفْوَةِ اللهِ...", textDe: "As-salāmu ʿalayka yā wāritha Ādama ṣafwatillāh... — Friede sei mit dir, o Erbe Adams, des Auserwählten Gottes.", link: "" },
    { id: "tawassul", ar: "دعاء التوسل", de: "Bittgebet Tawassul", textAr: "اللّهُمَّ إنِّي أسْألُكَ وَأتَوَجَّهُ إلَيْكَ بِنَبِيِّكَ نَبِيِّ الرَّحْمَةِ مُحَمَّدٍ...", textDe: "Allāhumma innī asʾaluka wa atawajjahu ilayka bi-nabiyyika nabiyyi r-raḥmati Muḥammad... — O Gott, ich bitte Dich und wende mich an Dich durch Deinen Propheten, den Propheten der Barmherzigkeit, Muhammad.", link: "" },
    { id: "kumayl", ar: "دعاء كميل", de: "Bittgebet Kumayl", textAr: "اللّهُمَّ إنِّي أسْألُكَ بِرَحْمَتِكَ الَّتي وَسِعَتْ كُلَّ شَيْءٍ...", textDe: "Allāhumma innī asʾaluka bi-raḥmatika llatī wasiʿat kulla shayʾ... — O Gott, ich bitte Dich bei Deiner Barmherzigkeit, die alles umfasst.", link: "" },
  ],
    trips: [
    { id: "iraq", ar: "زيارة العراق", de: "Irak Ziyara", date: "01.12–09.12.2026", visible: true },
    { id: "winter", ar: "زيارة العراق - عطلة الشتاء / رأس السنة", de: "Irak Ziyara - Winterferien / Neujahr", date: "23.12.2026–01.01.2027", visible: true },
    { id: "umrah", ar: "العمرة", de: "Umrah", date: "13.01–22.01.2027", visible: true },
  ],
  hotels: { kadhimiya: "", karbala: "", najaf: "" },
  program: {
    ar: "سيتم نشر تفاصيل البرنامج (مواعيد التجمع والإنطلاق والفنادق) هنا فور تحديدها من قبل الحاج.",
    de: "Die Programmdetails (Treffpunkt, Abflug, Hotels) werden hier veröffentlicht, sobald sie von Hajj Yasser festgelegt werden.",
  },
  visa: { eu: "", nonEu: "" },
  payment: { visible: false, accountName: "", bankName: "", iban: "", bic: "" },
  news: [
    { ar: "فتح باب التسجيل لزيارة العتبات المقدسة", de: "Anmeldung für den Besuch der heiligen Stätten geöffnet", bodyAr: "يمكنكم الآن التسجيل في الرحلات المعلنة عبر استمارة التسجيل.", bodyDe: "Sie können sich jetzt über das Anmeldeformular für die angekündigten Reisen anmelden." },
    { ar: "تفاصيل السكن والفنادق جاهزة", de: "Unterkunfts- und Hoteldetails stehen fest", bodyAr: "تم إعداد برنامج السكن بين الكاظمية وكربلاء والنجف.", bodyDe: "Das Unterkunftsprogramm für al-Kazimiyya, Kerbela und Nadschaf steht fest." },
    { ar: "انضمام خطيب حسيني للحملة", de: "Ein Khatib Hosseini begleitet die Reisegruppe", bodyAr: "يرافق الحملة خطيب ورادود حسيني لإحياء المجالس خلال الرحلة.", bodyDe: "Ein Khatib und Radud Hosseini begleiten die Majlis während der Reise." },
  ],
};

export function mergeContent(data: unknown): SiteContent {
  const d = (data && typeof data === "object" ? data : {}) as Partial<SiteContent>;
  return {
    duas: Array.isArray(d.duas) ? d.duas.map((item) => ({ ...item, hidden: item.hidden ?? false })) : defaultContent.duas,
    alert: { ...defaultContent.alert, ...(d.alert ?? {}) },
    trips: Array.isArray(d.trips) && d.trips.length ? d.trips.map((item) => ({ ...item, hidden: item.hidden ?? item.visible === false })) : defaultContent.trips,
    hotels: { ...defaultContent.hotels, ...(d.hotels ?? {}) },
    program: { ...defaultContent.program, ...(d.program ?? {}) },
    visa: { ...defaultContent.visa, ...(d.visa ?? {}) },
    payment: { ...defaultContent.payment, ...(d.payment ?? {}) },
    news: Array.isArray(d.news) ? d.news.map((item) => ({ ...item, hidden: item.hidden ?? false })) : defaultContent.news,
    contacts: Array.isArray(d.contacts) ? d.contacts.map((contact) => ({ ...contact, visible: contact.visible ?? true, hidden: contact.hidden ?? contact.visible === false })) : defaultContacts,
    contactsVisible: d.contactsVisible ?? true,
    itinerary: Array.isArray(d.itinerary) ? d.itinerary.map((item) => ({ ...item, hidden: item.hidden ?? false })) : [],
    locations: Array.isArray(d.locations) ? d.locations.map((item) => ({ ...item, hidden: item.hidden ?? false })) : [],
    faqs: Array.isArray(d.faqs) ? d.faqs.map((item) => ({ ...item, hidden: item.hidden ?? false })) : defaultContent.faqs,
    occasions: Array.isArray(d.occasions) ? d.occasions.map((item) => ({ ...item, hidden: item.hidden ?? false })) : [],
    hadiths: Array.isArray(d.hadiths) ? d.hadiths.map((item) => ({ ...item, hidden: item.hidden ?? false })) : [],
    tripTypes: Array.isArray(d.tripTypes) ? d.tripTypes : defaultContent.tripTypes,
    shrines: Array.isArray(d.shrines) ? d.shrines : defaultContent.shrines,
    visaNotes: Array.isArray(d.visaNotes) ? d.visaNotes : [],
    emergency: Array.isArray(d.emergency) ? d.emergency : [],
    donations: Array.isArray(d.donations) ? d.donations : [],
    donationIntro: d.donationIntro,
    donationContact: d.donationContact,
    memories: Array.isArray(d.memories) ? d.memories : [],
    reviewUrl: d.reviewUrl,
    rooms: Array.isArray(d.rooms) ? d.rooms : [],
    guidelines: Array.isArray(d.guidelines) ? d.guidelines : [],
    guidelinesPdf: d.guidelinesPdf,
    iraqItems: Array.isArray(d.iraqItems) ? d.iraqItems : defaultIraqItems,
    labels: d.labels ?? {},
    modeLabels: { ...defaultContent.modeLabels, ...(d.modeLabels ?? {}) },
    trash: Array.isArray(d.trash) ? d.trash : [],
    cms: d.cms && typeof d.cms === "object" ? d.cms : {},
  };
}

/** Sections whose removed items go to the recycle bin. */
export const trashSections = ["trips", "news", "duas", "contacts", "itinerary", "locations", "faqs", "occasions", "hadiths", "tripTypes", "shrines", "visaNotes", "emergency", "donations", "memories", "rooms", "guidelines", "iraqItems"] as const;
const keyOf = (x: unknown) => (x && typeof x === "object" && "id" in x && typeof (x as { id: unknown }).id === "string" ? `id:${(x as { id: string }).id}` : `j:${JSON.stringify(x)}`);

/** Moves any items removed between prev and next into next.trash (works for every current and future section). */
export function withTrash(prev: SiteContent | undefined, next: SiteContent): SiteContent {
  if (!prev) return next;
  const trash = [...(next.trash ?? [])];
  for (const section of trashSections) {
    const before = (prev[section] ?? []) as unknown[];
    const after = (next[section] ?? []) as unknown[];
    if (after.length >= before.length) continue;
    const keep = new Set(after.map(keyOf));
    for (const item of before) if (!keep.has(keyOf(item))) trash.unshift({ id: `${section}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, section, item: item as TrashEntry["item"], deletedAt: Date.now() });
  }
  return { ...next, trash: trash.slice(0, 300) };
}

export const defaultIraqItems: IraqItem[] = [
  { id: "i0", kind: "intro", ar: "زيارة العتبات المقدسة في العراق، ضمن عدة مناسبات على مدار السنة.", de: "Besuch der heiligen Stätten im Irak, zu verschiedenen Anlässen im Jahresverlauf.", bodyAr: "", bodyDe: "" },
  { id: "i1", kind: "type", ar: "زيارة الإمام الحسين (ع)", de: "Zyarat Imam Hussein (as)", bodyAr: "تُقام على مدار السنة في أوقات مختلفة تتناسب مع العطل المدرسية (كعطلة الشتاء، رأس السنة، عطلة الفصح، والعطلة الصيفية).", bodyDe: "Findet ganzjährig zu unterschiedlichen Terminen statt, passend zu den Schulferien (Winterferien, Neujahr, Osterferien und Sommerferien)." },
  { id: "i2", kind: "type", ar: "زيارة الإمام الحسين (ع) عطلة الشتاء / رأس السنة", de: "Zyarat Imam Hussein (as) Winterferien / Neujahr", bodyAr: "", bodyDe: "" },
  { id: "i3", kind: "type", ar: "زيارة عرفة", de: "Zyarat Arafa", bodyAr: "", bodyDe: "" },
  { id: "i4", kind: "type", ar: "زيارة الأربعين", de: "Zyarat Arbaeen", bodyAr: "", bodyDe: "" },
  { id: "i5", kind: "type", ar: "زيارة 15 شعبان", de: "Zyarat 15 Shaaban", bodyAr: "", bodyDe: "" },
  { id: "flight", kind: "detail", ar: "الطيران", de: "Flug", bodyAr: "الوصول عبر مطار بغداد.", bodyDe: "Ankunft über den Flughafen Bagdad." },
  { id: "hotel", kind: "detail", ar: "السكن", de: "Unterkunft", bodyAr: "ليلة في الكاظمية، وفندق في كربلاء، وفندق في النجف.", bodyDe: "Eine Nacht in al-Kazimiyya, ein Hotel in Kerbela und ein Hotel in Nadschaf." },
  { id: "majlis", kind: "detail", ar: "المجالس", de: "Majlis", bodyAr: "مجالس حسينية بمرافقة خطيب ورادود حسيني.", bodyDe: "Husseinitische Majlis mit Khatib und Radud Hosseini." },
  { id: "food", kind: "detail", ar: "الطعام", de: "Verpflegung", bodyAr: "أكل لبناني بامتياز — ثلاث وجبات يومياً.", bodyDe: "Ausgezeichnete libanesische Küche — drei Mahlzeiten täglich." },
];

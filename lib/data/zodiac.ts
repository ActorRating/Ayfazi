export type ZodiacElement = "Ateş" | "Toprak" | "Hava" | "Su";

export type ZodiacSign = {
  name: string;
  dates: string;
  element: ZodiacElement;
  traits: string[];
  description: string;
};

export const elementStyles: Record<
  ZodiacElement,
  { badge: string; accent: string; glow: string }
> = {
  Ateş: {
    badge: "bg-orange-500/15 text-orange-200",
    accent: "from-orange-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_24px_rgba(251,146,60,0.12)]",
  },
  Toprak: {
    badge: "bg-amber-500/15 text-amber-200",
    accent: "from-amber-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_24px_rgba(245,158,11,0.12)]",
  },
  Hava: {
    badge: "bg-sky-500/15 text-sky-200",
    accent: "from-sky-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]",
  },
  Su: {
    badge: "bg-indigo-500/15 text-indigo-200",
    accent: "from-indigo-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_24px_rgba(129,140,248,0.12)]",
  },
};

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Koç",
    dates: "21 Mart – 19 Nisan",
    element: "Ateş",
    traits: ["Cesur", "Enerjik", "Lider"],
    description:
      "Zorluklara doğrudan dalar, ilk adımı atmaktan çekinmez. Enerjisi çevresine yayılır.",
  },
  {
    name: "Boğa",
    dates: "20 Nisan – 20 Mayıs",
    element: "Toprak",
    traits: ["Sabırlı", "Güvenilir", "Duyusal"],
    description:
      "İstikrarı ve güzelliği sever. Yavaş ama sağlam adımlarla inşa eder.",
  },
  {
    name: "İkizler",
    dates: "21 Mayıs – 20 Haziran",
    element: "Hava",
    traits: ["Meraklı", "Konuşkan", "Çevik"],
    description:
      "Fikirler ve sohbetler arasında dolaşır. Değişime hızla uyum sağlar.",
  },
  {
    name: "Yengeç",
    dates: "21 Haziran – 22 Temmuz",
    element: "Su",
    traits: ["Koruyucu", "Sezgisel", "Sadık"],
    description:
      "Duygusal derinliği güçlüdür. Sevdiklerini şefkatle sarar ve korur.",
  },
  {
    name: "Aslan",
    dates: "23 Temmuz – 22 Ağustos",
    element: "Ateş",
    traits: ["Cömert", "Yaratıcı", "Işıltılı"],
    description:
      "Sahne ışığını sever, sıcaklığıyla öne çıkar. Gururlu ve ilham vericidir.",
  },
  {
    name: "Başak",
    dates: "23 Ağustos – 22 Eylül",
    element: "Toprak",
    traits: ["Titiz", "Analitik", "Yardımsever"],
    description:
      "Detaylarda anlam bulur. Düzeni ve işini özenle yapmayı önemser.",
  },
  {
    name: "Terazi",
    dates: "23 Eylül – 22 Ekim",
    element: "Hava",
    traits: ["Dengeli", "Zarif", "Diplomatik"],
    description:
      "Uyum ve estetik arar. İlişkilerde adaleti ve güzelliği ön planda tutar.",
  },
  {
    name: "Akrep",
    dates: "23 Ekim – 21 Kasım",
    element: "Su",
    traits: ["Derin", "Tutkulu", "Odaklı"],
    description:
      "Yüzeysel olanı sevmez. Güçlü sezgisiyle hayatın gizemli katmanlarına iner.",
  },
  {
    name: "Yay",
    dates: "22 Kasım – 21 Aralık",
    element: "Ateş",
    traits: ["Özgür", "İyimser", "Maceracı"],
    description:
      "Ufukları geniştir. Bilgelik ve keşif peşinde, özgürlüğe değer verir.",
  },
  {
    name: "Oğlak",
    dates: "22 Aralık – 19 Ocak",
    element: "Toprak",
    traits: ["Disiplinli", "Hedefli", "Dayanıklı"],
    description:
      "Sabırla tırmanır, hedeflerine stratejik adımlarla yaklaşır.",
  },
  {
    name: "Kova",
    dates: "20 Ocak – 18 Şubat",
    element: "Hava",
    traits: ["Özgün", "Vizyoner", "Bağımsız"],
    description:
      "Kalıpların dışında düşünür. İlerlemeyi ve özgünlüğü savunur.",
  },
  {
    name: "Balık",
    dates: "19 Şubat – 20 Mart",
    element: "Su",
    traits: ["Hayalperest", "Empatik", "Sanatsal"],
    description:
      "Sezgisi güçlüdür. Hayal gücü ve şefkat arasında yumuşak bir akışta yaşar.",
  },
];

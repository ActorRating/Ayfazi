export type ZodiacElement = "Ateş" | "Toprak" | "Hava" | "Su";

export type ZodiacSign = {
  name: string;
  dates: string;
  element: ZodiacElement;
  modality: string;
  planet: string;
  traits: string[];
  description: string;
  detail: string;
  strengths: string[];
  weaknesses: string[];
  compatible: string[];
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
    modality: "Öncü",
    planet: "Mars",
    traits: ["Cesur", "Enerjik", "Lider"],
    description:
      "Zorluklara doğrudan dalar, ilk adımı atmaktan çekinmez.",
    detail:
      "Koç burcu hareketin ve başlangıcın burcudur. Yeni fikirlere hızla atılır, rekabetten enerji alır. Bazen sabırsız görünse de içgüdüleri güçlüdür ve çevresine cesaret aşılar.",
    strengths: ["Cesaret", "Hızlı karar", "Motivasyon"],
    weaknesses: ["Sabırsızlık", "İnatçılık", "Düşünmeden hareket"],
    compatible: ["Aslan", "Yay", "İkizler"],
  },
  {
    name: "Boğa",
    dates: "20 Nisan – 20 Mayıs",
    element: "Toprak",
    modality: "Sabit",
    planet: "Venüs",
    traits: ["Sabırlı", "Güvenilir", "Duyusal"],
    description:
      "İstikrarı ve güzelliği sever. Yavaş ama sağlam adımlarla inşa eder.",
    detail:
      "Boğa burcu konfor, güven ve kalıcılık arar. Venüs etkisiyle estetiğe ve duyusal zevklere düşkündür. Değişime dirençli olabilir ama verdiği sözün arkasında durur.",
    strengths: ["Sadakat", "Pratiklik", "Dayanıklılık"],
    weaknesses: ["İnat", "Tembellik eğilimi", "Değişim korkusu"],
    compatible: ["Yengeç", "Başak", "Oğlak"],
  },
  {
    name: "İkizler",
    dates: "21 Mayıs – 20 Haziran",
    element: "Hava",
    modality: "Değişken",
    planet: "Merkür",
    traits: ["Meraklı", "Konuşkan", "Çevik"],
    description:
      "Fikirler ve sohbetler arasında dolaşır. Değişime hızla uyum sağlar.",
    detail:
      "İkizler burcu zihinsel çevikliği ve iletişimi temsil eder. Birden fazla konuya aynı anda ilgi duyar, sosyal ortamlarda parlar. Merakı sınırsızdır ama odaklanmakta zorlanabilir.",
    strengths: ["Zeka", "Uyum", "Esprit"],
    weaknesses: ["Kararsızlık", "Yüzeysellik", "Dağınıklık"],
    compatible: ["Terazi", "Kova", "Koç"],
  },
  {
    name: "Yengeç",
    dates: "21 Haziran – 22 Temmuz",
    element: "Su",
    modality: "Öncü",
    planet: "Ay",
    traits: ["Koruyucu", "Sezgisel", "Sadık"],
    description:
      "Duygusal derinliği güçlüdür. Sevdiklerini şefkatle sarar ve korur.",
    detail:
      "Yengeç burcu aile, yuva ve duygusal güvenlikle bağlantılıdır. Ay'ın etkisiyle ruh hali dalgalanabilir ama empati gücü yüksektir. Güvende hissettiği ortamlarda en iyi halini gösterir.",
    strengths: ["Empati", "Koruyuculuk", "Sezgi"],
    weaknesses: ["Aşırı hassasiyet", "İçe kapanma", "Geçmişe takılma"],
    compatible: ["Akrep", "Balık", "Boğa"],
  },
  {
    name: "Aslan",
    dates: "23 Temmuz – 22 Ağustos",
    element: "Ateş",
    modality: "Sabit",
    planet: "Güneş",
    traits: ["Cömert", "Yaratıcı", "Işıltılı"],
    description:
      "Sahne ışığını sever, sıcaklığıyla öne çıkar.",
    detail:
      "Aslan burcu özgüven, yaratıcılık ve liderliği simgeler. Güneş'in etkisiyle çevresine ışık saçar, takdir edilmeyi sever. Gururu bazen kırılabilir ama kalbi geniştir.",
    strengths: ["Cömertlik", "Yaratıcılık", "Karizma"],
    weaknesses: ["Kibir", "Drama", "İlgi ihtiyacı"],
    compatible: ["Koç", "Yay", "İkizler"],
  },
  {
    name: "Başak",
    dates: "23 Ağustos – 22 Eylül",
    element: "Toprak",
    modality: "Değişken",
    planet: "Merkür",
    traits: ["Titiz", "Analitik", "Yardımsever"],
    description:
      "Detaylarda anlam bulur. Düzeni ve işini özenle yapmayı önemser.",
    detail:
      "Başak burcu hizmet, düzen ve mükemmellik arayışını temsil eder. Analitik zekâsı güçlüdür, sorunları parçalara ayırarak çözer. Kendine ve başkalarına karşı yüksek standartları olabilir.",
    strengths: ["Organizasyon", "Dikkat", "Pratiklik"],
    weaknesses: ["Eleştiri", "Endişe", "Mükemmeliyetçilik"],
    compatible: ["Boğa", "Oğlak", "Yengeç"],
  },
  {
    name: "Terazi",
    dates: "23 Eylül – 22 Ekim",
    element: "Hava",
    modality: "Öncü",
    planet: "Venüs",
    traits: ["Dengeli", "Zarif", "Diplomatik"],
    description:
      "Uyum ve estetik arar. İlişkilerde adaleti ön planda tutar.",
    detail:
      "Terazi burcu denge, adalet ve güzelliği simgeler. İlişkilerde uyumu önceler, çatışmadan kaçınmaya eğilimlidir. Karar vermekte zorlanabilir çünkü her iki tarafı da görmeye çalışır.",
    strengths: ["Diplomasi", "Estetik", "Sosyallik"],
    weaknesses: ["Kararsızlık", "Çatışma kaçınma", "Bağımlılık"],
    compatible: ["İkizler", "Kova", "Aslan"],
  },
  {
    name: "Akrep",
    dates: "23 Ekim – 21 Kasım",
    element: "Su",
    modality: "Sabit",
    planet: "Plüton",
    traits: ["Derin", "Tutkulu", "Odaklı"],
    description:
      "Yüzeysel olanı sevmez. Hayatın gizemli katmanlarına iner.",
    detail:
      "Akrep burcu dönüşüm, tutku ve derinliği temsil eder. Sezgileri keskindir, insanların niyetlerini kolayca okur. Güven duyduğunda sadık ve koruyucudur; ihanete tahammülü düşüktür.",
    strengths: ["Sezgi", "Kararlılık", "Sadakat"],
    weaknesses: ["Kıskançlık", "Gizlilik", "İntikam eğilimi"],
    compatible: ["Yengeç", "Balık", "Oğlak"],
  },
  {
    name: "Yay",
    dates: "22 Kasım – 21 Aralık",
    element: "Ateş",
    modality: "Değişken",
    planet: "Jüpiter",
    traits: ["Özgür", "İyimser", "Maceracı"],
    description:
      "Ufukları geniştir. Bilgelik ve keşif peşinde koşar.",
    detail:
      "Yay burcu özgürlük, felsefe ve macerayı simgeler. Jüpiter'in etkisiyle iyimser ve geniş görüşlüdür. Rutinden sıkılır, yeni deneyimler arar. Doğrudan konuşması bazen kaba algılanabilir.",
    strengths: ["İyimserlik", "Dürüstlük", "Macera ruhu"],
    weaknesses: ["Sabırsızlık", "Abartı", "Bağlanma korkusu"],
    compatible: ["Koç", "Aslan", "Terazi"],
  },
  {
    name: "Oğlak",
    dates: "22 Aralık – 19 Ocak",
    element: "Toprak",
    modality: "Öncü",
    planet: "Satürn",
    traits: ["Disiplinli", "Hedefli", "Dayanıklı"],
    description:
      "Sabırla tırmanır, hedeflerine stratejik adımlarla yaklaşır.",
    detail:
      "Oğlak burcu disiplin, sorumluluk ve başarıyı temsil eder. Satürn'ün etkisiyle ciddi ve planlıdır. Zamanla güçlenir; genç yaşta olgun görünebilir. İş ve kariyerde güvenilirdir.",
    strengths: ["Disiplin", "Strateji", "Güvenilirlik"],
    weaknesses: ["Katılık", "Soğukluk", "Aşırı çalışma"],
    compatible: ["Boğa", "Başak", "Akrep"],
  },
  {
    name: "Kova",
    dates: "20 Ocak – 18 Şubat",
    element: "Hava",
    modality: "Sabit",
    planet: "Uranüs",
    traits: ["Özgün", "Vizyoner", "Bağımsız"],
    description:
      "Kalıpların dışında düşünür. İlerlemeyi ve özgünlüğü savunur.",
    detail:
      "Kova burcu yenilik, topluluk ve özgünlüğü simgeler. Geleceği bugünden görür, sıradışı fikirleriyle dikkat çeker. Duygusal mesafe koyabilir ama insanlık için idealisttir.",
    strengths: ["Yenilikçilik", "Bağımsızlık", "Vizyon"],
    weaknesses: ["Mesafe", "İnat", "Duygusal uzaklık"],
    compatible: ["İkizler", "Terazi", "Yay"],
  },
  {
    name: "Balık",
    dates: "19 Şubat – 20 Mart",
    element: "Su",
    modality: "Değişken",
    planet: "Neptün",
    traits: ["Hayalperest", "Empatik", "Sanatsal"],
    description:
      "Sezgisi güçlüdür. Hayal gücü ve şefkat arasında akar.",
    detail:
      "Balık burcu sezgi, hayal gücü ve şefkati temsil eder. Neptün'ün etkisiyle sınırlar flu olabilir; sanata ve ruhsal konulara yatkındır. Başkalarının acısını derinden hisseder, kaçış eğilimi gösterebilir.",
    strengths: ["Empati", "Yaratıcılık", "Şefkat"],
    weaknesses: ["Kaçış", "Sınır eksikliği", "Kararsızlık"],
    compatible: ["Yengeç", "Akrep", "Boğa"],
  },
];

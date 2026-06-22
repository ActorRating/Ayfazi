export const cosmicJokes = [
  "Bir yıldıza yürüdüm dedim, o da bana mesafe koydu.",
  "Ay benden ayrıldı — meğer alana ihtiyacı varmış.",
  "Uzaylılar neden havalimanına inmez? İniş ücretleri astronomik.",
  "Terapiste içim boş hissediyorum dedim, kara delik olabilirsin dedi.",
  "Tembel kuyruklu yıldıza ne denir? Erteleyen meteor.",
  "Samanyolu'na yol sordum, spiral kola git dedi.",
  "Güneş neden okula gitti? Biraz daha parlak olsun diye.",
  "Roketim güven sorunu yaşıyor, sürekli beni itiyor.",
  "Uzay partisi organize ettim, kimse gezegene gelmedi.",
  "Ayda şaka yaptım, atmosfer yoktu.",
  "Mars Satürn'e ne dedi? Bir ara yüzük at bana.",
  "Teleskop aldım geleceğimi görmek için, hâlâ yükleniyor.",
  "Yıldızlar müzikte neden iyidir? Tüm gamı bilirler.",
  "Evren aradı, karanlık maddesini geri istiyormuş.",
  "Uzaylı çay içmedi, başka boyutta demlenmişmiş.",
];

export function getDailyJoke(date: Date = new Date()): string {
  const index = date.getDate() % cosmicJokes.length;
  return cosmicJokes[index];
}

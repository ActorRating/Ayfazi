export type PhaseContent = {
  headline: string;
  situation: string;
  actions: string[];
};

export const phaseContent: Record<string, PhaseContent> = {
  "Yeni ay": {
    headline: "Yeni bir döngü başlıyor.",
    situation:
      "Gökyüzünde sessizlik var. Ay sıfırlanıyor, evren yeni bir sayfa açıyor. Bu an, içsel sesin en güçlü konuştuğu andır. Dışarısı karanlık olabilir ama bu, tohumların filizlenmeden önceki karanlığıdır.",
    actions: [
      "Bir niyet belirle — bu ay ne inşa etmek istiyorsun?",
      "Günlüğüne yaz: bırakmak istediğin bir şey, başlatmak istediğin bir şey.",
      "Erken yat, bedenini yenile. Yeni başlangıçlar dinlenmiş bir zihinden doğar.",
      "Yeni bir alışkanlık için ilk küçük adımı bugün at.",
    ],
  },
  "Hilal (büyüyen)": {
    headline: "Momentum başlıyor.",
    situation:
      "Ay yavaşça parlıyor, enerji toplanıyor. Kıpırdayan tohumlar toprak yüzeyine yaklaşıyor. Bu, harekete geçmenin tam zamanı; henüz erken, ama artık başlamaya hazırsın.",
    actions: [
      "Yeni ay'da belirlediğin niyete doğru somut bir adım at.",
      "Ertelediklerinden birini bugün bitir.",
      "Birine uzan — bağlantılar bu dönemde güçlü filiz veriyor.",
      "Sabah rutinine yeni bir şey ekle, enerjin seni taşısın.",
    ],
  },
  "İlk dördün": {
    headline: "Karar zamanı.",
    situation:
      "Ay yarım daire çizdi. İlerliyorsun ama yol biraz direniş gösteriyor. Bu engel seni durdurmak için değil, seni sınamak için burada. Kararlılığın ne kadar güçlü, bu gece ortaya çıkacak.",
    actions: [
      "Ertelemekte olduğun o kararı bugün ver.",
      "Bir hedef belirle ve gün bitmeden ona doğru tek adım at.",
      "Engellerini listele — gerçekten ne kadar büyükler?",
      "Güvendiğin biriyle bir konuşma yap, perspektif kazan.",
    ],
  },
  "Şişkin ay (büyüyen)": {
    headline: "Zirveye az kaldı.",
    situation:
      "Ay neredeyse tam dolu. Enerji doruk noktasına yaklaşıyor, her şey daha yoğun hissettiriyor — duygular, bağlantılar, fikirler. Bu yoğunluk bir tehdit değil, bir hediye.",
    actions: [
      "Bugün en önemli işini yap — enerji seninle.",
      "Sosyal ol; bu dönemde insanlar seninle rezonansa giriyor.",
      "Bedenini hareket ettir — bu enerjiyi boşalt.",
      "Minnettar olduğun üç şeyi düşün. Bolluk hissini somutlaştır.",
    ],
  },
  Dolunay: {
    headline: "Zirve. Her şey görünür.",
    situation:
      "Ay tam parlıyor ve hiçbir şeyi gizlemiyor. Bu gece duygular yüzeye çıkar, kararlar netleşir, ilişkiler daha derin konuşur. Dolunay tamamlanmanın ve bırakmanın zamanıdır — kutla ve salıver.",
    actions: [
      "Artık sana hizmet etmeyen bir şeyi bırak — bilinçli olarak.",
      "Bu ay başından bu yana ne başardığını yaz.",
      "Bir ritüel yap: mum yak, ay ışığında otur, niyetini sözle ifade et.",
      "Derin bir nefes al. Sen buradasın, yeterlisin.",
    ],
  },
  "Şişkin ay (küçülen)": {
    headline: "Hasat başladı.",
    situation:
      "Doruk geçti, ay yavaşça küçülüyor. Bu azalma kayıp değil — dolunay enerjisinin sindirme zamanı. Topladıklarını işliyorsun, içselleştiriyorsun.",
    actions: [
      "Bu ay ne öğrendin? Yazarak veya konuşarak işle.",
      "Birini tebrik et ya da teşekkür et — bu dönem minnetin enerjisiyle titreşiyor.",
      "Aşırı dolmuş bir şeyi sadeleştir: dolabını, takviminizi, kafanı.",
      "Sezgisel kararlar ver — akıldan çok kalpten dinle.",
    ],
  },
  "Son dördün": {
    headline: "Bırakma vakti.",
    situation:
      "Ay son çeyreğine döndü. Bu, temizlenme ve affetme enerjisidir. Neyi taşımaya devam ediyorsun ama artık taşımak zorunda değilsin? Bu soru bu gece için.",
    actions: [
      "Kırgınlık veya yorgunluk taşıdığın birini zihninde affet.",
      "Evde ya da dijitalde bir temizlik yap — geçmiş döngüden kalanları at.",
      "Bir sonraki yeni aya ne getirmek istediğini düşün.",
      "Erken uyu. Beyin ve beden bu dönemde derin dinlenmeye ihtiyaç duyar.",
    ],
  },
  "Hilal (küçülen)": {
    headline: "Dinlenme ve hazırlanma.",
    situation:
      "Ay neredeyse görünmez. Döngü kapanıyor. Bu, tükenmişlik değil; tamamlanma. Tohumlar toprak altında, bir sonraki patlama için enerji biriktiriyor.",
    actions: [
      "Bugün yavaş ol — yapılacaklar listeni kısalt.",
      "Yalnız kalarak veya sessizlikte zaman geçir.",
      "Bir sonraki döngü için küçük bir niyet taslağı oluştur.",
      "Bedenini besle: iyi yemek, erken uyku, derin nefes.",
    ],
  },
};

const dailyAdvice = [
  "Bugün söylemek isteyip söyleyemediğin bir şeyi yaz. Okumana gerek yok — sadece yaz.",
  "Güneş doğarken ya da batarken en az üç dakika açık havada dur. Gökyüzüne bak.",
  "Bugün bir yabancıya gülümse. Kozmik enerjiler küçük bağlantılarla taşınır.",
  "Telefonsuz bir öğün ye. Yalnızca lezzetle ve ortamınla var ol.",
  "Bugün 'hayır' demekte özgür olduğunu hatırla. Sınırlar da bir ritüeldir.",
  "Beş yıl önce neredeydin? Şu an ne kadar ilerlediğini fark et.",
  "Bugün müzik seç, ama rastgele değil — o anki ruh haline tam uyan bir şarkı.",
  "Bir bardak su iç ve bir dakika sessizce otur. Bu basit eylem günü sıfırlar.",
  "Bugün bedenine teşekkür et — seni taşıdığı için.",
  "Bir bitkiyi suy, bir pencereyi aç, dışarının sesini dinle. Doğa içeri girebilir.",
  "Bu hafta sana iyi gelen bir anı hatırla. O hissin adını koy.",
  "Bugün plan yapma — sadece al, ver, geç.",
  "Bir kitap sayfasını rastgele aç ve o sayfadaki ilk cümleyi bugünün mesajı say.",
  "Bugün başkasının gözüyle bak: bu şehirde, bu ülkede ilk kez olsaydın ne görürdün?",
  "Minnettar olduğun ama hiç ifade etmediğin birine bugün bir mesaj gönder.",
  "Derin nefes al: 4 saniye içeri, 7 bekle, 8 saniye dışarı. Üç kez.",
  "Bugün bir şey yap ki yarınki sen sana teşekkür etsin.",
  "Geçen hafta seni en çok zorlayan şeyi düşün. O zorluk sana ne öğretti?",
  "Bugün rengarenk bir şey ye. Tabakta ne kadar çok renk, o kadar fazla enerji.",
  "Bir sonraki dolunayda ne görmek istiyorsun? Bugün onu kafanda canlandır.",
  "Bugün sanatla vakit geçir — üretmene gerek yok, sadece bak, dinle, hisset.",
  "Bir konuda sezgine güven. Mantık çok konuşuyor son zamanlarda.",
  "Bugün yatmadan önce günün en güzel dakikasını hatırla.",
  "Kendine sormaktan korktuğun bir soruyu bugün sor. Cevabına hazır olsun ya da olmasın.",
  "Bugün dışarı çık ve gökyüzüne bak — bu küçük eylem perspektifi anında değiştirir.",
  "Bir şeyi yarım bıraktın. Bugün ona dokun — bitirmek zorunda değilsin, sadece dokun.",
  "Bugün sessizce otur ve on dakika boyunca sadece düşüncelerini izle. Onları takip etme.",
  "Bugün kendinle nazik ol. Bir arkadaşına nasıl davranırdın — kendine de öyle davran.",
  "Bir şeyin tadını çıkar — acele etme. Bugün acelecilik evrenle uyumsuz.",
  "Bugün birine gerçekten dinle. Cevap hazırlamadan, sadece duy.",
  "Ay her gece değişiyor. Sen de değişiyorsun — bu büyümedir, kaybetmek değil.",
];

export function getDailyAdvice(date: Date): string {
  const seed = date.getFullYear() * 1000 + date.getMonth() * 31 + date.getDate();
  return dailyAdvice[seed % dailyAdvice.length];
}

export type UpcomingEvent = {
  daysFromNow: number;
  date: Date;
  phaseName: string;
  emoji: string;
  teaser: string;
};

const phaseTeasers: Record<string, string> = {
  "Yeni ay": "Sıfırlanma ve yeni niyetler zamanı geliyor. Hazır mısın?",
  "Hilal (büyüyen)": "Enerji toplanmaya başlayacak. İlk adımını atmaya hazırlan.",
  "İlk dördün": "Karar anı yaklaşıyor. Hangi yola gideceksin?",
  "Şişkin ay (büyüyen)": "Zirveye az kaldı. Enerjini yönet.",
  Dolunay: "Dolunay geliyor. Her şey görünür olacak — hazır mısın?",
  "Şişkin ay (küçülen)": "Hasat zamanı yaklaşıyor. Ne topladığını göreceksin.",
  "Son dördün": "Bırakma vakti geliyor. Ne taşıdığını düşün.",
  "Hilal (küçülen)": "Döngü kapanıyor. Dinlenme ve hazırlanma zamanı.",
};

export { phaseTeasers };

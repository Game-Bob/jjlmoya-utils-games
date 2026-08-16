import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'yazim-hizi-testi';
const title = 'Yazım Hızı Testi: Dakikadaki Kelime Sayınızı Ölçün';
const description = 'Bağımlılık yapan oyunlaştırma özelliklerine sahip, tamamen çevrimdışı yazım testi. Dakikadaki kelime sayınızı (WPM), doğruluğunuzu ve başarılarınızı ölçün. Kendinizle yarışın ve hızınızı artırın.';

const faqItems = [
  { question: 'Ortalama yazım hızı nedir?', answer: 'Yetişkinler için ortalama hız 40-60 WPM (dakikadaki kelime sayısı) arasındadır. Uzman klavye kullanıcıları 70-100 WPM\'ye ulaşır. En hızlı yazanlar ise 200 WPM\'yi aşabilir. Bu test nerede olduğunuzu gösterir.' },
  { question: 'WPM nasıl hesaplanır?', answer: 'Doğru karakter sayısını alıp 5\'e (ortalama kelime uzunluğu) bölüyoruz ve ardından geçen dakikaya bölüyoruz. Hatalar otomatik olarak puanınızı düşürür, böylece adil bir net hız elde edersiniz.' },
  { question: 'Sonuçlarım kaydediliyor mu?', answer: 'Evet, yerel olarak tarayıcınızda saklanır. En iyi WPM skorunuz otomatik olarak kaydedilir. Siz paylaşmadığınız sürece sonuçlarınızı çevrimiçi kimse göremez.' },
  { question: 'İnternet olmadan doğru sonuç verir mi?', answer: 'Kesinlikle. Bu test, verileri sunucuya göndermeden %100 tarayıcınızda çalışır. Bu, milisaniye hassasiyetinde sonuç ve sıfır ağ gecikmesi demektir.' },
  { question: 'Hızımı artırmak ne kadar sürer?', answer: 'Düzenli pratikle 2-3 hafta içinde gözle görülür iyileşmeler olur. Büyük değişimler (örneğin 50\'den 100 WPM\'ye çıkmak) 3-6 aylık ciddi bir çalışma gerektirir.' },
  { question: 'İnternetim yokken pratik yapabilir miyim?', answer: 'Tabii ki. Bu test %100 çevrimdışı çalışır. Bir kez yükledikten sonra internet bağlantınız olmasa bile oynayabilirsiniz. Seyahatler için mükemmeldir.' },
];

const howToItems = [
  { name: 'Yazmaya başlayın', text: 'Sadece yazmaya başlayın. Zamanlayıcı ilk tuş vuruşuyla otomatik olarak başlar. 60 saniyeniz var.' },
  { name: 'Kelimeleri doğru yazın', text: 'Doğru kelimeler camgöbeği renginde vurgulanır. Yanlış harfler kırmızıya döner. Kelimenin sayılması için hatasız tamamlanması gerekir.' },
  { name: 'Canlı ilerlemeyi izleyin', text: 'Yazarken WPM, doğruluk ve kelime sayınız gerçek zamanlı olarak güncellenir.' },
  { name: 'Sonuçlarınızı alın', text: 'Süre dolduğunda final WPM skorunuzu, toplam doğruluğunuzu ve sonucu paylaşma seçeneğini görürsünüz.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: GamesToolLocaleContentType = {
  slug,
  title,
  description,
  ui: {
    words: 'Kelime',
    wpm: 'WPM',
    accuracy: 'Doğruluk',
    timeUp: 'Süre Doldu!',
    playAgain: 'Tekrar Oyna',
    share: 'Paylaş',
    copied: 'Kopyalandı!',
  },
  wordPool: [
    'ev', 'köpek', 'kedi', 'güneş', 'ay', 'aşk', 'kahkaha', 'oyun', 'zaman', 'hayat',
    'ölüm', 'gece', 'gün', 'arkadaş', 'aile', 'yemek', 'içmek', 'uyumak', 'rüya', 'koşmak',
    'dans', 'şarkı', 'zıplamak', 'uçmak', 'yüzmek', 'yürümek', 'kitap', 'kelime', 'harf', 'sayı',
    'renk', 'ağaç', 'çiçek', 'su', 'ateş', 'hava', 'toprak', 'deniz', 'dağ', 'nehir',
    'gökyüzü', 'yıldız', 'bulut', 'rüzgar', 'yağmur', 'kar', 'buz', 'sıcak', 'soğuk', 'ışık',
    'macera', 'gizem', 'uzay', 'evren', 'gezegen', 'kuyruklu yıldız', 'takımyıldız', 'galaksi',
    'bilgisayar', 'ekran', 'sistem', 'bağlantı', 'internet', 'tarayıcı', 'enstrüman', 'melodi',
    'armoni', 'ritim', 'dans', 'tiyatro', 'film', 'aktör', 'yönetmen', 'sahne', 'karakter', 'hikaye',
    'kütüphane', 'roman', 'şiir', 'yazar', 'şair', 'sayfa', 'bölüm', 'olay örgüsü', 'anlatı', 'son',
    'kalp', 'beyin', 'zihin', 'düşünce', 'fikir', 'kavram', 'teori', 'felsefe', 'bilgelik', 'bilgi',
    'problem', 'çözüm', 'cevap', 'soru', 'şüphe', 'kesinlik', 'gerçek', 'yalan', 'aldatma', 'tuzak',
    'kraliçe', 'kral', 'prens', 'prenses', 'şövalye', 'ejderha', 'kale', 'krallık', 'imparatorluk', 'taht',
    'tekne', 'yelken', 'çapa', 'liman', 'plaj', 'kum', 'ada', 'okyanus', 'dalga', 'akıntı',
    'volkan', 'deprem', 'fırtına', 'kasırga', 'hortum', 'çığ', 'patlama', 'kuraklık', 'sel', 'dolu',
    'tıp', 'doktor', 'hastane', 'hastalık', 'tedavi', 'çare', 'hap', 'iğne', 'ameliyat', 'hasta',
    'müzik', 'şarkı', 'opera', 'senfoni', 'besteci', 'müzisyen', 'keman', 'piyano', 'gitar', 'davul',
    'gıda', 'tatlı', 'içecek', 'mutfak', 'şef', 'tarif', 'lezzet', 'aroma', 'dokun', 'açlık',
    'seyahat', 'turizm', 'rota', 'valiz', 'pasaport', 'uçak', 'tren', 'araba', 'bisiklet', 'motosiklet',
    'spor', 'futbol', 'basketbol', 'tenis', 'yüzme', 'boks', 'güreş', 'yarış', 'atlama', 'fırlatma',
    'para', 'madeni para', 'banknot', 'banka', 'kredi', 'borç', 'ödeme', 'fiyat', 'satış', 'satın alma',
    'iş', 'zanaat', 'meslek', 'kariyer', 'istihdam', 'patron', 'çalışan', 'maaş', 'sözleşme', 'istifa',
    'okul', 'kolej', 'üniversite', 'öğretmen', 'öğrenci', 'ders', 'sınav', 'not', 'diploma', 'eğitim',
    'kilise', 'tapınak', 'din', 'inanç', 'dua', 'aziz', 'melek', 'iblis', 'cehennem', 'cennet',
    'teknoloji', 'zeka', 'algoritma', 'program', 'kod', 'hata', 'bug', 'sunucu', 'istemci', 'veritabanı',
    'doğa', 'ekosistem', 'biyoçeşitlilik', 'nesli tükenme', 'evrim', 'adaptasyon', 'yırtıcı', 'av', 'otçul', 'etçul'
  ],
  seo: [
    {
      type: 'title',
      text: 'Ücretsiz Çevrimiçi Yazım Hızı Testi: Gerçek WPM Skorunuzu Ölçün',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir <strong>yazım hızı testi</strong>, dakikada ne kadar kelimeyi (WPM) ne kadar doğrulukla yazabildiğinizi değerlendirmenin en doğru yoludur. İster yazılımcı, ister yazar, ister öğrenci olun; gerçek hızınızı bilmek verimliliğinizi artırmanın ilk adımıdır. Bu test sadece hızı değil, aynı zamanda <em>net doğruluğu</em> da ölçer.',
    },
    {
      type: 'paragraph',
      html: 'Geleneksel yazım simülatörlerinin aksine, bu test hataları nihai WPM skorunuzdan otomatik olarak düşer. 100 WPM ile yazıp 30 hata yapan biri, sıfır hatayla 70 WPM yazan birinden daha hızlı değildir. Burada şişirilmiş rakamları değil, <strong>gerçek net hızınızı</strong> ölçüyoruz.',
    },
    {
      type: 'title',
      text: 'Ortalama Yazım Hızı: 2026 Standartları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Özel bir eğitim almamış yetişkinler için ortalama yazım hızı <strong>40-60 WPM</strong> civarındadır. Ancak bu değer mesleğe göre büyük farklılıklar gösterir:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sıradan kullanıcılar:</strong> 30-45 WPM (e-posta, sosyal medya)',
        '<strong>Sekreterlik/İdari İşler:</strong> 60-80 WPM (profesyonel standart)',
        '<strong>Sertifikalı yazıcılar:</strong> 90-120 WPM (resmi on parmak klavye tekniği)',
        '<strong>Profesyonel yazarlar:</strong> 120-160 WPM (gazeteciler, metin yazarları)',
        '<strong>Dünya şampiyonları:</strong> 200+ WPM (Guinness Dünya Rekoru: 216 WPM)',
      ],
    },
    {
      type: 'title',
      text: 'Neden Yazım Hızınızı Geliştirmelisiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026 yılında hızlı ve doğru yazmak sadece bir "sekreterlik becerisi" değildir. Bilgi tabanlı hemen hemen her meslek için <strong>kritik bir yetkinliktir</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Yazılımcılar:</strong> Kod sadece düşünülmez, aynı zamanda yazılır. 100+ WPM hızında doğru yazmak, iş süresini yarıya indirebilir.',
        '<strong>Avukatlar:</strong> Hukuki belgeler hız ve hatasızlık gerektirir. Bir sözleşmedeki yazım hatası felaket olabilir.',
        '<strong>Öğrenciler:</strong> Süreli sınavlarda ve ödevlerde hızlı yazmak, düşüncelerinizi kağıda dökmenizi kolaylaştırır.',
      ],
    },
    {
      type: 'title',
      text: 'Yazım Testi Nasıl Yapılır: Adım Adım Kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çevrimiçi yazım testleri, sertifikalı sınavlarla aynı prensipte çalışır: belirlenen süre içinde net WPM ölçülür. Basit ama hassastır:',
    },
    {
      type: 'list',
      items: [
        '<strong>Süre seçin:</strong> 30 saniye, 60 saniye veya 2 dakika. 60 saniye standarttır.',
        '<strong>Yazmaya başlayın:</strong> İlk tuşa bastığınızda süre başlar.',
        '<strong>Doğruluğu koruyun:</strong> Hatalar kırmızıyla gösterilir, kelimenin sayılması için hatasız olması gerekir.',
        '<strong>Sonucu görün:</strong> Süre bittiğinde WPM ve doğruluk yüzdeniz gösterilir.',
      ],
    },
    {
      type: 'tip',
      html: 'Elit kullanıcılar (120+ WPM) doğru <strong>parmak pozisyonu</strong> sayesinde buraya ulaşır: sol parmaklar ASDF, sağ parmaklar JKL; üzerinde ve asla klavyeye bakmadan. 100 WPM barajını aşmanın tek yolu budur.',
    },
    { type: 'title', text: 'Günlük Klavye Antrenmanı', level: 2 },
    { type: 'paragraph', html: 'Kısa ve düzenli çalışmalar parmak hareketlerini kalıcı hâle getirir. Her gün on dakika odaklanmak, birkaç haftada bir yapılan uzun bir çalışmadan daha etkilidir.' },
    { type: 'paragraph', html: 'Hızdan önce doğruluğa öncelik verin. Düşük hata oranıyla sürdürülen bir hız, tek seferlik rekordan daha kullanışlıdır.' },
    { type: 'title', text: 'Rahat ve Sağlıklı Duruş', level: 2 },
    { type: 'paragraph', html: 'Omuzlarınızı gevşetin, bileklerinizi doğal konumda tutun ve ekranı göz hizasına yerleştirin. Ağrı hissederseniz çalışmayı bırakın.' },
    { type: 'paragraph', html: 'Tuşlara gereğinden sert basmayın. Hafif dokunuş yorgunluğu azaltır ve sabit bir ritim kurmayı kolaylaştırır.' },
    { type: 'title', text: 'Gerçek Hayata Uygun Çalışma', level: 2 },
    { type: 'paragraph', html: 'Çalışmalarınıza sayıları, noktalama işaretlerini ve işinizde kullandığınız kod parçalarını ekleyin. Sadece basit kelimeler günlük yazmayı tam olarak temsil etmez.' },
    { type: 'paragraph', html: 'Sık hata yaptığınız kelimeleri ve tuş kombinasyonlarını ayrıca çalışın. Hedefli tekrar, testi yalnızca uzatmaktan daha faydalıdır.' },
    { type: 'paragraph', html: 'Sonuçları aynı süre ve zorluk ayarıyla karşılaştırın. Böylece WPM ve doğruluk değişimi gerçek ilerlemeyi gösterir.' },
    { type: 'title', text: 'Sonuçları Doğru Okumak', level: 2 },
    { type: 'paragraph', html: 'Tek bir iyi sonuç becerinin tamamını göstermez. Birkaç denemenin ortalamasına ve hata sayısı artmadan hızı koruyup koruyamadığınıza bakın.' },
    { type: 'paragraph', html: 'Yorgunluk, gürültü ve stres sonucu geçici olarak düşürebilir. Sonucu yorumlarken test koşullarını da not edin.' },
    { type: 'paragraph', html: 'Dil veya klavye düzeni değiştirdiğinizde parmakların yeniden alışması gerekir. İlk düşüş bu durumda normaldir.' },
    { type: 'title', text: 'Mola Vermek', level: 2 },
    { type: 'paragraph', html: 'Her 20-30 dakikada ekrandan uzaklaşıp ellerinizi dinlendirin. Doğru teknik ve düzenli molalar aşırı yüklenmeyi azaltır.' },
    { type: 'paragraph', html: 'Sürekli rahatsızlığı görmezden gelmeyin. Çalışmayı durdurun ve gerekirse bir sağlık uzmanına danışın.' },
    { type: 'paragraph', html: 'Bir sonraki deneme için tek bir hedef belirleyin: zor kelimelerde daha az hata veya aynı doğrulukla birkaç WPM artışı.' },
    { type: 'paragraph', html: 'Yoğunluktan çok düzen önemlidir. Kısa bir çalışma, plana uygun tekrarlandığında değer kazanır.' },
    { type: 'paragraph', html: 'Yeni denemeye başlamadan önce hatalarınızı inceleyin. Bu geri bildirim bir sonraki çalışmayı doğru yere yönlendirir.' },
    { type: 'paragraph', html: 'Doğruluk arttıkça hız da çoğu zaman kendiliğinden yükselir; çünkü metni geri dönüp düzeltmek için durmazsınız.' },
    { type: 'paragraph', html: 'Kendinizi başkalarının rekorlarıyla değil, aynı koşullardaki eski sonuçlarınızla karşılaştırın.' },
    { type: 'paragraph', html: 'Sonuçlar çok değişiyorsa hız peşinde koşmadan önce el konumunuzu ve ritminizi sabitleyin.' },
    { type: 'title', text: 'Zor Kelimeleri Çalışmak', level: 2 },
    { type: 'paragraph', html: 'Zorlandığınız kelimeleri küçük gruplara ayırın ve önce yavaşça hatasız yazın. Hız, doğru hareket yolu yerleşince daha güvenli biçimde gelir.' },
    { type: 'paragraph', html: 'Aynı metni ezberlemek yerine farklı cümlelerle çalışın. Böylece testteki tanıdık kelimelere değil, gerçek yazma becerisine güvenirsiniz.' },
    { type: 'paragraph', html: 'Parmaklarınızı temel sıraya geri getirmek gereksiz hareketleri azaltır. Bu alışkanlık özellikle uzun metinlerde ritmi korur.' },
    { type: 'paragraph', html: 'Kullandığınız dile ve klavye düzenine uygun metin seçin. Alışılmadık bir ortamda alınan yüksek puan günlük performansı göstermeyebilir.' },
    { type: 'title', text: 'Ölçümleri Karşılaştırmak', level: 2 },
    { type: 'paragraph', html: 'WPM değerini doğrulukla birlikte değerlendirin. Hız artarken hata oranı yükseliyorsa net performansınız gerçekten gelişmemiş olabilir.' },
    { type: 'paragraph', html: 'Tarih, süre, zorluk ve doğruluk değerlerini saklayın. Birkaç hafta sonra eğilimi tek bir puandan daha iyi görürsünüz.' },
    { type: 'paragraph', html: 'Bir plato oluştuğunda daha uzun çalışmak yerine metin türünü veya zorluk seviyesini değiştirin.' },
    { type: 'paragraph', html: 'Test bir değerlendirme aracıdır, kişiliğiniz hakkında bir not değildir. Sonucu bir sonraki egzersizi seçmek için kullanın.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};

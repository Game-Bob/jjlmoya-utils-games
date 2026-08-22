import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'fare-hassasiyeti-donusturucu-oyunlar';
const title = 'Oyunlar Arası Fare Hassasiyeti Dönüştürücü';
const description = 'Rekabetçi oyunlar arasında fiziksel fare mesafenizi eşitleyin. Bağımsız DPI ile hipfire hassasiyetini dönüştürün ve cm/360 hesaplayın.';

const faqItems = [
  {
    "question": "Bu dönüştürücü neyi korur ?",
    "answer": "360 derecelik bir dönüş için gereken tam fiziksel mesafeyi korur."
  },
  {
    "question": "eDPI neden farklıdır ?",
    "answer": "eDPI oyunun yaw ölçeğine bağlıdır ve yalnızca aynı oyunda karşılaştırılabilir."
  },
  {
    "question": "Görüş açısı (FOV) dönüştürmeyi değiştirir mi ?",
    "answer": "Hayır, 360 derece için fiziksel mesafe aynı kalır."
  },
  {
    "question": "Dönüştürme kesin midir ?",
    "answer": "Hesaplama yaw sabitlerine göre matematiksel olarak kesindir."
  },
  {
    "question": "Fortnite hassasiyeti nasıl girilir ?",
    "answer": "Yüzde değerini sayı olarak girin, örneğin %7 için 7."
  },
  {
    "question": "Verilerim saklanıyor mu ?",
    "answer": "Hayır, tüm veriler tarayıcınızda yerel kalır."
  }
];

const howToItems = [
  {
    "name": "Kaynak oyunu seçin",
    "text": "Mevcut oyunu seçip DPI ve hassasiyet girin."
  },
  {
    "name": "Hedef oyunu seçin",
    "text": "Hedef oyunu seçip DPI ayarlayın."
  },
  {
    "name": "Değeri kopyalayın",
    "text": "Sonucu yeni oyunun ayarlarına kopyalayın."
  },
  {
    "name": "Dönüşü kontrol edin",
    "text": "Mousepad üzerinde 360 derece dönüş yapın."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Mevcut oyun",
    "targetGameLabel": "Hedef oyun",
    "sourceDpiLabel": "Mevcut DPI",
    "targetDpiLabel": "Hedef DPI",
    "sensitivityLabel": "Oyun içi hassasiyet",
    "linkDpiLabel": "Aynı DPI değerini koru",
    "sourceStationLabel": "Mevcut kurulum",
    "targetStationLabel": "Hedef kurulum",
    "guideSourceText": "Oynadığınız oyunu seçin, DPI ve yatay hassasiyetinizi girin.",
    "guideTargetText": "Hedef oyunu seçin. DPI değiştirmeyecekseniz bağlı bırakın.",
    "guideResultText": "Sonucu hedef oyuna kopyalayın ve 360 derecelik dönüşü doğrulayın.",
    "sourceInputHint": "Bu değerleri fare yazılımınızda ve oyun ayarlarında bulabilirsiniz.",
    "targetInputHint": "Hedef değer geçerli giriş yapıldığında aşağıda görünür.",
    "profileResetText": "Hassasiyet varsayılan örneğe sıfırlandı. Kendi değerinizle değiştirin.",
    "resultForGameTemplate": "3. Bu değeri {game} oyununa girin",
    "yawLabel": "Yaw ölçeği",
    "measuredProfileLabel": "Ölçülen profil",
    "documentedProfileLabel": "Resmi profil",
    "targetSensitivityLabel": "Bu hassasiyeti girin",
    "copyResultLabel": "Sonucu kopyala",
    "copiedLabel": "Kopyalandı",
    "swapLabel": "Dönüştürmeyi tersine çevir",
    "swapButtonLabel": "Değiştir",
    "shareLabel": "Bağlantıyı kopyala",
    "shareCopiedLabel": "Bağlantı kopyalandı",
    "presetsLabel": "Kas hafızası ayarları",
    "presetFastLabel": "Hızlı 22 cm",
    "presetBalancedLabel": "Dengeli 34 cm",
    "presetControlLabel": "Kontrol 50 cm",
    "cmUnitLabel": "Metrik",
    "inchUnitLabel": "İngiliz",
    "physicalArcLabel": "Tam bir dönüş",
    "sourceEdpiLabel": "Kaynak eDPI",
    "targetEdpiLabel": "Hedef eDPI",
    "countsLabel": "Fare vuruşları",
    "matchQualityLabel": "Profil doğruluğu",
    "exactMathLabel": "Resmi Yaw sabiti",
    "calibrationLabel": "Fiziksel kontrol önerilir",
    "fastBandLabel": "Hızlı bölge",
    "balancedBandLabel": "Dengeli bölge",
    "controlBandLabel": "Kontrol bölgesi",
    "extendedBandLabel": "Genişletilmiş bölge",
    "formulaLabel": "Dönüştürme formülü",
    "formulaText": "hedef hassasiyet = kaynak hassasiyet x kaynak DPI x kaynak yaw / (hedef DPI x hedef yaw)",
    "verificationTitle": "Mousepad üzerinde doğrulama",
    "verificationText": "Mousepad üzerine bir başlangıç noktası koyun ve her iki oyunda da 360 derecelik bir dönüş yapın.",
    "baseAimOnlyText": "Yalnızca kalçadan atış (hipfire) içindir.",
    "invalidInputText": "Pozitif değerler girin.",
    "openGameMenuLabel": "Oyun profili menüsünü aç"
},
  seo: [
    {
        "type": "title",
        "text": "Fiziksel Mesafeyi Koruyarak Fare Hassasiyetini Dönüştürün",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Hassasiyet değerleri her oyunda aynı anlama gelmez. Bu dönüştürücü <strong>360 derece için cm</strong> mesafesini korumak için yaw ölçeğini kullanır."
    },
    {
        "type": "paragraph",
        "html": "Sonuç hipfire görünümü için tasarlanmıştır."
    },
    {
        "type": "title",
        "text": "Hassasiyet Dönüştürme Formülü",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Hedef hassasiyet = kaynak hassasiyet x kaynak DPI x kaynak yaw / (hedef DPI x hedef yaw).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Ölçüm",
            "Anlamı",
            "En iyi kullanım"
        ],
        "rows": [
            [
                "Hassasiyet",
                "Oyun menüsündeki değer",
                "Ayarı değiştirmek"
            ],
            [
                "eDPI",
                "DPI ile hassasiyet çarpımı",
                "Oyuncuları karşılaştırmak"
            ],
            [
                "cm/360",
                "Mousepad üzerindeki mesafe",
                "Nişan alma hissini korumak"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Desteklenen Oyun Profilleri",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake ve Source oyunlarını destekler."
    },
    {
        "type": "tip",
        "title": "Fortnite Formatı",
        "html": "Oyunda görünen yüzde değerini girin, örneğin %7 için <strong>7</strong>."
    },
    {
        "type": "title",
        "text": "Görüş Açısının 360 Dereceye Etkisi",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "360 derecelik fiziksel dönüş görüş açısına (FOV) bağlı değildir."
    },
    {
        "type": "title",
        "text": "Sonucu Oyunda Kontrol Etme",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Fare ivmesini kapatın.",
            "Fareyi sabit bir noktaya hizalayın.",
            "Tam bir 360 derece dönüş yapın.",
            "Gerekirse değeri hafifçe ayarlayın."
        ]
    },
    {
        "type": "tip",
        "title": "Pratik kontrol önerilir",
        "html": "Mükemmel nişan alma için mousepad üzerinde test yapın."
    }
],
  faqTitle: 'Fare hassasiyeti hakkında sıkça sorulan sorular',
  faq: faqItems,
  bibliographyTitle: 'Kaynaklar ve kalibrasyon referansları',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};

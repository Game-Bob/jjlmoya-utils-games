import type { CategoryLocaleContent } from '../../types';

const slug = 'oyunlar';
const title = 'Viral Meydan Okumalar ve Oyunlar: Yazım Testi ve Bağımlılık Yapan Hız Yarışları';
const description = 'Becerilerinizi test etmek için oyunlaştırılmış meydan okumalar ve viral oyunlar. %100 çevrimdışı yazım testleri, hız meydan okumaları ve sürükleyici oyunlar.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Oyunlaştırılmış Meydan Okumalar Neden Bu Kadar Etkili', level: 2 },
    { type: 'paragraph', html: 'Oyunlaştırılmış meydan okumalar, sağlıklı rekabet yoluyla bilişsel becerileri geliştirir. Beyin dopamin salgılayarak tatmin edici ve akılda kalıcı deneyimler yaratır.' },
    { type: 'title', text: 'Dijital Çağda Klavye Kullanımı', level: 2 },
    { type: 'paragraph', html: 'Yazım hızı temel bir yetkinliktir. 10 WPM\'lik bir artış saatlerce zaman kazandırır. İyi tasarlanmış testler hem hızı hem de doğruluğu ölçer.' },
    { type: 'title', text: 'Meydan Okumalar Nasıl Çalışır', level: 2 },
    { type: 'list', items: ['İlerleme hakkında anında geri bildirim', 'Net ve ölçülebilir kurallar', 'Ölçeklenebilir zorluk seviyeleri', 'Kendi rekorlarınıza karşı yarışma'] },
    { type: 'title', text: 'Kanıtlanmış Faydalar', level: 2 },
    { type: 'paragraph', html: 'Düzenli yazım testi pratiği ile <strong>4-6 haftada %20-30 iyileşme</strong> sağlayın.' },
    { type: 'tip', html: 'Doğru duruş: Dik sırt, 90° dirsekler, nötr bilekler, parmaklar ana sırada. Önce teknik, sonra hız.' },
  ],
};

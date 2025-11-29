import { Product, TeamMember } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'cnc-v100',
    name: 'ProCut CNC İşleme Merkezi V100',
    category: 'CNC',
    price: '₺850.000',
    image: 'https://picsum.photos/800/600?random=1',
    shortDescription: 'Yüksek hassasiyetli dikey işleme merkezi, otomotiv ve havacılık parçaları için ideal.',
    fullDescription: 'ProCut V100, en zorlu endüstriyel standartları karşılamak üzere tasarlanmış son teknoloji bir CNC dikey işleme merkezidir. Yüksek torklu iş mili ve rijit gövde yapısı ile titiz toleranslarda üretim yapmanızı sağlar. Fanuc kontrol ünitesi ile donatılmıştır.',
    specs: {
      'İş Mili Hızı': '12.000 RPM',
      'Tabla Boyutu': '1000 x 600 mm',
      'Kontrol Ünitesi': 'Fanuc 0i-MF',
      'Ağırlık': '6.500 kg'
    }
  },
  {
    id: 'laser-x5',
    name: 'Fiber Lazer Kesim Makinesi X5',
    category: 'Lazer',
    price: '₺1.200.000',
    image: 'https://picsum.photos/800/600?random=2',
    shortDescription: '6kW güç kapasiteli, ultra hızlı metal kesim çözümü.',
    fullDescription: 'X5 Fiber Lazer, paslanmaz çelik, alüminyum ve karbon çelik kesiminde devrim yaratan hız ve kalite sunar. Düşük enerji tüketimi ve minimum bakım gereksinimi ile işletme maliyetlerinizi düşürür.',
    specs: {
      'Lazer Gücü': '6 kW',
      'Kesim Alanı': '3000 x 1500 mm',
      'Maks. Hız': '120 m/dk',
      'Teknoloji': 'IPG Fiber'
    }
  },
  {
    id: 'press-h200',
    name: 'Hidrolik Abkant Pres H200',
    category: 'Pres',
    price: '₺650.000',
    image: 'https://picsum.photos/800/600?random=3',
    shortDescription: '200 ton basma gücü ile ağır sanayi büküm işlemleri.',
    fullDescription: 'H200 Abkant Pres, kalın sac malzemelerin hassas bükümü için güçlü hidrolik silindirler ve senkronize kontrol sistemi kullanır. Kullanıcı dostu dokunmatik ekranı ile karmaşık büküm programlarını kolayca oluşturabilirsiniz.',
    specs: {
      'Basma Gücü': '200 Ton',
      'Büküm Uzunluğu': '4000 mm',
      'Arka Dayama': 'Motorlu X, R Eksen',
      'Güvenlik': 'Lazer Parmak Koruma'
    }
  },
  {
    id: 'lathe-t50',
    name: 'Endüstriyel Torna Tezgahı T50',
    category: 'Torna',
    price: '₺450.000',
    image: 'https://picsum.photos/800/600?random=4',
    shortDescription: 'Seri üretim için tasarlanmış, sağlam bankolu üniversal torna.',
    fullDescription: 'T50 Torna Tezgahı, geleneksel torna işlemlerini modern mühendislikle birleştirir. İndüksiyonla sertleştirilmiş bankolar ve hassas rulmanlar uzun ömürlü kullanım sunar.',
    specs: {
      'Banko Üzeri Çap': '500 mm',
      'Puntalar Arası': '1500 mm',
      'Fener Mili': '80 mm',
      'Motor Gücü': '7.5 kW'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu & CEO",
    image: "https://picsum.photos/200/200?random=10"
  },
  {
    name: "Ayşe Demir",
    role: "Satış Müdürü",
    image: "https://picsum.photos/200/200?random=11"
  },
  {
    name: "Mehmet Kaya",
    role: "Teknik Servis Şefi",
    image: "https://picsum.photos/200/200?random=12"
  }
];
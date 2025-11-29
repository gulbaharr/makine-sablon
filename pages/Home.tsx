import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, ShieldCheck, Truck, Users, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Modern Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-industrial-950 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
            alt="Advanced Factory" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-900/90 to-industrial-900/40"></div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
              Geleceğin Teknolojisi Bugün Hizmetinizde
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-slide-up">
              Endüstriyel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                Mükemmellik
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light animate-slide-up" style={{animationDelay: '0.1s'}}>
              En zorlu üretim hedefleriniz için tasarlanmış yüksek hassasiyetli CNC tezgahları, lazer kesim sistemleri ve akıllı otomasyon çözümleri.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                Ürünleri Keşfet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 backdrop-blur-md text-base font-bold rounded-full text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                Bize Ulaşın
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 md:gap-16 max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400 mt-1">Mutlu Müşteri</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1200+</p>
                <p className="text-sm text-gray-400 mt-1">Makine Kurulumu</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">7/24</p>
                <p className="text-sm text-gray-400 mt-1">Teknik Destek</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Features Section */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Neden TeknoMakina?</span>
            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Üretiminize Değer Katıyoruz
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto font-light">
              Sadece makine değil, verimlilik ve güven sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Settings className="h-8 w-8 text-white" />} 
              title="Yüksek Teknoloji" 
              description="Endüstri 4.0 uyumlu, akıllı sensörlerle donatılmış üretim sistemleri."
              delay={0}
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-white" />} 
              title="Tam Garanti" 
              description="Tüm makinelerimizde 2 yıl parça ve servis garantisi ile güvendesiniz."
              delay={100}
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-white" />} 
              title="Hızlı Lojistik" 
              description="Geniş stok ağımız sayesinde beklemeden üretime başlayın."
              delay={200}
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-white" />} 
              title="Uzman Mühendislik" 
              description="Kurulumdan eğitime kadar her adımda uzman mühendis desteği."
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* Product Highlight / Grid Section */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                En Yeni Teknoloji ile Tanışın: <br/>
                <span className="text-brand-600">ProCut CNC Serisi</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Yüksek devirli iş milleri, rijit gövde yapısı ve yeni nesil kontrol üniteleri ile ProCut serisi, üretim hızınızı %40'a kadar artırır.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  '12.000 RPM Direct Drive İş Mili',
                  'Otomatik Takım Değiştirme Sistemi',
                  'Fanuc veya Siemens Kontrol Ünitesi Seçeneği',
                  'Enerji Tasarrufu Modu'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/products/cnc-v100" className="text-brand-600 font-bold flex items-center hover:text-brand-800 transition-colors group">
                Detaylı İncele <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1565439398533-33b0b970b4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="CNC Machine" 
                className="relative rounded-3xl shadow-2xl w-full object-cover transform group-hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modern CTA */}
      <div className="bg-industrial-900 relative overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-brand-900 opacity-50 mix-blend-multiply"></div>
           <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Üretim Kapasitenizi Artırın
            </h2>
            <p className="mt-3 text-xl text-gray-300">
              Özel finansman seçenekleri ve taksit imkanları için satış temsilcimizle görüşün.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-brand-900 bg-white hover:bg-gray-100 shadow-xl transition-all hover:scale-105">
              Hemen Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </div>
);

export default Home;
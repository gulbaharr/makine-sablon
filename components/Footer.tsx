import React from 'react';
import { Cog, MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-industrial-950 text-gray-400 border-t border-industrial-900 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 p-1.5 rounded-md">
                 <Cog className="h-5 w-5 text-white animate-spin-slow" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">TEKNOMAKİNA</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Yenilikçi teknolojiler ve uzman mühendislik ile üretim süreçlerinizi geleceğe taşıyoruz.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kurumsal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/" className="hover:text-brand-500 transition-colors">Anasayfa</a></li>
              <li><a href="#/products" className="hover:text-brand-500 transition-colors">Ürünler</a></li>
              <li><a href="#/about" className="hover:text-brand-500 transition-colors">Hakkımızda</a></li>
              <li><a href="#/contact" className="hover:text-brand-500 transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Services */}
           <div>
            <h3 className="text-white font-semibold mb-6">Hizmetler</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">CNC Satış</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Teknik Servis</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Yedek Parça</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Kurulum & Eğitim</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Organize Sanayi Bölgesi, 12. Cadde No: 45, Bursa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <span>+90 224 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <span>info@teknomakina.com.tr</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-industrial-900 mt-16 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TeknoMakina San. ve Tic. A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
             <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: any }> = ({ icon: Icon }) => (
    <a href="#" className="bg-industrial-900 p-2 rounded-lg hover:bg-brand-600 hover:text-white transition-all duration-300 text-gray-400">
        <Icon className="h-5 w-5" />
    </a>
)

export default Footer;
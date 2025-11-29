import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-industrial-900 mt-12">Bize Ulaşın</h1>
          <p className="mt-4 text-xl text-gray-500 font-light">
            Projeleriniz için en doğru çözümü birlikte üretelim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Modern Contact Info Card */}
          <div className="lg:col-span-2 bg-industrial-950 rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between text-white min-h-[500px]">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">İletişim Bilgileri</h2>
              <p className="text-gray-400 text-sm mb-10">Aşağıdaki bilgilerden veya formu doldurarak bize ulaşabilirsiniz.</p>

              <div className="space-y-8">
                <ContactItem icon={MapPin} title="Adres" content="Organize Sanayi Bölgesi, 12. Cadde No: 45, 16140 Nilüfer/Bursa" />
                <ContactItem icon={Phone} title="Telefon" content="+90 224 123 45 67" subContent="Pzt-Cum: 08:00 - 18:00" />
                <ContactItem icon={Mail} title="E-posta" content="info@teknomakina.com.tr" subContent="satis@teknomakina.com.tr" />
              </div>
            </div>

            <div className="relative z-10 mt-10 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-400 mb-2">Google Maps</p>
              <div className="w-full h-32 bg-gray-700 rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8!2d28.9!3d40.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEyJzAwLjAiTiAyOMKwNTQnMDAuMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Clean Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <Send className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Mesajınız İletildi!</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Talebiniz başarıyla alınmıştır. Satış ekibimiz en geç 24 saat içerisinde sizinle iletişime geçecektir.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-0 transition-all font-medium"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-0 transition-all font-medium"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Konu</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-0 transition-all font-medium text-gray-600"
                  >
                    <option value="">Seçiniz</option>
                    <option value="Satis">Satış & Teklif</option>
                    <option value="Teknik">Teknik Servis</option>
                    <option value="YedekParca">Yedek Parça</option>
                    <option value="Diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-0 transition-all font-medium"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-brand-600 hover:bg-brand-500 hover:shadow-brand-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:-translate-y-1"
                  >
                    Gönder <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: any, title: string, content: string, subContent?: string }> = ({ icon: Icon, title, content, subContent }) => (
  <div className="flex items-start space-x-4 group">
    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-brand-500 transition-colors duration-300">
      <Icon className="h-6 w-6 text-brand-300 group-hover:text-white" />
    </div>
    <div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-gray-300 mt-1 font-light leading-snug">{content}</p>
      {subContent && <p className="text-gray-400 text-sm mt-1">{subContent}</p>}
    </div>
  </div>
);

export default Contact;
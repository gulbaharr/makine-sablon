import React from 'react';
import { TEAM } from '../services/mockData';
import { Target, Award, Globe, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <div className="relative bg-industrial-950 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
            Endüstrinin Gücü, <br/>
            <span className="text-brand-500">Geleceğin Vizyonu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            2005'ten beri yenilikçi makine çözümleriyle Türk sanayisinin global rekabet gücünü artırıyoruz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Mission/Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div>
                <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-2">Hikayemiz</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Mühendislik Tutkusuyla Başladık</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    TeknoMakina olarak, sadece metal işleyen makineler değil, iş ortaklarımıza değer katan çözümler üretiyoruz. Kalite standartlarımız ve müşteri odaklı yaklaşımımızla sektörde güvenin adresi olduk.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                    <Target className="h-8 w-8 text-brand-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Misyonumuz</h4>
                    <p className="text-sm text-gray-600">Yüksek verimli ve dayanıklı teknolojilerle üretim süreçlerini optimize etmek.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                    <Globe className="h-8 w-8 text-brand-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Vizyonumuz</h4>
                    <p className="text-sm text-gray-600">Global pazarda tanınan, teknolojiye yön veren lider bir marka olmak.</p>
                </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-600 rounded-[2rem] rotate-6 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Factory Team" 
              className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>

        {/* Modern Stats */}
        <div className="bg-industrial-900 rounded-3xl p-12 mb-32 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                    { val: '18+', label: 'Yıllık Tecrübe', icon: Award },
                    { val: '500+', label: 'Mutlu Müşteri', icon: Users },
                    { val: '1.2K', label: 'Makine Kurulumu', icon: Zap },
                    { val: '50', label: 'Uzman Personel', icon: Target }
                ].map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                            <stat.icon className="h-6 w-6 text-brand-400" />
                        </div>
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.val}</div>
                        <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
             </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Lider Kadromuz</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Deneyimli mühendis ve yöneticilerden oluşan ekibimizle tanışın.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-200 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-brand-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
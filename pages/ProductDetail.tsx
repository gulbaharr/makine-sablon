import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../services/mockData';
import { Product } from '../types';
import { askAiAboutProduct } from '../services/geminiService';
import { ArrowLeft, Check, Cpu, MessageSquare, Send, Sparkles, ChevronRight, Download, Phone } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  // AI Chat State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    const found = PRODUCTS.find(p => p.id === id);
    setProduct(found);
    setLoading(false);
  }, [id]);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !aiQuestion.trim()) return;

    setAiLoading(true);
    setAiAnswer(null);
    
    const answer = await askAiAboutProduct(product, aiQuestion);
    
    setAiAnswer(answer);
    setAiLoading(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-brand-600">Yükleniyor...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Ürün bulunamadı.</div>;

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      
      {/* Breadcrumb Area */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-600 transition-colors">Anasayfa</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-brand-600 transition-colors">Ürünler</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-semibold text-industrial-900 truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image & Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
              <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-0 right-0 m-6">
                <span className="bg-brand-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {product.category} Serisi
                </span>
              </div>
            </div>
            
            {/* Tech Specs Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Cpu className="h-6 w-6 mr-3 text-brand-600" /> Teknik Özellikler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col border-b border-gray-50 pb-2">
                    <dt className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">{key}</dt>
                    <dd className="text-base font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Info & Actions & AI */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8 flex-grow">
                <h1 className="text-3xl md:text-4xl font-extrabold text-industrial-900 mb-2 leading-tight">{product.name}</h1>
                <p className="text-2xl text-brand-600 font-bold mb-6">{product.price}</p>
                
                <div className="prose prose-slate text-gray-600 mb-8 leading-relaxed">
                  <p>{product.fullDescription}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                    {['2 Yıl Tam Garanti', 'Yerinde Ücretsiz Kurulum', '7/24 Teknik Destek'].map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-xl">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {item}
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/contact" className="col-span-1 bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-4 flex items-center justify-center font-bold text-sm md:text-base shadow-lg shadow-brand-200 transition-all hover:-translate-y-1">
                    <Phone className="h-4 w-4 mr-2" /> Teklif Al
                  </Link>
                  <button className="col-span-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-4 flex items-center justify-center font-bold text-sm md:text-base transition-all">
                    <Download className="h-4 w-4 mr-2" /> PDF İndir
                  </button>
                </div>
            </div>

            {/* Modern AI Assistant Card */}
            <div className="bg-gradient-to-br from-industrial-900 to-industrial-800 rounded-3xl p-1 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-500 rounded-full filter blur-3xl opacity-20"></div>
               
               <div className="bg-industrial-950/50 backdrop-blur-sm rounded-[20px] p-6 h-full relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-brand-500/20 rounded-lg mr-3">
                        <Sparkles className="h-5 w-5 text-brand-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">AI Asistan</h3>
                        <p className="text-xs text-brand-200/70">Bu ürün hakkında her şeyi sorun</p>
                    </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="space-y-4 mb-4">
                     {aiAnswer ? (
                         <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 animate-fade-in border border-white/5">
                             <p className="text-sm text-gray-200 leading-relaxed">{aiAnswer}</p>
                         </div>
                     ) : (
                         <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 border border-white/5">
                            <p className="text-sm text-gray-400 italic">"Bu makinenin enerji tüketimi nedir?" veya "Bakım aralıkları ne sıklıktadır?" gibi sorular sorabilirsiniz.</p>
                         </div>
                     )}
                  </div>

                  <form onSubmit={handleAiAsk} className="relative">
                    <input
                      type="text"
                      value={aiQuestion}
                      onChange={(e) => setAiQuestion(e.target.value)}
                      placeholder="Sorunuzu yazın..."
                      className="w-full bg-industrial-900/50 text-white placeholder-gray-500 border border-white/10 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all text-sm"
                    />
                    <button 
                      type="submit" 
                      disabled={aiLoading || !aiQuestion.trim()}
                      className="absolute right-1.5 top-1.5 p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-500 disabled:opacity-50 disabled:hover:bg-brand-600 transition-colors"
                    >
                      {aiLoading ? (
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </button>
                  </form>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
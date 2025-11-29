import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../services/mockData';
import { Product } from '../types';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      setProducts(PRODUCTS);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const categories = ['Tümü', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-industrial-900 mb-4 mt-12">Ürün Kataloğu</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">Endüstriyel ihtiyaçlarınız için en son teknoloji ile donatılmış makine parkurumuzu inceleyin.</p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 sticky top-24 z-30 backdrop-blur-md bg-white/90 supports-[backdrop-filter]:bg-white/80">

          {/* Categories */}
          <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="mr-4 text-gray-400 flex items-center">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${selectedCategory === cat
                    ? 'bg-industrial-900 text-white shadow-md transform scale-105'
                    : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-industrial-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Model veya özellik ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 border-0 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all sm:text-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 bg-gray-200 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-1">
                {/* Image Area */}
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-industrial-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-industrial-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-gray-500 mb-6 text-sm line-clamp-2 leading-relaxed">{product.shortDescription}</p>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-medium uppercase">Fiyat</span>
                      <span className="text-xl font-bold text-industrial-900">{product.price}</span>
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white p-3 rounded-full transition-all duration-300 transform group-hover:rotate-[-45deg] group-hover:bg-brand-600 group-hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg font-medium">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Tümü'); }}
              className="mt-4 text-brand-600 hover:underline"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
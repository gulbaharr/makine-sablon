import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cog, Phone } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', path: '/' },
  { label: 'Ürünler', path: '/products' },
  { label: 'Hakkımızda', path: '/about' },
  { label: 'İletişim', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-industrial-950/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-industrial-950 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-shadow duration-300">
              <Cog className="h-6 w-6 text-white animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-none">TEKNOMAKİNA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-400 mt-1 font-medium">Endüstriyel Çözümler</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/10 text-brand-400 shadow-inner'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pl-6 ml-6 border-l border-white/10">
                <NavLink 
                  to="/contact" 
                  className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all shadow-lg shadow-brand-900/50 hover:shadow-brand-600/50 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  <span>Teklif Al</span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/5 inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-industrial-900 border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600/20 text-brand-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
             to="/contact"
             onClick={() => setIsOpen(false)}
             className="block px-4 py-3 mt-4 rounded-lg text-base font-bold text-center bg-brand-600 text-white hover:bg-brand-500"
          >
            Teklif Al
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
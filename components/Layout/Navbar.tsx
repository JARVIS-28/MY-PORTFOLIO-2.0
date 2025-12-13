import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2, GitBranch, Folder } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active tab based on scroll position
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveTab(`#${section}`);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (label: string) => {
    switch(label.toLowerCase()) {
      case 'home': return 'TSX';
      case 'about': return 'MD';
      case 'experience': return 'LOG';
      case 'skills': return 'JSON';
      case 'projects': return 'DIR';
      default: return 'TXT';
    }
  };

  const getFileExtension = (label: string) => {
     switch(label.toLowerCase()) {
      case 'home': return 'home.tsx';
      case 'about': return 'README.md';
      case 'experience': return 'git.log';
      case 'skills': return 'stats.json';
      case 'projects': return 'repos';
      case 'contact': return 'mail.sh';
      default: return label.toLowerCase();
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
      scrolled ? 'bg-[#09090b]/95 backdrop-blur-md' : 'bg-[#09090b]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Menu Button */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="hidden md:flex items-center text-xs font-mono text-slate-500 ml-4">
                <Folder className="w-4 h-4 mr-2 text-primary-500" />
                <span>portfolio / src / </span>
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-1 mx-8 overflow-x-auto no-scrollbar">
            <div className="flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.href)}
                  className={`
                    group flex items-center px-4 py-2 text-xs font-mono border-t-2 transition-colors duration-200
                    ${activeTab === item.href 
                      ? 'bg-white/5 border-primary-500 text-white' 
                      : 'border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-300'}
                  `}
                >
                  <span className={`mr-2 ${activeTab === item.href ? 'text-primary-400' : 'text-slate-600 group-hover:text-slate-500'}`}>
                    {getIcon(item.label)}
                  </span>
                  {getFileExtension(item.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Status */}
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-500">
             <div className="flex items-center hover:text-primary-400 transition-colors cursor-pointer">
                <GitBranch className="w-3.5 h-3.5 mr-1" />
                <span>main</span>
             </div>
             <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                <span>Online</span>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:text-white hover:bg-white/5"
              >
                <span className="text-primary-500 mr-2">$ cd</span>
                {item.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
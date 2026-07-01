import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Consulting', href: '/consultation' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a192f]/60 backdrop-blur-xl border-b border-[#233554]">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto w-full">
        {/* Logo */}
        <a href="/" className="font-headline-md font-bold text-[#b9c7e4] flex items-center gap-2">
          <img src="/logoMain.png" alt="AfriCyberCore" className="h-8 w-8" />
          AfriCyberCore
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest ${
                index === 0
                  ? 'text-[#b9c7e4] border-b-2 border-[#ffb690] pb-1'
                  : 'text-[#c5c6cd]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 p-0"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f]/95 backdrop-blur-xl border-t border-[#233554] py-4">
          <nav className="flex flex-col space-y-4 px-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

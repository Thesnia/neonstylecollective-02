
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const categories = [{
    name: 'Makeup',
    href: '#makeup'
  }, {
    name: 'Bags',
    href: '#bags'
  }, {
    name: 'Watches',
    href: '#watches'
  }, {
    name: 'Men\'s Collection',
    href: '#mens-collection'
  }, {
    name: 'Skincare',
    href: '#skincare'
  }];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8', isScrolled ? 'glass py-4' : 'bg-transparent py-6')}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={cn('text-2xl font-bold transition-colors duration-300', isScrolled ? 'text-neon-pink' : 'text-white')}>The Royal Kart</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {categories.map(category => <a key={category.name} href={category.href} className={cn('text-sm font-medium transition-colors duration-300 hover:text-neon-pink', isScrolled ? 'text-foreground' : 'text-white')}>
              {category.name}
            </a>)}
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className={cn('p-2 rounded-full transition-colors duration-300', isScrolled ? 'text-foreground hover:bg-gray-100' : 'text-white hover:bg-white/10')}>
            <Search size={20} />
          </button>
          <button className={cn('p-2 rounded-full transition-colors duration-300', isScrolled ? 'text-foreground hover:bg-gray-100' : 'text-white hover:bg-white/10')}>
            <User size={20} />
          </button>
          <button className={cn('p-2 rounded-full transition-colors duration-300 relative', isScrolled ? 'text-foreground hover:bg-gray-100' : 'text-white hover:bg-white/10')}>
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-neon-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={cn('md:hidden p-2 rounded-full transition-colors duration-300', isScrolled ? 'text-foreground hover:bg-gray-100' : 'text-white hover:bg-white/10')}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-2">
            {categories.map(category => <a key={category.name} href={category.href} className="block py-2 text-foreground hover:text-neon-pink" onClick={() => setIsMobileMenuOpen(false)}>
                {category.name}
              </a>)}
          </div>
        </div>}
    </header>;
};

export default Navbar;

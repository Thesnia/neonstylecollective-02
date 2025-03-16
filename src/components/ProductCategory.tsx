
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  accentColor: string;
}

const ProductCategory = ({ id, title, description, products, accentColor }: ProductCategoryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // Update scroll position after animation completes
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
      setMaxScroll(container.scrollWidth - container.clientWidth);
    }, 300);
  };

  const handleScrollCheck = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    setScrollPosition(container.scrollLeft);
    setMaxScroll(container.scrollWidth - container.clientWidth);
  };

  return (
    <section id={id} className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className="category-chip inline-flex" 
            style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
          >
            Premium Collection
          </div>
          <h2 className="section-heading">{title}</h2>
          <p className="section-subheading">{description}</p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Scroll Controls */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll('left')}
              disabled={scrollPosition <= 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg ${
                scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={scrollPosition >= maxScroll}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg ${
                scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-100'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Products Grid/Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-none snap-x"
            onScroll={handleScrollCheck}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[300px] sm:min-w-[320px] flex-shrink-0 snap-start"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button 
            className="btn border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All {title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;

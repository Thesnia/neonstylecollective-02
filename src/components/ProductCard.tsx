
import { useState } from 'react';
import { Download, ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductCard = ({ id, name, brand, price, imageUrl, category }: ProductCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl product-card-shadow overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <div className={cn("image-loading absolute inset-0", isImageLoaded ? "hidden" : "block")} />
        
        <img 
          src={imageUrl}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700", 
            isHovered ? "scale-110" : "scale-100",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Product Actions Overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <button className="p-3 rounded-full bg-white text-foreground hover:bg-neon-pink hover:text-white transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-3 rounded-full bg-white text-foreground hover:bg-neon-blue hover:text-white transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="p-3 rounded-full bg-white text-foreground hover:bg-neon-green hover:text-white transition-colors">
            <Download size={20} />
          </button>
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="category-chip bg-white/80 text-foreground">
            {category}
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 sm:p-5">
        <div className="mb-1 text-sm text-muted-foreground">{brand}</div>
        <h3 className="font-medium text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-neon-pink">£{price.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground">UK Made</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import { useState } from 'react';
import { Star, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Celebrity {
  id: string;
  name: string;
  imageUrl: string;
  quote: string;
  favoriteProducts: {
    name: string;
    brand: string;
  }[];
}

const celebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    quote: 'I adore British craftsmanship. These products have been part of my beauty routine for years.',
    favoriteProducts: [
      { name: 'Signature Lipstick', brand: 'Charlotte Tilbury' },
      { name: 'Regenerist Cream', brand: 'Elemis' }
    ]
  },
  {
    id: '2',
    name: 'James Norton',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
    quote: 'The tailoring and attention to detail in UK fashion is unmatched. These are my go-to brands.',
    favoriteProducts: [
      { name: 'Classic Oxford Shirt', brand: 'Burberry' },
      { name: 'Heritage Watch', brand: 'Bremont' }
    ]
  },
  {
    id: '3',
    name: 'Naomi Campbell',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop',
    quote: 'My skin deserves the best, and these UK beauty products deliver exceptional results every time.',
    favoriteProducts: [
      { name: 'Royal Honey Night Cream', brand: 'Neal\'s Yard' },
      { name: 'Signature Tote', brand: 'Mulberry' }
    ]
  }
];

const CelebritySection = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="category-chip inline-flex bg-neon-purple/10 text-neon-purple">
            Celebrity Favorites
          </div>
          <h2 className="section-heading">Chosen By The Stars</h2>
          <p className="section-subheading">
            Discover the authentic UK products loved by celebrities and influencers around the world
          </p>
        </div>

        {/* Celebrity Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {celebrities.map((celeb) => (
            <button
              key={celeb.id}
              onClick={() => setActiveTab(celeb.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all",
                activeTab === celeb.id
                  ? "bg-neon-purple text-white shadow-lg shadow-neon-purple/20"
                  : "bg-white text-foreground hover:bg-gray-100"
              )}
            >
              {celeb.name}
            </button>
          ))}
        </div>

        {/* Celebrity Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {celebrities
            .filter((celeb) => celeb.id === activeTab)
            .map((celeb) => (
              <div key={celeb.id} className="space-y-8">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-10 bg-neon-purple rounded-full"></div>
                  <h3 className="text-3xl font-bold">{celeb.name}</h3>
                </div>

                <blockquote className="text-xl italic text-gray-600 border-l-4 border-neon-purple pl-4">
                  "{celeb.quote}"
                </blockquote>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Star className="text-neon-purple" size={20} /> 
                    Favorite Products
                  </h4>
                  <ul className="space-y-2">
                    {celeb.favoriteProducts.map((product, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                        <span className="font-medium">{product.name}</span>
                        <span className="text-muted-foreground">by {product.brand}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          {/* Celebrity Image */}
          {celebrities
            .filter((celeb) => celeb.id === activeTab)
            .map((celeb) => (
              <div 
                key={celeb.id} 
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredCard(celeb.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={celeb.imageUrl}
                  alt={celeb.name}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    hoveredCard === celeb.id ? "scale-105" : "scale-100"
                  )}
                />
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6",
                    hoveredCard === celeb.id ? "opacity-100" : "opacity-0",
                    "transition-opacity duration-300"
                  )}
                >
                  <button className="self-start btn bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 flex items-center gap-2">
                    <Download size={18} />
                    Download HD Image
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CelebritySection;

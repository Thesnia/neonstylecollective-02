
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import CelebritySection from '@/components/CelebritySection';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample product data
  const bagsProducts = [
    {
      id: 'bag-1',
      name: 'Oxford Leather Tote',
      brand: 'Mulberry',
      price: 795,
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
      category: 'Bags'
    },
    {
      id: 'bag-2',
      name: 'Canterbury Hobo',
      brand: 'Burberry',
      price: 1250,
      imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop',
      category: 'Bags'
    },
    {
      id: 'bag-3',
      name: 'Highland Crossbody',
      brand: 'Aspinal of London',
      price: 495,
      imageUrl: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop',
      category: 'Bags'
    },
    {
      id: 'bag-4',
      name: 'Cambridge Satchel',
      brand: 'The Cambridge Satchel Co.',
      price: 155,
      imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop',
      category: 'Bags'
    },
    {
      id: 'bag-5',
      name: 'Royal Weekender',
      brand: 'Aspinal of London',
      price: 650,
      imageUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1974&auto=format&fit=crop',
      category: 'Bags'
    }
  ];

  const watchesProducts = [
    {
      id: 'watch-1',
      name: 'Sloane Chronograph',
      brand: 'Bremont',
      price: 3995,
      imageUrl: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1964&auto=format&fit=crop',
      category: 'Watches'
    },
    {
      id: 'watch-2',
      name: 'Royal Oak Heritage',
      brand: 'Christopher Ward',
      price: 1150,
      imageUrl: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1974&auto=format&fit=crop',
      category: 'Watches'
    },
    {
      id: 'watch-3',
      name: 'Savile Row Classic',
      brand: 'Farer',
      price: 875,
      imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop',
      category: 'Watches'
    },
    {
      id: 'watch-4',
      name: 'Portobello Diver',
      brand: 'Bremont',
      price: 4295,
      imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop',
      category: 'Watches'
    },
    {
      id: 'watch-5',
      name: 'Chelsea Automatic',
      brand: 'Christopher Ward',
      price: 995,
      imageUrl: 'https://images.unsplash.com/photo-1548171677-c730a101a353?q=80&w=1727&auto=format&fit=crop',
      category: 'Watches'
    }
  ];

  const mensProducts = [
    {
      id: 'mens-1',
      name: 'Kensington Overcoat',
      brand: 'Burberry',
      price: 1895,
      imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
      category: 'Men\'s'
    },
    {
      id: 'mens-2',
      name: 'Oxford Tailored Suit',
      brand: 'Savile Row Co.',
      price: 1150,
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
      category: 'Men\'s'
    },
    {
      id: 'mens-3',
      name: 'Knightsbridge Cashmere Sweater',
      brand: 'Johnstons of Elgin',
      price: 295,
      imageUrl: 'https://images.unsplash.com/photo-1608991358231-4716207ebe3e?q=80&w=1974&auto=format&fit=crop',
      category: 'Men\'s'
    },
    {
      id: 'mens-4',
      name: 'Windsor Leather Boots',
      brand: 'Church\'s',
      price: 595,
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop',
      category: 'Men\'s'
    },
    {
      id: 'mens-5',
      name: 'Mayfair Silk Tie',
      brand: 'Drake\'s',
      price: 145,
      imageUrl: 'https://images.unsplash.com/photo-1598451650236-71f981b16108?q=80&w=1770&auto=format&fit=crop',
      category: 'Men\'s'
    }
  ];

  const makeupProducts = [
    {
      id: 'makeup-1',
      name: 'Magic Foundation',
      brand: 'Charlotte Tilbury',
      price: 34,
      imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b5e3d4c08b1?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-2',
      name: 'Sculpting Palette',
      brand: 'Illamasqua',
      price: 45,
      imageUrl: 'https://images.unsplash.com/photo-1599733589749-65aacf9c4011?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-3',
      name: 'Royal Lip Kit',
      brand: 'Charlotte Tilbury',
      price: 29,
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1815&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-4',
      name: 'London Lash Mascara',
      brand: 'Rimmel',
      price: 9.99,
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-5',
      name: 'Tea Rose Blush',
      brand: 'Burberry Beauty',
      price: 42,
      imageUrl: 'https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=1932&auto=format&fit=crop',
      category: 'Makeup'
    },
    // Adding more makeup products
    {
      id: 'makeup-6',
      name: 'Matte Revolution Lipstick',
      brand: 'Charlotte Tilbury',
      price: 28,
      imageUrl: 'https://images.unsplash.com/photo-1612811429618-f7c8f2b32f4f?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-7',
      name: 'Porcelain Foundation',
      brand: 'Illamasqua',
      price: 33,
      imageUrl: 'https://images.unsplash.com/photo-1591360764097-6dda12cf1e5c?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-8',
      name: 'Precision Brow Definer',
      brand: 'Rimmel',
      price: 7.99,
      imageUrl: 'https://images.unsplash.com/photo-1599733589749-65aacf9c4011?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-9',
      name: 'Luxury Eyeshadow Palette',
      brand: 'Charlotte Tilbury',
      price: 53,
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    },
    {
      id: 'makeup-10',
      name: 'Deep Cocoa Foundation',
      brand: 'Burberry Beauty',
      price: 46,
      imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b5e3d4c08b1?q=80&w=1974&auto=format&fit=crop',
      category: 'Makeup'
    }
  ];

  // New skincare products
  const skincareProducts = [
    {
      id: 'skincare-1',
      name: 'Rose Hip Facial Oil',
      brand: 'The Ordinary',
      price: 9.99,
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-2',
      name: 'Vitamin C Serum',
      brand: 'Neal\'s Yard',
      price: 42,
      imageUrl: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-3',
      name: 'Hydrating Night Cream',
      brand: 'Elemis',
      price: 49,
      imageUrl: 'https://images.unsplash.com/photo-1570179538669-b4b1bf5b913b?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-4',
      name: 'Exfoliating Clay Mask',
      brand: 'Liz Earle',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-5',
      name: 'Royal Honey Face Mist',
      brand: 'Neal\'s Yard',
      price: 18,
      imageUrl: 'https://images.unsplash.com/photo-1508302581085-7faa97b8ccf8?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-6',
      name: 'Marine Collagen Serum',
      brand: 'REN Clean Skincare',
      price: 52,
      imageUrl: 'https://images.unsplash.com/photo-1603188284886-e229dafaed2a?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-7',
      name: 'Tea Tree Purifying Toner',
      brand: 'The Body Shop',
      price: 14,
      imageUrl: 'https://images.unsplash.com/photo-1595085610896-fb31cdd0a40c?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-8',
      name: 'Retinol Night Repair',
      brand: 'Elemis',
      price: 65,
      imageUrl: 'https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-9',
      name: 'Bamboo Charcoal Cleanser',
      brand: 'REN Clean Skincare',
      price: 29,
      imageUrl: 'https://images.unsplash.com/photo-1556229010-5c39ee494783?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    },
    {
      id: 'skincare-10',
      name: 'Brightening Eye Cream',
      brand: 'Liz Earle',
      price: 28,
      imageUrl: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=1974&auto=format&fit=crop',
      category: 'Skincare'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <ProductCategory 
        id="bags"
        title="Luxury Bags"
        description="Discover our collection of handcrafted, premium quality bags made in the UK by master artisans."
        products={bagsProducts}
        accentColor="#FF2D70" // neon pink
      />
      
      <ProductCategory 
        id="watches"
        title="Premium Watches"
        description="Precision engineering meets British craftsmanship in our exclusive collection of timepieces."
        products={watchesProducts}
        accentColor="#00FFFF" // neon blue
      />
      
      <CelebritySection />
      
      <ProductCategory 
        id="mens-collection"
        title="Men's Collection"
        description="Elegance and sophistication define our range of clothing and accessories for the modern gentleman."
        products={mensProducts}
        accentColor="#8A2BE2" // neon purple
      />
      
      <ProductCategory 
        id="makeup"
        title="Luxury Makeup"
        description="Beauty products for all skin tones, crafted with the finest ingredients for radiant results."
        products={makeupProducts}
        accentColor="#39FF14" // neon green
      />
      
      <ProductCategory 
        id="skincare"
        title="Premium Skincare"
        description="Revitalize your skin with our selection of high-quality British skincare products that nourish and protect."
        products={skincareProducts}
        accentColor="#FFA500" // neon orange
      />
      
      <Footer />
    </div>
  );
};

export default Index;


import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/20 to-neon-blue/20 mix-blend-overlay"
          style={{ 
            backgroundSize: '200% 200%',
            animation: 'gradient-animation 15s ease infinite'
          }}
        />
        
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{ 
            transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
            transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
            opacity: isLoaded ? 0.5 : 0
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-white z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div 
            className={`category-chip bg-white/10 text-white transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'transform 0.6s ease-out, opacity 0.6s ease-out' }}
          >
            Premium UK Products
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            style={{ transition: 'transform 0.8s ease-out, opacity 0.8s ease-out' }}
          >
            <span className="block">Authentic Luxury</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Made in the UK</span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/80 max-w-xl mx-auto transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            style={{ transition: 'transform 1s ease-out, opacity 1s ease-out' }}
          >
            Your one-stop shop for authentic UK products. Fast, reliable delivery to your door, anytime. Experience quality and convenience with every order!
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            style={{ transition: 'transform 1.2s ease-out, opacity 1.2s ease-out' }}
          >
            <button className="btn btn-primary">
              Shop Now
            </button>
            <button className="btn bg-white/10 text-white hover:bg-white/20">
              Explore Collections
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#bags" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity animate-bounce"
      >
        <span className="text-sm mb-2">Discover</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;


import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">UK Store</h3>
            <p className="text-primary-foreground/80 mb-6">
              Your one-stop shop for authentic UK products. Fast, reliable delivery to your door, anytime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-neon-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-neon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-neon-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-neon-green transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#bags" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Bags</a>
              </li>
              <li>
                <a href="#watches" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Watches</a>
              </li>
              <li>
                <a href="#mens-collection" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Men's Collection</a>
              </li>
              <li>
                <a href="#makeup" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Makeup</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Returns Policy</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shipping</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-neon-pink mt-1" size={18} />
                <span className="text-primary-foreground/80">123 Oxford Street, London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-neon-pink" size={18} />
                <span className="text-primary-foreground/80">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-neon-pink" size={18} />
                <span className="text-primary-foreground/80">support@ukstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2023 UK Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/40x25/FFFFFF/000000?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/000000?text=MC" alt="MasterCard" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/000000?text=AMEX" alt="American Express" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/000000?text=PP" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

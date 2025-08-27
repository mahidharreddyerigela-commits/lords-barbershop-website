import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
  };

  return (
    <footer className="bg-barbershop-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-barbershop-red drop-shadow-lg">Lord's Barbershop</h3>
            <p className="text-white mb-4">
              Premium barbering services in San Antonio's Southside. 
              Expert fades, beard care, and classic cuts.
            </p>
            <div className="text-sm text-white">
              <p className="text-white">3751 Pleasanton Rd</p>
              <p className="text-white">San Antonio, TX 78221</p>
              <p className="mt-2 text-white">
                <a 
                  href="tel:+12107172360" 
                  onClick={trackCallCTA} 
                  className="hover:text-barbershop-red transition-colors duration-200"
                >
                  (210) 717-2360
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/" className="hover:text-barbershop-red transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-barbershop-red transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-barbershop-red transition-colors duration-200">Gallery</Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-barbershop-red transition-colors duration-200">Team</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-barbershop-red transition-colors duration-200">Reviews</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-barbershop-red transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/mens-haircut-san-antonio" className="hover:text-barbershop-red transition-colors duration-200">Men's Haircuts</Link>
              </li>
              <li>
                <Link href="/fade-haircut-san-antonio" className="hover:text-barbershop-red transition-colors duration-200">Fade Haircuts</Link>
              </li>
              <li>
                <Link href="/beard-trim-san-antonio" className="hover:text-barbershop-red transition-colors duration-200">Beard Trimming</Link>
              </li>
              <li>
                <Link href="/kids-haircut-san-antonio" className="hover:text-barbershop-red transition-colors duration-200">Kids Haircuts</Link>
              </li>
            </ul>
          </div>
          
          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hours & Social</h4>
            <div className="text-white mb-4">
              <p className="text-sm text-white">Monday</p>
              <p className="text-sm text-white">12:00 PM - 8:00 PM</p>
              <p className="text-sm mt-1 text-white">Tuesday - Saturday</p>
              <p className="text-sm text-white">9:00 AM - 8:00 PM</p>
              <p className="text-sm mt-1 text-white">Sunday</p>
              <p className="text-sm text-white">9:00 AM - 3:00 PM</p>
            </div>
            
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/lords_barbershop210/" 
                target="_blank" 
                rel="noopener"
                className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.yelp.com/biz/lord-s-barber-shop-san-antonio" 
                target="_blank" 
                rel="noopener"
                className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5"
                aria-label="Yelp"
              >
                <i className="fab fa-yelp text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/pages/The%20Lord%27s%20Barbershop/676322549149665/" 
                target="_blank" 
                rel="noopener"
                className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
            
            <a 
              href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
              onClick={() => trackBookingCTA('footer')}
              className="bg-barbershop-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-all duration-200 inline-block"
            >
              Book Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Lord's Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

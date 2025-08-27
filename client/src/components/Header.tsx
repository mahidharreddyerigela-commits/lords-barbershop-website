import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import lordsBarbershopLogo from "@assets/ChatGPT Image Aug 25, 2025, 01_36_26 PM_1756146992359.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'team', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <>
      {/* Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-barbershop-red text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <header className="bg-barbershop-dark text-white sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:opacity-90 transition-opacity duration-200"
                data-testid="button-logo"
              >
                <img 
                  src={lordsBarbershopLogo}
                  alt="Lord's Barbershop Logo"
                  className="h-16 md:h-20 lg:h-24 w-auto transform hover:scale-105 transition-all duration-300 drop-shadow-lg"
                  data-testid="img-logo"
                />
              </button>
            </div>
            
            {/* Centered Company Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-xl md:text-2xl font-bold text-white hover:text-barbershop-red transition-colors duration-200"
                data-testid="button-company-name"
              >
                Lord's Barbershop
              </button>
            </div>
            
            {/* Header CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+12107172360" 
                onClick={trackCallCTA} 
                className="text-sm hover:text-barbershop-red transition-colors duration-200"
              >
                <i className="fas fa-phone mr-1"></i>
                (210) 717-2360
              </a>
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('header')}
                className="bg-barbershop-red text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-barbershop-red transition-colors duration-200" 
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
          
          {/* Secondary Navigation Bar */}
          <div className="hidden md:block bg-barbershop-medium border-t border-barbershop-dark/20">
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-center space-x-8 py-3" aria-label="Main navigation">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("home") ? "text-barbershop-red" : "text-white"}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("services") ? "text-barbershop-red" : "text-white"}`}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("gallery") ? "text-barbershop-red" : "text-white"}`}
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('team')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("team") ? "text-barbershop-red" : "text-white"}`}
                >
                  Team
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("reviews") ? "text-barbershop-red" : "text-white"}`}
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-sm font-medium hover:text-barbershop-red transition-colors duration-200 ${isActive("contact") ? "text-barbershop-red" : "text-white"}`}
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-barbershop-medium">
              <nav className="py-4 space-y-2" aria-label="Mobile navigation">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Team
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 hover:bg-barbershop-dark transition-colors duration-200"
                >
                  Contact
                </button>
                <div className="px-4 py-2 space-y-2">
                  <a 
                    href="tel:+12107172360" 
                    onClick={trackCallCTA} 
                    className="block text-center bg-barbershop-dark text-white py-2 rounded-md"
                  >
                    <i className="fas fa-phone mr-1"></i>
                    (210) 717-2360
                  </a>
                  <a 
                    href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                    onClick={() => trackBookingCTA('mobile-menu')}
                    className="block text-center bg-barbershop-red text-white py-2 rounded-md font-medium"
                  >
                    Book Now
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Home = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "name": "Lord's Barbershop",
    "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    "url": window.location.origin,
    "telephone": "+1-210-717-2360",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3751 Pleasanton Rd",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78221",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.3669",
      "longitude": "-98.4951"
    },
    "sameAs": [
      "https://www.instagram.com/lords_barbershop210/",
      "https://www.yelp.com/biz/lord-s-barber-shop-san-antonio",
      "https://www.facebook.com/pages/The%20Lord%27s%20Barbershop/676322549149665/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "12:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEO />
      <StructuredData data={structuredData} />
      
      <div id="main-content">
        {/* Hero Section */}
        <section className="relative bg-barbershop-dark text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="mb-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-barbershop-red drop-shadow-2xl animate-pulse">
                  Lord's Barbershop
                </h2>
                <div className="h-2 w-full bg-gradient-to-r from-barbershop-red to-red-600 rounded-full mb-6"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Haircuts & Beard Care in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Precision fades, expert beard shaping, and classic razor shaves on San Antonio's Southside. 
                Professional barbers delivering exceptional grooming experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('hero')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Book Your Appointment
                </a>
                <a 
                  href="tel:+12107172360" 
                  onClick={trackCallCTA} 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-barbershop-dark transition-all duration-200 text-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-barbershop-red mr-2"></i>
                  <span>3751 Pleasanton Rd, San Antonio, TX 78221</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-barbershop-red mr-2"></i>
                  <span>Mon: 12PM-8PM; Tue-Sat: 9AM-8PM; Sun: 9AM-3PM</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-barbershop-red mr-2"></i>
                  <span>5.0 Rating on Google & Yelp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Premium Barbering Services in San Antonio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From precision fades to classic razor shaves, we deliver exceptional grooming services 
                that keep you looking sharp and feeling confident.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Fade Haircuts */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional fade haircut in San Antonio" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Fade Haircuts</h3>
                <p className="text-gray-600 mb-4">
                  Perfect tapers, low fades, mid fades, and skin fades crafted by expert barbers. 
                  Clean lines that last.
                </p>
                <Link href="/services/fade-haircut-san-antonio">
                  <a className="text-barbershop-red font-medium hover:underline">
                    Learn More →
                  </a>
                </Link>
              </div>
              
              {/* Beard Shaping */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional beard shaping in San Antonio" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Beard Shaping</h3>
                <p className="text-gray-600 mb-4">
                  Expert beard trimming, shaping, and grooming. Maintain your perfect beard style 
                  with professional care.
                </p>
                <Link href="/services/beard-shaping-san-antonio">
                  <a className="text-barbershop-red font-medium hover:underline">
                    Learn More →
                  </a>
                </Link>
              </div>
              
              {/* Razor Shaves */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Classic razor shave service in San Antonio" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Razor Shaves</h3>
                <p className="text-gray-600 mb-4">
                  Traditional hot towel and straight razor shaves. Experience the ultimate in 
                  classic barbering luxury.
                </p>
                <Link href="/services/razor-shave-san-antonio">
                  <a className="text-barbershop-red font-medium hover:underline">
                    Learn More →
                  </a>
                </Link>
              </div>
              
              {/* Kids Haircuts */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Kids haircut service in San Antonio" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Kids Haircuts</h3>
                <p className="text-gray-600 mb-4">
                  Patient, gentle haircuts for children. Creating positive experiences while 
                  delivering great styles.
                </p>
                <Link href="/services/kids-haircut-san-antonio">
                  <a className="text-barbershop-red font-medium hover:underline">
                    Learn More →
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('services')}
                className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Your Service Today
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Our Work Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the quality and precision that goes into every cut. Our skilled barbers take pride 
                in delivering exceptional results for every client.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Fresh fade haircut gallery image" 
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Professional beard styling gallery image" 
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Classic razor shave gallery image" 
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Modern haircut style gallery image" 
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </div>
            
            <div className="text-center">
              <Link href="/gallery">
                <a className="bg-barbershop-dark text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                  View Full Gallery
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say 
                about their experience at Lord's Barbershop.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Review 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Best fade I've ever gotten in San Antonio! Miguel really knows his craft. 
                  The attention to detail is incredible, and the shop has a great vibe."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-barbershop-dark">Jason M.</p>
                    <p className="text-sm text-gray-600">Google Review</p>
                  </div>
                </div>
              </div>
              
              {/* Review 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect beard trim every time. The team is professional and the booking 
                  system makes it super easy to schedule. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-barbershop-dark">David R.</p>
                    <p className="text-sm text-gray-600">Yelp Review</p>
                  </div>
                </div>
              </div>
              
              {/* Review 3 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Sofia is amazing with kids! My son actually looks forward to haircuts now. 
                  Clean shop, friendly staff, and excellent service."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-barbershop-dark">Maria L.</p>
                    <p className="text-sm text-gray-600">Google Review</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/reviews">
                <a className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105">
                  Read More Reviews
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

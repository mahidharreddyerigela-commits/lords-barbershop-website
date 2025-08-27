import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const Services = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  return (
    <>
      <SEO
        title="Services | Lord's Barbershop San Antonio - Fades, Beard Shaping & Razor Shaves"
        description="Professional barbering services in San Antonio including precision fades, beard shaping, classic razor shaves, and kids haircuts. Book your appointment today."
        canonical={`${window.location.origin}/services`}
      />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
              Professional Barbering Services in San Antonio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From precision fades to classic razor shaves, we deliver exceptional grooming services 
              that keep you looking sharp and feeling confident. Located on San Antonio's Southside.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Fade Haircuts */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional fade haircut in San Antonio" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Fade Haircuts in San Antonio</h2>
              <p className="text-gray-600 mb-6">
                Perfect tapers, low fades, mid fades, and skin fades crafted by expert barbers. 
                We specialize in clean lines that last and precision cuts that complement your face shape and style.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• High, Mid, and Low Fades</li>
                <li>• Skin Fades and Bald Fades</li>
                <li>• Taper Cuts and Line-ups</li>
                <li>• Custom Fade Designs</li>
              </ul>
              <Link href="/services/fade-haircut-san-antonio">
                <a className="bg-barbershop-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block mb-4">
                  Learn More About Fades
                </a>
              </Link>
            </div>
            
            {/* Beard Shaping */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional beard shaping in San Antonio" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Beard Shaping & Grooming</h2>
              <p className="text-gray-600 mb-6">
                Expert beard trimming, shaping, and grooming services. Maintain your perfect beard style 
                with professional care and attention to detail that enhances your facial features.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Beard Trimming and Shaping</li>
                <li>• Mustache Styling</li>
                <li>• Beard Oil and Conditioning</li>
                <li>• Custom Beard Designs</li>
              </ul>
              <Link href="/services/beard-shaping-san-antonio">
                <a className="bg-barbershop-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block mb-4">
                  Learn More About Beard Care
                </a>
              </Link>
            </div>
            
            {/* Razor Shaves */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Classic razor shave service in San Antonio" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Classic Razor Shaves</h2>
              <p className="text-gray-600 mb-6">
                Traditional hot towel and straight razor shaves. Experience the ultimate in 
                classic barbering luxury with our time-honored techniques and premium products.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Hot Towel Treatment</li>
                <li>• Straight Razor Shave</li>
                <li>• Aftershave and Moisturizing</li>
                <li>• Relaxing Barbershop Experience</li>
              </ul>
              <Link href="/services/razor-shave-san-antonio">
                <a className="bg-barbershop-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block mb-4">
                  Learn More About Razor Shaves
                </a>
              </Link>
            </div>
            
            {/* Kids Haircuts */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Kids haircut service in San Antonio" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Kids Haircuts</h2>
              <p className="text-gray-600 mb-6">
                Patient, gentle haircuts for children of all ages. Creating positive experiences while 
                delivering great styles that parents love and kids feel confident wearing.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Patient, Kid-Friendly Service</li>
                <li>• Age-Appropriate Styles</li>
                <li>• Fun, Comfortable Environment</li>
                <li>• Experienced with Children</li>
              </ul>
              <Link href="/services/kids-haircut-san-antonio">
                <a className="bg-barbershop-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block mb-4">
                  Learn More About Kids Cuts
                </a>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-4">
              Ready to Book Your Service?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the quality and professionalism that has made Lord's Barbershop 
              the premier choice for men's grooming in San Antonio's Southside.
            </p>
            <a 
              href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
              onClick={() => trackBookingCTA('services-page')}
              className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Your Appointment Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import CTARow from "@/components/CTARow";
import { Link } from "wouter";
import fadeWithBraidImage from "@assets/466482761_2781822328662357_4257416269957702236_n_1755988244883.jpg";
import barberInActionImage from "@assets/465654928_3803897436495552_8961823703472416452_n_1755988244896.jpg";

const MensHaircutSanAntonio = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
    trackEvent('book_click', source, 'service_page');
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
    trackEvent('call_click', 'mens_haircut_page', 'service_page');
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a men's haircut take at Lord's Barbershop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most men's haircuts take 30-45 minutes, depending on the style and length. We take our time to ensure precision."
        }
      },
      {
        "@type": "Question",
        "name": "What's the price range for men's haircuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Men's haircuts start from $25, with pricing varying based on complexity and length. We offer competitive rates for quality service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer beard trimming with men's haircuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer beard trimming and shaping as an add-on service to complement your haircut. Ask about our combo packages."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Professional Men's Haircuts San Antonio | Lord's Barbershop"
        description="Expert men's haircuts in San Antonio. Precision cuts, modern styles, classic looks. Book online or call (210) 717-2360. 3751 Pleasanton Rd."
        canonical={window.location.origin + "/mens-haircut-san-antonio"}
      />
      <StructuredData data={faqStructuredData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-barbershop-dark text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: `url(${barberInActionImage})`
               }}>
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Men's Haircuts in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Professional men's haircuts tailored to your style and lifestyle. Expert barbers delivering precision cuts with modern techniques and classic craftsmanship.
              </p>
              <CTARow source="mens-haircut-hero" />
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-barbershop-dark mb-6">
                  Expert Men's Haircuts on San Antonio's Southside
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Lord's Barbershop, we understand that every man deserves a haircut that reflects his personal style and complements his lifestyle. Our experienced barbers combine traditional techniques with modern styling to deliver exceptional results that keep you looking sharp and confident.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located conveniently on Pleasanton Road, we serve men throughout San Antonio's Southside with professional grooming services that exceed expectations. Whether you're looking for a classic business cut, trendy modern style, or maintenance trim, our skilled team delivers precision and attention to detail.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Popular Men's Haircut Styles</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Classic business cuts</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Modern textured styles</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Crew cuts and buzz cuts</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Scissor cuts and trims</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Consultation for new styles</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={fadeWithBraidImage}
                  alt="Professional men's haircut example - Lord's Barbershop San Antonio"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded">
                  <p className="font-medium">Precision styling that complements your lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">What to Expect During Your Visit</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your haircut experience at Lord's Barbershop is designed for comfort, quality, and satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Consultation</h3>
                <p className="text-gray-600">We start with a detailed discussion about your style preferences, lifestyle, and hair type to ensure the perfect cut.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Precision Cutting</h3>
                <p className="text-gray-600">Our experienced barbers use professional tools and proven techniques for clean, precise cuts that last.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Finishing Touches</h3>
                <p className="text-gray-600">We add the final details including styling, cleanup, and aftercare advice to ensure you leave looking your best.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Time */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Service Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Service Time:</span>
                      <span className="text-gray-600">30-45 minutes</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Starting Price:</span>
                      <span className="text-barbershop-red font-bold text-xl">$25</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Includes:</span>
                      <span className="text-gray-600">Wash, Cut, Style</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-barbershop-dark">Add Beard Trim:</span>
                      <span className="text-gray-600">+$15</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-barbershop-dark text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Aftercare Tips</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                      <span>Use quality shampoo and conditioner suited for your hair type</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                      <span>Schedule maintenance cuts every 3-4 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                      <span>Use styling products sparingly for best results</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                      <span>Protect hair from sun and chlorine damage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-barbershop-dark text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    How long does a men's haircut take at Lord's Barbershop?
                  </h3>
                  <p className="text-gray-600">
                    Most men's haircuts take 30-45 minutes, depending on the style and length. We take our time to ensure precision.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    What's the price range for men's haircuts?
                  </h3>
                  <p className="text-gray-600">
                    Men's haircuts start from $25, with pricing varying based on complexity and length. We offer competitive rates for quality service.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    Do you offer beard trimming with men's haircuts?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We offer beard trimming and shaping as an add-on service to complement your haircut. Ask about our combo packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-barbershop-dark mb-4">Related Services</h2>
              <p className="text-gray-600 mb-8">Complete your grooming experience with our other professional services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fade-haircut-san-antonio" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-cut text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Fade Haircuts</h3>
                <p className="text-gray-600">Expert precision fades and tapers</p>
              </Link>
              
              <Link href="/beard-trim-san-antonio" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-user text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Beard Trimming</h3>
                <p className="text-gray-600">Professional beard shaping and care</p>
              </Link>
              
              <Link href="/kids-haircut-san-antonio" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-child text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Kids Haircuts</h3>
                <p className="text-gray-600">Patient, kid-friendly service</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-barbershop-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Best Men's Haircut?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Book your appointment online or call us directly. Same-day appointments often available.
            </p>
            <CTARow source="mens-haircut-bottom" />
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>3751 Pleasanton Rd, San Antonio, TX 78221</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-2"></i>
                <span>Mon: 12PM-8PM; Tue-Sat: 9AM-8PM; Sun: 9AM-3PM</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <span>(210) 717-2360</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MensHaircutSanAntonio;
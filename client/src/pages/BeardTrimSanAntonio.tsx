import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import CTARow from "@/components/CTARow";
import { Link } from "wouter";
import precisionCuttingImage from "@assets/464754895_533273249447525_5645256435020416789_n_1755988244896.jpg";
import barberDetailWork from "@assets/467199053_17852827434335761_468774247278290075_n_1755989363857.jpg";

const BeardTrimSanAntonio = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
    trackEvent('book_click', source, 'service_page');
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
    trackEvent('call_click', 'beard_trim_page', 'service_page');
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I get my beard trimmed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most men benefit from professional beard trimming every 2-3 weeks to maintain shape and health. Faster-growing beards may need weekly touch-ups."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in a beard trim service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our beard trim includes washing, precision trimming, shaping, edge work, mustache grooming, and application of beard oil or balm for finishing."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help design a beard style that suits my face?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our experienced barbers will assess your face shape, hair growth patterns, and lifestyle to recommend the perfect beard style for you."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Professional Beard Trim & Shaping San Antonio | Lord's Barbershop"
        description="Expert beard trimming in San Antonio. Precision shaping, styling & grooming. Book online or call (210) 717-2360. 3751 Pleasanton Rd."
        canonical={window.location.origin + "/beard-trim-san-antonio"}
      />
      <StructuredData data={faqStructuredData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-barbershop-dark text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: `url(${barberDetailWork})`
               }}>
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Beard Trim in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Professional beard trimming and shaping services. Expert grooming that enhances your natural facial hair with precision techniques and personalized styling.
              </p>
              <CTARow source="beard-trim-hero" />
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-barbershop-dark mb-6">
                  Expert Beard Grooming on San Antonio's Southside
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your beard deserves professional attention. At Lord's Barbershop, we understand that every beard is unique, with its own growth patterns, texture, and styling requirements. Our experienced barbers combine traditional techniques with modern grooming methods to create the perfect beard shape for your face and lifestyle.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located conveniently on Pleasanton Road, we've been helping San Antonio men achieve their ideal beard style with precision trimming, expert shaping, and professional grooming advice. Whether you're maintaining a full beard, sculpting a goatee, or perfecting your mustache, we deliver results that enhance your appearance and boost your confidence.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Our Beard Services Include</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Precision beard trimming</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Custom beard shaping</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Mustache grooming</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Edge line cleanup</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Beard conditioning treatment</li>
                    <li className="flex items-center"><i className="fas fa-check text-barbershop-red mr-3"></i>Style consultation</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={precisionCuttingImage}
                  alt="Expert precision beard trimming - Lord's Barbershop San Antonio"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <img 
                  src={barberDetailWork}
                  alt="Detailed beard shaping work - Professional barbering San Antonio"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beard Styles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">Popular Beard Styles We Master</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From classic full beards to modern sculpted styles, we help you achieve the perfect look for your face shape and personal style.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-male text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Full Beard</h3>
                <p className="text-gray-600 text-sm">Classic, well-groomed full coverage with natural shaping and professional maintenance.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-tie text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Goatee</h3>
                <p className="text-gray-600 text-sm">Precision-shaped goatees that complement your facial structure and professional image.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Stubble</h3>
                <p className="text-gray-600 text-sm">Carefully maintained stubble with clean lines and consistent length throughout.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Custom Styles</h3>
                <p className="text-gray-600 text-sm">Unique beard designs tailored to your preferences and facial features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">Your Beard Grooming Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive beard service ensures your facial hair looks its absolute best.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-comments"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Style Consultation</h3>
                      <p className="text-gray-600">We discuss your lifestyle, preferences, and face shape to determine the ideal beard style and maintenance routine.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-shower"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Cleansing & Prep</h3>
                      <p className="text-gray-600">Professional beard wash with quality products to soften hair and prepare for precise trimming.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-cut"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Precision Trimming</h3>
                      <p className="text-gray-600">Expert shaping using professional tools to create clean lines and the perfect length for your style.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Detail Work</h3>
                      <p className="text-gray-600">Careful attention to edges, mustache grooming, and final shaping for a polished appearance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-oil-can"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Conditioning</h3>
                      <p className="text-gray-600">Application of premium beard oils or balms to nourish hair and skin while adding healthy shine.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-barbershop-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Maintenance Tips</h3>
                      <p className="text-gray-600">Professional advice on home care, product recommendations, and scheduling for optimal beard health.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Beard Trim Service Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Service Time:</span>
                      <span className="text-gray-600">20-30 minutes</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Starting Price:</span>
                      <span className="text-barbershop-red font-bold text-xl">$15</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Includes:</span>
                      <span className="text-gray-600">Trim, Shape, Condition</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Maintenance:</span>
                      <span className="text-gray-600">Every 2-3 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-barbershop-dark">With Haircut:</span>
                      <span className="text-gray-600">Combo pricing available</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-barbershop-dark text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Beard Care Tips</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-shower text-barbershop-red mr-3 mt-1"></i>
                      <span>Wash your beard 2-3 times per week with specialized beard shampoo</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-oil-can text-barbershop-red mr-3 mt-1"></i>
                      <span>Apply beard oil daily to keep hair soft and skin moisturized</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-comb text-barbershop-red mr-3 mt-1"></i>
                      <span>Use a quality beard comb or brush to distribute oils and prevent tangles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar text-barbershop-red mr-3 mt-1"></i>
                      <span>Regular professional trims maintain shape and promote healthy growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-barbershop-dark text-center mb-12">
                Beard Trimming FAQs
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    How often should I get my beard trimmed?
                  </h3>
                  <p className="text-gray-600">
                    Most men benefit from professional beard trimming every 2-3 weeks to maintain shape and health. Faster-growing beards may need weekly touch-ups.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    What's included in a beard trim service?
                  </h3>
                  <p className="text-gray-600">
                    Our beard trim includes washing, precision trimming, shaping, edge work, mustache grooming, and application of beard oil or balm for finishing.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    Can you help design a beard style that suits my face?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! Our experienced barbers will assess your face shape, hair growth patterns, and lifestyle to recommend the perfect beard style for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-barbershop-dark mb-4">Complete Your Grooming Experience</h2>
              <p className="text-gray-600 mb-8">Pair your beard trim with our other professional services for the complete look</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/mens-haircut-san-antonio" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-male text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Men's Haircuts</h3>
                <p className="text-gray-600">Professional cuts to complement your beard</p>
              </Link>
              
              <Link href="/fade-haircut-san-antonio" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-cut text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Fade Haircuts</h3>
                <p className="text-gray-600">Expert fades that pair perfectly with beards</p>
              </Link>
              
              <Link href="/#home" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-scissors text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Razor Shaves</h3>
                <p className="text-gray-600">Traditional hot towel shaves</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-barbershop-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Perfect Your Beard?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Book your professional beard trim today and discover the difference expert grooming makes.
            </p>
            <CTARow source="beard-trim-bottom" />
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>3751 Pleasanton Rd, San Antonio, TX 78221</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-2"></i>
                <span>Mon-Sat: 9AM-8PM; Sun: 9AM-3PM</span>
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

export default BeardTrimSanAntonio;
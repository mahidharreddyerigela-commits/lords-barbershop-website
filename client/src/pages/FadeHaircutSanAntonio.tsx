import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import CTARow from "@/components/CTARow";
import { Link } from "wouter";
import fadeWithBraidImage from "@assets/466482761_2781822328662357_4257416269957702236_n_1755988244883.jpg";
import perfectFadeImage from "@assets/465559895_1515952362389753_6049179416055641046_n_1755988244896.jpg";

const FadeHaircutSanAntonio = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
    trackEvent('book_click', source, 'service_page');
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
    trackEvent('call_click', 'fade_haircut_page', 'service_page');
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between high, mid, and low fades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High fades start near the temples, mid fades around the ears, and low fades just above the ears. Each creates a different look and works with various hair types and face shapes."
        }
      },
      {
        "@type": "Question",
        "name": "How long do fade haircuts last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fade haircuts typically look best for 2-3 weeks. We recommend maintenance every 3-4 weeks to keep the fade sharp and clean."
        }
      },
      {
        "@type": "Question",
        "name": "Can you do skin fades on all hair types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our experienced barbers can create skin fades on all hair types and textures. We'll customize the technique based on your specific hair characteristics."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Expert Fade Haircuts San Antonio | Lord's Barbershop"
        description="Perfect fade haircuts in San Antonio. High, mid, low fades & skin fades. Expert precision cuts. Book online or call (210) 717-2360. 3751 Pleasanton Rd."
        canonical={window.location.origin + "/fade-haircut-san-antonio"}
      />
      <StructuredData data={faqStructuredData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-barbershop-dark text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: `url(${fadeWithBraidImage})`
               }}>
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Fade Haircuts in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Master-level fade haircuts with precision blending. High fades, mid fades, low fades, and skin fades crafted by experienced barbers who understand the art of the perfect fade.
              </p>
              <CTARow source="fade-haircut-hero" />
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-barbershop-dark mb-6">
                  Master-Level Fade Techniques
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Lord's Barbershop, we've perfected the art of fade haircuts. Our skilled barbers understand that a great fade requires technical precision, artistic vision, and years of experience. We create seamless transitions that complement your face shape, hair type, and personal style.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located on San Antonio's Southside, we serve clients who demand excellence in their fade haircuts. From classic military-inspired cuts to modern artistic fades, we deliver results that exceed expectations and keep you looking sharp for weeks.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-barbershop-dark mb-3">Fade Types We Master</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• High Fades</li>
                      <li>• Mid Fades</li>
                      <li>• Low Fades</li>
                      <li>• Skin/Bald Fades</li>
                      <li>• Taper Fades</li>
                      <li>• Drop Fades</li>
                    </ul>
                  </div>
                  
                  <div className="bg-barbershop-red text-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Why Choose Us</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 15+ years experience</li>
                      <li>• Professional-grade tools</li>
                      <li>• Custom consultation</li>
                      <li>• Attention to detail</li>
                      <li>• Affordable pricing</li>
                      <li>• Same-day availability</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={fadeWithBraidImage}
                  alt="Creative fade with braided design - Lord's Barbershop San Antonio"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src={perfectFadeImage}
                  alt="Perfect fade haircut styling - Lord's Barbershop craftsmanship"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fade Types Detail */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">Choose Your Perfect Fade Style</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each fade type creates a unique look. Our barbers will help you choose the perfect style for your face shape and lifestyle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">High Fade</h3>
                <p className="text-gray-600 mb-4">
                  Starts high on the head, around the temples. Creates a bold, modern look that's perfect for professional settings and contemporary styles.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Best for: Thick hair, oval faces, modern styles</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Mid Fade</h3>
                <p className="text-gray-600 mb-4">
                  The most versatile option, starting around the ears. Works with most face shapes and hair types, offering a balanced, classic look.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Best for: All face shapes, versatile styling</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Low Fade</h3>
                <p className="text-gray-600 mb-4">
                  Starts just above the ears, creating a subtle, professional appearance. Perfect for conservative environments and classic styles.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Best for: Professional settings, subtle style changes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process and Expectations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-barbershop-dark text-center mb-12">The Perfect Fade Process</h2>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="font-semibold text-barbershop-dark mb-2">Consultation</h3>
                  <p className="text-gray-600 text-sm">We discuss your desired style, face shape, and lifestyle to choose the perfect fade.</p>
                </div>
                
                <div>
                  <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="font-semibold text-barbershop-dark mb-2">Preparation</h3>
                  <p className="text-gray-600 text-sm">Hair is washed and prepared with professional products for optimal cutting.</p>
                </div>
                
                <div>
                  <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="font-semibold text-barbershop-dark mb-2">Precision Cutting</h3>
                  <p className="text-gray-600 text-sm">Multiple clipper guards create seamless transitions from long to short hair.</p>
                </div>
                
                <div>
                  <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                  <h3 className="font-semibold text-barbershop-dark mb-2">Final Details</h3>
                  <p className="text-gray-600 text-sm">Edge work, cleanup, and styling for the perfect finished look.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Aftercare */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Fade Haircut Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Service Time:</span>
                      <span className="text-gray-600">45-60 minutes</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Starting Price:</span>
                      <span className="text-barbershop-red font-bold text-xl">$25</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Includes:</span>
                      <span className="text-gray-600">Wash, Cut, Style, Cleanup</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Maintenance:</span>
                      <span className="text-gray-600">Every 3-4 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-barbershop-dark">Add Beard Work:</span>
                      <span className="text-gray-600">+$15</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-barbershop-dark text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Fade Maintenance Tips</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-calendar text-barbershop-red mr-3 mt-1"></i>
                      <span>Book touch-ups every 2-3 weeks to maintain the sharp fade lines</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-shower text-barbershop-red mr-3 mt-1"></i>
                      <span>Use quality hair products to keep the style looking fresh</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-sun text-barbershop-red mr-3 mt-1"></i>
                      <span>Protect from sun exposure which can fade the sharp lines</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-comb text-barbershop-red mr-3 mt-1"></i>
                      <span>Use minimal product - fades look best with natural texture</span>
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
                Fade Haircut FAQs
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    What's the difference between high, mid, and low fades?
                  </h3>
                  <p className="text-gray-600">
                    High fades start near the temples, mid fades around the ears, and low fades just above the ears. Each creates a different look and works with various hair types and face shapes.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    How long do fade haircuts last?
                  </h3>
                  <p className="text-gray-600">
                    Fade haircuts typically look best for 2-3 weeks. We recommend maintenance every 3-4 weeks to keep the fade sharp and clean.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    Can you do skin fades on all hair types?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Our experienced barbers can create skin fades on all hair types and textures. We'll customize the technique based on your specific hair characteristics.
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
              <h2 className="text-2xl font-bold text-barbershop-dark mb-4">Complete Your Look</h2>
              <p className="text-gray-600 mb-8">Enhance your fade with our other professional grooming services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/mens-haircut-san-antonio" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-male text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Men's Haircuts</h3>
                <p className="text-gray-600">Professional cuts for all styles</p>
              </Link>
              
              <Link href="/beard-trim-san-antonio" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-user text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Beard Trimming</h3>
                <p className="text-gray-600">Perfect complement to your fade</p>
              </Link>
              
              <Link href="/#home" className="block bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-home text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">All Services</h3>
                <p className="text-gray-600">View our complete service menu</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-barbershop-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Perfect Fade?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Book your fade haircut today and experience the difference expert technique makes.
            </p>
            <CTARow source="fade-haircut-bottom" />
            
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

export default FadeHaircutSanAntonio;
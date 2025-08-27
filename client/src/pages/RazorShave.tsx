import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RazorShave = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Razor Shave San Antonio",
    "description": "Traditional hot towel and straight razor shave services by expert barbers in San Antonio, TX. Classic barbering luxury and relaxing experience.",
    "provider": {
      "@type": "Barbershop",
      "name": "Lord's Barbershop",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3751 Pleasanton Rd",
        "addressLocality": "San Antonio",
        "addressRegion": "TX",
        "postalCode": "78221"
      }
    },
    "areaServed": "San Antonio, TX"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a straight razor shave take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete straight razor shave with hot towel treatment takes approximately 45-60 minutes. We never rush the process to ensure the perfect, comfortable shave."
        }
      },
      {
        "@type": "Question",
        "name": "Is a razor shave safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when performed by trained professionals like our barbers, straight razor shaves are completely safe. We use sterile techniques and high-quality equipment for your safety."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your razor shave service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our razor shave includes hot towel preparation, pre-shave oil, straight razor shave, hot towel finish, aftershave treatment, and moisturizer application."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get a professional razor shave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the best experience and skin health, we recommend a professional razor shave every 1-2 weeks, depending on your hair growth and personal preference."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Razor Shave in San Antonio | Lord's Barbershop (Pleasanton Rd)"
        description="Get expert razor shave on San Antonio's Southside. Skilled barbers, clean lines, quick booking on Booksy. Traditional hot towel and straight razor service."
        canonical={`${window.location.origin}/services/razor-shave-san-antonio`}
      />
      <StructuredData data={serviceStructuredData} />
      <StructuredData data={faqStructuredData} />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/"><a className="hover:text-barbershop-red">Home</a></Link></li>
              <li><span>/</span></li>
              <li><Link href="/services"><a className="hover:text-barbershop-red">Services</a></Link></li>
              <li><span>/</span></li>
              <li className="text-barbershop-red">Razor Shaves</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-6">
                Classic Razor Shaves in San Antonio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the ultimate in traditional barbering with our classic straight razor shaves. 
                Located on San Antonio's Southside, Lord's Barbershop offers the luxury and precision 
                of old-school craftsmanship with modern comfort and safety.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">What's Included in Our Razor Shave</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Hot Towel Preparation:</strong> Opens pores and softens facial hair for easier cutting
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Pre-Shave Oil Application:</strong> Protects skin and ensures smooth razor glide
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Premium Lather Application:</strong> Rich, warm lather for optimal comfort
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Straight Razor Shave:</strong> Expert technique for the closest possible shave
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Hot Towel Finish:</strong> Removes any remaining lather and closes pores
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Aftershave & Moisturizer:</strong> Soothes skin and prevents irritation
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('razor-service-page')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Book Razor Shave
                </a>
                <Link href="/gallery">
                  <a className="bg-barbershop-dark text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-all duration-200 text-center">
                    View Gallery
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Classic razor shave service at Lord's Barbershop San Antonio" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Benefits of Professional Razor Shaves
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Closest Shave Possible</h3>
                <p className="text-gray-600 text-sm">
                  Straight razors cut hair at skin level for the smoothest result that lasts longer than electric or cartridge razors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-spa text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Relaxing Experience</h3>
                <p className="text-gray-600 text-sm">
                  Hot towels, premium products, and expert technique create a luxurious, stress-relieving experience.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Better for Skin</h3>
                <p className="text-gray-600 text-sm">
                  Less irritation and ingrown hairs compared to multiple-blade razors, especially with proper preparation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Long-Lasting Results</h3>
                <p className="text-gray-600 text-sm">
                  Professional razor shaves last longer than home shaving, keeping you smooth for days.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Expert Technique</h3>
                <p className="text-gray-600 text-sm">
                  Our trained barbers know the proper angles, pressure, and technique for safe, comfortable shaves.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Premium Products</h3>
                <p className="text-gray-600 text-sm">
                  We use only the finest shaving creams, oils, and aftershaves for the ultimate luxury experience.
                </p>
              </div>
            </div>
          </div>

          {/* Aftercare Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Post-Shave Care Instructions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Immediate Aftercare (First 24 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Avoid touching or rubbing the freshly shaved area</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Stay out of direct sunlight when possible</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Use only gentle, fragrance-free products on your face</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Apply cold compress if any irritation occurs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Long-term Skin Health</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-calendar text-barbershop-red mr-3 mt-1"></i>
                    <span>Schedule regular razor shaves every 1-2 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-bottle-droplet text-barbershop-red mr-3 mt-1"></i>
                    <span>Moisturize daily with quality facial products</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-sun text-barbershop-red mr-3 mt-1"></i>
                    <span>Use SPF protection when outdoors</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-question-circle text-barbershop-red mr-3 mt-1"></i>
                    <span>Ask your barber about home care recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Frequently Asked Questions About Razor Shaves
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does a straight razor shave take?
                  </AccordionTrigger>
                  <AccordionContent>
                    A complete straight razor shave with hot towel treatment takes approximately 45-60 minutes. We never rush the process to ensure the perfect, comfortable shave that you deserve.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Is a razor shave safe?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, when performed by trained professionals like our barbers, straight razor shaves are completely safe. We use sterile techniques, properly maintained equipment, and follow all safety protocols for your protection.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What's included in your razor shave service?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our razor shave includes hot towel preparation, pre-shave oil application, premium lather, expert straight razor shave, hot towel finish, aftershave treatment, and moisturizer application for the complete experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How often should I get a professional razor shave?
                  </AccordionTrigger>
                  <AccordionContent>
                    For the best experience and skin health, we recommend a professional razor shave every 1-2 weeks, depending on your hair growth rate and personal preference for maintaining that perfectly smooth feel.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related Services */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Complete Your Grooming Experience
            </h3>
            <p className="text-gray-600 mb-8">
              Combine your razor shave with our other premium services for the ultimate barbershop experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/fade-haircut-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Fade Haircuts
                </a>
              </Link>
              <Link href="/services/beard-shaping-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Beard Shaping
                </a>
              </Link>
              <Link href="/team">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Meet Our Team
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RazorShave;

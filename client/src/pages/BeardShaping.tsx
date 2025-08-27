import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BeardShaping = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Beard Shaping San Antonio",
    "description": "Professional beard trimming, shaping, and grooming services by expert barbers in San Antonio, TX. Custom beard designs and mustache styling.",
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
        "name": "How often should I get my beard trimmed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For optimal beard health and appearance, we recommend professional beard trimming every 3-4 weeks. This maintains shape while allowing healthy growth."
        }
      },
      {
        "@type": "Question",
        "name": "What beard shapes work best for my face?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our barbers will assess your face shape and recommend the best beard style. Round faces benefit from longer beards, while square faces work well with fuller sides and shorter bottom length."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide beard oil treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer premium beard oil treatments that moisturize, condition, and add a healthy shine to your beard while promoting healthy growth."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix an uneven beard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our experienced barbers can reshape and even out uneven beards, creating a balanced, professional look that enhances your facial features."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Beard Shaping in San Antonio | Lord's Barbershop (Pleasanton Rd)"
        description="Get expert beard shaping on San Antonio's Southside. Skilled barbers, clean lines, quick booking on Booksy. Beard trimming and grooming specialists."
        canonical={`${window.location.origin}/services/beard-shaping-san-antonio`}
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
              <li className="text-barbershop-red">Beard Shaping</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-6">
                Professional Beard Shaping in San Antonio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your beard with expert shaping and grooming services at Lord's Barbershop. 
                Our skilled barbers on San Antonio's Southside specialize in creating the perfect 
                beard style to complement your face and lifestyle.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Beard Services We Offer</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Beard Trimming & Shaping:</strong> Precision cuts to maintain or create your ideal beard shape
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Mustache Styling:</strong> Expert trimming and styling for the perfect mustache
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Beard Oil Treatment:</strong> Premium conditioning treatments for healthy, soft beards
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Custom Beard Designs:</strong> Creative patterns and designs for unique looks
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Beard Line-ups:</strong> Clean, sharp lines around your beard perimeter
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('beard-service-page')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Book Beard Service
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
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional beard shaping at Lord's Barbershop San Antonio" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Face Shape Guide */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Beard Styles for Your Face Shape
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-circle text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Round Face</h3>
                <p className="text-gray-600 text-sm">
                  Longer, fuller beards help elongate the face. Avoid wide, short styles.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-square text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Square Face</h3>
                <p className="text-gray-600 text-sm">
                  Fuller sides with shorter bottom length soften angular jawlines.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-play text-xl" style={{transform: 'rotate(90deg)'}}></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Oval Face</h3>
                <p className="text-gray-600 text-sm">
                  Most versatile face shape - almost any beard style works well.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-play text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Heart Face</h3>
                <p className="text-gray-600 text-sm">
                  Fuller bottom with trimmed sides balances a wider forehead.
                </p>
              </div>
            </div>
          </div>

          {/* Beard Care Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Beard Care & Maintenance Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Daily Care Routine</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Wash your beard 2-3 times per week with specialized beard shampoo</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Apply beard oil daily to keep hair soft and skin moisturized</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Brush or comb your beard daily to distribute oils and train hair</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Trim split ends regularly to maintain healthy growth</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Professional Maintenance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-calendar text-barbershop-red mr-3 mt-1"></i>
                    <span>Schedule professional trims every 3-4 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-cut text-barbershop-red mr-3 mt-1"></i>
                    <span>Let professionals handle major shape changes</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-spa text-barbershop-red mr-3 mt-1"></i>
                    <span>Regular beard oil treatments keep hair healthy</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-question-circle text-barbershop-red mr-3 mt-1"></i>
                    <span>Ask your barber for personalized care advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Frequently Asked Questions About Beard Shaping
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How often should I get my beard trimmed?
                  </AccordionTrigger>
                  <AccordionContent>
                    For optimal beard health and appearance, we recommend professional beard trimming every 3-4 weeks. This maintains shape while allowing healthy growth and prevents split ends.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What beard shapes work best for my face?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our barbers will assess your face shape and recommend the best beard style. Round faces benefit from longer beards, square faces work well with fuller sides and shorter bottom length, while oval faces can wear almost any style.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Do you provide beard oil treatments?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer premium beard oil treatments that moisturize, condition, and add a healthy shine to your beard while promoting healthy growth and preventing itchiness.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Can you fix an uneven beard?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Our experienced barbers can reshape and even out uneven beards, creating a balanced, professional look that enhances your facial features and suits your lifestyle.
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
              Pair your professional beard shaping with our other premium services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/fade-haircut-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Fade Haircuts
                </a>
              </Link>
              <Link href="/services/razor-shave-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Razor Shaves
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

export default BeardShaping;

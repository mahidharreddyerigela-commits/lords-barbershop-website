import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FadeHaircut = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fade Haircut San Antonio",
    "description": "Professional fade haircuts including high fades, mid fades, low fades, and skin fades by expert barbers in San Antonio, TX.",
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
        "name": "What types of fades do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer all types of fades including high fades, mid fades, low fades, skin fades, bald fades, and custom taper cuts. Our expert barbers can create any fade style you want."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a fade haircut take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical fade haircut takes 30-45 minutes depending on the complexity of the style and hair type. We never rush our work to ensure perfect results."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get my fade touched up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the best look, we recommend getting your fade touched up every 2-3 weeks. This keeps the lines sharp and maintains the clean, professional appearance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do skin fades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in skin fades and bald fades. Our barbers are highly skilled in creating seamless transitions from hair to skin for a clean, precise finish."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Fade Haircut in San Antonio | Lord's Barbershop (Pleasanton Rd)"
        description="Get expert fade haircuts on San Antonio's Southside. Skilled barbers, clean lines, quick booking on Booksy. High, mid, low, and skin fades available."
        canonical={`${window.location.origin}/services/fade-haircut-san-antonio`}
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
              <li className="text-barbershop-red">Fade Haircuts</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-6">
                Professional Fade Haircuts in San Antonio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience precision fade haircuts crafted by expert barbers at Lord's Barbershop. 
                Located on San Antonio's Southside, we specialize in all fade styles from classic 
                tapers to modern skin fades.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">Fade Styles We Offer</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>High Fades:</strong> Sharp contrast with hair faded high on the sides and back
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Mid Fades:</strong> Perfect balance with fade starting at the temple area
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Low Fades:</strong> Subtle and professional with fade starting lower on the head
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Skin/Bald Fades:</strong> Ultra-clean finish faded down to the skin
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Taper Cuts:</strong> Classic, gradual length reduction for a timeless look
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('fade-service-page')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Book Your Fade
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
                alt="Professional fade haircut at Lord's Barbershop San Antonio" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">Our Fade Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We discuss your desired style, face shape, and lifestyle to create the perfect fade for you.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Precision Cutting</h3>
                <p className="text-gray-600">
                  Using professional clippers and techniques, we create seamless transitions and clean lines.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Final Details</h3>
                <p className="text-gray-600">
                  We add finishing touches, clean up edges, and style your hair for the perfect look.
                </p>
              </div>
            </div>
          </div>

          {/* Aftercare Tips */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Fade Maintenance & Aftercare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Maintenance Schedule</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Touch up every 2-3 weeks for optimal appearance</li>
                  <li>• High fades may need more frequent touch-ups</li>
                  <li>• Book your next appointment before leaving</li>
                  <li>• Regular maintenance keeps lines sharp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">At-Home Care</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use quality shampoo and conditioner</li>
                  <li>• Apply light styling products as needed</li>
                  <li>• Avoid touching or rubbing the fade area</li>
                  <li>• Protect from sun exposure when possible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Frequently Asked Questions About Fades
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What types of fades do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer all types of fades including high fades, mid fades, low fades, skin fades, bald fades, and custom taper cuts. Our expert barbers can create any fade style you want, from classic to modern trends.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does a fade haircut take?
                  </AccordionTrigger>
                  <AccordionContent>
                    A typical fade haircut takes 30-45 minutes depending on the complexity of the style and your hair type. We never rush our work to ensure perfect results every time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How often should I get my fade touched up?
                  </AccordionTrigger>
                  <AccordionContent>
                    For the best look, we recommend getting your fade touched up every 2-3 weeks. This keeps the lines sharp and maintains the clean, professional appearance that makes fades so popular.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Do you do skin fades?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we specialize in skin fades and bald fades. Our barbers are highly skilled in creating seamless transitions from hair to skin for a clean, precise finish that looks professional and modern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related Services */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Complete Your Look
            </h3>
            <p className="text-gray-600 mb-8">
              Pair your fresh fade with our other premium services for the complete grooming experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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

export default FadeHaircut;

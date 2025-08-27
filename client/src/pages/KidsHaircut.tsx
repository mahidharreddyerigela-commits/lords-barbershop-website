import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KidsHaircut = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kids Haircut San Antonio",
    "description": "Patient, gentle haircuts for children of all ages by experienced barbers in San Antonio, TX. Kid-friendly barbershop environment.",
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
        "name": "What age do you start cutting kids' hair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We welcome children of all ages, from toddlers to teenagers. Our barbers are experienced with children and know how to make the experience comfortable and fun."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a kids haircut take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kids haircuts typically take 20-30 minutes, depending on the child's cooperation and the complexity of the style. We work at the child's pace to ensure comfort."
        }
      },
      {
        "@type": "Question",
        "name": "What if my child is nervous about getting a haircut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our barbers are very patient and experienced with nervous children. We take time to make them comfortable, explain what we're doing, and work at their pace."
        }
      },
      {
        "@type": "Question",
        "name": "Can parents stay with their child during the haircut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Parents are always welcome to stay with their child during the haircut. This often helps children feel more comfortable and secure."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Kids Haircut in San Antonio | Lord's Barbershop (Pleasanton Rd)"
        description="Get expert kids haircuts on San Antonio's Southside. Patient barbers, kid-friendly environment, quick booking on Booksy. Comfortable experience for all ages."
        canonical={`${window.location.origin}/services/kids-haircut-san-antonio`}
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
              <li className="text-barbershop-red">Kids Haircuts</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-6">
                Kids Haircuts in San Antonio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Creating positive haircut experiences for children of all ages. At Lord's Barbershop 
                on San Antonio's Southside, our patient and skilled barbers specialize in making 
                kids feel comfortable while delivering great styles that parents love.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-4">What Makes Us Kid-Friendly</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-heart text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Patient, Experienced Barbers:</strong> Our team knows how to work with children of all temperaments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-child text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Comfortable Environment:</strong> Welcoming atmosphere that puts kids at ease
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-clock text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>No Rush Policy:</strong> We work at your child's pace for the best experience
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-users text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Parents Welcome:</strong> Stay with your child during the entire haircut
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Age-Appropriate Styles:</strong> Modern cuts that look great and are easy to maintain
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-smile text-barbershop-red mr-3 mt-1"></i>
                    <div>
                      <strong>Positive Experience:</strong> Making haircuts fun so kids look forward to coming back
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('kids-service-page')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Book Kids Haircut
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
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Kids haircut service at Lord's Barbershop San Antonio" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Age Groups Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Haircuts for Every Age Group
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-baby text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Toddlers (1-3 years)</h3>
                <p className="text-gray-600 mb-4">
                  Extra patience and gentle techniques for first haircuts and fussy toddlers. 
                  Quick, efficient cuts that minimize stress.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• First haircut certificates</li>
                  <li>• Parent assistance welcome</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-child text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Kids (4-12 years)</h3>
                <p className="text-gray-600 mb-4">
                  Fun, interactive haircuts with age-appropriate styles. We engage kids 
                  in conversation to make the experience enjoyable.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Popular styles and trends</li>
                  <li>• School-appropriate cuts</li>
                  <li>• Style recommendations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">Teens (13-17 years)</h3>
                <p className="text-gray-600 mb-4">
                  Modern, trendy styles that help teens express their personality. 
                  Professional advice on what works best for their lifestyle.
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Latest trends and fades</li>
                  <li>• Style consultations</li>
                  <li>• Maintenance tips</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips for Parents */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Tips for a Successful Kids Haircut
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Before the Appointment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Talk positively about getting a haircut beforehand</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Schedule during your child's best time of day</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Bring photos of desired styles for reference</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Ensure your child is well-rested and fed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-4">During the Visit</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Stay calm and positive to keep your child relaxed</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Let the barber take the lead in interacting with your child</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Bring a small toy or device for distraction if needed</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-barbershop-red mr-3 mt-1"></i>
                    <span>Praise your child for good behavior during the cut</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Frequently Asked Questions About Kids Haircuts
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What age do you start cutting kids' hair?
                  </AccordionTrigger>
                  <AccordionContent>
                    We welcome children of all ages, from toddlers getting their very first haircut to teenagers wanting the latest styles. Our barbers are experienced with children and know how to make the experience comfortable and fun for every age group.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does a kids haircut take?
                  </AccordionTrigger>
                  <AccordionContent>
                    Kids haircuts typically take 20-30 minutes, depending on the child's cooperation and the complexity of the style. We always work at the child's pace to ensure they're comfortable throughout the entire process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What if my child is nervous about getting a haircut?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our barbers are very patient and experienced with nervous children. We take time to make them comfortable, explain what we're doing in kid-friendly terms, and work at their pace. Many nervous kids leave excited for their next visit!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Can parents stay with their child during the haircut?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Parents are always welcome to stay with their child during the haircut. This often helps children feel more comfortable and secure, especially for younger kids or first-time visits.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Popular Styles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Popular Kids Haircut Styles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-barbershop-dark mb-2">Classic Cuts</h4>
                <p className="text-sm text-gray-600">Timeless styles that never go out of fashion and work for school or special occasions.</p>
              </div>
              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-barbershop-dark mb-2">Modern Fades</h4>
                <p className="text-sm text-gray-600">Trendy fade styles adapted for kids - clean, stylish, and age-appropriate.</p>
              </div>
              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-barbershop-dark mb-2">Sports Cuts</h4>
                <p className="text-sm text-gray-600">Low-maintenance styles perfect for active kids who play sports.</p>
              </div>
              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-barbershop-dark mb-2">Creative Styles</h4>
                <p className="text-sm text-gray-600">Fun, unique cuts that let kids express their personality and creativity.</p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Family-Friendly Services
            </h3>
            <p className="text-gray-600 mb-8">
              Make it a family experience! Book multiple appointments for a convenient group visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/fade-haircut-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Adult Fades
                </a>
              </Link>
              <Link href="/services/beard-shaping-san-antonio">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Beard Services
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

export default KidsHaircut;

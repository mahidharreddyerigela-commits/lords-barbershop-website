import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import CTARow from "@/components/CTARow";
import { Link } from "wouter";
import barberWithKidClient from "@assets/465894255_1367177397597538_6568389782143217932_n_1755989363856.jpg";
import youngBarberImage from "@assets/466598297_1020845769799143_1824980254978425621_n_1755988244901.jpg";

const KidsHaircutSanAntonio = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
    trackEvent('book_click', source, 'service_page');
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
    trackEvent('call_click', 'kids_haircut_page', 'service_page');
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What age do you consider 'kids' for haircut pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our kids' haircut pricing typically applies to children 12 and under. We're happy to discuss pricing for teens and can provide age-appropriate styles for all young clients."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle children who are nervous about haircuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our barbers are experienced with children and use patience, conversation, and distraction techniques. We encourage parents to stay close and can work around a child's comfort level."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best time to bring kids for haircuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Earlier in the day is often best when children are fresh and less tired. We also recommend booking appointments to avoid waiting, which can make children restless."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Kids Haircuts San Antonio | Child-Friendly Barber | Lord's Barbershop"
        description="Expert kids haircuts in San Antonio. Patient, kid-friendly barbers. Fun experience for children. Book online or call (210) 717-2360. 3751 Pleasanton Rd."
        canonical={window.location.origin + "/kids-haircut-san-antonio"}
      />
      <StructuredData data={faqStructuredData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-barbershop-dark text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
               style={{
                 backgroundImage: `url(${barberWithKidClient})`
               }}>
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Kids Haircuts in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Patient, kid-friendly haircuts that make children excited about their new look. Professional barbers experienced in creating positive experiences for young clients and their families.
              </p>
              <CTARow source="kids-haircut-hero" />
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-barbershop-dark mb-6">
                  Kid-Friendly Barbering on San Antonio's Southside
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Lord's Barbershop, we understand that children's haircuts require special patience, skill, and understanding. Our experienced barbers know how to work with kids of all ages, creating a comfortable environment where children can relax and even enjoy their haircut experience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We specialize in age-appropriate styles that look great and are easy for parents to maintain. From toddlers getting their first haircut to school-age children wanting the latest trends, our barbers combine expertise with patience to deliver excellent results while making the experience positive for both children and parents.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">What Makes Us Kid-Friendly</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Patient, experienced barbers</li>
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Comfortable, welcoming environment</li>
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Age-appropriate conversation and distraction</li>
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Quick, efficient service when needed</li>
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Parents welcome to stay close</li>
                    <li className="flex items-center"><i className="fas fa-heart text-green-600 mr-3"></i>Flexible approach for different comfort levels</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={barberWithKidClient}
                  alt="Expert children's haircut service - Lord's Barbershop San Antonio"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium text-center">
                    "Sofia is amazing with kids! My son actually looks forward to haircuts now." - Parent Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Kids Styles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">Popular Kids' Haircut Styles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Age-appropriate styles that look great and are easy for parents to maintain at home.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Classic Kids Cut</h3>
                <p className="text-gray-600 text-sm">Traditional, neat styles that work well for school and special occasions.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Modern Youth Styles</h3>
                <p className="text-gray-600 text-sm">Trendy cuts that help kids express their personality while staying age-appropriate.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-child text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Toddler Trims</h3>
                <p className="text-gray-600 text-sm">Gentle first haircuts and maintenance trims for our youngest clients.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">School-Ready Cuts</h3>
                <p className="text-gray-600 text-sm">Neat, professional styles that meet school dress codes and look sharp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Kids Haircut Experience */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-barbershop-dark mb-4">Making Haircuts Fun for Kids</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our approach ensures children have a positive experience that they'll remember fondly.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-barbershop-red text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-smile text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Welcoming Environment</h3>
                  <p className="text-gray-600 mb-4">
                    We create a friendly, comfortable atmosphere where children feel safe and relaxed. Our barbers know how to put kids at ease from the moment they arrive.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Warm, patient greeting</li>
                    <li>• Child-height seating options</li>
                    <li>• Calm, reassuring atmosphere</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-barbershop-red text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-comments text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Engaging Conversation</h3>
                  <p className="text-gray-600 mb-4">
                    Our barbers are skilled at age-appropriate conversation that keeps children engaged and distracted during their haircut, making the time pass quickly.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Talk about school, hobbies, interests</li>
                    <li>• Explain what we're doing</li>
                    <li>• Keep kids engaged and comfortable</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-barbershop-red text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-users text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Family-Friendly Service</h3>
                  <p className="text-gray-600 mb-4">
                    Parents are always welcome to stay close, offer comfort, and be part of the experience. We work as a team to ensure your child's comfort.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Parents can stay nearby</li>
                    <li>• Flexible approach to comfort levels</li>
                    <li>• Communication with parents throughout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Parents */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-barbershop-dark text-center mb-12">Tips for a Successful Kids' Haircut</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Before the Visit</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-clock text-barbershop-red mr-3 mt-1"></i>
                      <span>Schedule during your child's best time of day (usually mornings)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-comments text-barbershop-red mr-3 mt-1"></i>
                      <span>Talk positively about the haircut beforehand</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-utensils text-barbershop-red mr-3 mt-1"></i>
                      <span>Make sure your child isn't hungry or tired</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-images text-barbershop-red mr-3 mt-1"></i>
                      <span>Bring photos of desired styles if you have specific preferences</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-barbershop-dark text-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">During the Service</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-heart text-barbershop-red mr-3 mt-1"></i>
                      <span>Stay calm and positive - children pick up on your energy</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-hands text-barbershop-red mr-3 mt-1"></i>
                      <span>Let our barbers take the lead while staying supportive</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-mobile text-barbershop-red mr-3 mt-1"></i>
                      <span>Bring a favorite toy or device for distraction if needed</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-thumbs-up text-barbershop-red mr-3 mt-1"></i>
                      <span>Offer praise and encouragement throughout the process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Kids Haircut Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Service Time:</span>
                      <span className="text-gray-600">15-30 minutes</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Starting Price:</span>
                      <span className="text-barbershop-red font-bold text-xl">$20</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Ages:</span>
                      <span className="text-gray-600">All children welcome</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-barbershop-dark">Includes:</span>
                      <span className="text-gray-600">Cut, Style, Cleanup</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-barbershop-dark">Best Times:</span>
                      <span className="text-gray-600">Morning hours</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-barbershop-dark mb-6">Home Maintenance</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-shower text-blue-600 mr-3 mt-1"></i>
                      <span>Regular washing with gentle, kid-friendly shampoo</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-comb text-blue-600 mr-3 mt-1"></i>
                      <span>Daily combing to prevent tangles and maintain style</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar text-blue-600 mr-3 mt-1"></i>
                      <span>Schedule regular trims every 4-6 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-cut text-blue-600 mr-3 mt-1"></i>
                      <span>Avoid home trimming - leave it to the professionals</span>
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
                Kids' Haircut FAQs
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    What age do you consider 'kids' for haircut pricing?
                  </h3>
                  <p className="text-gray-600">
                    Our kids' haircut pricing typically applies to children 12 and under. We're happy to discuss pricing for teens and can provide age-appropriate styles for all young clients.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    How do you handle children who are nervous about haircuts?
                  </h3>
                  <p className="text-gray-600">
                    Our barbers are experienced with children and use patience, conversation, and distraction techniques. We encourage parents to stay close and can work around a child's comfort level.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                    What's the best time to bring kids for haircuts?
                  </h3>
                  <p className="text-gray-600">
                    Earlier in the day is often best when children are fresh and less tired. We also recommend booking appointments to avoid waiting, which can make children restless.
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
              <h2 className="text-2xl font-bold text-barbershop-dark mb-4">Family Grooming Services</h2>
              <p className="text-gray-600 mb-8">While the kids get their haircuts, consider our other services for the whole family</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/mens-haircut-san-antonio" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-male text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Dad's Haircuts</h3>
                <p className="text-gray-600">Professional men's cuts while kids get theirs done</p>
              </Link>
              
              <Link href="/fade-haircut-san-antonio" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-cut text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Teen Fades</h3>
                <p className="text-gray-600">Cool fade styles for older kids and teens</p>
              </Link>
              
              <Link href="/#home" className="block bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <i className="fas fa-home text-3xl text-barbershop-red mb-4"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">All Services</h3>
                <p className="text-gray-600">View our complete family-friendly service menu</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-barbershop-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Give Your Child a Great Haircut Experience?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Book an appointment today and see why kids and parents love coming to Lord's Barbershop.
            </p>
            <CTARow source="kids-haircut-bottom" />
            
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

export default KidsHaircutSanAntonio;
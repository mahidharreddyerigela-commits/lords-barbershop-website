import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Reviews = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const reviews = [
    {
      name: "Jason M.",
      rating: 5,
      platform: "Google",
      date: "2 weeks ago",
      text: "Best fade I've ever gotten in San Antonio! Miguel really knows his craft. The attention to detail is incredible, and the shop has a great vibe. I've been coming here for over a year now and it's consistently excellent. Highly recommend to anyone looking for quality barbering.",
      service: "Fade Haircut"
    },
    {
      name: "David R.",
      rating: 5,
      platform: "Yelp",
      date: "1 month ago",
      text: "Perfect beard trim every time. The team is professional and the booking system makes it super easy to schedule. I travel from the north side just to come here because the quality is unmatched. Worth every penny and every mile.",
      service: "Beard Shaping"
    },
    {
      name: "Maria L.",
      rating: 5,
      platform: "Google",
      date: "3 weeks ago",
      text: "Sofia is amazing with kids! My son actually looks forward to haircuts now. Clean shop, friendly staff, and excellent service. She's patient and makes the whole experience fun for children. We won't go anywhere else.",
      service: "Kids Haircut"
    },
    {
      name: "Robert T.",
      rating: 5,
      platform: "Yelp",
      date: "2 months ago",
      text: "Got my first straight razor shave here and it was incredible. Carlos took his time and made sure I was comfortable throughout. The hot towel treatment was so relaxing. This is old-school barbering at its finest.",
      service: "Razor Shave"
    },
    {
      name: "Jennifer C.",
      rating: 5,
      platform: "Google",
      date: "1 week ago",
      text: "Brought my teenage son here and he loves his new cut. The barbers really listen to what you want and deliver exactly that. Clean, professional environment and fair prices. We'll definitely be regular customers.",
      service: "Teen Haircut"
    },
    {
      name: "Michael K.",
      rating: 5,
      platform: "Yelp",
      date: "3 months ago",
      text: "Been going to Miguel for over 2 years now. Never had a bad cut. He remembers exactly how I like my fade and beard trimmed. This is what a real barbershop should be - skilled, professional, and consistent.",
      service: "Fade & Beard"
    },
    {
      name: "Sarah P.",
      rating: 5,
      platform: "Google",
      date: "2 weeks ago",
      text: "My husband and son both get their haircuts here. The quality is always top-notch and the staff treats everyone like family. The online booking is convenient and they're always on time. Couldn't ask for better service.",
      service: "Family Service"
    },
    {
      name: "Carlos V.",
      rating: 5,
      platform: "Yelp",
      date: "1 month ago",
      text: "Best barbershop in San Antonio, hands down. I've tried many places but nothing compares to the skill and professionalism here. They take their time to get it right and never rush you out. Five stars all the way.",
      service: "Full Service"
    },
    {
      name: "Anthony G.",
      rating: 5,
      platform: "Google",
      date: "4 weeks ago",
      text: "Excellent service every time. The barbers are friendly, skilled, and really care about their work. The shop is always clean and has a great atmosphere. I drive 30 minutes just to come here because it's worth it.",
      service: "Haircut & Style"
    }
  ];

  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
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
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "150"
  };

  return (
    <>
      <SEO
        title="Reviews | Lord's Barbershop San Antonio - Customer Testimonials"
        description="Read genuine reviews from satisfied customers at Lord's Barbershop in San Antonio. See why we're rated 5 stars on Google and Yelp for our expert barbering services."
        canonical={`${window.location.origin}/reviews`}
      />
      <StructuredData data={aggregateRating} />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/"><a className="hover:text-barbershop-red">Home</a></Link></li>
              <li><span>/</span></li>
              <li className="text-barbershop-red">Reviews</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience at Lord's Barbershop on San Antonio's Southside.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <div className="flex text-yellow-400 text-3xl mr-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="text-4xl font-bold text-barbershop-dark">5.0</span>
              </div>
              <p className="text-xl text-gray-600">Based on 150+ customer reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-google text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Google Reviews</h3>
                <div className="flex justify-center text-yellow-400 mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600">5.0 stars • 95 reviews</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-yelp text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Yelp Reviews</h3>
                <div className="flex justify-center text-yellow-400 mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600">5.0 stars • 42 reviews</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Word of Mouth</h3>
                <div className="flex justify-center text-yellow-400 mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600">Referrals • Family & Friends</p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                      <span className="font-semibold text-barbershop-dark">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-barbershop-dark">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm"></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.platform}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <span className="bg-barbershop-red text-white px-3 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* External Review Links */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8">
              Read More Reviews & Leave Your Own
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.google.com/search?q=Lord%27s+Barbershop+San+Antonio+reviews" 
                target="_blank" 
                rel="noopener"
                onClick={() => trackEvent('click_external_reviews', 'reviews', 'google')}
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                <i className="fab fa-google mr-2"></i>
                View on Google
              </a>
              <a 
                href="https://www.yelp.com/biz/lord-s-barber-shop-san-antonio" 
                target="_blank" 
                rel="noopener"
                onClick={() => trackEvent('click_external_reviews', 'reviews', 'yelp')}
                className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 flex items-center justify-center"
              >
                <i className="fab fa-yelp mr-2"></i>
                View on Yelp
              </a>
            </div>
          </div>

          {/* Review Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              What Customers Love Most
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Skill & Precision</h3>
                <p className="text-gray-600 text-sm">
                  "Best fade I've gotten", "Incredible attention to detail", "Perfect every time"
                </p>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-smile text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Friendly Service</h3>
                <p className="text-gray-600 text-sm">
                  "Treats everyone like family", "Great with kids", "Professional and friendly"
                </p>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Clean Environment</h3>
                <p className="text-gray-600 text-sm">
                  "Always clean", "Great atmosphere", "Professional environment"
                </p>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-check text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Convenient Booking</h3>
                <p className="text-gray-600 text-sm">
                  "Easy to schedule", "Always on time", "Online booking is convenient"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Video Section */}
          <div className="bg-barbershop-dark rounded-lg p-12 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Customers</h2>
            <p className="text-xl mb-8 text-gray-300">
              Experience the quality that has earned us over 150 five-star reviews. 
              Book your appointment today and see why Lord's Barbershop is San Antonio's choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('reviews-page')}
                className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Your Appointment
              </a>
              <Link href="/services">
                <a className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-barbershop-dark transition-all duration-200">
                  View Our Services
                </a>
              </Link>
            </div>
          </div>

          {/* FAQ About Reviews */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              About Our Reviews
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Review Policy</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• All reviews are from verified customers</li>
                    <li>• We respond to all feedback professionally</li>
                    <li>• Reviews are never edited or filtered</li>
                    <li>• We appreciate honest feedback for improvement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-barbershop-dark mb-4">Leave a Review</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Had a great experience? We'd love to hear about it! Your feedback 
                    helps us serve you better and helps others find quality barbering services.
                  </p>
                  <p className="text-sm text-barbershop-red font-medium">
                    Thank you for choosing Lord's Barbershop!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Experience the Quality Yourself
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gallery">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  View Our Work
                </a>
              </Link>
              <Link href="/team">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Meet Our Team
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Visit Our Shop
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const Team = () => {
  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const teamMembers = [
    {
      name: "Miguel Rodriguez",
      title: "Master Barber & Owner",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      experience: "15+ years",
      specialties: ["Classic Fades", "Beard Work", "Razor Shaves"],
      bio: "Miguel opened Lord's Barbershop with a passion for traditional barbering and modern styles. With over 15 years of experience, he specializes in precision fades, expert beard work, and classic razor shaves. His attention to detail and commitment to customer satisfaction has made him a favorite among San Antonio's Southside community."
    },
    {
      name: "Sofia Martinez",
      title: "Senior Barber",
      image: "https://images.unsplash.com/photo-1594824388853-20d5d4c92290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      experience: "8+ years",
      specialties: ["Kids Cuts", "Modern Styles", "Color Work"],
      bio: "Sofia brings creativity and patience to every cut, making her especially popular with families. She has a gift for working with children and creating comfortable experiences for all ages. Her expertise in modern styles and color work makes her a versatile barber who can handle any request with skill and artistry."
    },
    {
      name: "Carlos Hernandez",
      title: "Barber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      experience: "5+ years",
      specialties: ["Contemporary Fades", "Beard Designs", "Line Work"],
      bio: "Carlos is known for his artistic flair and precision line work. As the newest member of our team, he brings fresh energy and contemporary techniques while respecting traditional barbering values. His specialty in beard designs and modern fade techniques has quickly earned him a loyal following."
    }
  ];

  return (
    <>
      <SEO
        title="Meet Our Team | Lord's Barbershop San Antonio Expert Barbers"
        description="Meet the skilled barbers at Lord's Barbershop in San Antonio. Expert fade specialists, beard grooming professionals, and kid-friendly barbers on Pleasanton Road."
        canonical={`${window.location.origin}/team`}
      />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/"><a className="hover:text-barbershop-red">Home</a></Link></li>
              <li><span>/</span></li>
              <li className="text-barbershop-red">Team</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
              Meet Our Expert Barbers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled team brings years of experience and passion for the craft to every cut. 
              Each barber at Lord's Barbershop specializes in delivering exceptional grooming 
              experiences for clients throughout San Antonio's Southside.
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-16 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.title} at Lord's Barbershop`}
                    className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-barbershop-dark mb-2">{member.name}</h2>
                  <p className="text-xl text-barbershop-red font-medium mb-4">{member.title}</p>
                  
                  <div className="flex items-center mb-4">
                    <i className="fas fa-clock text-barbershop-red mr-2"></i>
                    <span className="text-gray-600 font-medium">{member.experience} Experience</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Specialties:</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="bg-barbershop-red text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <a 
                    href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                    onClick={() => trackBookingCTA(`team-${member.name.toLowerCase().replace(' ', '-')}`)}
                    className="bg-barbershop-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block"
                  >
                    Book with {member.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              What Sets Our Team Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Continuous Training</h3>
                <p className="text-gray-600 text-sm">
                  Our barbers stay current with the latest techniques and trends through ongoing education.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Client-Focused</h3>
                <p className="text-gray-600 text-sm">
                  Every service is tailored to the individual client's needs, style, and preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Community Minded</h3>
                <p className="text-gray-600 text-sm">
                  We're proud to serve San Antonio's Southside and build lasting relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards of cleanliness and sanitation for your safety.
                </p>
              </div>
            </div>
          </div>

          {/* Awards and Recognition */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <i className="fas fa-star text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">5-Star Google Rating</h3>
                <p className="text-gray-600">Consistently rated 5 stars by our satisfied customers on Google Reviews.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <i className="fab fa-yelp text-4xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Top Rated on Yelp</h3>
                <p className="text-gray-600">Recognized as one of San Antonio's top barbershops by Yelp reviewers.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <i className="fas fa-users text-4xl text-barbershop-red mb-4"></i>
                <h3 className="text-xl font-semibold text-barbershop-dark mb-2">Community Choice</h3>
                <p className="text-gray-600">Proud to be the preferred barbershop for Southside San Antonio families.</p>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="bg-barbershop-dark rounded-lg p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-6 text-gray-300">
              Are you a skilled barber looking for a great work environment? 
              We're always interested in talking with talented professionals.
            </p>
            <a 
              href="tel:+12107172360" 
              onClick={() => trackEvent('click_call', 'contact', 'careers')}
              className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call About Opportunities
            </a>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-4">
              Ready to Experience Our Expert Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your appointment with one of our skilled barbers and discover why 
              Lord's Barbershop is San Antonio's choice for quality grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('team-page')}
                className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Your Appointment
              </a>
              <Link href="/services">
                <a className="bg-barbershop-dark text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                  View Our Services
                </a>
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Learn More About Us
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gallery">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  View Our Work
                </a>
              </Link>
              <Link href="/reviews">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Read Reviews
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

export default Team;

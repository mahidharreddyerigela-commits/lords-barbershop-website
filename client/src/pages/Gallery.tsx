import { useState } from "react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Professional fade haircut showcase - Lord's Barbershop San Antonio",
      category: "Fade Haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Classic razor shave service - Expert barbering in San Antonio",
      category: "Razor Shaves"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Professional beard trimming and styling - San Antonio barbershop",
      category: "Beard Shaping"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Modern barbershop interior - Lord's Barbershop Pleasanton Road",
      category: "Shop Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "High taper fade haircut - Precision cutting San Antonio",
      category: "Fade Haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Hot towel straight razor shave - Traditional barbering",
      category: "Razor Shaves"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Kids haircut service - Patient barbers San Antonio",
      category: "Kids Haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Professional barber tools and equipment",
      category: "Shop Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Low fade with line up - Clean barbering San Antonio",
      category: "Fade Haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Beard grooming and mustache styling",
      category: "Beard Shaping"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Family-friendly barbershop environment",
      category: "Kids Haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Clean barbershop chairs and modern design",
      category: "Shop Interior"
    }
  ];

  const categories = ["All", "Fade Haircuts", "Beard Shaping", "Razor Shaves", "Kids Haircuts", "Shop Interior"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <SEO
        title="Gallery | Lord's Barbershop San Antonio - View Our Work"
        description="Browse our gallery of professional haircuts, fades, beard work, and barbershop atmosphere. See the quality craftsmanship at Lord's Barbershop on Pleasanton Road."
        canonical={`${window.location.origin}/gallery`}
      />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/"><a className="hover:text-barbershop-red">Home</a></Link></li>
              <li><span>/</span></li>
              <li className="text-barbershop-red">Gallery</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality and precision that goes into every cut at Lord's Barbershop. 
              From professional fades to classic shaves, our skilled barbers deliver 
              exceptional results for every client on San Antonio's Southside.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-barbershop-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-barbershop-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-opacity duration-200"
                >
                  <i className="fas fa-times"></i>
                </button>
                <img 
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Service Highlights */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-barbershop-dark mb-8 text-center">
              What You'll Experience at Lord's Barbershop
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cut text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Precision Cuts</h3>
                <p className="text-gray-600 text-sm">
                  Expert attention to detail in every fade, line-up, and style we create.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Quality Service</h3>
                <p className="text-gray-600 text-sm">
                  Professional barbers with years of experience and commitment to excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Welcoming Atmosphere</h3>
                <p className="text-gray-600 text-sm">
                  Clean, modern shop with a friendly environment for clients of all ages.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-barbershop-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-barbershop-dark mb-2">Convenient Booking</h3>
                <p className="text-gray-600 text-sm">
                  Easy online scheduling through Booksy for your convenience.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-barbershop-dark rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Our Quality?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Book your appointment today and see why Lord's Barbershop is San Antonio's 
              choice for professional men's grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('gallery')}
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

          {/* Related Links */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Explore More
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Our Services
                </a>
              </Link>
              <Link href="/team">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Meet Our Team
                </a>
              </Link>
              <Link href="/reviews">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Read Reviews
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-barbershop-dark text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

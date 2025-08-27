import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import CTARow from "@/components/CTARow";
import fadeWithBraidImage from "@assets/466482761_2781822328662357_4257416269957702236_n_1755988244883.jpg";
import barberInActionImage from "@assets/465654928_3803897436495552_8961823703472416452_n_1755988244896.jpg";
import precisionCuttingImage from "@assets/464754895_533273249447525_5645256435020416789_n_1755988244896.jpg";
import perfectFadeImage from "@assets/465559895_1515952362389753_6049179416055641046_n_1755988244896.jpg";
import youngBarberImage from "@assets/466598297_1020845769799143_1824980254978425621_n_1755988244901.jpg";
import barberWithBandanaClient from "@assets/468921691_864257169122037_505810438036061149_n_1755989363855.jpg";
import barberWithKidClient from "@assets/465894255_1367177397597538_6568389782143217932_n_1755989363856.jpg";
import barberDetailWork from "@assets/467199053_17852827434335761_468774247278290075_n_1755989363857.jpg";
import pepeBarberImage from "@assets/lords main barber_1756005920291.jpg";
import skgonzalesImage from "@assets/482140247_997355615686680_5487317044040517999_n_1756006455447.png";
import fullTeamImage from "@assets/image_1756007133684.jpeg";
import newFadeHaircut from "@assets/440203324_18306882262153825_5605790063827298818_n_1756006881148.jpg";
import creativeDesignCut from "@assets/439960391_18306882976153825_4577722742773931209_n_1756006881166.jpg";
// New Gallery Images
import galleryImage1 from "@assets/WhatsApp Image 2025-08-24 at 19.49.39_1756141767178.jpeg";
import galleryImage2 from "@assets/WhatsApp Image 2025-08-24 at 19.49.40_1756141767201.jpeg";
import galleryImage3 from "@assets/WhatsApp Image 2025-08-24 at 19.49.40 (1)_1756141767200.jpeg";
import galleryImage4 from "@assets/WhatsApp Image 2025-08-24 at 19.49.40 (3)_1756141767199.jpeg";
import galleryImage5 from "@assets/WhatsApp Image 2025-08-24 at 19.49.40 (6)_1756141767196.jpeg";
import galleryImage6 from "@assets/WhatsApp Image 2025-08-24 at 19.49.40 (8)_1756141767195.jpeg";
import galleryImage7 from "@assets/WhatsApp Image 2025-08-24 at 19.49.41_1756141767194.jpeg";
import galleryImage8 from "@assets/WhatsApp Image 2025-08-24 at 19.49.41 (2)_1756141767193.jpeg";
import aleBlenzImage from "@assets/467043184_1223203325568079_7995522453568814954_n_1756227789764.jpg";

const SinglePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const trackBookingCTA = (source: string) => {
    trackEvent('click_book_now', 'booking', source);
  };

  const trackCallCTA = () => {
    trackEvent('click_call', 'contact', 'phone');
  };

  const trackDirectionsCTA = () => {
    trackEvent('click_directions', 'contact', 'google_maps');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        (e.target as HTMLFormElement).reset();
        trackEvent('contact_form_submit', 'contact', 'success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try calling us instead.",
        variant: "destructive",
      });
      trackEvent('contact_form_submit', 'contact', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "name": "Lord's Barbershop",
    "url": window.location.origin,
    "image": window.location.origin + "/img/og.jpg",
    "telephone": "+1-210-717-2360",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3751 Pleasanton Rd",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78221",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "12:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/pages/The%20Lord%27s%20Barbershop/676322549149665/",
      "https://www.instagram.com/lords_barbershop210/"
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you take walk-ins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when slots are open. Booking online guarantees your time."
        }
      },
      {
        "@type": "Question",
        "name": "Are kids' haircuts available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—kid-friendly barbers. Earlier hours are usually quieter."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Free parking is available on-site near the entrance."
        }
      },
      {
        "@type": "Question",
        "name": "What payments do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cash and major cards. Tips welcome in cash or card."
        }
      }
    ]
  };

  const teamMembers = [
    {
      name: "Pepe",
      title: "Master Barber & Owner",
      image: pepeBarberImage,
      specialties: ["Classic Fades", "Beard Work", "Razor Shaves", "Precision Cuts"],
      bio: "Pepe is the heart and soul of Lord's Barbershop. As the master barber and owner, he brings unmatched skill and passion to every cut. His dedication to the craft and attention to detail has made Lord's Barbershop a premier destination for quality grooming in San Antonio's Southside. Pepe specializes in precision fades, expert beard work, and classic razor shaves that keep clients coming back."
    },
    {
      name: "Ale Blenz",
      title: "Professional Barber",
      image: aleBlenzImage,
      specialties: ["Modern Cuts", "Fades", "Styling", "Beard Trimming"],
      bio: "Ale Blenz brings fresh energy and modern techniques to Lord's Barbershop. Known for his attention to detail and ability to create contemporary styles, Ale combines traditional barbering skills with today's trending cuts. His friendly personality and professional approach make every client feel comfortable while delivering exceptional results.",
      bookingLink: "https://booksy.com/en-us/1054532_ale-blenz_barber-shop_134789_san-antonio#ba_s=seo"
    },
    {
      name: "SKGonzales",
      title: "Children's Hair Specialist",
      image: skgonzalesImage,
      specialties: ["Kids Haircuts", "Children's Styling", "Patient Care", "Fun Experiences"],
      bio: "SKGonzales is our dedicated children's hair specialist who brings patience, creativity, and a warm smile to every young client. She has a natural gift for making children feel comfortable and excited about their haircuts. Her gentle approach and expertise in age-appropriate styles make her the go-to barber for families throughout San Antonio. SKGonzales creates positive experiences that help kids develop a lifelong appreciation for quality grooming."
    }
  ];

  const galleryImages = [
    // Barbers at Work - First Priority
    {
      src: precisionCuttingImage,
      alt: "Expert precision cutting technique - Professional barbering San Antonio",
      category: "Barbers at Work"
    },
    {
      src: barberInActionImage,
      alt: "Professional barber service in action - Lord's Barbershop team",
      category: "Barbers at Work"
    },
    {
      src: youngBarberImage,
      alt: "Young skilled barber providing quality cuts - Lord's Barbershop team",
      category: "Barbers at Work"
    },
    {
      src: barberWithBandanaClient,
      alt: "Lord's Barbershop barber providing professional service - client consultation",
      category: "Barbers at Work"
    },
    {
      src: barberWithKidClient,
      alt: "Expert children's haircut service - Lord's Barbershop specializes in kids cuts",
      category: "Barbers at Work"
    },
    {
      src: barberDetailWork,
      alt: "Detailed precision work by Lord's Barbershop professional barber",
      category: "Barbers at Work"
    },
    {
      src: galleryImage3,
      alt: "Expert barbering technique - Lord's Barbershop professional service",
      category: "Barbers at Work"
    },
    {
      src: galleryImage4,
      alt: "Quality haircut styling - Lord's Barbershop craftsmanship",
      category: "Barbers at Work"
    },
    {
      src: galleryImage6,
      alt: "Professional barbering service - Lord's Barbershop expert work",
      category: "Barbers at Work"
    },
    {
      src: galleryImage8,
      alt: "Expert hair styling - Lord's Barbershop professional cuts",
      category: "Barbers at Work"
    },
    // Fade Haircuts - Second Priority
    {
      src: fadeWithBraidImage,
      alt: "Creative fade with braided design - Lord's Barbershop San Antonio",
      category: "Fade Haircuts"
    },
    {
      src: perfectFadeImage,
      alt: "Perfect fade haircut styling - Lord's Barbershop craftsmanship",
      category: "Fade Haircuts"
    },
    {
      src: newFadeHaircut,
      alt: "Professional clean fade haircut - Lord's Barbershop San Antonio precision cutting",
      category: "Fade Haircuts"
    },
    {
      src: creativeDesignCut,
      alt: "Creative hair design with intricate patterns - Lord's Barbershop artistic styling",
      category: "Fade Haircuts"
    },
    {
      src: galleryImage1,
      alt: "Professional haircut service - Lord's Barbershop San Antonio expert styling",
      category: "Fade Haircuts"
    },
    {
      src: galleryImage2,
      alt: "Premium fade haircut - Lord's Barbershop precision cutting",
      category: "Fade Haircuts"
    },
    {
      src: galleryImage5,
      alt: "Modern fade haircut - Lord's Barbershop San Antonio styling",
      category: "Fade Haircuts"
    },
    {
      src: galleryImage7,
      alt: "Clean fade haircut - Lord's Barbershop precision styling",
      category: "Fade Haircuts"
    }
  ];

  const reviews = [
    {
      name: "Jesse Quintero",
      rating: 5,
      text: "Fast, Fast, Fast service!! I have had 5 different barbers cut my hair!! Xavier is one of the best!! I simply love this place!! If you don't want to wait, this is your place!!",
      service: "Fast Service"
    },
    {
      name: "Kyle",
      rating: 5,
      text: "I was recommended lord's barbershop by a friend. I arrived as a walk in and was quickly assisted and able to get my haircut in a timely manner. I recommend this barbershop if you're looking for a great cut and not taking up much of your time.",
      service: "Walk-in Service"
    },
    {
      name: "Jorge Alaniz",
      rating: 5,
      text: "Every barber here cuts badass. My son and I been coming here. Always recommend to family and friends. Fair price for great cuts.",
      service: "Family Cuts"
    },
    {
      name: "Mario Beltran",
      rating: 5,
      text: "I have been going there and they have great customer service, nice haircut isn't that bad, I have never been messed up.",
      service: "Customer Service"
    },
    {
      name: "GiraffesinNAM",
      rating: 5,
      text: "Honestly, I came here to get a last minutes hair cut no appointment and I was waited within 30 minutes. The barber who cut me did an excellent job considering it was my first time there. They were very polite and the atmosphere was very friendly! Also the prices are great was really surprised at how cheap my haircut was with tip! Thank you for y'alls hospitality I definitely recommend!",
      service: "Walk-in Welcome"
    },
    {
      name: "Jeanette Pacheco",
      rating: 5,
      text: "These guys do an awesome job! They are always very packed but if you make an appointment with any specific barber you'll be in and out. My husband pays $15 for a haircut and trimming of his beard and facial hair. Looks amazing! Ask for Xavier.",
      service: "Appointment Service"
    }
  ];

  const categories = ["All", "Fade Haircuts", "Barbers at Work"];
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Reset carousel when category changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCategory]);

  return (
    <>
      <SEO 
        canonical={window.location.origin + window.location.pathname}
      />
      <StructuredData data={structuredData} />
      <StructuredData data={faqStructuredData} />
      
      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-2 lg:hidden" style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
        <div className="flex space-x-2">
          <a 
            href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now"
            onClick={() => {
              trackBookingCTA('mobile-sticky');
              trackEvent('book_click', 'mobile_sticky', 'bottom_bar');
            }}
            className="flex-1 bg-barbershop-red text-white text-center py-3 rounded-md font-semibold text-sm"
            data-testid="button-mobile-book"
          >
            <i className="fas fa-calendar-alt mr-1"></i>
            Book
          </a>
          <a 
            href="tel:+12107172360"
            onClick={() => {
              trackCallCTA();
              trackEvent('call_click', 'mobile_sticky', 'bottom_bar');
            }}
            className="flex-1 bg-barbershop-dark text-white text-center py-3 rounded-md font-semibold text-sm"
            data-testid="button-mobile-call"
          >
            <i className="fas fa-phone mr-1"></i>
            Call
          </a>
          <a 
            href="https://maps.google.com/?q=Lord's+Barbershop+3751+Pleasanton+Rd+San+Antonio+TX+78221"
            onClick={() => {
              trackDirectionsCTA();
              trackEvent('directions_click', 'mobile_sticky', 'bottom_bar');
            }}
            className="flex-1 bg-gray-600 text-white text-center py-3 rounded-md font-semibold text-sm"
            data-testid="button-mobile-directions"
          >
            <i className="fas fa-map-marker-alt mr-1"></i>
            Directions
          </a>
        </div>
      </div>
      
      <div id="main-content">
        {/* Hero Section */}
        <section id="home" className="relative bg-barbershop-dark text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Best Haircuts & Beard Care in San Antonio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Precision fades, expert beard shaping, and classic razor shaves on San Antonio's Southside. 
                Professional barbers delivering exceptional grooming experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('hero')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 text-center"
                  data-testid="button-book-hero"
                >
                  Book Your Appointment
                </a>
                <a 
                  href="tel:+12107172360" 
                  onClick={trackCallCTA} 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-barbershop-dark transition-all duration-200 text-center"
                  data-testid="button-call-hero"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-barbershop-red mr-2"></i>
                  <span>3751 Pleasanton Rd, San Antonio, TX 78221</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-barbershop-red mr-2"></i>
                  <span>Mon: 12PM-8PM; Tue-Sat: 9AM-8PM; Sun: 9AM-3PM</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-barbershop-red mr-2"></i>
                  <span>(210) 717-2360</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Row after Hero */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <CTARow source="after-hero" />
          </div>
        </section>


        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Our Work Gallery
              </h2>
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
                  data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Carousel */}
            {filteredImages.length > 0 && (
              <div className="mb-16">
                {/* Clean Image Display */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white mb-6">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <img 
                      src={filteredImages[currentImageIndex]?.src}
                      alt={filteredImages[currentImageIndex]?.alt}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                      data-testid="carousel-main-image"
                    />
                    
                    {/* Clean Navigation Arrows - No overlays on image */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      data-testid="button-prev-image"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      data-testid="button-next-image"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>

                {/* Separate Clean Text Section */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-barbershop-dark mb-2">
                      Professional Barbering Work
                    </h3>
                    <p className="text-gray-600">
                      {filteredImages[currentImageIndex]?.alt}
                    </p>
                  </div>

                  {/* Clean Dot Navigation */}
                  <div className="flex justify-center space-x-2">
                    {filteredImages.slice(0, 8).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-barbershop-red scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        data-testid={`dot-indicator-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
                data-testid="modal-image"
              >
                <div className="relative max-w-4xl max-h-full">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-opacity duration-200"
                    data-testid="button-close-modal"
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
          </div>
          
          {/* CTA Row after Gallery */}
          <div className="container mx-auto px-4 py-12">
            <CTARow source="after-gallery" />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Meet Our Expert Barbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our skilled team of 10+ experienced barbers brings passion and dedication to the craft with every cut. 
                From adult precision fades to gentle children's haircuts, each barber at Lord's Barbershop 
                specializes in delivering exceptional grooming experiences for clients of all ages throughout San Antonio's Southside.
              </p>
            </div>

            {/* Full Team Photo */}
            <div className="mb-16">
              <img 
                src={fullTeamImage}
                alt="Lord's Barbershop full team of expert barbers - San Antonio Southside"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                data-testid="img-full-team"
              />
              <p className="text-center text-gray-600 mt-4 font-medium">Our complete team of 10+ skilled barbers ready to serve you</p>
            </div>

            {/* Featured Team Members */}
            <div className="space-y-16 mb-16">
              {teamMembers.map((member, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.title} at Lord's Barbershop`}
                      className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-lg"
                      data-testid={`img-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold text-barbershop-dark mb-2" data-testid={`text-name-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>{member.name}</h3>
                    <p className="text-xl text-barbershop-red font-medium mb-4">{member.title}</p>
                    

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-barbershop-dark mb-2">Specialties:</h4>
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
                      href={member.bookingLink || "https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now"} 
                      onClick={() => trackBookingCTA(`team-${member.name.toLowerCase().replace(' ', '-')}`)}
                      className="btn-enhanced btn-primary-enhanced"
                      data-testid={`button-book-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Book with {member.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Row after Team */}
          <div className="container mx-auto px-4 py-12">
            <CTARow source="after-team" />
          </div>
        </section>

        {/* Service Pricing Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="card-enhanced shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-barbershop-dark mb-4">Service Pricing</h3>
                
                {/* Haircuts Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-barbershop-dark mb-4">Haircuts & Fades</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Taper</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">High Fade</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Mid Fade</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Low Fade</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Burst Fade</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Mid Drop Fade</h5>
                      <p className="price-amount mb-1">$35.00</p>
                      <p className="text-sm text-gray-500">45 min</p>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h4 className="text-lg font-semibold text-barbershop-dark mb-4">Additional Services</h4>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Beard</h5>
                      <p className="price-amount mb-1">$10.00</p>
                      <p className="text-sm text-gray-500">10 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Designs</h5>
                      <p className="price-amount mb-1">$5.00</p>
                      <p className="text-sm text-gray-500">10 min</p>
                    </div>
                    <div className="price-card-enhanced">
                      <h5 className="font-semibold text-barbershop-dark mb-2">Eyebrows</h5>
                      <p className="price-amount mb-1">$5.00</p>
                      <p className="text-sm text-gray-500">5 min</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600"><strong>Policy:</strong> 24-hour notice required for cancellations. No-show appointments may be subject to a fee.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Strip */}
        <section className="py-12 bg-barbershop-red text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center">
                <i className="fas fa-calendar-check text-2xl mr-3"></i>
                <span className="font-semibold">Same-day fades</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-2xl mr-3"></i>
                <span className="font-semibold">Open 7 days</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-child text-2xl mr-3"></i>
                <span className="font-semibold">Kid-friendly</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-users text-2xl mr-3"></i>
                <span className="font-semibold">10+ expert barbers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say 
                about their experience at Lord's Barbershop on San Antonio's Southside.
              </p>
            </div>

            {/* Customer Reviews */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {reviews.map((review, index) => (
                <div key={index} className="review-card-enhanced">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                        <span className="font-semibold text-barbershop-dark">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-barbershop-dark" data-testid={`text-reviewer-${index}`}>{review.name}</p>
                        <p className="text-sm text-gray-600">Verified Customer</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Lord's Barbershop</span>
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
            
            {/* CTA Row after Reviews */}
            <div className="container mx-auto px-4 py-12">
              <CTARow source="after-reviews" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Got questions? We've got answers. Here are the most common questions 
                about our services at Lord's Barbershop in San Antonio.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                  Do you take walk-ins?
                </h3>
                <p className="text-gray-600">
                  Yes, when slots are open. Booking online guarantees your time.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                  Are kids' haircuts available?
                </h3>
                <p className="text-gray-600">
                  Yes—kid-friendly barbers. Earlier hours are usually quieter.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                  Where can I park?
                </h3>
                <p className="text-gray-600">
                  Free parking is available on-site near the entrance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-barbershop-dark mb-3">
                  What payments do you accept?
                </h3>
                <p className="text-gray-600">
                  Cash and major cards. Tips welcome in cash or card.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
                Visit Us or Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready for your best haircut? Book online, give us a call, or stop by our 
                Southside San Antonio location on Pleasanton Road.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-barbershop-red text-xl mr-4 mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-barbershop-dark mb-1">Address</h4>
                        <p className="text-gray-600">
                          3751 Pleasanton Rd<br />
                          San Antonio, TX 78221
                        </p>
                        <button
                          onClick={trackDirectionsCTA}
                          className="text-barbershop-red hover:underline mt-1"
                          data-testid="button-directions"
                        >
                          Get Directions →
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-phone text-barbershop-red text-xl mr-4 mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-barbershop-dark mb-1">Phone</h4>
                        <a 
                          href="tel:+12107172360" 
                          onClick={trackCallCTA} 
                          className="text-gray-600 hover:text-barbershop-red transition-colors duration-200 text-lg"
                          data-testid="link-phone"
                        >
                          (210) 717-2360
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Click to call now</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-clock text-barbershop-red text-xl mr-4 mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-barbershop-dark mb-1">Hours</h4>
                        <div className="text-gray-600">
                          <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-calendar-alt text-barbershop-red text-xl mr-4 mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-barbershop-dark mb-1">Online Booking</h4>
                        <p className="text-gray-600 mb-2">Book your appointment 24/7</p>
                        <a 
                          href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                          onClick={() => trackBookingCTA('contact')}
                          className="bg-barbershop-red text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block"
                          data-testid="button-book-contact"
                        >
                          Book on Booksy
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-barbershop-dark mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/lords_barbershop210/" 
                        target="_blank" 
                        rel="noopener"
                        className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                        aria-label="Instagram"
                        data-testid="link-instagram"
                      >
                        <i className="fab fa-instagram text-2xl"></i>
                      </a>
                      <a 
                        href="https://www.yelp.com/biz/lord-s-barber-shop-san-antonio" 
                        target="_blank" 
                        rel="noopener"
                        className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                        aria-label="Yelp"
                        data-testid="link-yelp"
                      >
                        <i className="fab fa-yelp text-2xl"></i>
                      </a>
                      <a 
                        href="https://www.facebook.com/pages/The%20Lord%27s%20Barbershop/676322549149665/" 
                        target="_blank" 
                        rel="noopener"
                        className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                        aria-label="Facebook"
                        data-testid="link-facebook"
                      >
                        <i className="fab fa-facebook text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-barbershop-dark mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          required
                          className="w-full focus:ring-barbershop-red focus:border-barbershop-red"
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-barbershop-dark mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          required
                          className="w-full focus:ring-barbershop-red focus:border-barbershop-red"
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-barbershop-dark mb-2">
                        Email *
                      </label>
                      <Input
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full focus:ring-barbershop-red focus:border-barbershop-red"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-barbershop-dark mb-2">
                        Phone (Optional)
                      </label>
                      <Input
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full focus:ring-barbershop-red focus:border-barbershop-red"
                        data-testid="input-phone"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-barbershop-dark mb-2">
                        Service Interested In
                      </label>
                      <Select name="service">
                        <SelectTrigger className="w-full focus:ring-barbershop-red focus:border-barbershop-red" data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fade">Fade Haircut</SelectItem>
                          <SelectItem value="beard">Beard Shaping</SelectItem>
                          <SelectItem value="razor">Razor Shave</SelectItem>
                          <SelectItem value="kids">Kids Haircut</SelectItem>
                          <SelectItem value="other">Other/General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-barbershop-dark mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message" 
                        name="message" 
                        rows={4} 
                        required
                        className="w-full focus:ring-barbershop-red focus:border-barbershop-red"
                        placeholder="Tell us how we can help you..."
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-barbershop-red text-white hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                      data-testid="button-submit-form"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-barbershop-dark mb-6 text-center">
                Find Us on Pleasanton Road
              </h3>
              
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.8234445!2d-98.4951!3d29.3669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzAwLjgiTiA5OMKwMjknNDIuNCJX!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lord's Barbershop Location - 3751 Pleasanton Rd, San Antonio, TX"
                ></iframe>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-barbershop-dark rounded-lg p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h3>
              <p className="text-xl mb-8 text-gray-300">
                Don't wait - book online now or give us a call to secure your preferred time slot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                  onClick={() => trackBookingCTA('contact-bottom')}
                  className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                  data-testid="button-book-final"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Book Online Now
                </a>
                <a 
                  href="tel:+12107172360" 
                  onClick={trackCallCTA}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-barbershop-dark transition-all duration-200"
                  data-testid="button-call-final"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call (210) 717-2360
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePage;
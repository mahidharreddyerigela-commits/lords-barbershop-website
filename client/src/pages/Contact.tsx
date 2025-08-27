import { useState } from "react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
      
      // Using Netlify Forms - form data will be submitted to Netlify's form handler
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

  return (
    <>
      <SEO
        title="Contact | Lord's Barbershop San Antonio - Location, Hours & Booking"
        description="Visit Lord's Barbershop at 3751 Pleasanton Rd, San Antonio, TX. Call (210) 717-2360 or book online. Hours: Mon 12PM-8PM, Tue-Sat 9AM-8PM, Sun 9AM-3PM. Professional barbering services."
        canonical={`${window.location.origin}/contact`}
      />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/"><a className="hover:text-barbershop-red">Home</a></Link></li>
              <li><span>/</span></li>
              <li className="text-barbershop-red">Contact</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-barbershop-dark mb-4">
              Visit Us or Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready for your best haircut? Book online, give us a call, or stop by our 
              Southside San Antonio location on Pleasanton Road.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-barbershop-red text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-barbershop-dark mb-1">Address</h3>
                      <p className="text-gray-600">
                        3751 Pleasanton Rd<br />
                        San Antonio, TX 78221
                      </p>
                      <button
                        onClick={trackDirectionsCTA}
                        className="text-barbershop-red hover:underline mt-1"
                      >
                        Get Directions →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-phone text-barbershop-red text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-barbershop-dark mb-1">Phone</h3>
                      <a 
                        href="tel:+12107172360" 
                        onClick={trackCallCTA} 
                        className="text-gray-600 hover:text-barbershop-red transition-colors duration-200 text-lg"
                      >
                        (210) 717-2360
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Click to call now</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-clock text-barbershop-red text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-barbershop-dark mb-1">Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday: 12:00 PM - 8:00 PM</p>
                        <p>Tuesday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 9:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-calendar-alt text-barbershop-red text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-barbershop-dark mb-1">Online Booking</h3>
                      <p className="text-gray-600 mb-2">Book your appointment 24/7</p>
                      <a 
                        href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                        onClick={() => trackBookingCTA('contact')}
                        className="bg-barbershop-red text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-all duration-200 inline-block"
                      >
                        Book on Booksy
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-barbershop-dark mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/lords_barbershop210/" 
                      target="_blank" 
                      rel="noopener"
                      className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a 
                      href="https://www.yelp.com/biz/lord-s-barber-shop-san-antonio" 
                      target="_blank" 
                      rel="noopener"
                      className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                      aria-label="Yelp"
                    >
                      <i className="fab fa-yelp text-2xl"></i>
                    </a>
                    <a 
                      href="https://www.facebook.com/pages/The%20Lord%27s%20Barbershop/676322549149665/" 
                      target="_blank" 
                      rel="noopener"
                      className="text-gray-400 hover:text-barbershop-red transition-all duration-200 transform hover:scale-110"
                      aria-label="Facebook"
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
                <h2 className="text-2xl font-semibold text-barbershop-dark mb-6">Send us a Message</h2>
                
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
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-barbershop-dark mb-2">
                      Service Interested In
                    </label>
                    <Select name="service">
                      <SelectTrigger className="w-full focus:ring-barbershop-red focus:border-barbershop-red">
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
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-barbershop-red text-white hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
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
            <h2 className="text-2xl font-semibold text-barbershop-dark mb-6 text-center">
              Find Us on Pleasanton Road
            </h2>
            
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
            
            <div className="text-center mt-8">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-barbershop-dark mb-4">Location Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-barbershop-dark mb-2">Parking</h4>
                    <p className="text-gray-600 text-sm">
                      Free parking available in front of the shop. 
                      Additional street parking on Pleasanton Road.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-barbershop-dark mb-2">Public Transportation</h4>
                    <p className="text-gray-600 text-sm">
                      Accessible via VIA Transit. 
                      Bus routes serve Pleasanton Road corridor.
                    </p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={trackDirectionsCTA}
                className="bg-barbershop-dark text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                <i className="fas fa-directions mr-2"></i>
                Get Directions
              </button>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-barbershop-dark mb-6 text-center">
              We're Easy to Find
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <i className="fas fa-school text-2xl text-barbershop-red mb-3"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Near Schools</h3>
                <p className="text-gray-600 text-sm">
                  Conveniently located near several schools in the Harlandale area.
                </p>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <i className="fas fa-shopping-cart text-2xl text-barbershop-red mb-3"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Shopping Centers</h3>
                <p className="text-gray-600 text-sm">
                  Close to local shopping and dining options on Pleasanton Road.
                </p>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-6">
                <i className="fas fa-road text-2xl text-barbershop-red mb-3"></i>
                <h3 className="font-semibold text-barbershop-dark mb-2">Easy Access</h3>
                <p className="text-gray-600 text-sm">
                  Quick access from I-35 and other major San Antonio highways.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Contact Info */}
          <div className="bg-barbershop-dark rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-xl mb-6 text-gray-300">
              Don't wait - book online now or give us a call to secure your preferred time slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://booksy.com/en-us/976657_lords-barbershop_barber-shop_134789_san-antonio?hl=en-US&gei=24CbaN3_JZyxqtsPxdft0QI&rwg_token=ACgRB3dezEwX44YS63spbEAv5HxdlxCyT3kHEMivDdQpOPBwEzKnuIYj50_EATYcCku_hymKmC-F9HDd3w6SfZeZ4-PfGyu6eQ%3D%3D&utm_source=website&utm_medium=cta&utm_campaign=book_now" 
                onClick={() => trackBookingCTA('contact-bottom')}
                className="bg-barbershop-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Online Now
              </a>
              <a 
                href="tel:+12107172360" 
                onClick={trackCallCTA}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-barbershop-dark transition-all duration-200"
              >
                <i className="fas fa-phone mr-2"></i>
                Call (210) 717-2360
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-barbershop-dark mb-6">
              Learn More About Us
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

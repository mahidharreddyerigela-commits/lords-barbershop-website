import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "Best Haircuts & Beard Care in San Antonio | Lord's Barbershop",
  description = "Same-day fades, beard trims & classic shaves. Open 7 days. Book online or call (210) 717-2360. 3751 Pleasanton Rd, San Antonio.",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://lordsbarbershopsa.com/images/hero-barbershop.jpg",
  ogUrl,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
    
    // Set canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = canonical;
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }
    
    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };
    
    setOGTag('og:title', ogTitle || title);
    setOGTag('og:description', ogDescription || description);
    setOGTag('og:image', ogImage);
    setOGTag('og:url', ogUrl || window.location.href);
    setOGTag('og:type', 'website');
    
    // Set Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };
    
    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', ogTitle || title);
    setTwitterTag('twitter:description', ogDescription || description);
    setTwitterTag('twitter:image', ogImage);
    
    // Set robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute('content', noindex ? 'noindex,nofollow' : 'index,follow');
    } else {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      robotsTag.setAttribute('content', noindex ? 'noindex,nofollow' : 'index,follow');
      document.head.appendChild(robotsTag);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl, noindex]);

  return null;
};

export default SEO;

import { trackEvent } from "@/lib/analytics";

interface CTARowProps {
  source: string;
  className?: string;
}

const CTARow = ({ source, className = "" }: CTARowProps) => {
  const trackBookingCTA = (sourceLocation: string) => {
    trackEvent('click_book_now', 'booking', sourceLocation);
    trackEvent('book_click', sourceLocation, 'cta_row');
  };

  const trackCallCTA = (sourceLocation: string) => {
    trackEvent('click_call', 'contact', 'phone');
    trackEvent('call_click', sourceLocation, 'cta_row');
  };

  return (
    <div className={`${className}`}>
    </div>
  );
};

export default CTARow;
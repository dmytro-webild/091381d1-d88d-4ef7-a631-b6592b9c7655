"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Car, Coffee, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Rooms",
          id: "#rooms",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Hotel Calidum"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="Welcome to Hotel Calidum"
      description="Discover comfort and tranquility in the heart of Phu Quoc island. Your perfect tropical urban getaway awaits."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497253.jpg",
          imageAlt: "Luxurious Suite",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-greenery_53876-147903.jpg",
          imageAlt: "Tropical Garden",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-hotel-reception-entryway-with-glamorous-decorations_482257-87376.jpg",
          imageAlt: "Friendly Staff",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-women-happy-smile-relax-around-outdoor-swimming-pool_74190-9736.jpg",
          imageAlt: "Pool Area",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-wood-chair_1339-6716.jpg",
          imageAlt: "Cafe Terrace",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/green-architectural-city-buildings_23-2149554113.jpg",
          imageAlt: "Playground",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Attention to Detail, Guest Care"
      description="At Hotel Calidum, we believe it's the little things that make your stay unforgettable. From premium toiletries to our welcoming atmosphere, we ensure every detail of your time on Phu Quoc is perfect for families, travelers, and business guests alike."
      bulletPoints={[
        {
          title: "Safety & Service",
          description: "24/7 security, multilingual staff, and dedicated shuttle services.",
        },
        {
          title: "Family Friendly",
          description: "Dedicated children's playground and spacious rooms for your peace of mind.",
        },
        {
          title: "Business Ready",
          description: "Desk setups, high-speed WiFi, and fax services to keep you connected.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/summer-white-sea-vintage-maldives_1203-4459.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Standard Queen",
          price: "$80",
          imageSrc: "http://img.b2bpic.net/free-photo/apartment-comfortable-pillow-hotel-suite_1203-5168.jpg",
        },
        {
          id: "2",
          name: "Deluxe Queen",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-black-bathroom-vanity_23-2151962351.jpg",
        },
        {
          id: "3",
          name: "Superior Queen",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/white-robe-by-sauna-glass-door-warm-spa-interior_169016-69104.jpg",
        },
        {
          id: "4",
          name: "Business Suite",
          price: "$190",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-orange-juice-desktop-near-laptop-morning_169016-24917.jpg",
        },
        {
          id: "5",
          name: "Family Suite",
          price: "$220",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-spa-bath-concept_23-2148094318.jpg",
        },
        {
          id: "6",
          name: "Executive Room",
          price: "$250",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-handsome-guy-looks-his-passport-flight-ticket-sits-floor-with-suitcase_1258-314143.jpg",
        },
      ]}
      title="Comfortable Rooms"
      description="Relax in our modern rooms designed for your complete comfort."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Mobility Solutions",
          description: "Bicycle storage, bike rental, and car rental services.",
          bentoComponent: "reveal-icon",
          icon: Car,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bora-travel-tree-bungalow_1253-341.jpg",
          imageAlt: "beautiful bora travel tree bungalow",
        },
        {
          title: "On-Site Dining",
          description: "Relax at our café or order food directly to your room.",
          bentoComponent: "reveal-icon",
          icon: Coffee,
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497253.jpg",
          imageAlt: "beautiful bora travel tree bungalow",
        },
        {
          title: "Daily Comforts",
          description: "Laundry, wake-up calls, and housekeeping at your request.",
          bentoComponent: "reveal-icon",
          icon: Sparkles,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-greenery_53876-147903.jpg",
          imageAlt: "beautiful bora travel tree bungalow",
        },
      ]}
      title="Full Hotel Services"
      description="Beyond just a bed, we offer amenities to simplify your journey."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Our Impact"
      tag="Reliability"
      metrics={[
        {
          id: "1",
          value: "100+",
          description: "Rooms serviced",
        },
        {
          id: "2",
          value: "500+",
          description: "Happy travelers",
        },
        {
          id: "3",
          value: "24/7",
          description: "Security & Care",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Traveler",
          company: "UK",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-showing-his-boarding-pass-check-counter_107420-85116.jpg",
        },
        {
          id: "2",
          name: "The Miller Family",
          role: "Guests",
          company: "USA",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/family-taking-selfie-with-smartphone_23-2149126762.jpg",
        },
        {
          id: "3",
          name: "Mark D.",
          role: "Business Guest",
          company: "Australia",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-outdoors-using-laptop_23-2149318573.jpg",
        },
        {
          id: "4",
          name: "Elena V.",
          role: "Traveler",
          company: "Germany",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-white-party_23-2149530422.jpg",
        },
        {
          id: "5",
          name: "Ken T.",
          role: "Traveler",
          company: "Japan",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/talking-wife_1098-13921.jpg",
        },
      ]}
      title="Guest Testimonials"
      description="What our guests say about Hotel Calidum."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Is the hotel family friendly?",
          content: "Yes! We offer a dedicated playground and our rooms are perfect for family travel.",
        },
        {
          id: "2",
          title: "Do you offer bicycle rentals?",
          content: "Absolutely. We have a secure bicycle storage room and rental services.",
        },
        {
          id: "3",
          title: "Is WiFi free?",
          content: "High-speed WiFi is complimentary for all our guests.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about your stay."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Stay"
      description="Ready to experience Calidum? Get in touch today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your room preferences or questions",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/minimalist-architecture-space_23-2151912505.jpg"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/miami-south-beach-street-view-with-water-reflections-night_649448-2155.jpg"
      logoText="Hotel Calidum"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

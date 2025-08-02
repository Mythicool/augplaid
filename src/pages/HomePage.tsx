import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import TextTrail from '../components/reactbits/TextTrail';
import BounceCards from '../components/reactbits/BounceCards';
import GooeyNav from '../components/reactbits/GooeyNav';
import GlassSurface from '../components/reactbits/GlassSurface';
import TestimonialsCarousel from '../components/reactbits/TestimonialsCarousel';
import AnimatedCounter from '../components/reactbits/AnimatedCounter';
import MagicBento from '../components/reactbits/MagicBento';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import LazyImage from '../components/LazyImage';
import NewsletterSignup from '../components/NewsletterSignup';
import { DOCK_ITEMS, TESTIMONIALS, CAFE_STATS, COLOR_SCHEMES, FEATURED_CAT } from '../constants';

export default function HomePage() {
  const featureImages = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=500&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=500&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=500&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=500&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=500&fit=crop&crop=face"
  ];

  const transformStyles = [
    "rotate(8deg) translate(-120px, -20px)",
    "rotate(-5deg) translate(-60px, 10px)",
    "rotate(2deg) translate(0px, -10px)",
    "rotate(-8deg) translate(60px, 15px)",
    "rotate(5deg) translate(120px, -25px)"
  ];

  // MagicBento cards data
  const bentoCards = [
    {
      color: "rgba(139, 92, 246, 0.3)",
      title: "Cats Adopted",
      description: "Happy cats finding their forever homes",
      label: "Impact",
      icon: "🏠",
      value: CAFE_STATS.catsAdopted
    },
    {
      color: "rgba(236, 72, 153, 0.3)",
      title: "Happy Customers",
      description: "Satisfied visitors and coffee lovers",
      label: "Community",
      icon: "😊",
      value: CAFE_STATS.happyCustomers
    },
    {
      color: "rgba(245, 158, 11, 0.3)",
      title: "Cups Served",
      description: "Freshly brewed coffee with love",
      label: "Coffee",
      icon: "☕",
      value: `${(CAFE_STATS.cupsOfCoffee / 1000).toFixed(0)}K`
    },
    {
      color: "rgba(16, 185, 129, 0.3)",
      title: "Years of Service",
      description: "Bringing cats and coffee together",
      label: "Experience",
      icon: "🎉",
      value: CAFE_STATS.yearsInBusiness
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={COLOR_SCHEMES.home}
        blend={0.3}
        amplitude={0.8}
        speed={0.3}
      />

      {/* Plaid Overlay */}
      <div className="plaid-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="h-32 mb-6">
            <TextTrail
              text="Plaid Cat Cafe"
              fontFamily="Figtree"
              fontWeight="900"
              animateColor={true}
              startColor="#fde047"
              textColor="#fde047"
              backgroundColor={0x271e37}
              noiseFactor={2}
              rgbPersistFactor={0.96}
              alphaPersistFactor={0.93}
              colorCycleInterval={4000}
              supersample={2}
            />
          </div>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Where purrs meet plaid patterns. Experience the coziest cat cafe in town, 
            featuring adorable rescue cats and artisanal coffee in a warm, plaid-themed atmosphere.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-16 float-animation">
          <BounceCards
            images={featureImages}
            containerWidth={600}
            containerHeight={300}
            animationDelay={1}
            animationStagger={0.1}
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to="/cats"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Meet Our Cats
          </Link>
          <Link
            to="/menu"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View Menu
          </Link>
          <Link
            to="/events"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Upcoming Events
          </Link>
          <Link
            to="/shop"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Shop
          </Link>
        </div>

        {/* Stats Section with MagicBento */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Impact</h2>
          <MagicBento
            cards={bentoCards}
            enableStars={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="251, 191, 36"
            particleCount={6}
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Featured Cat of the Month */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Cat of the Month</h2>
          <div className="max-w-2xl mx-auto">
            <SpotlightCard
              spotlightColor="rgba(251, 191, 36, 0.4)"
              spotlightSize={400}
              onClick={() => window.location.href = '/cats'}
            >
              <div className="featured-cat">
                <LazyImage
                  src={FEATURED_CAT.image}
                  alt={FEATURED_CAT.name}
                  className="featured-cat__image"
                />
                <h3 className="featured-cat__name">{FEATURED_CAT.name}</h3>
                <p className="featured-cat__title">Featured Adoptable Cat</p>
                <p className="featured-cat__description">{FEATURED_CAT.description}</p>

                <div className="featured-cat__details">
                  <div className="featured-cat__detail">
                    <div className="featured-cat__detail-label">Age</div>
                    <div className="featured-cat__detail-value">{FEATURED_CAT.age} years</div>
                  </div>
                  <div className="featured-cat__detail">
                    <div className="featured-cat__detail-label">Fee</div>
                    <div className="featured-cat__detail-value">${FEATURED_CAT.adoptionFee}</div>
                  </div>
                  <div className="featured-cat__detail">
                    <div className="featured-cat__detail-label">Status</div>
                    <div className="featured-cat__detail-value">
                      {FEATURED_CAT.isAvailable ? 'Available' : 'Adopted'}
                    </div>
                  </div>
                </div>

                <div className="featured-cat__personality">
                  {FEATURED_CAT.personality.map((trait, index) => (
                    <span key={index} className="featured-cat__trait">
                      {trait}
                    </span>
                  ))}
                </div>

                <Link to="/cats" className="featured-cat__cta">
                  Meet {FEATURED_CAT.name}
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <ScrollReveal
            animationType="container"
            baseOpacity={0.2}
            enableBlur={true}
            blurStrength={2}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Visitors Say</h2>
          </ScrollReveal>
          <ScrollReveal
            animationType="container"
            baseOpacity={0.1}
            enableBlur={true}
            delay={0.2}
          >
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </ScrollReveal>
        </div>

        {/* Cat of the Month */}
        <div className="mb-16">
          <GlassSurface className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">🌟 Cat of the Month</h2>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Meet Whiskers!</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Whiskers is a gentle 3-year-old tabby who loves sunbathing and gentle pets.
                  He's been with us for 6 months and is looking for a quiet home where he can
                  be the center of attention. Whiskers gets along well with other cats and
                  would make a perfect companion for someone looking for a calm, loving friend.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/cats"
                    className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-6 py-3 text-white font-semibold transition-all duration-300"
                  >
                    Meet Whiskers
                  </Link>
                  <Link
                    to="/reservations"
                    className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300"
                  >
                    Schedule Visit
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face"
                  alt="Whiskers - Cat of the Month"
                  className="w-80 h-80 object-cover rounded-20 mx-auto"
                />
              </div>
            </div>
          </GlassSurface>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <NewsletterSignup />
        </div>

        {/* Cafe Info */}
        <div className="mt-16 text-center text-white/70">
          <p className="text-lg mb-2">📍 123 Cozy Street, Cat Town</p>
          <p className="text-lg mb-2">⏰ Open Daily 8AM - 8PM</p>
          <p className="text-lg">☕ Fresh Coffee • 🐱 Happy Cats • 🧶 Plaid Vibes</p>
        </div>
      </div>

      {/* GooeyNav Navigation */}
      <GooeyNav
        items={DOCK_ITEMS.map(item => ({
          label: `${item.icon} ${item.label}`,
          to: item.to
        }))}
        initialActiveIndex={0}
      />
    </div>
  );
}

import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import Dock from '../components/reactbits/Dock';
import ShinyText from '../components/reactbits/ShinyText';
import TestimonialsCarousel from '../components/reactbits/TestimonialsCarousel';
import AnimatedCounter from '../components/reactbits/AnimatedCounter';

export default function AboutPage() {
  const dockItems = [
    { icon: "🏠", label: "Home", to: "/" },
    { icon: "🐱", label: "Cats", to: "/cats" },
    { icon: "☕", label: "Menu", to: "/menu" },
    { icon: "📖", label: "About", to: "/about" },
    { icon: "🎉", label: "Events", to: "/events" },
    { icon: "📸", label: "Gallery", to: "/gallery" },
    { icon: "📝", label: "Blog", to: "/blog" },
    { icon: "📅", label: "Reservations", to: "/reservations" },
    { icon: "🛍️", label: "Shop", to: "/shop" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "I adopted Luna from Plaid Cat Cafe 6 months ago, and it's been the best decision ever! The staff really knew her personality and helped us bond perfectly.",
      rating: 5,
      catAdopted: "Luna"
    },
    {
      id: 2,
      name: "Mike Chen",
      text: "The coffee here is exceptional, and the cats make every visit special. I come here to work remotely and it's the most peaceful, productive environment.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "My daughter's birthday party here was magical! The cats were so gentle with the kids, and the staff went above and beyond to make it special.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      text: "As someone who travels for work, this place feels like home. The community here is wonderful, and I've made lasting friendships.",
      rating: 5
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#10B981", "#3B82F6", "#8B5CF6"]}
        blend={0.2}
        amplitude={0.6}
        speed={0.4}
      />

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors text-lg"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-6xl font-bold text-center mb-4">
            <ShinyText text="About Plaid Cat Cafe" speed={3} />
          </h1>

          <div className="space-y-8">
            <GlassSurface className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Plaid Cat Cafe was born from a simple dream: to create a cozy space where coffee lovers
                and cat enthusiasts could come together. Founded in 2020, we've rescued and found homes
                for over 200 cats while serving the community's best artisanal coffee and pastries.
              </p>
            </GlassSurface>

            <GlassSurface className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                We believe every cat deserves a loving home and every person deserves great coffee.
                Our cafe provides a safe haven for rescue cats while they wait for their forever families,
                and we donate a portion of all proceeds to local animal rescue organizations.
              </p>
            </GlassSurface>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassSurface className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">📍 Visit Us</h3>
                <p className="text-white/80">
                  123 Cozy Street<br />
                  Cat Town, CT 12345<br />
                  (555) 123-CATS
                </p>
              </GlassSurface>

              <GlassSurface className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">⏰ Hours</h3>
                <p className="text-white/80">
                  Monday - Friday: 7AM - 9PM<br />
                  Saturday - Sunday: 8AM - 10PM<br />
                  Cat Playtime: All day!
                </p>
              </GlassSurface>
            </div>

            <GlassSurface className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact by the Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                <div>
                  <AnimatedCounter end={200} suffix="+" className="text-yellow-300" />
                  <div>Cats Adopted</div>
                </div>
                <div>
                  <AnimatedCounter end={50000} suffix="+" className="text-yellow-300" />
                  <div>Cups of Coffee Served</div>
                </div>
                <div>
                  <AnimatedCounter end={25000} prefix="$" suffix="+" className="text-yellow-300" />
                  <div>Donated to Rescues</div>
                </div>
              </div>
            </GlassSurface>

            {/* Team Section */}
            <GlassSurface className="p-8 mt-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                    alt="Jennifer Wilson"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                  />
                  <h3 className="text-lg font-semibold text-white">Jennifer Wilson</h3>
                  <p className="text-white/70 text-sm">Founder & Owner</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Sarah Martinez"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                  />
                  <h3 className="text-lg font-semibold text-white">Sarah Martinez</h3>
                  <p className="text-white/70 text-sm">Head Barista</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Dr. Michael Chen"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                  />
                  <h3 className="text-lg font-semibold text-white">Dr. Michael Chen</h3>
                  <p className="text-white/70 text-sm">Veterinarian</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
                    alt="Emma Thompson"
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                  />
                  <h3 className="text-lg font-semibold text-white">Emma Thompson</h3>
                  <p className="text-white/70 text-sm">Adoption Coordinator</p>
                </div>
              </div>
            </GlassSurface>

            {/* Testimonials */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">What Our Community Says</h2>
              <TestimonialsCarousel testimonials={testimonials} />
            </div>

            <GlassSurface className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <div className="text-white/80 text-lg space-y-2">
                <p>📧 hello@plaidcatcafe.com</p>
                <p>📱 Follow us @PlaidCatCafe</p>
                <p>💝 Interested in adoption? Schedule a meet & greet!</p>
                <p>🎉 Available for private events and cat birthday parties</p>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>

      {/* Dock Navigation */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

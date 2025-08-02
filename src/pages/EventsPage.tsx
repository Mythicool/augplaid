import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import GooeyNav from '../components/reactbits/GooeyNav';
import ShinyText from '../components/reactbits/ShinyText';
import { motion } from 'framer-motion';

export default function EventsPage() {
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

  const upcomingEvents = [
    {
      id: 1,
      title: "Purr-fect Yoga",
      subtitle: "Cat Yoga Sessions",
      date: "Every Saturday",
      time: "9:00 AM - 10:30 AM",
      price: "$25",
      description: "Find your zen while adorable cats roam freely around your yoga mat. Our certified instructor guides you through gentle poses as our friendly felines provide the ultimate relaxation experience.",
      features: ["All levels welcome", "Yoga mats provided", "Cat interactions included", "Herbal tea after class"],
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Adoption Days",
      subtitle: "Find Your Furry Soulmate",
      date: "First Sunday of Every Month",
      time: "11:00 AM - 4:00 PM",
      price: "Free",
      description: "Meet our wonderful cats looking for their forever homes! Spend quality time with potential companions and learn about their unique personalities from our adoption counselors.",
      features: ["Meet all available cats", "Adoption counseling", "Home visit arrangements", "Adoption packages available"],
      image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Coffee Cupping Sessions",
      subtitle: "Discover Your Perfect Brew",
      date: "Every Wednesday",
      time: "6:00 PM - 7:30 PM",
      price: "$15",
      description: "Join our head barista for an educational journey through different coffee origins, processing methods, and flavor profiles. Learn to taste coffee like a pro while cats provide entertainment.",
      features: ["5 coffee tastings", "Professional cupping techniques", "Take-home tasting notes", "10% off coffee bean purchases"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Kitten Socialization Hours",
      subtitle: "Help Our Youngest Residents",
      date: "Tuesday & Thursday",
      time: "2:00 PM - 4:00 PM",
      price: "$10",
      description: "Spend time with our adorable kittens and help them develop social skills. Perfect for those who want to contribute to kitten development while getting their daily dose of cuteness.",
      features: ["Play with kittens", "Socialization activities", "Educational talks", "Photo opportunities"],
      image: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Plaid & Paws Paint Night",
      subtitle: "Creative Fun with Feline Friends",
      date: "Last Friday of Every Month",
      time: "7:00 PM - 9:00 PM",
      price: "$35",
      description: "Unleash your creativity while cats inspire your artistic side! Paint a plaid-themed masterpiece with step-by-step guidance. All materials included, plus wine and light snacks.",
      features: ["All art supplies included", "Wine & snacks", "Take home your artwork", "Cat-themed painting tutorials"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Senior Cat Appreciation Day",
      subtitle: "Celebrating Our Wise Whiskers",
      date: "Third Saturday of Every Month",
      time: "1:00 PM - 5:00 PM",
      price: "Free",
      description: "A special day dedicated to our senior cats (7+ years). Learn about the joys of adopting older cats and spend quality time with these gentle, loving companions.",
      features: ["Meet senior cats", "Educational sessions", "Special adoption rates", "Senior cat care tips"],
      image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={["#EC4899", "#8B5CF6", "#3B82F6"]}
        blend={0.2}
        amplitude={0.7}
        speed={0.4}
      />
      
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="text-white/70 hover:text-white transition-colors text-lg"
            >
              ← Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <ShinyText text="Events & Activities" speed={3} />
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Join us for purr-fectly planned events that bring together coffee lovers, cat enthusiasts, 
              and community members. From relaxing yoga sessions to exciting adoption days, there's 
              something special happening every week at Plaid Cat Cafe!
            </p>
          </div>

          {/* Upcoming Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassSurface className="event-card p-6 h-full">
                  <div className="event-image mb-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-20"
                    />
                  </div>
                  
                  <div className="event-content">
                    <div className="event-header mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-yellow-300 text-lg font-semibold">{event.subtitle}</p>
                    </div>

                    <div className="event-details mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/80">📅 {event.date}</span>
                        <span className="text-white/80">⏰ {event.time}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-yellow-300 text-xl font-bold">{event.price}</span>
                      </div>
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="event-features">
                      <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {event.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-white/20 hover:bg-white/30 border border-white/30 rounded-full py-3 px-6 text-white font-semibold transition-all duration-300 hover:scale-105">
                        Reserve Your Spot
                      </button>
                    </div>
                  </div>
                </GlassSurface>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <GlassSurface className="text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Fun?</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              All events require advance registration. Book your spot today and get ready for an 
              unforgettable experience with our feline friends!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/reservations"
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full py-3 px-8 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Make a Reservation
              </Link>
              <a 
                href="tel:555-123-CATS"
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full py-3 px-8 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Us: (555) 123-CATS
              </a>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* GooeyNav Navigation */}
      <GooeyNav
        items={dockItems.map(item => ({
          label: `${item.icon} ${item.label}`,
          to: item.to
        }))}
        initialActiveIndex={4}
      />
    </div>
  );
}

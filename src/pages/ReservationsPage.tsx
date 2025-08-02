import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import GooeyNav from '../components/reactbits/GooeyNav';
import ShinyText from '../components/reactbits/ShinyText';
import { motion } from 'framer-motion';

export default function ReservationsPage() {
  const [reservationType, setReservationType] = useState('table');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

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

  const reservationTypes = [
    {
      id: 'table',
      name: 'Table Reservation',
      icon: '🪑',
      description: 'Reserve a cozy table for coffee and cat time',
      duration: '2 hours',
      price: 'Free with purchase'
    },
    {
      id: 'event',
      name: 'Private Event',
      icon: '🎉',
      description: 'Book our space for birthdays, meetings, or special occasions',
      duration: '3-4 hours',
      price: 'Starting at $200'
    },
    {
      id: 'meetgreet',
      name: 'Cat Meet & Greet',
      icon: '🐱',
      description: 'One-on-one time with cats you\'re interested in adopting',
      duration: '1 hour',
      price: '$15'
    },
    {
      id: 'photoshoot',
      name: 'Photo Session',
      icon: '📸',
      description: 'Professional photos with our cats for special occasions',
      duration: '1.5 hours',
      price: '$75'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', { type: reservationType, ...formData });
    alert('Reservation request submitted! We\'ll contact you within 24 hours to confirm.');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={["#F59E0B", "#EC4899", "#8B5CF6"]}
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
          
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <ShinyText text="Make a Reservation" speed={3} />
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Reserve your perfect moment at Plaid Cat Cafe. Whether it's a cozy coffee date, 
              a special event, or quality time with our adoptable cats, we're here to make it memorable.
            </p>
          </div>

          {/* Reservation Type Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reservationTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setReservationType(type.id)}
                    className={`w-full p-6 rounded-20 border-2 transition-all duration-300 ${
                      reservationType === type.id
                        ? 'bg-white/30 border-white/50 text-white'
                        : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-sm mb-2">{type.description}</p>
                    <div className="flex justify-between text-sm">
                      <span>Duration: {type.duration}</span>
                      <span className="font-semibold">{type.price}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reservation Form */}
          <GlassSurface className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num} className="bg-gray-800">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="bg-gray-800">Select a time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="bg-gray-800">{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Special Requests or Notes</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-20 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Any special requests, dietary restrictions, or questions?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-12 py-4 text-white font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Reservation Request
                </button>
              </div>
            </form>
          </GlassSurface>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <GlassSurface className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Help with Your Reservation?</h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-white/80">
                <span>📞 Call us: (555) 123-CATS</span>
                <span>📧 Email: reservations@plaidcatcafe.com</span>
                <span>⏰ Response time: Within 24 hours</span>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>

      {/* GooeyNav Navigation */}
      <GooeyNav
        items={dockItems.map(item => ({
          label: `${item.icon} ${item.label}`,
          to: item.to
        }))}
        initialActiveIndex={7}
      />
    </div>
  );
}

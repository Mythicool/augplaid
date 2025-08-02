import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import Dock from '../components/reactbits/Dock';

export default function MenuPage() {
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

  const menuItems = {
    coffee: [
      { name: "Whiskers Latte", price: "$5.50", description: "Smooth espresso with steamed milk and a hint of vanilla" },
      { name: "Purr-fect Cappuccino", price: "$4.75", description: "Rich espresso topped with velvety foam art" },
      { name: "Cat-puccino", price: "$5.25", description: "Our signature blend with caramel and cinnamon" },
      { name: "Meow Mocha", price: "$5.75", description: "Chocolate and coffee blend that'll make you purr" },
    ],
    pastries: [
      { name: "Paw Print Croissant", price: "$3.50", description: "Buttery croissant shaped like a cute paw print" },
      { name: "Tuna Melt Sandwich", price: "$8.95", description: "Grilled sandwich with tuna, cheese, and fresh herbs" },
      { name: "Kitty Cookies", price: "$2.25", description: "Cat-shaped cookies made with love and organic ingredients" },
      { name: "Fish & Chips", price: "$12.95", description: "Crispy fish with seasoned fries (cat-approved!)" },
    ],
    specials: [
      { name: "Adoption Special", price: "$15.00", description: "Coffee + pastry + $5 donation to cat rescue" },
      { name: "Cat Lover's Combo", price: "$18.50", description: "Any drink + sandwich + 30 minutes of cat playtime" },
      { name: "Plaid Package", price: "$25.00", description: "Full meal + drink + take-home plaid cat toy" },
    ]
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#F59E0B", "#EF4444", "#8B5CF6"]}
        blend={0.2}
        amplitude={0.5}
        speed={0.3}
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

          <h1 className="text-6xl font-bold text-white mb-4 text-center">Cafe Menu</h1>
          <p className="text-white/80 text-xl text-center mb-12 max-w-3xl mx-auto">
            Delicious treats for humans and our feline friends. All proceeds support our cat rescue mission!
          </p>

          {/* Coffee Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">☕ Coffee & Drinks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.coffee.map((item, index) => (
                <GlassSurface key={index} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className="text-lg font-bold text-yellow-300">{item.price}</span>
                  </div>
                  <p className="text-white/70">{item.description}</p>
                </GlassSurface>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🥐 Food & Pastries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.pastries.map((item, index) => (
                <GlassSurface key={index} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className="text-lg font-bold text-yellow-300">{item.price}</span>
                  </div>
                  <p className="text-white/70">{item.description}</p>
                </GlassSurface>
              ))}
            </div>
          </div>

          {/* Specials Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">⭐ Special Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuItems.specials.map((item, index) => (
                <GlassSurface key={index} className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <div className="text-2xl font-bold text-yellow-300 mb-3">{item.price}</div>
                  <p className="text-white/70">{item.description}</p>
                </GlassSurface>
              ))}
            </div>
          </div>

          <div className="text-center text-white/70">
            <p className="text-lg mb-2">🌱 We use organic, locally-sourced ingredients</p>
            <p className="text-lg mb-2">🐱 Cat-safe treats available for our feline friends</p>
            <p className="text-lg">💝 10% of all proceeds go to local cat rescue organizations</p>
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

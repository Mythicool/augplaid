import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import GooeyNav from '../components/reactbits/GooeyNav';
import ShinyText from '../components/reactbits/ShinyText';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('cats');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const categories = [
    { id: 'cats', name: 'Our Cats', icon: '🐱' },
    { id: 'cafe', name: 'Cafe Atmosphere', icon: '☕' },
    { id: 'events', name: 'Events & Activities', icon: '🎉' },
    { id: 'customers', name: 'Happy Moments', icon: '😊' },
  ];

  const galleryImages = {
    cats: [
      { id: 1, src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop&crop=face", alt: "Whiskers enjoying sunlight", caption: "Whiskers loves his afternoon sunbath" },
      { id: 2, src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=600&fit=crop&crop=face", alt: "Luna playing with toys", caption: "Luna's favorite feather toy session" },
      { id: 3, src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&crop=face", alt: "Oliver being adorable", caption: "Oliver's irresistible charm" },
      { id: 4, src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=600&fit=crop&crop=face", alt: "Bella in her favorite spot", caption: "Bella's cozy corner retreat" },
      { id: 5, src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=600&fit=crop&crop=face", alt: "Max exploring", caption: "Max's curious adventures" },
      { id: 6, src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=600&fit=crop&crop=face", alt: "Chloe being elegant", caption: "Chloe's graceful pose" },
      { id: 7, src: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&h=600&fit=crop&crop=face", alt: "Milo's playful moment", caption: "Milo's playful spirit" },
      { id: 8, src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop&crop=face", alt: "Sophie watching", caption: "Sophie's wise observations" },
    ],
    cafe: [
      { id: 9, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop", alt: "Cozy seating area", caption: "Our plaid-themed seating area" },
      { id: 10, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop", alt: "Coffee bar setup", caption: "Artisanal coffee preparation station" },
      { id: 11, src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop", alt: "Reading nook", caption: "Quiet reading corner with feline friends" },
      { id: 12, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=600&fit=crop", alt: "Cat climbing structures", caption: "Custom cat climbing paradise" },
      { id: 13, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop", alt: "Window seating", caption: "Sunny window seats for cats and humans" },
      { id: 14, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop", alt: "Plaid decorations", caption: "Cozy plaid patterns throughout" },
    ],
    events: [
      { id: 15, src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop", alt: "Cat yoga session", caption: "Saturday morning cat yoga class" },
      { id: 16, src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=600&h=600&fit=crop", alt: "Adoption day", caption: "Successful adoption day celebration" },
      { id: 17, src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop", alt: "Paint night", caption: "Plaid & Paws paint night creativity" },
      { id: 18, src: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=600&h=600&fit=crop", alt: "Kitten socialization", caption: "Kitten socialization hour fun" },
      { id: 19, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop", alt: "Coffee cupping", caption: "Wednesday coffee cupping session" },
      { id: 20, src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop", alt: "Community gathering", caption: "Monthly community meetup" },
    ],
    customers: [
      { id: 21, src: "https://images.unsplash.com/photo-1522075469751-3847ae2c9d7c?w=600&h=600&fit=crop", alt: "Happy customer with cat", caption: "Sarah's first meeting with her future cat" },
      { id: 22, src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop", alt: "Family adoption", caption: "The Johnson family's adoption day" },
      { id: 23, src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=600&fit=crop", alt: "Coffee and cats", caption: "Perfect morning: coffee and cat cuddles" },
      { id: 24, src: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=600&fit=crop", alt: "Birthday celebration", caption: "Birthday party with feline entertainment" },
      { id: 25, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", alt: "Reading with cats", caption: "Peaceful reading session with cat companions" },
      { id: 26, src: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=600&h=600&fit=crop", alt: "Volunteer moment", caption: "Volunteer helping with cat care" },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={["#3B82F6", "#8B5CF6", "#EC4899"]}
        blend={0.2}
        amplitude={0.6}
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
          
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <ShinyText text="Photo Gallery" speed={3} />
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Capture the magic of Plaid Cat Cafe through our lens. From adorable cat moments 
              to cozy cafe atmosphere, these photos tell the story of our special community.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white/30 text-white border-2 border-white/50'
                    : 'bg-white/10 text-white/80 border-2 border-white/20 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            layout
          >
            <AnimatePresence>
              {galleryImages[activeCategory as keyof typeof galleryImages].map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="gallery-item cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <GlassSurface className="overflow-hidden rounded-20">
                    <div className="relative group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </GlassSurface>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Section */}
          <GlassSurface className="text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Photo Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-white/80">Photos Captured</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
                <div className="text-white/80">Events Documented</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">200+</div>
                <div className="text-white/80">Happy Adoption Moments</div>
              </div>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-20"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GooeyNav Navigation */}
      <GooeyNav
        items={dockItems.map(item => ({
          label: `${item.icon} ${item.label}`,
          to: item.to
        }))}
        initialActiveIndex={5}
      />
    </div>
  );
}

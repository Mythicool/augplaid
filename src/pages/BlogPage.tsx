import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import GooeyNav from '../components/reactbits/GooeyNav';
import ShinyText from '../components/reactbits/ShinyText';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    { id: 'all', name: 'All Posts', icon: '📝' },
    { id: 'cat-care', name: 'Cat Care', icon: '🐱' },
    { id: 'coffee', name: 'Coffee Tips', icon: '☕' },
    { id: 'adoption', name: 'Adoption Stories', icon: '❤️' },
    { id: 'cafe-news', name: 'Cafe Updates', icon: '📰' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Perfect Pour: Mastering Coffee at Home",
      excerpt: "Learn the secrets behind brewing the perfect cup of coffee with tips from our head barista. From bean selection to brewing techniques, we'll guide you through every step.",
      category: 'coffee',
      author: "Sarah Martinez, Head Barista",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Luna's Journey: From Shy Kitten to Confident Cat",
      excerpt: "Follow Luna's heartwarming transformation from a timid rescue kitten to the confident, playful cat she is today. Her story shows the power of patience and love.",
      category: 'adoption',
      author: "Emma Thompson, Adoption Coordinator",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Understanding Cat Body Language: What Your Feline Friend is Telling You",
      excerpt: "Decode the mysterious world of cat communication. Learn to read tail positions, ear movements, and vocalizations to better understand your feline companion.",
      category: 'cat-care',
      author: "Dr. Michael Chen, Veterinarian",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "New Plaid Collection: Cozy Comfort Meets Cat Style",
      excerpt: "We're excited to announce our new plaid-themed merchandise collection! From cat beds to human apparel, everything features our signature cozy plaid patterns.",
      category: 'cafe-news',
      author: "Lisa Park, Store Manager",
      date: "December 8, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Oliver Finds His Forever Home: An Adoption Success Story",
      excerpt: "After 8 months at our cafe, Oliver has found his perfect match! Read about his journey and the wonderful family who fell in love with his playful personality.",
      category: 'adoption',
      author: "Emma Thompson, Adoption Coordinator",
      date: "December 5, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Creating the Perfect Cat Environment: Tips for New Cat Parents",
      excerpt: "Setting up your home for a new feline friend? Our experts share essential tips for creating a safe, comfortable, and enriching environment for your cat.",
      category: 'cat-care',
      author: "Dr. Michael Chen, Veterinarian",
      date: "December 3, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Coffee Origins Spotlight: Ethiopian Beans and Their Unique Flavors",
      excerpt: "Explore the birthplace of coffee with our deep dive into Ethiopian coffee beans. Discover the unique flavor profiles that make these beans so special.",
      category: 'coffee',
      author: "Sarah Martinez, Head Barista",
      date: "November 30, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Expanding Our Mission: New Partnership with Local Animal Shelters",
      excerpt: "We're thrilled to announce our expanded partnership with three local animal shelters, increasing our capacity to help more cats find loving homes.",
      category: 'cafe-news',
      author: "Jennifer Wilson, Cafe Owner",
      date: "November 28, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=600&h=400&fit=crop"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={["#10B981", "#3B82F6", "#8B5CF6"]}
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
          
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <ShinyText text="Plaid Cat Blog" speed={3} />
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Stories, tips, and updates from our cozy corner of the world. Discover cat care insights, 
              coffee brewing secrets, heartwarming adoption tales, and the latest news from Plaid Cat Cafe.
            </p>
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassSurface className="featured-post p-6 h-full">
                      <div className="featured-badge mb-4">
                        <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-20 mb-4"
                      />
                      <div className="post-meta mb-3">
                        <span className="text-white/60 text-sm">{post.date} • {post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-white/80 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">{post.author}</span>
                        <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-4 py-2 text-white text-sm font-semibold transition-all duration-300">
                          Read More
                        </button>
                      </div>
                    </GlassSurface>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white/30 text-white border-2 border-white/50'
                    : 'bg-white/10 text-white/80 border-2 border-white/20 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassSurface className="blog-post p-6 h-full">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-20 mb-4"
                  />
                  <div className="post-meta mb-3">
                    <span className="text-white/60 text-sm">{post.date} • {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-xs">{post.author}</span>
                    <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-3 py-1 text-white text-xs font-semibold transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </GlassSurface>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <GlassSurface className="text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest blog posts, adoption updates, 
              and special events at Plaid Cat Cafe.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
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
        initialActiveIndex={6}
      />
    </div>
  );
}

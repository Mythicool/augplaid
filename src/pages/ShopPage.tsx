import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import GlassSurface from '../components/reactbits/GlassSurface';
import GooeyNav from '../components/reactbits/GooeyNav';
import ShinyText from '../components/reactbits/ShinyText';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: number]: number}>({});

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
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'coffee', name: 'Coffee & Beans', icon: '☕' },
    { id: 'cat-toys', name: 'Cat Toys', icon: '🧸' },
    { id: 'apparel', name: 'Plaid Apparel', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '🎒' },
    { id: 'gift-cards', name: 'Gift Cards', icon: '🎁' },
  ];

  const products = [
    {
      id: 1,
      name: "Plaid Cat Cafe Signature Blend",
      category: 'coffee',
      price: 18.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      description: "Our house blend coffee beans, roasted to perfection with notes of chocolate and caramel.",
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: "Whiskers' Favorite Feather Wand",
      category: 'cat-toys',
      price: 12.99,
      originalPrice: 15.99,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop",
      description: "Interactive feather toy that drives cats wild. Whiskers approved!",
      featured: false,
      inStock: true
    },
    {
      id: 3,
      name: "Cozy Plaid Cat Hoodie",
      category: 'apparel',
      price: 39.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      description: "Soft, comfortable hoodie featuring our signature plaid pattern.",
      featured: true,
      inStock: true
    },
    {
      id: 4,
      name: "Cat Cafe Gift Card",
      category: 'gift-cards',
      price: 25.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Perfect gift for cat lovers! Valid for food, drinks, and merchandise.",
      featured: false,
      inStock: true
    },
    {
      id: 5,
      name: "Plaid Cat Bed",
      category: 'cat-toys',
      price: 34.99,
      originalPrice: 42.99,
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
      description: "Ultra-soft plaid cat bed that matches our cafe aesthetic.",
      featured: false,
      inStock: true
    },
    {
      id: 6,
      name: "Ethiopian Single Origin",
      category: 'coffee',
      price: 22.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
      description: "Premium Ethiopian coffee beans with bright, fruity notes.",
      featured: false,
      inStock: true
    },
    {
      id: 7,
      name: "Plaid Cat Cafe Tote Bag",
      category: 'accessories',
      price: 16.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      description: "Eco-friendly canvas tote with our logo and plaid accents.",
      featured: false,
      inStock: true
    },
    {
      id: 8,
      name: "Interactive Puzzle Feeder",
      category: 'cat-toys',
      price: 19.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      description: "Mental stimulation toy that makes mealtime fun and engaging.",
      featured: false,
      inStock: false
    },
    {
      id: 9,
      name: "Plaid Pattern Mug",
      category: 'accessories',
      price: 14.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      description: "Ceramic mug featuring our signature plaid design.",
      featured: false,
      inStock: true
    },
    {
      id: 10,
      name: "Cat Lover's T-Shirt",
      category: 'apparel',
      price: 24.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      description: "Soft cotton t-shirt with cute cat graphics and plaid details.",
      featured: false,
      inStock: true
    },
    {
      id: 11,
      name: "$50 Gift Card",
      category: 'gift-cards',
      price: 50.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Generous gift card for the ultimate cat cafe experience.",
      featured: false,
      inStock: true
    },
    {
      id: 12,
      name: "Cold Brew Concentrate",
      category: 'coffee',
      price: 15.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
      description: "Smooth cold brew concentrate, perfect for iced coffee at home.",
      featured: false,
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const featuredProducts = products.filter(product => product.featured);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={["#8B5CF6", "#EC4899", "#F59E0B"]}
        blend={0.2}
        amplitude={0.5}
        speed={0.3}
      />
      
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Link 
              to="/" 
              className="text-white/70 hover:text-white transition-colors text-lg"
            >
              ← Back to Home
            </Link>
            {getCartItemCount() > 0 && (
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white">
                🛒 Cart: {getCartItemCount()} items (${getCartTotal().toFixed(2)})
              </div>
            )}
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <ShinyText text="Plaid Cat Shop" speed={3} />
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Take home a piece of Plaid Cat Cafe! From our signature coffee blends to cozy plaid apparel 
              and cat toys, find the perfect items to extend your cafe experience.
            </p>
          </div>

          {/* Featured Products */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassSurface className="product-card p-6 h-full">
                      <div className="featured-badge mb-4">
                        <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-20 mb-4"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-white/80 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="price">
                          <span className="text-yellow-300 text-xl font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-white/60 text-sm line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className={`text-sm ${product.inStock ? 'text-green-300' : 'text-red-300'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                          product.inStock
                            ? 'bg-white/20 hover:bg-white/30 border border-white/30 text-white hover:scale-105'
                            : 'bg-white/10 border border-white/20 text-white/50 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <GlassSurface className="product-card p-4 h-full">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-20 mb-3"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-white/80 text-xs mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <div className="price">
                      <span className="text-yellow-300 text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-white/60 text-xs line-through ml-1">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs ${product.inStock ? 'text-green-300' : 'text-red-300'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${
                      product.inStock
                        ? 'bg-white/20 hover:bg-white/30 border border-white/30 text-white hover:scale-105'
                        : 'bg-white/10 border border-white/20 text-white/50 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </GlassSurface>
              </motion.div>
            ))}
          </div>

          {/* Shipping Info */}
          <GlassSurface className="text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Shipping & Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div>
                <div className="text-2xl mb-2">🚚</div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm">On orders over $50</p>
              </div>
              <div>
                <div className="text-2xl mb-2">↩️</div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm">30-day return policy</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💝</div>
                <h3 className="font-semibold mb-2">Gift Wrapping</h3>
                <p className="text-sm">Available for all items</p>
              </div>
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
        initialActiveIndex={8}
      />
    </div>
  );
}

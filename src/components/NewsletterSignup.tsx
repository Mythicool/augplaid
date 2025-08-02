import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './reactbits/GlassSurface';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <GlassSurface className="p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Get the latest updates on new cats, special events, adoption success stories, 
              and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
              />
              <motion.button 
                type="submit"
                disabled={isLoading || !email}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-300 hover:bg-yellow-400 disabled:bg-yellow-300/50 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </form>
            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy! 🐱
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Family!</h2>
            <p className="text-white/80 text-lg">
              Thank you for subscribing! You'll receive our next newsletter with updates 
              on our adorable cats and upcoming events.
            </p>
          </motion.div>
        )}
      </motion.div>
    </GlassSurface>
  );
}

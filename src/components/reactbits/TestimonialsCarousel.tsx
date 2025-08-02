import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassSurface from './GlassSurface';
import './TestimonialsCarousel.css';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
  catAdopted?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  className = ''
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className={`testimonials-carousel ${className}`}>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={goToPrevious}>
          ←
        </button>
        
        <div className="testimonial-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-slide"
            >
              <GlassSurface className="testimonial-card">
                <div className="testimonial-content">
                  <div className="rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                      {testimonials[currentIndex].catAdopted && (
                        <p className="cat-adopted">
                          Adopted: {testimonials[currentIndex].catAdopted}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-button next" onClick={goToNext}>
          →
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

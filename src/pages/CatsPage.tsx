import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CircularGallery from '../components/reactbits/CircularGallery';
import Aurora from '../components/reactbits/Aurora';
import Dock from '../components/reactbits/Dock';
import GlassSurface from '../components/reactbits/GlassSurface';
import TiltedCard from '../components/reactbits/TiltedCard';
import LazyImage from '../components/LazyImage';
import CatMatchQuiz from '../components/CatMatchQuiz';
import { CAT_PROFILES, DOCK_ITEMS, COLOR_SCHEMES, type CatProfile } from '../constants';

export default function CatsPage() {
  const [selectedCat, setSelectedCat] = useState<CatProfile | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'kittens' | 'seniors'>('all');

  // Transform cat data for CircularGallery
  const circularGalleryCats = CAT_PROFILES.map(cat => ({
    image: cat.image,
    text: `${cat.name} - ${cat.age} years old, ${cat.description.split('.')[0]}.`
  }));

  // Filter cats based on selected filter
  const filteredCats = CAT_PROFILES.filter(cat => {
    switch (filter) {
      case 'available':
        return cat.isAvailable;
      case 'kittens':
        return cat.age <= 2;
      case 'seniors':
        return cat.age >= 7;
      default:
        return true;
    }
  });

  const handleCatClick = (cat: CatProfile) => {
    setSelectedCat(cat);
  };

  const closeCatModal = () => {
    setSelectedCat(null);
  };

  const renderCatOverlay = (cat: CatProfile) => (
    <div className="cat-overlay-content">
      <h3>{cat.name}</h3>
      <div className="cat-age">{cat.age} years old</div>
      <div className="cat-description">{cat.description}</div>
      <div className="personality-tags">
        {cat.personality.map((trait, index) => (
          <span key={index} className="personality-tag">
            {trait}
          </span>
        ))}
      </div>
      <div className="cat-adoption-fee">Adoption Fee: ${cat.adoptionFee}</div>
      <div className="cat-availability">
        {cat.isAvailable ? '✅ Available for Adoption' : '❤️ Already Adopted'}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={COLOR_SCHEMES.cats}
        blend={0.2}
        amplitude={0.6}
        speed={0.4}
      />

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors text-lg"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4 text-center">Meet Our Cats</h1>
          <p className="text-white/80 text-xl text-center mb-12 max-w-3xl mx-auto">
            Our rescue cats are looking for their forever homes. Each one has a unique personality
            and story. Come visit us to meet these wonderful companions!
          </p>

          {/* Circular Gallery Overview */}
          <div className="h-96 mb-12">
            <CircularGallery
              items={circularGalleryCats}
              bend={2}
              textColor="#ffffff"
              borderRadius={0.1}
            />
          </div>

          {/* Filter Buttons */}
          <GlassSurface className="p-6 mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-yellow-300 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                All Cats ({CAT_PROFILES.length})
              </button>
              <button
                onClick={() => setFilter('available')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'available'
                    ? 'bg-yellow-300 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Available ({CAT_PROFILES.filter(c => c.isAvailable).length})
              </button>
              <button
                onClick={() => setFilter('kittens')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'kittens'
                    ? 'bg-yellow-300 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Kittens ({CAT_PROFILES.filter(c => c.age <= 2).length})
              </button>
              <button
                onClick={() => setFilter('seniors')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'seniors'
                    ? 'bg-yellow-300 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Seniors ({CAT_PROFILES.filter(c => c.age >= 7).length})
              </button>
            </div>
          </GlassSurface>

          {/* TiltedCard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {filteredCats.map((cat) => (
              <div key={cat.id} className="flex justify-center">
                <TiltedCard
                  imageSrc={cat.image}
                  altText={`${cat.name} - Available for adoption`}
                  captionText={`${cat.name} • ${cat.age} years old`}
                  containerHeight="350px"
                  containerWidth="280px"
                  imageHeight="350px"
                  imageWidth="280px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  overlayContent={renderCatOverlay(cat)}
                  displayOverlayContent={true}
                  onClick={() => handleCatClick(cat)}
                  showTooltip={true}
                />
              </div>
            ))}
          </div>

          {/* Adoption Process */}
          <GlassSurface className="p-8 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Adoption Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">👋</div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Visit & Meet</h3>
                <p className="text-white/80 text-sm">Spend time with our cats and find your perfect match</p>
              </div>
              <div>
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Application</h3>
                <p className="text-white/80 text-sm">Fill out our simple adoption application</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Home Check</h3>
                <p className="text-white/80 text-sm">Quick visit to ensure a safe environment</p>
              </div>
              <div>
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-xl font-semibold text-white mb-2">4. Take Home</h3>
                <p className="text-white/80 text-sm">Welcome your new family member home!</p>
              </div>
            </div>
          </GlassSurface>

          {/* Cat Match Quiz */}
          <div className="mt-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Not Sure Which Cat is Right for You?</h2>
            <CatMatchQuiz />
          </div>

          <div className="text-center text-white/70 mt-12">
            <p className="text-lg mb-4">🏠 All our cats are spayed/neutered, vaccinated, and microchipped</p>
            <p className="text-lg mb-4">💝 Adoption fees: $75-$150 (includes medical care and supplies)</p>
            <p className="text-lg mb-4">📞 Call us at (555) 123-CATS to schedule a meet & greet</p>
            <div className="flex gap-4 justify-center mt-6">
              <Link
                to="/reservations"
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-6 py-3 text-white font-semibold transition-all duration-300"
              >
                Schedule a Visit
              </Link>
              <Link
                to="/events"
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300"
              >
                Adoption Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cat Detail Modal */}
      {selectedCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <GlassSurface className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedCat.name}</h2>
                <button
                  onClick={closeCatModal}
                  className="text-white/70 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <LazyImage
                    src={selectedCat.image}
                    alt={selectedCat.name}
                    className="w-full h-80 rounded-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">About {selectedCat.name}</h3>
                    <p className="text-white/80">{selectedCat.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Details</h4>
                    <div className="space-y-2 text-white/80">
                      <p>Age: {selectedCat.age} years old</p>
                      <p>Adoption Fee: ${selectedCat.adoptionFee}</p>
                      <p>Status: {selectedCat.isAvailable ? 'Available' : 'Adopted'}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Personality</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCat.personality.map((trait, index) => (
                        <span
                          key={index}
                          className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Good With</h4>
                    <div className="space-y-1 text-white/80">
                      <p>Kids: {selectedCat.goodWithKids ? '✅ Yes' : '❌ No'}</p>
                      <p>Other Cats: {selectedCat.goodWithOtherCats ? '✅ Yes' : '❌ No'}</p>
                      <p>Dogs: {selectedCat.goodWithDogs ? '✅ Yes' : '❌ No'}</p>
                    </div>
                  </div>

                  {selectedCat.isAvailable && (
                    <div className="pt-4">
                      <Link
                        to="/reservations"
                        className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300 inline-block"
                        onClick={closeCatModal}
                      >
                        Schedule a Meet & Greet
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </GlassSurface>
        </div>
      )}

      {/* Dock Navigation */}
      <Dock
        items={DOCK_ITEMS}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

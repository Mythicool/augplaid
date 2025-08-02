import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassSurface from './reactbits/GlassSurface';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

interface CatMatch {
  name: string;
  image: string;
  description: string;
  personality: string[];
  matchPercentage: number;
}

export default function CatMatchQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResult, setShowResult] = useState(false);
  const [catMatch, setCatMatch] = useState<CatMatch | null>(null);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What's your living situation?",
      options: [
        { text: "Apartment", value: "apartment" },
        { text: "House with yard", value: "house" },
        { text: "Small space", value: "small" },
        { text: "Large home", value: "large" }
      ]
    },
    {
      id: 2,
      question: "How active are you?",
      options: [
        { text: "Very active, love to play", value: "active" },
        { text: "Moderately active", value: "moderate" },
        { text: "Prefer quiet activities", value: "quiet" },
        { text: "Low energy, love to relax", value: "low" }
      ]
    },
    {
      id: 3,
      question: "Do you have other pets?",
      options: [
        { text: "Yes, cats", value: "cats" },
        { text: "Yes, dogs", value: "dogs" },
        { text: "Yes, other pets", value: "other" },
        { text: "No other pets", value: "none" }
      ]
    },
    {
      id: 4,
      question: "What age cat interests you most?",
      options: [
        { text: "Kitten (under 1 year)", value: "kitten" },
        { text: "Young adult (1-3 years)", value: "young" },
        { text: "Adult (3-7 years)", value: "adult" },
        { text: "Senior (7+ years)", value: "senior" }
      ]
    },
    {
      id: 5,
      question: "How much time can you dedicate to your cat daily?",
      options: [
        { text: "Several hours of active play", value: "lots" },
        { text: "1-2 hours of interaction", value: "moderate" },
        { text: "30 minutes to 1 hour", value: "some" },
        { text: "Prefer independent cats", value: "little" }
      ]
    }
  ];

  const catProfiles: CatMatch[] = [
    {
      name: "Oliver",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
      description: "A playful young cat who loves interactive toys and gets along great with other cats.",
      personality: ["Playful", "Social", "Energetic"],
      matchPercentage: 95
    },
    {
      name: "Whiskers",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
      description: "A gentle, calm cat who enjoys quiet companionship and peaceful environments.",
      personality: ["Gentle", "Calm", "Affectionate"],
      matchPercentage: 92
    },
    {
      name: "Luna",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&crop=face",
      description: "An adventurous cat who loves to explore and play, perfect for active households.",
      personality: ["Adventurous", "Curious", "Active"],
      matchPercentage: 88
    },
    {
      name: "Sophie",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=face",
      description: "A wise senior cat who enjoys quiet moments and gentle affection.",
      personality: ["Wise", "Gentle", "Independent"],
      matchPercentage: 90
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate match
      calculateMatch(newAnswers);
    }
  };

  const calculateMatch = (finalAnswers: {[key: number]: string}) => {
    // Simple matching logic based on answers
    let bestMatch = catProfiles[0];
    
    // Logic to determine best match based on answers
    if (finalAnswers[1] === 'active' && finalAnswers[4] === 'lots') {
      bestMatch = catProfiles.find(cat => cat.name === 'Oliver') || catProfiles[0];
    } else if (finalAnswers[1] === 'quiet' && finalAnswers[3] === 'senior') {
      bestMatch = catProfiles.find(cat => cat.name === 'Sophie') || catProfiles[3];
    } else if (finalAnswers[1] === 'moderate' && finalAnswers[2] === 'none') {
      bestMatch = catProfiles.find(cat => cat.name === 'Whiskers') || catProfiles[1];
    } else {
      bestMatch = catProfiles.find(cat => cat.name === 'Luna') || catProfiles[2];
    }

    setCatMatch(bestMatch);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setCatMatch(null);
  };

  return (
    <GlassSurface className="p-8 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Find Your Perfect Cat Match</h2>
              <p className="text-white/80">Question {currentQuestion + 1} of {questions.length}</p>
              <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                <div 
                  className="bg-yellow-300 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-20 text-white transition-all duration-300"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Your Perfect Match!</h2>
            {catMatch && (
              <div>
                <img 
                  src={catMatch.image} 
                  alt={catMatch.name}
                  className="w-48 h-48 object-cover rounded-20 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">{catMatch.name}</h3>
                <div className="text-4xl font-bold text-white mb-4">{catMatch.matchPercentage}% Match!</div>
                <p className="text-white/80 mb-4 leading-relaxed">{catMatch.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {catMatch.personality.map((trait, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-6 py-3 text-white font-semibold transition-all duration-300"
                  >
                    Take Quiz Again
                  </button>
                  <button className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300">
                    Meet {catMatch.name}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </GlassSurface>
  );
}

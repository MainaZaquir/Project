import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles } from 'lucide-react';
import ConfettiAnimation from './ConfettiAnimation';

const MobileOptimizedHero: React.FC = () => {
  const [confettiActive, setConfettiActive] = useState(false);
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  // Generate floating balloons on component mount
  useEffect(() => {
    const balloonColors = ['#EF4444', '#EAB308', '#F97316', '#10B981', '#3B82F6'];
    const balloonData = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10, // Keep balloons within 10-90% of screen width
      delay: Math.random() * 3,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)]
    }));
    setBalloons(balloonData);

    // Auto-trigger confetti after a short delay
    const timer = setTimeout(() => {
      setConfettiActive(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setConfettiActive(false);
    setTimeout(() => setConfettiActive(true), 100);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Confetti Animation */}
      <ConfettiAnimation
        isActive={confettiActive}
        particleCount={60}
        duration={4000}
        onComplete={() => setConfettiActive(false)}
      />

      {/* Floating Balloons - Responsive positioning */}
      {balloons.map((balloon, index) => (
        <div
          key={balloon.id}
          className="absolute animate-float hidden sm:block"
          style={{
            left: `${balloon.left}%`,
            top: `${10 + index * 15}%`,
            animationDelay: `${balloon.delay}s`
          }}
        >
          <div 
            className="w-6 h-8 sm:w-8 sm:h-10 lg:w-10 lg:h-12 rounded-full relative shadow-lg"
            style={{ backgroundColor: balloon.color }}
          >
            <div className="absolute bottom-0 left-1/2 w-px h-8 sm:h-10 lg:h-12 bg-gray-600 transform -translate-x-1/2"></div>
          </div>
        </div>
      ))}

      {/* Main Content - Mobile Optimized */}
      <div className="text-center z-10 max-w-4xl mx-auto w-full">
        {/* Icon Section */}
        <div className="inline-flex items-center mb-4 sm:mb-6 text-orange-600">
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Main Title - Responsive Typography */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-orange-800 mb-3 sm:mb-4 leading-tight">
          Happy 55th Birthday,
          <span className="block text-red-600 mt-1 sm:mt-2">Dad!</span>
        </h1>

        {/* Subtitle - Mobile Optimized */}
        <p className="text-lg sm:text-xl md:text-2xl text-orange-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Celebrating an amazing father, mentor, and friend. Here's to another year of wonderful memories!
        </p>

        {/* Action Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center text-orange-600">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-red-500" />
            <span className="text-base sm:text-lg font-medium">With all our love</span>
          </div>
          <div className="hidden sm:block text-orange-400">•</div>
          <div className="text-orange-600 text-base sm:text-lg">
            Your Family ❤️
          </div>
        </div>

        {/* Interactive Confetti Button */}
        <button
          onClick={triggerConfetti}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation"
          aria-label="Trigger celebration confetti"
        >
          🎉 Celebrate! 🎉
        </button>
      </div>
    </section>
  );
};

export default MobileOptimizedHero;
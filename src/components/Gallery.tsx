import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f9a8d4'/%3E%3Cstop offset='100%25' style='stop-color:%23c084fc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='24' opacity='0.9'%3EAdd your photo%3C/text%3E%3C/svg%3E";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  const getSrc = (src: string) => (failedUrls.has(src) ? PLACEHOLDER_SVG : src);
  const onError = (src: string) => setFailedUrls((prev) => new Set(prev).add(src));

  // Local images: place your files in public/images/ (photo-1.jpg through photo-6.jpg)
  const images = [
    { src: '/images/Image-2.jpeg', alt: 'Beautiful portrait', caption: 'Your radiant smile' },
    { src: '/images/Image-1.jpeg', alt: 'Romantic moment', caption: 'Our precious moments' },
    { src: '/images/Image-3.jpeg', alt: 'Beautiful flowers', caption: 'Face card never declines' },
    { src: '/images/Image-4.jpeg', alt: 'Starry night', caption: 'You shine brighter than stars' },
    { src: '/images/Image-5.jpeg', alt: 'Sunset sky', caption: 'Beautiful like a flowers in bloom' },
    { src: '/images/Image-6.jpeg', alt: 'Sweet memory', caption: 'Forever in my heart' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative safe-x">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Heart className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 sm:mb-12 px-1">
          Beautiful Memories 💝
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-pink-200">
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
              <img
                src={getSrc(images[currentImage].src)}
                alt={images[currentImage].alt}
                onError={() => onError(images[currentImage].src)}
                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-purple-700 mb-4 sm:mb-6 animate-fadeIn px-1">
              {images[currentImage].caption}
            </p>

            {/* Navigation - touch-friendly buttons */}
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={prevImage}
                className="group flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 active:scale-95 text-white p-3 rounded-full transition-all duration-300 shadow-lg touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </button>

              {/* Dots */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 min-w-0">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`min-w-[10px] min-h-[10px] w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentImage
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                        : 'bg-pink-300 hover:bg-pink-400 active:bg-pink-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="group flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 active:scale-95 text-white p-3 rounded-full transition-all duration-300 shadow-lg touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 ${
                index === currentImage ? 'ring-2 sm:ring-4 ring-pink-400 scale-[1.02] sm:scale-105' : 'hover:ring-2 hover:ring-purple-300'
              }`}
            >
              <img
                src={getSrc(image.src)}
                alt={image.alt}
                onError={() => onError(image.src)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
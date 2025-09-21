import { useState } from 'react';
import { Heart, Camera, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import MobileOptimizedHero from './components/MobileOptimizedHero';
import Dad1 from './assets/dad-1.jpg';
import Dad2 from './assets/dad-2.jpg';
import Dad3 from './assets/dad-3.jpg';
import Dad4 from './assets/dad-4.jpg';
import Dad5 from './assets/dad-5.jpg';
import Dad6 from './assets/dad-6.jpg';
import Dad7 from './assets/dad-7.jpg';
import Dad8 from './assets/dad-8.jpg';
import Dad9 from './assets/dad-9.jpg';


// Photo Gallery Component
const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Sample photos - replace these URLs with actual family photos
  const photos = [
    { url: Dad1, caption: 'Chilling at home' },
    { url: Dad2, caption: 'Graduation Time' },
    { url: Dad3, caption: 'Family Time' },
    { url: Dad4, caption: 'Work day' },
    { url: Dad5, caption: 'Cool Wife, good Vibes' },
    { url: Dad6, caption: '3 Men Army' },
    { url: Dad7, caption: 'Dad being Dad' },
    { url: Dad8, caption: 'Special day out' },
    { url: Dad9, caption: '55 years strong!' },
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center mb-4 text-orange-600">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-3 sm:mb-4">
            Cherished Memories
          </h2>
          <p className="text-base sm:text-lg text-orange-700 max-w-2xl mx-auto px-2">
            A collection of beautiful moments we've shared together over the years
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
              onClick={() => {
                setCurrentPhoto(index);
                setLightboxOpen(true);
              }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <p className="text-xs sm:text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={prevPhoto}
            className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-lg transition-colors duration-200 touch-manipulation text-sm sm:text-base"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Previous
          </button>
          <span className="text-orange-700 font-medium text-sm sm:text-base order-first sm:order-none">
            {currentPhoto + 1} of {photos.length}
          </span>
          <button
            onClick={nextPhoto}
            className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-lg transition-colors duration-200 touch-manipulation text-sm sm:text-base"
          >
            Next
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 touch-manipulation">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-orange-300 transition-colors duration-200 touch-manipulation p-2"
              aria-label="Close photo"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <img
              src={photos[currentPhoto].url}
              alt={photos[currentPhoto].caption}
              className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-3 sm:mt-4 text-base sm:text-lg px-2">
              {photos[currentPhoto].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

// Messages Section Component
const MessagesSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-b from-red-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center mb-4 text-red-600">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-3 sm:mb-4">
            Messages from Your Children
          </h2>
          <p className="text-base sm:text-lg text-red-700 px-2">
            Heartfelt words from those who love you most
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Message from Child 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">V</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Vincent</h3>
            </div>
            <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
              "Dad, you've been my hero since day one. Your wisdom, patience, and unconditional love have shaped who I am today. Thank you for all the late-night talks, the encouraging words, and for always believing in me. Happy 51st birthday to the most amazing father! Here's to many more years of your dad jokes and amazing Ugali. Love you to the moon and back!"
            </blockquote>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <span className="text-orange-600 font-medium text-sm sm:text-base">💕 With endless love</span>
            </div>
          </div>

          {/* Message from Child 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">Z</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Zaquir</h3>
            </div>
            <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
              "Happy 55th Birthday, Dad!You’ve shown me that true strength is gentle, that kindness is power, and that being genuine is the greatest legacy a man can leave behind. From cheering me on in the small moments to guiding me through the big ones, you’ve been a steady hand and an open heart. Your love has shaped the person I’m becoming. You’re not just my father you’re my teacher and my role model. May this year bring you the same joy, peace, and love you’ve always given us. Here’s to you, Dad today and always."
            </blockquote>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <span className="text-orange-600 font-medium text-sm sm:text-base">🎉 Happy Birthday!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Interactive Memories Section Component
const InteractiveMemories = () => {
  const [revealed, setRevealed] = useState(false);

  const memories = [
    "Your incredible ability to fix absolutely anything around the house",
    "That Saturday Ugali Dinner that made weekends magical",
    "The way you still get excited about your favorite sports team like a kid",
    "Your legendary barbecue skills that bring us together",
    "How you never missed a school play, game, or important moment in our lives",
    "Your terrible but loveable dad jokes that somehow always make us smile",
    "The way you taught us to drive, and face our fears"
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center mb-4 text-orange-600">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-3 sm:mb-4">
            Why We Love You
          </h2>
          <p className="text-base sm:text-lg text-orange-700 mb-6 sm:mb-8 px-2">
            Click the button below to reveal all the reasons you're amazing!
          </p>
        </div>

        {!revealed ? (
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => setRevealed(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 active:from-orange-700 active:to-red-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation"
            >
              ✨ Reveal Our Favorite Memories ✨
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{memory}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border-2 border-orange-200">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-3 sm:mb-4">
                🎂 Here's to 55 Amazing Years! 🎂
              </h3>
              <p className="text-base sm:text-lg text-orange-700 leading-relaxed">
                Thank you for being the incredible father, role model, and friend you are. 
                We're so grateful for all the love, laughter, and wisdom you've shared with us. 
                Here's to many more years of making wonderful memories together!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <MobileOptimizedHero />
      <PhotoGallery />
      <MessagesSection />
      <InteractiveMemories />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-800 to-red-800 text-white py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg mb-2">Made with ❤️ by your loving family</p>
          <p className="text-orange-200 text-sm sm:text-base">Happy 55th Birthday, Dad! 🎉</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
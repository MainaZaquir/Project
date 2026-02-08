import { Heart, Star } from 'lucide-react';

export default function MessageSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-100/90 via-pink-50 to-indigo-100/90 relative overflow-hidden safe-x">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" />
            ) : (
              <Star className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8 sm:mb-12 md:mb-14">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
            <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-pink-500 animate-pulse flex-shrink-0" fill="currentColor" />
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              From My Heart
            </h2>
            <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-pink-500 animate-pulse flex-shrink-0" fill="currentColor" />
          </div>
        </div>

        <div className="relative">
          {/* Soft glow behind card - reduced on mobile */}
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-pink-300/20 sm:from-pink-300/30 via-purple-300/20 sm:via-purple-300/30 to-indigo-300/20 sm:to-indigo-300/30 rounded-2xl sm:rounded-[2rem] blur-lg sm:blur-xl" />
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-14 shadow-xl shadow-pink-200/30 border border-pink-100/80 overflow-hidden">
            {/* Decorative corner accents - hidden on very small to avoid clutter */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-5 h-5 sm:w-8 sm:h-8 border-l-2 border-t-2 border-pink-200/70 rounded-tl-lg sm:rounded-tl-xl" />
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-5 h-5 sm:w-8 sm:h-8 border-r-2 border-t-2 border-pink-200/70 rounded-tr-lg sm:rounded-tr-xl" />
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-5 h-5 sm:w-8 sm:h-8 border-l-2 border-b-2 border-pink-200/70 rounded-bl-lg sm:rounded-bl-xl" />
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-5 h-5 sm:w-8 sm:h-8 border-r-2 border-b-2 border-pink-200/70 rounded-br-lg sm:rounded-br-xl" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300/80" fill="currentColor" />
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300/80" fill="currentColor" />
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300/80" fill="currentColor" />
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300/80" fill="currentColor" />
            </div>

            <div className="space-y-5 sm:space-y-7 text-left">
              <p className="text-base sm:text-lg md:text-xl leading-loose text-gray-700/95 font-medium italic break-words">
                "Every day with you is a blessing I could never take for granted honestly, you're the kind of woman who makes life feel softer just by existing. You deserve joy in its purest form, sweetness without limits, and every bit of magic the universe has tucked away for someone as kind, funny, brilliant, and absolutely breathtaking as you."
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-loose text-gray-700/95 font-medium italic break-words">
                "I'm grateful for every moment, every laugh, every quiet second you share with me. Happy Birthday, princess… Masha'Allah."
              </p>

              <div className="relative pt-6 sm:pt-8 mt-6 sm:mt-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/80 to-transparent" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-5 break-words">
                  Happy Birthday, Winslet! 🥂🎉
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-loose text-gray-700/95 font-medium italic mb-4 sm:mb-5 break-words">
                  "On this beautiful day, may your heart feel feather-light, your spirit rise above every worry, and your world overflow with endless barakah. As you step into another year of grace, may Allah (SWT) guide you with clarity, surround you with peace, and open doors you didn't even know were meant for you."
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-loose text-gray-700/95 font-medium italic mb-4 sm:mb-5 break-words">
                  "May every whispered du'a fly straight to the heavens and return carrying blessings far greater than anything you've ever dreamed. Insha'Allah, this new chapter will be bold, fearless, and full of victories that remind you exactly who you are strong enough to move mountains, soft enough to heal hearts, and radiant enough to brighten every room you walk into 🌹"
                </p>

                <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent break-words">
                  "Happy Birthday once more, Winslet. May this year be your most extraordinary, most luminous, and most unforgettable chapter yet. ✨"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signature hearts */}
        <div className="flex justify-center mt-6 sm:mt-10 gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="animate-bounce text-pink-400/90"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '2.2s',
              }}
            >
              <Heart className="w-4 h-4" fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
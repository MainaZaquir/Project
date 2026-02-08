import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden safe-x">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent"></div>
      
      {/* Floating Hearts */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Heart className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="mb-6 sm:mb-8 animate-bounce">
          <Heart className="w-14 h-14 sm:w-20 sm:h-20 text-pink-500 mx-auto mb-2 sm:mb-4" fill="currentColor" />
        </div>

        <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse leading-tight px-1">
          Happy Birthday, my Princess 💖
        </h1>

        <div className="relative px-1">
          <p className="text-lg min-[400px]:text-xl sm:text-2xl lg:text-3xl text-purple-800 font-medium mb-6 sm:mb-8 animate-fadeIn leading-relaxed">
            You make the world brighter just by being in it
          </p>
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
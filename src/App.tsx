import Hero from './components/Hero';
import Gallery from './components/Gallery';
import MessageSection from './components/MessageSection';
import FloatingElements from './components/FloatingElements';
import ConfettiAnimation from './components/ConfettiAnimation';

function App() {
  return (
    <div className="relative min-h-screen min-h-[100dvh] bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 overflow-x-hidden">
      {/* Background Elements */}
      <FloatingElements />
      <ConfettiAnimation />
      
      {/* Main Content */}
      <Hero />
      <Gallery />
      <MessageSection />
      
      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 text-center bg-gradient-to-r from-pink-300 to-purple-300 safe-bottom safe-x">
        <p className="text-purple-800 font-semibold text-base sm:text-lg">
          With all my love, always 💖
        </p>
      </footer>
    </div>
  );
}

export default App;
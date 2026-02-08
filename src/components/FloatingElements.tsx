import { Heart, Star, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: 'heart' | 'star' | 'sparkle';
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const count = isMobile ? 10 : 25;
      const newElements: FloatingElement[] = [];
      const types: ('heart' | 'star' | 'sparkle')[] = ['heart', 'star', 'sparkle'];

      for (let i = 0; i < count; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 4,
          type: types[Math.floor(Math.random() * types.length)]
        });
      }
      setElements(newElements);
    };

    createElements();
    const mq = window.matchMedia('(max-width: 639px)');
    const handleChange = () => {
      createElements();
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const renderIcon = (type: string, size: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const sizeClass = isMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5';

    switch (type) {
      case 'heart':
        return <Heart className={sizeClass} fill="currentColor" />;
      case 'star':
        return <Star className={sizeClass} fill="currentColor" />;
      case 'sparkle':
        return <Sparkles className={sizeClass} fill="currentColor" />;
      default:
        return <Heart className={sizeClass} fill="currentColor" />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-pink-300 opacity-60 animate-bounce"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {renderIcon(element.type, element.size)}
        </div>
      ))}
    </div>
  );
}
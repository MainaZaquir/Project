import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
}

export default function ConfettiAnimation() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 640;
    const count = isMobile ? 40 : 100;

    const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444'];
    const newConfetti: ConfettiPiece[] = [];

    for (let i = 0; i < count; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * width,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: isMobile ? Math.random() * 4 + 3 : Math.random() * 6 + 4,
        velocityX: (Math.random() - 0.5) * 2,
        velocityY: Math.random() * 3 + 2,
        rotationSpeed: (Math.random() - 0.5) * 6,
      });
    }

    setConfetti(newConfetti);

    const animateConfetti = () => {
      setConfetti(prev => prev.map(piece => ({
        ...piece,
        x: piece.x + piece.velocityX,
        y: piece.y + piece.velocityY,
        rotation: piece.rotation + piece.rotationSpeed,
        velocityY: piece.velocityY + 0.1, // gravity
      })).filter(piece => piece.y < height + 50));
    };

    const interval = setInterval(animateConfetti, 16);
    const timeout = setTimeout(() => {
      setIsActive(false);
      clearInterval(interval);
    }, isMobile ? 5000 : 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive]);

  if (!isActive && confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 opacity-90"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}
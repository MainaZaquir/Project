import React, { useState, useEffect, useCallback } from 'react';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  gravity: number;
  life: number;
  maxLife: number;
}

interface ConfettiAnimationProps {
  isActive: boolean;
  particleCount?: number;
  duration?: number;
  colors?: string[];
  onComplete?: () => void;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({
  isActive,
  particleCount = 50,
  duration = 3000,
  colors = ['#F97316', '#EAB308', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6'],
  onComplete
}) => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const [animationId, setAnimationId] = useState<number | null>(null);

  // Create initial particles
  const createParticles = useCallback(() => {
    const newParticles: ConfettiParticle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        vx: (Math.random() - 0.5) * 4, // Horizontal velocity
        vy: Math.random() * 3 + 2, // Vertical velocity
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.1,
        life: duration,
        maxLife: duration
      });
    }
    
    return newParticles;
  }, [particleCount, colors, duration]);

  // Animation loop
  const animate = useCallback(() => {
    setParticles(prevParticles => {
      const updatedParticles = prevParticles.map(particle => {
        // Update physics
        const newVy = particle.vy + particle.gravity;
        const newX = particle.x + particle.vx;
        const newY = particle.y + newVy;
        const newRotation = particle.rotation + particle.rotationSpeed;
        const newLife = particle.life - 16; // Assuming 60fps

        return {
          ...particle,
          x: newX,
          y: newY,
          vy: newVy,
          rotation: newRotation,
          life: newLife
        };
      }).filter(particle => 
        particle.life > 0 && 
        particle.y < window.innerHeight + 50 &&
        particle.x > -50 && 
        particle.x < window.innerWidth + 50
      );

      // Continue animation if particles exist
      if (updatedParticles.length > 0) {
        const id = requestAnimationFrame(animate);
        setAnimationId(id);
      } else {
        setAnimationId(null);
        onComplete?.();
      }

      return updatedParticles;
    });
  }, [onComplete]);

  // Start animation when active
  useEffect(() => {
    if (isActive && particles.length === 0) {
      const newParticles = createParticles();
      setParticles(newParticles);
      
      // Start animation loop
      const id = requestAnimationFrame(animate);
      setAnimationId(id);
    }

    // Cleanup on unmount or when inactive
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        setAnimationId(null);
      }
    };
  }, [isActive, particles.length, createParticles, animate, animationId]);

  // Stop animation when not active
  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      if (animationId) {
        cancelAnimationFrame(animationId);
        setAnimationId(null);
      }
    }
  }, [isActive, animationId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(particle => {
        const opacity = particle.life / particle.maxLife;
        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: opacity,
              transform: `rotate(${particle.rotation}deg)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              willChange: 'transform, opacity'
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiAnimation;
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  onCTAClick: () => void;
}

export default function HeroCarousel({ images, onCTAClick }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Virtual Assistant — Operations, Research & Systems Support
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
          Esther supports founders, teams, and growing businesses by building systems,
          organizing workflows, and providing structured research and administrative support.
        </p>

        <button
          onClick={onCTAClick}
          className="group bg-purple-500 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          View Case Studies
          <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}

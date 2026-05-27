import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowLongRight } from 'react-icons/hi2';
import { HERO_SLIDES } from '../../data/home';

const AUTOPLAY_MS = 6000;

const Hero = () => {
  const slides = HERO_SLIDES;
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [hasMultipleSlides, slides.length]);

  const goToSlide = (index) => setActiveIndex(index);

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-primary-dark"
      aria-label="Hero"
    >
      <div className="relative h-[68vh] min-h-[460px] max-h-[760px] md:h-[78vh] w-full">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full w-full">
          <div className="container max-w-7xl mx-auto h-full flex flex-col items-center pt-16 md:pt-20 lg:pt-24 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeSlide.id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                className="max-w-3xl"
              >
                <motion.h1
                  className="font-heading font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {activeSlide.title}
                </motion.h1>
                <motion.p
                  className="mt-3 md:mt-4 text-white/95 text-base sm:text-lg md:text-xl font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  {activeSlide.subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {hasMultipleSlides && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[160px] md:bottom-[180px] z-20 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-accent'
                    : 'w-3 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute left-0 right-0 bottom-6 md:bottom-10 z-20"
        >
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-md shadow-md">
              <a
                href={activeSlide.cta.href}
                className="group inline-flex items-center justify-center gap-3 bg-primary-dark text-white font-semibold px-8 py-5 md:py-6 md:min-w-[220px] tracking-wide transition-colors duration-200 hover:bg-primary"
              >
                <span>{activeSlide.cta.label}</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-flex"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <HiArrowLongRight className="w-6 h-6" />
                </motion.span>
              </a>

              <div className="flex-1 bg-primary text-white px-6 md:px-8 py-5 md:py-6 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeSlide.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm md:text-[15px] leading-relaxed text-white/95"
                  >
                    {activeSlide.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
  
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { INDUSTRIES } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const useItemsPerView = () => {
  const [n, setN] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setN(4);
      else if (w >= 768) setN(3);
      else if (w >= 640) setN(2);
      else setN(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return n;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const cardSlideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

const Industries = () => {
  const { eyebrow, title, description, items } = INDUSTRIES;
  const itemsPerView = useItemsPerView();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visible = useMemo(() => {
    return Array.from({ length: itemsPerView }, (_, i) => {
      const realIdx = (index + i) % items.length;
      const cycle = Math.floor((index + i) / items.length);
      return {
        ...items[realIdx],
        _key: `${items[realIdx].id}-${cycle}`,
      };
    });
  }, [index, itemsPerView, items]);

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  };

  return (
    <section
      id="industries"
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
      aria-label="Industries we serve"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading font-medium text-black text-2xl md:text-3xl  leading-[1.2]  mx-auto"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-[#6C6C6C] text-sm md:text-[15px] leading-relaxed "
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous industries"
            className="absolute left-1 md:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-primary shadow-lg ring-1 ring-border flex items-center justify-center hover:bg-primary hover:text-white hover:ring-primary transition-colors"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next industries"
            className="absolute right-1 md:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-primary shadow-lg ring-1 ring-border flex items-center justify-center hover:bg-primary hover:text-white hover:ring-primary transition-colors"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-12 md:mx-14 lg:mx-16">
            <div
              className="grid gap-4 md:gap-5"
              style={{
                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
              }}
            >
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                {visible.map((item) => (
                  <motion.article
                    key={item._key}
                    custom={direction}
                    variants={cardSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: EASE }}
                    whileHover={{ y: -6 }}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        draggable={false}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: EASE }}
                      />
                    </div>
                    <div className="mt-3 bg-[#E9FBD7] rounded-md py-3 px-2 text-center transition-colors duration-300 group-hover:bg-secondary">
                      <h3 className="font-heading font-semibold text-[#6C6C6C] text-sm md:text-[15px] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

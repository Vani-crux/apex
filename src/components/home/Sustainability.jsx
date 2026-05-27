import React from 'react';
import { motion } from 'framer-motion';
import { SUSTAINABILITY } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 18 },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const SustainabilityCard = ({ card }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.3, ease: EASE }}
    className="group flex flex-col"
  >
    <div className="relative overflow-hidden  shadow-lg aspect-[4/3]">
      <motion.img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        draggable={false}
      />
    </div>
    <h3 className="mt-4 font-heading font-bold !text-white text-lg  leading-tight">
      {card.title}
    </h3>
    <p className="mt-2 text-white text-sm md:text-[15px] leading-relaxed">
      {card.description}
    </p>
  </motion.article>
);

const Sustainability = () => {
  const { background, eyebrow, title, description, cards } = SUSTAINABILITY;

  return (
    <section
      id="sustainability"
      className="relative overflow-hidden"
      aria-label="Sustainability"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[70%] bg-gradient-to-r from-primary-dark/95 via-primary/75 to-transparent"
        aria-hidden="true"
      />

      <div className="relative container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="w-full lg:w-[70%] lg:max-w-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-2xl"
        >
          <motion.span
            variants={pillVariants}
            className="inline-flex items-center  bg-[#3A7B01] px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 font-heading font-medium !text-white text-2xl md:text-3xl  leading-[1.15]"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-white text-sm md:text-base leading-relaxed "
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <SustainabilityCard key={card.id} card={card} />
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

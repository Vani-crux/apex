import React from 'react';
import { motion } from 'framer-motion';
import { WHY_PANLAND } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const WhyPanlandCard = ({ item, layout = 'imageBottom' }) => {
  const imageBlock = (
    <div className="px-5 md:px-6 py-3 md:py-6">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.55, ease: EASE }}
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="p-5 md:p-6">
      <h3 className="font-heading font-bold text-primary text-sm md:text-[15px] leading-tight">
        {item.title}
      </h3>
      <p className="mt-2  text-xs md:text-[13px] leading-relaxed max-w-[18rem]">
        {item.description}
      </p>
    </div>
  );

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="bg-white shadow-sm overflow-hidden"
    >
      {layout === 'imageTop' ? imageBlock : textBlock}
      {layout === 'imageTop' ? textBlock : imageBlock}
    </motion.article>
  );
};

const WhyPanland = () => {
  const { eyebrow, title, items } = WHY_PANLAND;

  return (
    <section
      id="why-us"
      className="relative bg-[#EEFFF9] py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-label="Why Panland Logistics"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-heading font-bold text-black text-2xl md:text-3xl leading-[1.15]"
          >
            {title}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
        >
          {items.map((item, idx) => (
            <WhyPanlandCard
              key={item.id}
              item={item}
              layout={idx % 2 === 1 ? 'imageTop' : 'imageBottom'}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPanland;


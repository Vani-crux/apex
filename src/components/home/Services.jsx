import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 18,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const cardContentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const imageWrapVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const AnimatedWords = ({ text, className }) => {
  const words = text.split(' ');
  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

const ServiceCard = ({ item }) => {
  const isImageBottom = item.layout === 'imageBottom';

  const imageBlock = (
    <motion.div
      variants={imageWrapVariants}
      className="relative aspect-[16/10] overflow-hidden"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        draggable={false}
        className="absolute inset-0 h-full w-full px-3 py-3 object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </motion.div>
  );

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="group relative overflow-hidden rounded-md shadow-md bg-primary transition-colors duration-300 flex flex-col h-full"
    >
      <motion.div
        variants={cardContentContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col h-full"
      >
        {!isImageBottom && imageBlock}

        <motion.div
          variants={cardContentContainer}
          className="flex-1 p-5 md:p-6"
        >
          <motion.h3
            variants={fadeUp}
            className="!text-white font-heading font-bold text-xl md:text-2xl leading-tight"
          >
            {item.title}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-[12px] md:text-[13px] leading-relaxed text-white/85"
          >
            {item.description}
          </motion.p>
        </motion.div>

        {isImageBottom && imageBlock}
      </motion.div>
    </motion.article>
  );
};

const Services = () => {
  const { bg, eyebrow, title, description, items } = SERVICES;

  return (
    <section
      id="services"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-label="Our services"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: EASE }}
      />

      <div className="relative container max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -10% 0px' }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-card-hover rounded-md shadow-md p-6 md:p-8 mb-8 md:mb-10"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <motion.span
                  variants={pillVariants}
                  className="inline-flex items-center self-start rounded-md bg-accent px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
                >
                  {eyebrow}
                </motion.span>
                <AnimatedWords
                  text={title}
                  className="font-heading font-extrabold text-primary text-2xl md:text-3xl lg:text-[2rem] leading-[1.2]"
                />
              </div>
              <motion.div
                variants={fadeRight}
                className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8"
              >
                <p className="text-ink/80 text-[13px] md:text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

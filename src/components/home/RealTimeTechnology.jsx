import React from 'react';
import { motion } from 'framer-motion';
import { REAL_TIME_TECHNOLOGY } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
    transition: { duration: 0.65, ease: EASE },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
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

const featuresContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const FeatureItem = ({ text }) => (
  <motion.li variants={featureItemVariants} className="flex gap-4 md:gap-5">
    <span
      className="shrink-0 w-1 md:w-1.5 rounded-full bg-primary self-stretch min-h-[2.75rem]"
      aria-hidden="true"
    />
    <p className="text-[#4A4A4A] text-sm md:text-[15px] leading-relaxed font-medium pt-0.5">
      {text}
    </p>
  </motion.li>
);

const RealTimeTechnology = () => {
  const { eyebrow, title, description, rightImage, leftImage, features } =
    REAL_TIME_TECHNOLOGY;

  return (
    <section
      id="insights"
      className="relative bg-white  overflow-hidden"
      aria-label="Technology and visibility"
    >
      <div className="container max-w-7xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center pb-10 lg:pb:0 lg:pr-12 xl:pr-14"
          >
            <motion.span
              variants={pillVariants}
              className="my-3 inline-flex self-start items-center bg-primary px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
            >
              {eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-heading font-bold text-black text-2xl md:text-3xl lg:text-[2rem] leading-[1.2] max-w-md"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[#6C6C6C] text-sm md:text-[15px] leading-relaxed max-w-md"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative w-full overflow-hidden  shadow-md"
          >
            <motion.img
              variants={scaleIn}
              src={rightImage}
              alt="Logistics professional reviewing real-time supply chain data on a tablet at a container port"
              className="w-full h-full min-h-[280px] md:min-h-[320px] object-cover object-center"
              draggable={false}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative w-full overflow-hidden  shadow-md"
          >
            <motion.img
              variants={scaleIn}
              src={leftImage}
              alt="Cargo aircraft being loaded with freight at an airfield"
              className="w-full aspect-[16/10] md:aspect-[16/9] object-cover object-center"
              draggable={false}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center pt-10 lg:pt-5 lg:pl-12 xl:pl-14"
          >
            <motion.ul
              variants={featuresContainerVariants}
              className="flex flex-col gap-5 md:gap-6 list-none m-0 p-0"
            >
              {features.map((feature) => (
                <FeatureItem key={feature} text={feature} />
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeTechnology;

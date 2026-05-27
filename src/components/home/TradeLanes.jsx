import React from 'react';
import { motion } from 'framer-motion';
import { TRADE_LANES } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
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

const pillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 18 },
  },
};

const routesContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const routeBlockVariants = {
  hidden: { opacity: 0, x: -24, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const mapColumnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const mapVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

const captionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: 0.15 },
  },
};

const DestinationLabel = ({ destination }) => {
  if (Array.isArray(destination)) {
    return (
      <>
        {destination.map((part) => (
          <span key={part.label} style={{ color: part.color }}>
            {part.label}
          </span>
        ))}
      </>
    );
  }
  return (
    <span style={{ color: destination.color }}>{destination.label}</span>
  );
};

const RouteBlock = ({ route }) => (
  <motion.div
    variants={routeBlockVariants}
    whileHover={{
      y: -4,
      scale: 1.01,
      boxShadow: '0 8px 24px rgba(40, 85, 0, 0.12)',
    }}
    transition={{ duration: 0.25, ease: EASE }}
    className="rounded-md px-4 py-3.5 md:px-5 md:py-4 cursor-default"
    style={{ backgroundColor: route.bg }}
  >
    <p className="font-heading font-bold text-sm md:text-[15px] leading-snug">
      <span style={{ color: route.origin.color }}>{route.origin.label}</span>
      <span className="mx-1.5 text-[#5C5C5C] font-semibold tracking-tight" aria-hidden="true">
        {route.arrows}
      </span>
      <DestinationLabel destination={route.destination} />
    </p>
    <p className="mt-1.5 text-[#6C6C6C] text-xs md:text-[13px] leading-relaxed">
      {route.commodities}
    </p>
  </motion.div>
);

const TradeLanes = () => {
  const { background, map, eyebrow, title, caption, routes } = TRADE_LANES;

  return (
    <section
      id="routes"
      className="relative overflow-hidden"
      aria-label="Priority trade lanes"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <div className="container mx-auto max-w-[1440px] relative">
        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,35%)_minmax(0,65%)] min-h-0">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="my-[3rem] bg-white rounded-tr-[2.5rem] md:rounded-tr-[3rem] lg:rounded-tr-[3.5rem] px-6 py-8 shadow-sm z-10"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.span
                variants={pillVariants}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
              >
                {eyebrow}
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 font-heading font-bold text-black text-xl md:text-2xl lg:text-[1.65rem] leading-[1.25] max-w-lg"
              >
                {title}
              </motion.h2>

              <motion.div
                variants={routesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-3.5"
              >
                {routes.map((route) => (
                  <RouteBlock key={route.id} route={route} />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={mapColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative flex flex-col justify-center px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12"
          >
            <motion.img
              variants={mapVariants}
              src={map}
              alt="World map showing ApexTrans priority trade lanes between South Asia, Europe, North America, Southeast Asia, and the Middle East"
              className="w-full h-auto object-contain"
              draggable={false}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASE }}
            />
            <motion.p
              variants={captionVariants}
              className="mt-4 md:mt-6 text-[#6C6C6C] text-xs md:text-[16px] leading-relaxed max-w-3xl"
            >
              {caption}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeLanes;

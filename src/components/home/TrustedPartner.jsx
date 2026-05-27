import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_PARTNER } from '../../data/home';

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

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const TrustedPartner = () => {
  const { eyebrow, title, description, mission, valuesLabel, values } =
    TRUSTED_PARTNER;

  return (
    <section
      id="about"
      className="relative bg-white py-16 md:py-20 lg:py-24"
      aria-label="About ApexTrans Logistics"
    >
      <div className="container max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <motion.div variants={itemVariants} className="max-w-xl">
            <span className="inline-flex items-center rounded-md border border-primary/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>

            <h2 className="mt-5 font-heading font-extrabold text-primary text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15]">
              {title}
            </h2>

            <p className="mt-5 text-ink/80 text-[15px] md:text-base leading-relaxed">
              {description}
            </p>

            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-md bg-secondary/60 border border-accent/30 p-5 md:p-6"
            >
              <div className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-white font-semibold text-sm shadow-sm">
                {mission.title}
              </div>
              <p className="mt-4 text-ink/85 text-[14px] md:text-[15px] leading-relaxed">
                <span className="font-bold text-primary">
                  {mission.highlight}
                </span>{' '}
                {mission.body}
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="flex items-stretch">
              <div className="flex items-center justify-center shrink-0 self-stretch bg-[#3A7B01]  px-3 md:px-5">
                <span
                  className="!text-white font-heading font-extrabold text-xl md:text-2xl lg:text-[1.75rem] tracking-wide uppercase whitespace-nowrap"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}
                >
                  {valuesLabel}
                </span>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-2 md:gap-3 flex-1 bg-[#E8FFD4]  p-2 md:p-3"
              >
                {values.map((value) => (
                  <motion.article
                    key={value.id}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    className="group relative overflow-hidden rounded-md aspect-[4/3] shadow-sm cursor-pointer"
                  >
                    <img
                      src={value.image}
                      alt={value.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/20 to-primary-dark/0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/70 transition-colors duration-300" />

                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                      <h3 className="!text-white font-heading font-bold text-base md:text-lg leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                        {value.title}
                      </h3>
                      <div className="overflow-hidden grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                        <p className="min-h-0 mt-0 group-hover:mt-1 text-[11px] md:text-[12px] leading-snug text-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartner;

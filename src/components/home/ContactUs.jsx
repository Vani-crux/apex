import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_US } from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
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

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const inputClass =
  'h-10 w-full bg-white text-[#6C6C6C] text-[15px] px-4 outline-none border border-transparent focus:border-accent';

const ContactUs = () => {
  const { eyebrow, title, formTitle, description, image, fields } = CONTACT_US;

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-label="Contact us"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,45%)_minmax(0,65%)] items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-[#E8FFD4] p-5 md:p-6 lg:p-5 xl:p-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center  bg-primary px-4 py-2 text-white text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap"
            >
              {eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-heading font-medium text-black text-3xl leading-[1.18]"
            >
              {title}
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-6 bg-primary p-5 md:p-6 text-white">
              <h3 className="!text-white font-heading text-3xl font-bold leading-tight">
                {formTitle}
              </h3>
              <p className="mt-2 text-white/90 text-sm md:text-[18px] leading-relaxed">
                {description}
              </p>

              <form className="mt-6 space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input className={inputClass} type="text" placeholder="Name" />
                  <input className={inputClass} type="text" placeholder="Company Name" />
                  <input className={inputClass} type="email" placeholder="Email ID" />
                  <input className={inputClass} type="tel" placeholder="Phone No." />
                </div>

                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Service Type
                  </option>
                  {fields.serviceTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Origin
                    </option>
                    {fields.origins.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Destination
                    </option>
                    {fields.destinations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  className="w-full min-h-[98px] bg-white text-ink/80 text-[15px] px-4 py-3 outline-none border border-transparent focus:border-accent resize-none"
                  placeholder="Cargo Details"
                />

                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-8 py-3.5 text-[15px]"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  Get a Quote
                  <span aria-hidden="true">↪</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden shadow-sm"
          >
            <img
              src={image}
              alt="Happy customer holding parcel boxes"
              className="w-full h-full min-h-[420px] md:min-h-[520px] object-cover"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


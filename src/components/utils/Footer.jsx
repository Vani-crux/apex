import React from 'react';
import { motion } from 'framer-motion';
import {
  BRAND,
  FOOTER_INFO_CARDS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIALS,
  FOOTER_COPYRIGHT,
} from '../../data/home';

const Footer = () => {
  const year = new Date().getFullYear();
  const EASE = [0.22, 0.61, 0.36, 1];

  return (
    <motion.footer
      className="bg-[#EEFFF9] pt-12 pb-6 text-ink"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, staggerChildren: 0.08 },
        },
      }}
    >
      <div className="container">
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <img
            src={`${process.env.PUBLIC_URL}${BRAND.logo}`}
            alt=""
            className="h-16 md:h-20 w-auto object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#3A7B01] font-heading font-extrabold text-primary text-xl md:text-2xl lg:text-[28px] tracking-wide uppercase leading-tight m-0">
              {BRAND.name}
            </h2>
            <p className="text-[#3A7B01] font-heading font-extrabold text-primary text-xl md:text-2xl lg:text-[28px] tracking-wide uppercase leading-tight m-0">
              {BRAND.subname}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {FOOTER_INFO_CARDS.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white border border-border/60 rounded-md px-6 py-5 text-center min-h-[140px] flex flex-col items-center justify-start"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: EASE }}
              whileHover={{ y: -4 }}
            >
              <h4 className="font-heading font-bold text-accent-dark text-[15px] mb-3 m-0">
                {card.title}
              </h4>
              <div className="text-[13px] leading-[1.7] text-ink/80 space-y-0">
                {card.lines.map((line) => (
                  <p key={line} className="m-0">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ink/70 pt-2"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="m-0 flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>
              &copy; {year} {FOOTER_COPYRIGHT}
            </span>
            <span className="flex items-center gap-2">
              {FOOTER_LEGAL_LINKS.map((legal, index) => (
                <React.Fragment key={legal.label}>
                  <a
                    href={legal.href}
                    className="hover:text-accent-dark transition-colors"
                  >
                    {legal.label}
                  </a>
                  {index < FOOTER_LEGAL_LINKS.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </span>
          </p>

          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {FOOTER_SOCIALS.map((social) => (
              <li key={social.label}>
                <motion.a
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 text-ink  transition-colors"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  {social.icon}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import {
  BRAND,
  FOOTER_CONTACT,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIALS,
  FOOTER_COPYRIGHT,
} from '../../data/home';

const EASE = [0.22, 0.61, 0.36, 1];

const iconBadgeClass =
  'flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-sm flex items-center justify-center';

const cardClass =
  'bg-white rounded-xl px-5 py-5 md:px-6 md:py-6 shadow-md shadow-primary/5 ring-1 ring-primary/[0.07]';

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-primary/10">
    <div className={iconBadgeClass} aria-hidden="true">
      <Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
    </div>
    <h3 className="font-heading font-semibold text-primary text-[15px] m-0">{title}</h3>
  </div>
);

const splitLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const contactLinkClass =
  'font-semibold text-ink text-sm md:text-[15px] no-underline hover:text-primary transition-colors';

const Footer = () => {
  const year = new Date().getFullYear();
  const { officeHours, phone, phoneHref, email, emailHref, address } = FOOTER_CONTACT;

  const addressLines = splitLines(address);
  const addressMid = Math.ceil(addressLines.length / 2);
  const addressCol1 = addressLines.slice(0, addressMid);
  const addressCol2 = addressLines.slice(addressMid);

  return (
    <motion.footer
      className="relative overflow-hidden bg-gradient-to-b from-[#f2fbf5] via-[#EEFFF9] to-[#e4f7eb] pt-12 pb-0 text-ink"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, staggerChildren: 0.08 },
        },
      }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-4 mb-9 md:mb-10"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <img
            src={`${process.env.PUBLIC_URL}${BRAND.logo}`}
            alt=""
            className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h2 className="font-heading font-extrabold text-primary text-xl md:text-2xl lg:text-[26px] tracking-wide uppercase leading-tight m-0">
              {BRAND.name}
            </h2>
            <p className="font-heading font-extrabold text-primary text-xl md:text-2xl lg:text-[26px] tracking-wide uppercase leading-tight m-0">
              {BRAND.subname}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-10 items-stretch"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Contact — left */}
          <motion.div
            className={`${cardClass} lg:col-span-5 flex flex-col`}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: EASE }}
            whileHover={{ y: -3 }}
          >
            <SectionHeader icon={FiClock} title="Office Timing" />
            <div className="w-full space-y-1 text-sm md:text-[15px] leading-relaxed text-ink/80">
              {officeHours.map((line) => (
                <p key={line} className="m-0">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 rounded-lg bg-[#EEFFF9]/80 px-4 py-3.5 ring-1 ring-primary/5">
                  <div className={iconBadgeClass} aria-hidden="true">
                    <FiPhone className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </div>
                  <a href={phoneHref} className={contactLinkClass}>
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-[#EEFFF9]/80 px-4 py-3.5 ring-1 ring-primary/5 min-w-0">
                  <div className={iconBadgeClass} aria-hidden="true">
                    <FiMail className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </div>
                  <a href={emailHref} className={`${contactLinkClass} break-all`}>
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address — right, wider */}
          <motion.div
            className={`${cardClass} lg:col-span-7 flex flex-col w-full`}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: EASE }}
            whileHover={{ y: -3 }}
          >
            <SectionHeader icon={FiMapPin} title="Head Office" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 flex-1 text-sm md:text-[15px] leading-[1.75] text-ink/80">
              <div className="space-y-1">
                {addressCol1.map((line) => (
                  <p key={line} className={`m-0 ${line === addressCol1[0] ? 'font-semibold text-ink/90' : ''}`}>
                    {line}
                  </p>
                ))}
              </div>
              <div className="space-y-1">
                {addressCol2.map((line) => (
                  <p key={line} className="m-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-t-2xl bg-gradient-to-r from-primary via-primary to-primary-dark px-5 py-5 md:px-8 md:py-5 shadow-lg shadow-primary/20"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] md:text-[13px]">
            <p className="m-0 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-white/85">
              <span className="text-white font-medium">
                &copy; {year} {FOOTER_COPYRIGHT}
              </span>
              <span className="hidden sm:block w-px h-3.5 bg-white/25" aria-hidden="true" />
              <span className="flex items-center gap-2.5">
                {FOOTER_LEGAL_LINKS.map((legal, index) => (
                  <React.Fragment key={legal.label}>
                    <a
                      href={legal.href}
                      className="text-white/75 no-underline hover:text-accent transition-colors"
                    >
                      {legal.label}
                    </a>
                    {index < FOOTER_LEGAL_LINKS.length - 1 && (
                      <span className="text-white/35" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </span>
            </p>

            <ul className="flex items-center gap-2 list-none m-0 p-0">
              {FOOTER_SOCIALS.map((social) => (
                <li key={social.label}>
                  <motion.a
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-accent hover:text-primary transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: EASE }}
                  >
                    {social.icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="h-5" aria-hidden="true" />
      </div>
    </motion.footer>
  );
};

export default Footer;

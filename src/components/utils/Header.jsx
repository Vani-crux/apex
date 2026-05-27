import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND, HEADER_CTA, NAV_LINKS } from '../../data/home';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  const openMega = (id) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveMenuId(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenuId(null), 120);
  };

  const handleNavClick = () => {
    closeMobileMenu();
    setActiveMenuId(null);
  };

  const toggleMobileMenu = () => setMenuOpen((open) => !open);

  const headerPadding = scrolled ? 'py-2' : 'py-3';
  const headerShadow = scrolled
    ? 'shadow-sm'
    : 'shadow-[0_1px_0_rgba(31,74,44,0.06)]';

  const EASE = [0.22, 0.61, 0.36, 1];

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-[100] bg-white transition-[padding,box-shadow] duration-300 ${headerPadding} ${headerShadow}`}
      onMouseLeave={scheduleClose}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container max-w-7xl mx-auto flex items-center gap-6">
        <motion.a
          href={BRAND.homeHref}
          className="inline-flex items-center gap-2.5 shrink-0"
          onClick={closeMobileMenu}
          aria-label={`${BRAND.name} home`}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <img
            src={`${process.env.PUBLIC_URL}${BRAND.logo}`}
            alt=""
            className="block h-[60px] w-auto object-contain"
          />
        </motion.a>

        <nav
          className={`flex-1 ${
            menuOpen
              ? 'max-md:absolute max-md:left-0 max-md:right-0 max-md:top-full max-md:bg-white max-md:shadow-md max-md:border-t max-md:border-border max-md:max-h-[70vh] max-md:overflow-y-auto'
              : 'max-md:absolute max-md:left-0 max-md:right-0 max-md:top-full max-md:bg-white max-md:shadow-md max-md:border-t max-md:border-border max-md:max-h-0 max-md:overflow-hidden'
          } max-md:transition-[max-height] max-md:duration-300`}
          aria-label="Primary"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 lg:gap-3 xl:gap-4 max-md:gap-0 list-none m-0 p-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeMenuId === link.id;
              return (
                <li
                  key={link.id}
                  className="relative max-md:border-b max-md:border-border max-md:last:border-b-0"
                  onMouseEnter={() => openMega(link.id)}
                >
                  <motion.a
                    href={link.href}
                    onClick={handleNavClick}
                    onFocus={() => openMega(link.id)}
                    className={`inline-block whitespace-nowrap text-[12px] xl:text-[13px] py-4 px-1 max-md:block max-md:py-3.5 max-md:px-6 max-md:text-sm leading-tight relative transition-colors duration-200 ${
                      isActive
                        ? 'text-accent-dark'
                        : 'text-primary hover:text-accent-dark'
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, ease: EASE }}
                  >
                    {link.label}
                  </motion.a>
                  <span
                    className={`max-md:hidden absolute left-0 right-0 bottom-1 mx-auto h-0.5 bg-accent transition-all duration-200 ${
                      isActive ? 'w-3/4' : 'w-0'
                    }`}
                  />

                  {isActive && link.submenu && link.submenu.length > 0 && (
                    <div
                      className="hidden md:block absolute  -translate-x-1/2 top-full w-[200px] bg-white border border-border rounded-md shadow-mega animate-megaFadeIn z-[120]"
                      onMouseEnter={() => openMega(link.id)}
                      onMouseLeave={scheduleClose}
                      role="region"
                      aria-label={`${link.label} submenu`}
                    >
                      <div className="px-4 py-3">
                       
                        <ul className="list-none m-0 mt-3 p-0 flex flex-col gap-3">
                          {link.submenu.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={() => setActiveMenuId(null)}
                                className="block text-[12px] text-ink hover:text-accent-dark transition-colors duration-200 leading-snug"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <motion.a
          href={HEADER_CTA.href}
          className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-accent text-white font-bold text-[13px] rounded-md whitespace-nowrap shrink-0 tracking-wide transition-all duration-200 hover:bg-accent-dark hover:text-white hover:-translate-y-px hover:shadow-cta"
          onClick={() => setActiveMenuId(null)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          {HEADER_CTA.label}
        </motion.a>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2 bg-transparent ml-auto"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMobileMenu}
        >
          <span
            className={`block h-0.5 w-full bg-primary rounded-sm transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-primary rounded-sm transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-primary rounded-sm transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

    </motion.header>
  );
};

export default Header;

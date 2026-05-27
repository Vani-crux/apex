import React from 'react';
import Header from './components/utils/Header';
import Hero from './components/home/Hero';
import TrustedPartner from './components/home/TrustedPartner';
import Services from './components/home/Services';
import Industries from './components/home/Industries';
import TradeLanes from './components/home/TradeLanes';
import RealTimeTechnology from './components/home/RealTimeTechnology';
import Sustainability from './components/home/Sustainability';
import WhyPanland from './components/home/WhyPanland';
import ContactUs from './components/home/ContactUs';
import Footer from './components/utils/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-1 pt-[88px] md:pt-[96px]">
        <Hero />
        <TrustedPartner />
        <Services />
        <Industries />
        <TradeLanes />
        <RealTimeTechnology />
        <Sustainability />
        <WhyPanland />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;

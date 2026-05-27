import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import HeroBanner from '../assets/home/Banner.webp';
import ExcellenceImg from '../assets/home/trustedPartner/exellence.webp';
import CreativityImg from '../assets/home/trustedPartner/creativity.webp';
import IntegrityImg from '../assets/home/trustedPartner/Intrigrity.webp';
import TeamworkImg from '../assets/home/trustedPartner/Teamwork.webp';
import ServicesBg from '../assets/home/services/Services-bg.webp';
import AirFreightImg from '../assets/home/services/Air Freight.webp';
import SeaFreightImg from '../assets/home/services/SeaFreight.webp';
import GroundFreightImg from '../assets/home/services/GroundFreight.webp';
import CustomsBrokerageImg from '../assets/home/services/CustomsBrokerage.webp';
import WarehousingImg from '../assets/home/services/Warehousing&Distribution.webp';
import ProjectCargoImg from '../assets/home/services/ProjectCargo.webp';
import AutomotiveImg from '../assets/home/Industry/Automative.webp';
import PharmaImg from '../assets/home/Industry/Pharma.webp';
import IndustrialImg from '../assets/home/Industry/Industrial.webp';
import TextileImg from '../assets/home/Industry/textile.webp';
import TradeBackground from '../assets/home/Trade-background.webp';
import TradeMap from '../assets/home/trade-mapp.webp';
import RealTimeRightImage from '../assets/home/real-time-rightImage.webp';
import RealTimeLeftImage from '../assets/home/real-time-leftImage.webp';
import SustainabilityBg from '../assets/home/Sustainability/Sustainability-bg.webp';
import OptimalLoadsImg from '../assets/home/Sustainability/optimal.webp';
import PaperLightImg from '../assets/home/Sustainability/paper-light.webp';
import AdvisoryServiceImg from '../assets/home/Sustainability/advisory-service.webp';
import WhyPersonalisedImg from '../assets/home/WhyPanlandLogistics/personalised.webp';
import WhyCompetitiveImg from '../assets/home/WhyPanlandLogistics/competative.webp';
import WhyGlobalReachImg from '../assets/home/WhyPanlandLogistics/globalreach.webp';
import WhyFutureReadyImg from '../assets/home/WhyPanlandLogistics/futureready.webp';
import ContactUsImg from '../assets/home/contactUs.webp';

export const BRAND = {
  name: 'ApexTrans Logistics',
  subname: 'India Private Limited',
  logo: '/logo.png',
  homeHref: '#home',
};

export const HEADER_CTA = {
  label: 'Get a Quote!',
  href: '#contact',
};
export const NAV_LINKS = [
  {
    id: 'about',
    href: '#about',
    label: 'About Us',
  },
  {
    id: 'services',
    href: '#services',
    label: 'Services',
    submenu: [
      { href: '#services', label: 'Air Freight' },
      { href: '#services', label: 'Sea Freight' },
      { href: '#services', label: 'Ground Freight' },
    ],
  },
  {
    id: 'trade-lanes',
    href: '#routes',
    label: 'Priority Trade Lanes',
    submenu: [
      { href: '#routes', label: 'Asia-Pacific' },
      { href: '#routes', label: 'Trans-Atlantic' },
      { href: '#routes', label: 'Middle East & Africa' },
      { href: '#routes', label: 'Americas' },
    ],
  },
  {
    id: 'industries',
    href: '#industries',
    label: 'Industries We Serve',
    submenu: [
      { href: '#industries', label: 'Automotive' },
      { href: '#industries', label: 'Life Sciences' },
    ],
  },
  {
    id: 'technology',
    href: '#insights',
    label: 'Technology & Visibility',
    submenu: [{ href: '#insights', label: 'Real-Time Tracking' }],
  },
  {
    id: 'track',
    href: '#contact',
    label: 'Track Your Shipment',
  },
  {
    id: 'sustainability',
    href: '#sustainability',
    label: 'Sustainability',
    submenu: [
      { href: '#sustainability', label: 'Green Operations' },
      { href: '#sustainability', label: 'Electric Fleet' },
      { href: '#sustainability', label: 'ESG Report' },
    ],
  },
  {
    id: 'why-us',
    href: '#why-us',
    label: 'Why Choose Us',
  },
  {
    id: 'contact',
    href: '#contact',
    label: 'Contact Us',
  },
];

export const HERO_SLIDES = [
  {
    id: 'global-markets',
    image: HeroBanner,
    title: 'Your bridge to global markets',
    subtitle: 'reliable, efficient, strategic',
    description:
      'ApexTrans Logistics empowers businesses with end-to-end logistics solutions, covering sea, air, and ground freight, streamlined customs clearance, and real-time supply chain visibility. We deliver reliability, efficiency, and strategic value to keep your operations moving without disruption.',
    cta: {
      label: 'Get a Quote',
      href: '#contact',
    },
  },
];

export const TRUSTED_PARTNER = {
  eyebrow: 'About ApexTrans Logistics',
  title: 'A trusted partner for exporters and importers',
  description:
    'At ApexTrans Logistics, we go beyond traditional freight forwarding by delivering end-to-end logistics solutions that connect businesses to every corner of the globe. Backed by advanced technology, a forward-thinking approach, and a dedicated team of professionals, we are your one-stop partner for building smarter, seamless, and more resilient supply chains.',
  mission: {
    title: 'Our Mission',
    highlight: 'Our mission',
    body: 'is to empower global trade by providing innovative and cost-efficient logistics solutions, while upholding the highest standards of operational excellence, transparency, and customer satisfaction.',
  },
  valuesLabel: 'Our Values',
  values: [
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'Striving for the highest quality in service and operations.',
      image: ExcellenceImg,
    },
    {
      id: 'creativity',
      title: 'Creativity',
      description: 'Driving innovation to simplify and accelerate trade.',
      image: CreativityImg,
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description:
        'Operating with transparency, compliance, and accountability.',
      image: IntegrityImg,
    },
    {
      id: 'teamwork',
      title: 'Teamwork',
      description: 'Collaborating to create shared success.',
      image: TeamworkImg,
    },
  ],
};


export const SERVICES = {
  bg: ServicesBg,
  eyebrow: 'Our Services',
  title: 'One partner. every route. total confidence.',
  description:
    'From factory floor to foreign shore, ApexTrans Logistics delivers end-to-end logistics solutions designed to meet the needs of growing and mid-sized businesses. With a strong global network, advanced technology, and trusted expertise, we move your cargo seamlessly across air, sea, ground, and beyond.',
  items: [
    {
      id: 'air-freight',
      title: 'Air Freight',
      description:
        'Swift, adaptable, and dependable, our global air freight solutions handle time-critical cargo with guaranteed access to aircraft capacity worldwide. We ensure your shipments arrive exactly when needed through services like consolidation, temperature-sensitive handling, and customs clearance.',
      image: AirFreightImg,
      layout: 'imageTop',
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      description:
        'The cost-efficient backbone of global trade. With strong carrier partnerships and optimized routing, our ocean freight services balance pricing, transit time, and reliability. We provide flexible, integrated, and fully compliant shipping solutions worldwide.',
      image: SeaFreightImg,
      layout: 'imageBottom',
    },
    {
      id: 'ground-freight',
      title: 'Ground Freight',
      description:
        'The most vital mode of transport. Through our premium global partner network, we offer safe, reliable, and efficient road transport. With strict safety standards, white-glove handling, and optimized space utilization, we ensure smooth and timely deliveries every time.',
      image: GroundFreightImg,
      layout: 'imageTop',
    },
    {
      id: 'customs-brokerage',
      title: 'Customs Brokerage',
      description:
        'Simplifying compliance at every step. Our experts manage documentation, HS codes, and regulatory checks to help you avoid costly delays, ensuring seamless and stress-free clearance across borders.',
      image: CustomsBrokerageImg,
      layout: 'imageTop',
    },
    {
      id: 'warehousing-distribution',
      title: 'Warehousing & Distribution',
      description:
        'Secure, scalable, and efficient. Our facilities offer flexible storage solutions with value-added services such as cross-docking, temporary storage, and just-in-time dispatch — helping you keep your supply chain agile, lean, and responsive.',
      image: WarehousingImg,
      layout: 'imageBottom',
    },
    {
      id: 'project-cargo',
      title: 'Project Cargo',
      description:
        'Specialized solutions for oversized and complex shipments. From multimodal planning and route surveys to risk-managed handling, we deliver safe and reliable movement of heavy machinery, engineering goods, and out-of-gauge cargo.',
      image: ProjectCargoImg,
      layout: 'imageTop',
    },
  ],
};
export const INDUSTRIES = {
  eyebrow: 'Industries We Serve',
  title:
    'Every industry has unique requirements. We deliver solutions that meet them all.',
  description:
    'We provide customized logistics solutions designed for industries that demand speed, accuracy, and regulatory compliance.',
  items: [
    {
      id: 'automotive',
      title: 'Automotive',
      image: AutomotiveImg,
    },
    {
      id: 'pharmaceuticals',
      title: 'Pharmaceuticals',
      image: PharmaImg,
    },
    {
      id: 'industrial',
      title: 'Industrial & Engineering Goods',
      image: IndustrialImg,
    },
    {
      id: 'textiles',
      title: 'Textiles & Apparel',
      image: TextileImg,
    },
  ],
};

export const TRADE_LANES = {
  background: TradeBackground,
  map: TradeMap,
  eyebrow: 'Priority Trade Lanes',
  title: 'Optimizing your key routes for maximum efficiency and reliability.',
  caption:
    'Through weekly consolidations and proactive customs preparation, we ensure that your shipments are delivered on time, every time.',
  routes: [
    {
      id: 'south-asia-europe',
      bg: '#E9FBD7',
      origin: { label: 'South Asia', color: '#285500' },
      arrows: '→→→',
      destination: { label: 'Europe', color: '#6B3526' },
      commodities: 'Automobiles, pharmaceuticals, textiles.',
    },
    {
      id: 'south-asia-north-america',
      bg: '#D9F2EF',
      origin: { label: 'South Asia', color: '#285500' },
      arrows: '→→→',
      destination: { label: 'North America', color: '#E86B00' },
      commodities: 'Engineering goods, chemicals, industrial products.',
    },
    {
      id: 'southeast-middle-east',
      bg: '#F2F2F2',
      origin: { label: 'Southeast Asia & Middle East', color: '#8B7A2E' },
      arrows: '←←↔→→',
      destination: [
        { label: 'Europe', color: '#6B3526' },
        { label: '/ North America', color: '#E86B00' },
      ],
      commodities: 'Electronics, FMCG, perishables.',
    },
  ],
};

export const REAL_TIME_TECHNOLOGY = {
  eyebrow: 'Technology That Builds Trust',
  title: 'Real-time insights. Transparent communication. Smarter decisions.',
  description:
    'We integrate advanced digital tools with human expertise to give you full control over your supply chain.',
  rightImage: RealTimeLeftImage,
  leftImage: RealTimeRightImage,
  features: [
    'Real-time shipment updates and centralized document management',
    'Milestone notifications for both buyers and suppliers',
    'Compliance checklists to minimize delays and costs',
    'Analytics on transit times, costs, and operational risks',
    'Role-based access with secure audit trails',
  ],
};

export const SUSTAINABILITY = {
  background: SustainabilityBg,
  eyebrow: 'Responsible Trade, Sustainable Future',
  title: 'Driving growth while protecting the planet',
  description:
    'At ApexTrans Logistics, we are committed to eco-friendly and sustainable practices',
  cards: [
    {
      id: 'optimized-loads',
      title: 'Optimized Loads',
      description:
        'Efficient consolidation to minimize unnecessary movements.',
      image: OptimalLoadsImg,
    },
    {
      id: 'paper-light',
      title: 'Paper-Light Operations',
      description: 'Digital workflows and secure electronic documentation.',
      image: PaperLightImg,
    },
    {
      id: 'advisory-services',
      title: 'Advisory Services',
      description:
        'Recommendations on packaging and modal shifts for greener logistics.',
      image: AdvisoryServiceImg,
    },
  ],
};

export const WHY_PANLAND = {
  eyebrow: 'Why Panland Logistics?',
  title: 'Reliable. Efficient. Strategic.',
  items: [
    {
      id: 'personalised',
      title: 'Personalized Attention',
      description: 'Every client receives dedicated support.',
      image: WhyPersonalisedImg,
    },
    {
      id: 'competitive',
      title: 'Competitive Pricing',
      description: 'Solutions are tailored for mid-sized businesses.',
      image: WhyCompetitiveImg,
    },
    {
      id: 'global-reach',
      title: 'Global Reach with Local Expertise',
      description: 'Enjoy seamless operations worldwide.',
      image: WhyGlobalReachImg,
    },
    {
      id: 'future-ready',
      title: 'Future-Ready',
      description:
        'We offer technology-driven, sustainability-focused solutions.',
      image: WhyFutureReadyImg,
    },
  ],
};

export const CONTACT_US = {
  eyebrow: 'Contact Us',
  title: "Let's move your business forward",
  formTitle: 'Get a Quote',
  description:
    "Tell us about your shipment, and we'll revert quickly with the best options.",
  image: ContactUsImg,
  fields: {
    serviceTypes: ['Air Freight', 'Sea Freight', 'Ground Freight', 'Project Cargo'],
    origins: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
    destinations: ['Europe', 'North America', 'Middle East', 'Southeast Asia'],
  },
};

export const FOOTER_INFO_CARDS = [
  {
    title: 'Head Office',
    lines: [
      'B-41, U/G/F/, Gali No 19,',
      'Rajapuri Baharat Vihar Road,',
      'Uttam Nagar, Delhi,',
      'India - 110059',
    ],
  },
  {
    title: 'Email ID',
    lines: ['knautiyal@apextrans.com'],
  },
  {
    title: 'Phone No.',
    lines: ['000 000 0000'],
  },
  {
    title: 'Office Timing',
    lines: ['Monday – Saturday', '9:30 AM – 6:30 PM IST'],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Cookies', href: '#cookies' },
];

export const FOOTER_SOCIALS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <FaLinkedin size={25} aria-hidden="true" />,
  },
  {
    label: 'X',
    href: '#',
    icon: <FaXTwitter size={25} aria-hidden="true" />,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <FaInstagram size={25} aria-hidden="true" />,
  },
];

export const FOOTER_COPYRIGHT = 'ApexTrans Logistics. All Rights Reserved.';

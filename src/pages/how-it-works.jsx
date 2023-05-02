import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontal-section';
import React from 'react';

const HowItWorks = () => {
  const contentHero = {
    type: 'secondary',
    title: 'How It Works',
    subtitle: 'Our signature planning process',
    img_banner: { sizes: { 'super-large': '/images/how-it-works/29.jpg' } },
  };
  const contentAfterHero = {
    title: { text: 'About your trip', negative: true },
    infoItems: [
      {
        text: 'Start your enchanting journey—click below to fill out our brief travel inquiry form to get started:',
      },
    ],
    needPadding: true,
  };
  return (
    <>
      <Hero contentHero={contentHero} />
      <HorizontalSection horizontalType={'works'} />
      <AfterHero contentAfterHero={contentAfterHero} />
    </>
  );
};

export default HowItWorks;

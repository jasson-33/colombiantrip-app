import AfterHero from '@/components/after-hero';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import React from 'react';

const WhyChoosUs = () => {
  const contentHero = {
    type: 'secondary',
    title: 'Why Choose Us',
    imgHero: '/images/why-choose/45.jpg',
  };
  const contentAfterHero = {
    img: '/images/general/icono2.png',
    title: { text: 'Let Us Reveal the Heart and Soul of Colombia', negative: false },
    infoItems: [
      {
        text: 'Feel the rhythm of Colombia move you on your own custom-crafted journey, designed by The Colombian Trip.',
        bold: false,
      },
      {
        text: 'We have the passion, people, knowledge, and deep-seated commitment to client care that will ensure your escape exceeds every expectation.',
        bold: false,
      },
      {
        text: 'On your Colombian Trip, you’ll get:',
        bold: false,
      },
    ],
    blockTitle: true
  };
  return (
    <>
      <Hero contentHero={contentHero}/>
      <AfterHero contentAfterHero={contentAfterHero}/>
      <Grid />
    </>
  );
};

export default WhyChoosUs;

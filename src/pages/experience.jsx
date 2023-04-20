import AfterHero from '@/components/after-hero';
import ExperienceDetail from '@/components/experience-detail';
import Hero from '@/components/hero';
import React from 'react';

const Experience = () => {
  const contentHero = {
    type: 'secondary',
    title: 'Best Places to Visit?',
    imgHero: '/images/experiences/10.jpg',
  };
  const contentAfterHero = {
    img: '/images/general/icono2.png',
    title: { text: 'Experience', negative: false },
    infoItems: [
      {
        text: 'Pack your bags and dust off your passports. Colombia welcomes you with open arms.',
        bold: false,
      },
      {
        text: 'Immerse yourself in Colombia’s colorful culture and flavorful cuisine. ',
        bold: false,
      },
      {
        text: 'Enjoy a mix of guided sightseeing, leisure time, archaeological and architectonical treasures, green landscapes, colorful villages, and a unique culture.',
        bold: false,
      },
      {
        text: ' When the time’s right for you, connect with us to have every detail personally planned.',
        bold: false,
      },
    ],
  };
  return (
    <>
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero}/>
      <ExperienceDetail />
    </>
  );
};

export default Experience;

import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgText from '@/components/img-text';
import ProudMembers from '@/components/proud-members';
import React from 'react';

const b2b = () => {
  const contentHero = {
    type: 'secondary',
    title: 'B2B',
    imgHero: '/images/b2b/1.jpg',
    withForm: true,
  };
  const contentAfterHero = {
    title: { text: 'Meet Our Team', negative: true },
    infoItems: [
      {
        text: 'We feel so proud and happy to have an incredible team that lives, breathes, and loves what they do.',
        bold: true,
      },
      {
        text: 'Our biggest inspiration is how we can impact our travelers with memorable experiences in our country.',
        bold: false,
      },
      {
        text: 'We believe that Traveling impacts lives in double via, travelers enjoy a great experience in our country, and at the same time, we positively impact the communities through travel sustainability.',
        bold: false,
      },
      {
        text: 'Be sure that you will find only love and passion for what we do.',
        bold: false,
      },
    ],
  };
  const data = {
    content: {
      img: '/images/b2b/4.jpg',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    invert: false,
    subtitle: 'How Can we Collaborate?',
  };
  return (
    <>
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero} />
      <ImgSection imgSection="/images/b2b/2.jpg" bigImg={true} />
      <ImgText data={data} />
      <ProudMembers />
    </>
  );
};

export default b2b;

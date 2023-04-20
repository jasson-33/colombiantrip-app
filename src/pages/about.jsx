import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgText from '@/components/img-text';
import Team from '@/components/team';
import React from 'react';

const About = () => {
  const contentHero = {
    type: 'secondary',
    title: 'About us',
    imgHero: '/images/about/1.jpg',
  };
  const contentAfterHero = {
    img: '/images/general/icono1.png',
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

  const imgTextBlocks = [
    {
      content: {
        img: '/images/about/2.jpg',
        text: [
          'We’re delighted that you want to explore Colombia, and we’re here to answer all your questions with gratitude.',
          'Expect swift replies and lots of guidance from our team.',
        ],
      },
      invert: true,
      title: 'The Colombian Trip is:',
      subtitle: 'Responsive',
    },
    {
      content: {
        img: '/images/about/3.jpg',
        text: [
          'We work with local tour outfitters and experts to plan your immersive escapes, so your dollars directly benefit the communities and habitats you explore.',
        ],
      },
      invert: false,
      subtitle: 'Sustainable',
    },
    {
      content: {
        img: '/images/about/4.jpg',
        text: [
          'We live, breathe, and love Colombia with our whole heart.',
          'This special country means so much to us, and we are honored to be able to share it with you.',
        ],
      },
      invert: true,
      subtitle: 'Passionate',
    },
  ];
  return (
    <>
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero} />
      <ImgSection imgSection="/images/experiences/6.jpg" />
      {imgTextBlocks.map((data, i) => (
        <ImgText
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          data={data}
        />
      ))}
      <Team />
    </>
  );
};

export default About;

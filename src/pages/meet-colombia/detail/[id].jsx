import Hero from '@/components/hero';
import React from 'react';

const DetailPost = () => {
  const contentHero = {
    type: 'secondary',
    title: 'Meet Colombia',
    subtitle: "Going on vacation? Here's what you need to know about Colombia.",
    imgHero: '/images/meet/30.jpg',
    blog: true,
  };
  return (
    <>
      <Hero contentHero={contentHero} />
    </>
  );
};

export default DetailPost;

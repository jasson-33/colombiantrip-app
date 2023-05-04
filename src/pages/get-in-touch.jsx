import Hero from '@/components/hero';
import React from 'react';

const GetInTouch = () => {
  const contentHero = {
    img_banner: {
      url: 'https://paperplane.com.co/dev/colombiantrip/wp/wp-content/uploads/2023/04/hblock1.jpeg',
      sizes: {
        thumbnail: 'https://paperplane.com.co/dev/colombiantrip/wp/wp-content/uploads/2023/04/hblock1-150x150.jpeg',
        medium_large: 'https://paperplane.com.co/dev/colombiantrip/wp/wp-content/uploads/2023/04/hblock1-768x597.jpeg',
        medium: 'https://paperplane.com.co/dev/colombiantrip/wp/wp-content/uploads/2023/04/hblock1-300x233.jpeg',
        large: 'https://paperplane.com.co/dev/colombiantrip/wp/wp-content/uploads/2023/04/hblock1-1024x796.jpeg'
      }
    },
    title: 'Bogotá , Nariño,  Medellín &#038; Cartagena',
    subtitle: '',
    type: 'secondary'
  };
  return (
    <>
      <Hero contentHero={contentHero} />      
    </>
  );
};


export default GetInTouch;

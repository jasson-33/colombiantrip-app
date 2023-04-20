import AllPosts from '@/components/all-posts';
import Hero from '@/components/hero';
import React from 'react';

const CategroyBlog = () => {
  const contentHero = {
    type: 'secondary',
    title: 'Meet Colombia',
    subtitle: "Going on vacation? Here's what you need to know about Colombia.",
    imgHero: '/images/how-it-works/29.jpg',
    blog: true,
  };

  const allCategoryPost = [
    {
      img: '/images/meet/05.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      colorText: '#7A5D0C',
      bgColor: '#FCBE15',
      href: 'medellin',
      gridArea: 'large'
    },
    {
      img: '/images/meet/06.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      height: '35vh',
      colorText: '#576409',
      bgColor: '#AFCA0C',
      href: 'medellin',
      gridArea: 'small'
    },
    {
      img: '/images/meet/29.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      height: '40vh',
      colorText: '#124F5E',
      bgColor: '#34BBDB',
      href: 'medellin',
      gridArea: 'small-a'
    },
    {
      img: '/images/meet/05.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      height: '40vh',
      colorText: '#fff',
      bgColor: '#D23250',
      href: 'medellin',
      gridArea: 'wide'
    },
    {
      img: '/images/meet/06.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      colorText: '#576409',
      bgColor: '#AFCA0C',
      href: 'medellin',
      gridArea: 'small-b'
    },
    {
      img: '/images/meet/29.jpg',
      date: '02/13/23',
      title:
        'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
      type: 'Cities',
      width: '100%',
      height: '40vh',
      colorText: '#124F5E',
      bgColor: '#34BBDB',
      href: 'medellin',
      gridArea: 'small-c'
    },
  ];

  return (
    <>
      <Hero contentHero={contentHero} />
      <AllPosts allCategoryPost={allCategoryPost}/>
      
    </>
  );
};

export default CategroyBlog;

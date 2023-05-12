import AllPosts from '@/components/all-posts';
import Hero from '@/components/hero';
import React from 'react';

const MeetColombia = () => {
  const contentHero = {
    type: 'secondary',
    title: 'Meet Colombia',
    subtitle:
      'Going on vacation? Here&apos;s what you need to know about Colombia.',
    img_banner: '/images/how-it-works/29.jpg',
    blog: true,
  };

  const citiesPost = {
    posts: [
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
      }, 
      {
        img: '/images/meet/05.jpg',
        date: '02/13/23',
        title:
          'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
        type: 'Cities',
        width: '100%',
        height: '40vh',
        colorText: '#7A5D0C',
        bgColor: '#FCBE15',
        href: 'medellin',
      },
      {
        img: '/images/meet/06.jpg',
        date: '02/13/23',
        title:
          'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
        type: 'Cities',
        width: 'calc(60% - 25px)',
        colorText: '#576409',
        bgColor: '#AFCA0C',
        href: 'medellin',
      },
      {
        img: '/images/meet/29.jpg',
        date: '02/13/23',
        title:
          'Lorem ipsum dolor sit, consectetur adipiscing elit ipsum dolor sit, consectetur adipiscing elit',
        type: 'Cities',
        width: 'calc(40% - 25px)',
        height: '40vh',
        colorText: '#124F5E',
        bgColor: '#34BBDB',
        href: 'medellin',
      },
    ],
    layout: 'A',
    categoryType: 'Cities',
  };
 
  return (
    <>
      <Hero contentHero={contentHero} />
      {/* <AllPosts singleCategoryPost={citiesPost} /> */}
      <AllPosts allCategoryPost={citiesPost.posts} />
    </>
  );
};

export default MeetColombia;

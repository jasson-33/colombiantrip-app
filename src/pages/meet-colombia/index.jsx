import AllPosts from '@/components/all-posts';
import Hero from '@/components/hero';
import React from 'react';

const MeetColombia = ({ content }) => {
  console.log(content);

  const { hero, featured, categories } = content.meet_data;
  const contentHero = hero;
  const popularPost = featured;
  return (
    <>
      <Hero contentHero={contentHero} />
      <AllPosts popularPost={popularPost} />
      {categories &&
        categories.map((cat, i) => <AllPosts key={i} categoryPosts={cat} />)}
    </>
  );
};

export default MeetColombia;

export async function getServerSideProps() {
  const contentMeet = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/meet-colombia`
  );
  const content = await contentMeet.json();
  return {
    props: { content },
  };
}

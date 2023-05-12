import Hero from '@/components/hero';
import AllPosts from '@/components/all-posts';
import React from 'react';

const CategorySingle = ({ data }) => {
  console.log(data);
  const contentHero = {
    type: 'secondary',
    title: 'data.data_blog.title',
    subtitle: 'data.data_blog.subtitle',
    img_banner: false,
    blog: true,
  };
  return (
    <>
      <Hero contentHero={contentHero} />
      <AllPosts categoryPosts={false} />
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const page = context.query.hasOwnProperty('page')?context.query.page:1;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/category?datacat=${id}&pagecat=${page}`
  );
  const data = await resData.json();

  return { props: { data } };
}

export default CategorySingle;

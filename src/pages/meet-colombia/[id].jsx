import Hero from '@/components/hero';
import AllPosts from '@/components/all-posts';
import React from 'react';

const CategorySingle = ({ data }) => {
  console.log(data);
  const {hero, currpage, maxpages, posts} = data.data_blog;

  const allCategory = {
    curr_page: currpage,
    max_pages: maxpages,
    curr_posts: posts,
  };

  return (
    <>
      <Hero contentHero={hero} />
      <AllPosts allCategoryPost={allCategory} />
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


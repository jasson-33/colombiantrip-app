import Hero from '@/components/hero';
import React from 'react';

const DetailPost = ({data}) => {
  console.log(data);
  const contentHero = {
    type: 'secondary',
    title: data.data_blog.title,
    subtitle: data.data_blog.subtitle,
    img_banner: data.data_blog.img_banner,
    blog: true,
  };
  return (
    <>
      <Hero contentHero={contentHero} />
    </>
  );
};

export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/blog?datablog=${id}`);
  const data = await resData.json();

  return { props: { data } };
}

export default DetailPost;

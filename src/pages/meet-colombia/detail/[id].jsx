import Hero from '@/components/hero';
import BlogArterfHero from '@/components/blog-after-hero';
import ImgBlockBlog from '@/components/blog-img-block';
import TextBlog from '@/components/blog-text-block';
import React from 'react';

const DetailPost = ({ data }) => {
  console.log(data);
  const contentHero = {
    type: 'secondary',
    title: data.data_blog.title,
    subtitle: data.data_blog.subtitle,
    img_banner: data.data_blog.img_banner,
    blog: true,
  };

  const blogAfterHero = {
    autor: 'Andrew Smith',
    date: 'December 20, 2022',
    subtitle: 'Once tagged as one of the most dangerous cities in the world, Medellín has transformed and become a popular destination. Heres’ why you should visit Medellín.',
  };

  const getimgsBlock = {
    imagesBlock: [
      {
        img: '/images/experiences/9.jpg',
        alt: 'img-blog'
      },
      {
        img: '/images/experiences/9.jpg',
        alt: 'img-blog'
      },
    ]};
  const getimgsBlockFull = {
      imagesBlock: [
        {
          img: '/images/experiences/9.jpg',
          alt: 'img-blog'
        },
  ]};

  const textBlogDesc = {
    title: '1. The weather in Medellín is amazing.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };

  const textBlogDesctwo = {
    title: '',
    desc: 'Viverra ipsum nunc aliquet bibendum enim. Urna cursus eget nunc scelerisque viverra mauris. In ante metus dictum at tempor commodo ullamcorper a lacus. Vitae tortor condimentum lacinia quis. Sed cras ornare arcu dui vivamus. Nunc sed blandit libero volutpat sed cras ornare. Placerat in egestas erat imperdiet sed euismod nisi porta lorem.',
  };

  return (
    <>
      <Hero contentHero={contentHero} pageType={'post'} />  
      <BlogArterfHero blogAfterHero={blogAfterHero} />  
      <TextBlog textBlogBlock={textBlogDesctwo} />         
      <ImgBlockBlog getimgsBlock={getimgsBlock} />      
      <TextBlog textBlogBlock={textBlogDesc} />      
      <ImgBlockBlog getimgsBlock={getimgsBlockFull} />   
    </>
  );
};

export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/blog?datablog=${id}`
  );
  const data = await resData.json();

  return { props: { data } };
}

export default DetailPost;

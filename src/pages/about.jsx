import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgText from '@/components/img-text';
import Team from '@/components/team';
import React from 'react';

const About = ({ content }) => {
  console.log(content);
  const contentHero = content.about_data.hero;
  const contentAfterHero = content.about_data.content;
  const imgTextBlocks = content.about_data.img_text;
  const teamData = content.about_data.team;
  return (
    <>
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero} />
      <ImgSection
        imgSection={
          content.about_data.image_section.sizes
            ? content.about_data.image_section.sizes['super-large']
            : '/images/experiences/6.jpg'
        }
      />
      {imgTextBlocks.map((data, i) => (
        <ImgText
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          data={data}
        />
      ))}
      <Team teamData={teamData} />
    </>
  );
};

export async function getStaticProps() {
  const contentAbout = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/about`
  );
  const content = await contentAbout.json();
  return {
    props: { content },
  };
}

export default About;

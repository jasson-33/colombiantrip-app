import AfterHero from '@/components/after-hero';
import ExperienceDetail from '@/components/experience-detail';
import Hero from '@/components/hero';
import React from 'react';

const Experience = ({expdata}) => {
  const {hero, content, experiences} = expdata.exp_data;
  const contentHero = hero;
  const contentAfterHero = content;
  const contentExp = experiences;
  return (
    <>
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero} />
      <ExperienceDetail contentExp={contentExp} />
    </>
  );
};

export async function getStaticProps(context) {
  const resExp = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/experience`)
  const expdata = await resExp.json()
  return {
    props: {expdata}
  }
}

export default Experience;

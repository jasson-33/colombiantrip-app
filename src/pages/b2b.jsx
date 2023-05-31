import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgText from '@/components/img-text';
import ProudMembers from '@/components/proud-members';
import React from 'react';

const b2b = ({ data }) => {
  const { metacontent } = data;
  console.log(data);
  const contentHero = {
    type: 'secondary',
    title: 'B2B',
    img_banner: { sizes: { 'super-large': '/images/b2b/1.jpg' } },
    withForm: true,
  };
  const contentAfterHero = {
    title: { text: 'Meet Our Team', negative: true },
    infoItems: [
      {
        text: 'We feel so proud and happy to have an incredible team that lives, breathes, and loves what they do.',
        bold: true,
      },
      {
        text: 'Our biggest inspiration is how we can impact our travelers with memorable experiences in our country.',
        bold: false,
      },
      {
        text: 'We believe that Traveling impacts lives in double via, travelers enjoy a great experience in our country, and at the same time, we positively impact the communities through travel sustainability.',
        bold: false,
      },
      {
        text: 'Be sure that you will find only love and passion for what we do.',
        bold: false,
      },
    ],
  };
  const data1 = {
    content: {
      img: { sizes: { medium_large: '/images/b2b/4.jpg' } },
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    invert: false,
    subtitle: 'How Can we Collaborate?',
  };
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={contentHero} />
      <AfterHero contentAfterHero={contentAfterHero} />
      <ImgSection imgSection="/images/b2b/2.jpg" bigImg={true} />
      <ImgText data={data1} />
      <ProudMembers />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/b2b`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default b2b;

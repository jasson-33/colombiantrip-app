import Acordion from '@/components/acordion';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import InfoRecomendations from '@/components/info-recomendations';
import React from 'react';

const DetailExperience = ({ data }) => {
  console.log(data);

  const { hero, blocks, dropdown  } = data.data;

/*
  const contentHero = {
    type: 'secondary',
    title: 'Medellín, Coffee Region, Tayrona & Cartagena',
    imgHero: '/images/experiences/1.jpg',
  };
*/
  const contentAfterHero = {
    img: '/images/experiences/10.png',
    title: {
      text: 'Colombia: Discover Treasures Trough Magical Lodging Spots',
      negative: false,
    },
    infoItems: [
      {
        text: 'Natgeo says: "If Earth\'s biodiversity were a country, it could be called Colombia."',
        bold: false,
      },
      {
        text: 'Enjoy a wonderful time in Colombia. These eights nights and nine days, will allow you to discover the most known regions of the country, where you will experienced all of the diversity of culture, gastronomy, music, nature and landscapes from our country.',
        bold: false,
      },
      {
        text: 'This experience will allow you to sumerge yourself in the most known Colombian treasures. Do not hesitate to enjoy a great time and make your time worth it.',
        bold: false,
      },
    ],
    secondLayout: true,
  };
  return (
    <>
      <Hero contentHero={hero} />
      {
        blocks.map((block, i) => {
            switch (block.layout) {
              case 'list_block':
                return <AfterHero key={i} contentAfterHero={block.content} />
              case 'image_block':
                return <ImgSection key={i} imgSection={block.content.img?block.content.img.url:''} />
            }
        })
      }
      <Acordion dropdown={dropdown} />
      <InfoRecomendations />
    </>
  );
};

export async function getServerSideProps(context) {
  const datafetch = await fetch( `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/experience-detail?dataexp=${context.params.id}` );
  const data = await datafetch.json();
  return {
    props: {data}, 
  }
}

export default DetailExperience;

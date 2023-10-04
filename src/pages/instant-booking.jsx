import AfterHero from '@/components/after-hero';
import ExperienceDetail from '@/components/experience-detail';
import Hero from '@/components/hero';

const InstantBooking = () => {
  const data = {
    hero: {
      blog: false,
      img_banner: '/images/instant-booking/hero.jpg',
      title: 'Instant Booking',
    },
    content: {
      img: {
        sizes: {
          lage: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
          medium:
            'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
          medium_large:
            'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
          ['super-lage']:
            'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
          ['super-small']:
            'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
          thumbnail:
            'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
        },
        url: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/11000417/icono2.png',
      },
      infoItems: [
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
      ],
      title: {
        negative: false,
        text: 'Experience',
      },
    },
    experiences: [
      {
        id: '/experiences/coffe-mountains-colorful-villages-green-landscapes',
        img: {
          sizes: {
            lage: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium_large:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-lage']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-small']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            thumbnail:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
          },
          url: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
        },
        title: 'Coffee Mountains &#038; Colorful Villages',
        width: '100%'
      },
      {
        id: '/experiences/coffe-mountains-colorful-villages-green-landscapes',
        img: {
          sizes: {
            lage: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium_large:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-lage']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-small']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            thumbnail:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
          },
          url: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
        },
        title: 'Coffee Mountains &#038; Colorful Villages',
        width: '50%'
      },
      {
        id: '/experiences/coffe-mountains-colorful-villages-green-landscapes',
        img: {
          sizes: {
            lage: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            medium_large:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-lage']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            ['super-small']:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
            thumbnail:
              'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
          },
          url: 'https://colombiantrip-bkt.s3.amazonaws.com/wp-content/uploads/2023/05/04171723/V2Coffee-Coffee-Region-1024x683.jpg',
        },
        title: 'Coffee Mountains &#038; Colorful Villages',
        width: '50%'
      },
    ],
  };
  const { hero, content, experiences } = data;

  return (
    <>
      <Hero contentHero={hero} />
      <AfterHero contentAfterHero={content} />
      <ExperienceDetail contentExp={experiences} />
    </>
  );
};

export default InstantBooking;

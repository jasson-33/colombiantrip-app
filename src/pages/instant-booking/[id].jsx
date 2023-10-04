import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ColombianContext } from '@/context/ColombianContext';
import ImgSection from '@/components/img-section';
import TitleText from '@/components/titleText';
import GridImages from '@/components/gridImages';

const InstanBookingDetail = () => {
  const { Bigola } = useContext(ColombianContext);
  const data = {
    hero: {
      blog: false,
      img_banner: '/images/instant-booking/hero.jpg',
      title: 'Cartagena',
      paragraphText: [
        'Natgeo says: "If Earth\'s biodiversity were a country, it could be called Colombia."',
        'Enjoy a wonderful time in Colombia. These eights nights and nine days, will allow you to discover the most known regions of the country, where you will experienced all of the diversity of culture, gastronomy, music, nature and landscapes from our country.',
      ],
      template: 'instant-booking',
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
          bold: true,
          // eslint-disable-next-line quotes
          text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae venenatis metus. Donec sed hendrerit massa, et interdum mauris.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'This city is situated on a bay by the same name and as such, it is a prime tourist destination in the Caribbean region. Enjoy it on your own pace.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',
        },
        {
          bold: false,
          // eslint-disable-next-line quotes
          text: 'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',
        },
      ],
      blockTitle: {
        negative: false,
        text: 'Colombia: Discover Treasures Trough Magical Lodging Spots',
      },
      bookinLayout: true,
      imagesBooking: [
        '/images/instant-booking/instant-1.jpg',
        '/images/instant-booking/instant-2.jpg',
        '/images/instant-booking/instant-3.jpg',
        '/images/instant-booking/instant-4.jpg',
        '/images/instant-booking/instant-5.jpg',
        '/images/instant-booking/instant-1.jpg',
      ],
    },
    imgSection: '/images/instant-booking/instant-4.jpg',
    contentTitleText: {
      title: 'Colombia: Discover Treasures Trough Magical Lodging Spots',
      paragraphs: [
        'Natgeo says: "If Earth\'s biodiversity were a country, it could be called Colombia."',
        'Enjoy a wonderful time in Colombia. These eights nights and nine days, will allow you to discover the most known regions of the country, where you will experienced all of the diversity of culture, gastronomy, music, nature and landscapes from our country.',
      ],
    },
  };
  const { hero, content, imgSection, contentTitleText } = data;

  const images = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      width: 320,
      height: 174,
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      width: 320,
      height: 212,
    },

    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      width: 320,
      height: 212,
    },
  ];
  return (
    <>
      <Hero contentHero={hero} />
      <div className={styles.stickyBooking}>
        <p className={`${styles.textStickyBooking} ${Bigola.className}`}>
          Colombia: Discover Treasures Trough Magical Lodging Spots
        </p>
        <div className={styles.bookingButtons}>
          <button className={`${styles.bookingButton} ${styles.question}`}>
            Have a question
          </button>
          <button className={`${styles.bookingButton} ${styles.bookNow}`}>
            Book now
          </button>
        </div>
      </div>
      <AfterHero contentAfterHero={content} />
      <ImgSection bigImg={false} imgSection={imgSection} />
      <TitleText content={contentTitleText} />
      <GridImages />
    </>
  );
};

export default InstanBookingDetail;

import Metas from '@/components/metaDatas';
import styles from '../../components/meet-home/meet-home.module.css';
import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';

const ThankYouPage = ({ data }) => {
  const { metacontent } = data;
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  return (
    <>
      <Metas metadata={metacontent} />
      <section className={`siteSection ${styles.meetSection}`}>
        <div className={`container ${styles.containerMeetSction}`}>
          <h2
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className={`${styles.meetHomeTitle} ${Bigola.className}`}
            dangerouslySetInnerHTML={{
              __html: 'Thank you for getting in touch',
            }}
          />
          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className={`${styles.subtitleMeetHome}`}
            dangerouslySetInnerHTML={{
              __html:
                'One of our Colombian Travel Counselors will be in touch with you shortly.',
            }}
          />
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const allowedSlugs = [
    'homepage',
    'how-it-works',
    'b2b',
    'why-choose-us',
    'about',
    'instant-booking',
    'get-in-touch',
  ]; // Allowed paths
  const { params } = context;
  const { slug } = params; // You can use slug to customize content if needed
  const [unwrap] = slug;
  if (!allowedSlugs.includes(unwrap)) {
    return {
      notFound: true,
    };
  }

  const resHome = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/home`
  );
  const data = await resHome.json();
  return {
    props: { data },
  };
}

export default ThankYouPage;

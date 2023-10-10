import Link from 'next/link';
import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './experience-detail.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';
import 'atropos/css';

const ExperienceDetail = ({ contentExp }) => {
  const { Bigola } = useContext(ColombianContext);

  const atroposProps = {
    shadow: false,
    rotateYMax: 5,
    rotateXMax: 5,
  };
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className={`siteSection ${styles.experienceDetailSection}`}>
      <div
        className={`container flex f-jc f-as ${styles.containerExperiencesDetail}`}>
        {contentExp.map(({ img, width, title, id }, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            key={id + i}
            className={`${styles.cardExperience} ${styles[`experience-${i}`]}`}
            style={{
              width: width === '100%' ? width : `calc(${width} - 20px)`,
            }}>
            <Atropos className={styles.atroposExperience} {...atroposProps}>
              <Link href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${id}`}>
                <div
                  className={`bg-cv ${styles.imgCardExperience}`}
                  style={{
                    backgroundImage: `url(${
                      img.sizes ? img.sizes.medium_large : ''
                    })`,
                  }}></div>
                <h2
                  data-atropos-offset="0.255"
                  className={`${styles.titleCard} ${Bigola.className}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </Link>
            </Atropos>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceDetail;

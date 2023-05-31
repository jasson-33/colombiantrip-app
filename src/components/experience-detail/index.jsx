import Link from 'next/link';
import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './experience-detail.module.css';

const ExperienceDetail = ({ contentExp }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <section className={`siteSection ${styles.experienceDetailSection}`}>
      <div
        className={`container flex f-jc f-as ${styles.containerExperiencesDetail}`}>
        {contentExp.map(({ img, width, title, id }, i) => (
          <div
            key={id+i}
            className={`${styles.cardExperience} ${styles[`experience-${i}`]}`}
            style={{ width: `calc(${width} - 20px)` }}>
            <Link href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${id}`}>
              <div
                className={`bg-cv ${styles.imgCardExperience}`}
                style={{
                  backgroundImage: `url(${
                    img.sizes ? img.sizes.medium_large : ''
                  })`,
                }}></div>
              <h2
                className={`${styles.titleCard} ${Bigola.className}`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceDetail;

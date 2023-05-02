import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './experience-detail.module.css';

const ExperienceDetail = ({ contentExp }) => {
  const experiencesDetail = contentExp;
  return (
    <section className={`siteSection ${styles.experienceDetailSection}`}>
      <div
        className={`container flex f-jc f-as ${styles.containerExperiencesDetail}`}>
        {experiencesDetail.map(({ img, width, title, id }, i) => (
          <div
            key={id}
            className={`${styles.cardExperience} ${styles[`experience-${i}`]}`}
            style={{ width: `calc(${width} - 20px)` }}>
            <Link href={`/experiences/${id}`}>
              <div
                className={`bg-cv ${styles.imgCardExperience}`}
                style={{
                  backgroundImage: `url(${
                    img.sizes ? img.sizes.medium_large : ''
                  })`,
                }}></div>
              <h2
                className={styles.titleCard}
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

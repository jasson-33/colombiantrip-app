import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './experience-detail.module.css';

const ExperienceDetail = () => {  
  const { Bigola } = useContext(ColombianContext);
  const experiencesDetail = [
    {
      img: '/images/experiences/8.jpg',
      width: '60%',
      title: 'Bogotá , Nariño,  Medellín & Cartagena',
      id: typeof window !== 'undefined' ? window.crypto.randomUUID() : '',
    },
    {
      img: '/images/experiences/3.jpg',
      width: '40%',
      title: 'Amazona Adventure',
      id: typeof window !== 'undefined' ? window.crypto.randomUUID() : '',
    },
    {
      img: '/images/experiences/2.jpg',
      width: '30%',
      title: 'Santa Marta',
      id: typeof window !== 'undefined' ? window.crypto.randomUUID() : '',
    },
    {
      img: '/images/experiences/1.jpg',
      width: '40%',
      title: 'Cartagena',
      id: typeof window !== 'undefined' ? window.crypto.randomUUID() : '',
    },
    {
      img: '/images/experiences/4.jpg',
      width: '30%',
      title: 'Caño Cristal',
      id: typeof window !== 'undefined' ? window.crypto.randomUUID() : '',
    },
  ];

  return (
    <section className={`siteSection ${styles.experienceDetailSection}`}>
      <div
        className={`container flex f-jc f-as ${styles.containerExperiencesDetail}`}>
        {experiencesDetail.map((experience, i) => (
          <div
            className={`${styles.cardExperience} ${styles['experience-' + i]}`}
            style={{ width: `calc(${experience.width} - 20px)` }}>
            <Link href={`/experiences/${experience.id}`}>
              <div
                className={`bg-cv ${styles.imgCardExperience}`}
                style={{ backgroundImage: `url(${experience.img})` }}></div>
              <h2 className={`${styles.titleCard} ${Bigola.className}`}>{experience.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceDetail;

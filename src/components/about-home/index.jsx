import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from './about-home.module.css';

const AboutHome = () => {
  const { Bigola } = useContext(ColombianContext);
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(typeof window !== 'undefined' && window.innerWidth);
    };
    window.addEventListener('resize', () => {
      resizeWindow();
    });

    return () => {
      window.removeEventListener('resize', () => {
        resizeWindow();
      });
    };
  }, [screenWidth]);
  return (
    <section className={`siteSection ${styles.aboutHome}`}>
      <div className={`container ${styles.containerAboutHome} flex f-s f-as`}>
        <div className={styles.leftAboutHome}>
          <h2 className={`${styles.titleAbout} ${Bigola.className}`}>
            We Are The Colombian Travel Experts
          </h2>

          <h3 className={styles.subtitleAbout}>
            Let Colombia steal your heart and touch your soul. We’ll plan it all
            for you.
          </h3>

          {screenWidth && screenWidth <= 768 && (
            <div
              className={`${styles.imageAboutHome} ${styles.imageAboutHomeMobile} bg-cv`}
              style={{ backgroundImage: `url(/images/home/03.jpg)` }}></div>
          )}

          <div className={styles.paragraphsGroup}>
            <p className={styles.paragraphAbout}>
              Hola! We are The Colombian Trip, your key to a soul-stirring,
              eye-opening adventure into one of the most magical countries on
              earth.
            </p>
            <p className={styles.paragraphAbout}>
              Our boutique travel agency designs custom itineraries for
              travelers eager to explore all of Colombia’s treasures—and want to
              do so with ease.
            </p>
          </div>
        </div>

        {screenWidth && screenWidth > 768 && (
          <div className={styles.rightAboutHome}>
            <div
              className={`${styles.imageAboutHome} bg-cv`}
              style={{ backgroundImage: `url(/images/home/03.jpg)` }}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutHome;

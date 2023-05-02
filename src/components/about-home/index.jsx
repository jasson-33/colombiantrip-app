import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from './about-home.module.css';

const AboutHome = ({ aboutHome }) => {
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
          <h2
            className={`${styles.titleAbout} ${Bigola.className}`}
            dangerouslySetInnerHTML={{ __html: aboutHome.about_title }}
          />

          <h3
            className={styles.subtitleAbout}
            dangerouslySetInnerHTML={{ __html: aboutHome.about_subtitle }}
          />

          {screenWidth && screenWidth <= 768 && (
            <div
              className={`${styles.imageAboutHome} ${styles.imageAboutHomeMobile} bg-cv`}
              style={{
                backgroundImage: `url(${aboutHome.about_image.sizes.medium_large})`,
              }}></div>
          )}

          <div className={styles.paragraphsGroup}>
            <p
              className={styles.paragraphAbout}
              dangerouslySetInnerHTML={{ __html: aboutHome.about_description }}
            />
          </div>
        </div>

        {screenWidth && screenWidth > 768 && (
          <div className={styles.rightAboutHome}>
            <div
              className={`${styles.imageAboutHome} bg-cv`}
              style={{
                backgroundImage: `url(${aboutHome.about_image.sizes.medium_large})`,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutHome;

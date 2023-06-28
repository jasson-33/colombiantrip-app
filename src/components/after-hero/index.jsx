import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './after-hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AfterHero = ({ contentAfterHero }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`siteSection ${styles.afterHero} ${
        contentAfterHero.secondLayout ? styles.secondLayout : ''
      } ${contentAfterHero.needPadding ? styles.paddingSection : ''}`}>
      {contentAfterHero.img && contentAfterHero.img.sizes && (
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="200"
          data-aos-delay="0"
          className={`${styles.imgAfterHero} bg-ct`}
          style={{
            backgroundImage: `url(${contentAfterHero.img.sizes.medium_large})`,
          }}></div>
      )}

      <div
        className={`container flex f-js f-as ${styles.containerAfterHero} ${
          contentAfterHero.blockTitle && styles.wrap
        }`}>
        {contentAfterHero.blockTitle && (
          <div className={styles.wrapperTitleAfterHero}>
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="0"
              data-aos-delay="0"
              className={`${
                contentAfterHero.blockTitle.negative
                  ? styles.negativeMargin
                  : ''
              } ${styles.titleAfterHero} ${Bigola.className}`}
              dangerouslySetInnerHTML={{
                __html: contentAfterHero.blockTitle.text,
              }}
            />
          </div>
        )}
        {!contentAfterHero.blockTitle && (
          <h2
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="0"
            data-aos-delay="0"
            className={`${
              contentAfterHero.title.negative ? styles.negativeMargin : ''
            } ${styles.titleAfterHero} ${Bigola.className}`}
            dangerouslySetInnerHTML={{
              __html: contentAfterHero.title.text,
            }}></h2>
        )}

        <ul className={styles.ulAfterHero}>
          {contentAfterHero.infoItems.map((info, i) => (
            <li
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="0"
              data-aos-delay="0"
              key={i}
              className={`${info.bold ? Gotham_Bold.className : ''} ${
                styles.itemUlAfterHero
              }`}
              dangerouslySetInnerHTML={{ __html: info.text }}></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AfterHero;

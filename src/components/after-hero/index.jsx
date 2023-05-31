import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './after-hero.module.css';

const AfterHero = ({ contentAfterHero }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  return (
    <section
      className={`siteSection ${styles.afterHero} ${
        contentAfterHero.secondLayout ? styles.secondLayout : ''
      } ${contentAfterHero.needPadding ? styles.paddingSection : ''}`}>
      {contentAfterHero.img && (
        <div
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
              className={`${
                contentAfterHero.blockTitle.negative
                  ? styles.negativeMargin
                  : ''
              } ${styles.titleAfterHero} ${Bigola.className}`}>
              {contentAfterHero.blockTitle.text}
            </h2>
          </div>
        )}
        {!contentAfterHero.blockTitle && (
          <h2
            className={`${
              contentAfterHero.title.negative ? styles.negativeMargin : ''
            } ${styles.titleAfterHero} ${Bigola.className}`}
            dangerouslySetInnerHTML={{
              __html: contentAfterHero.title.text
            }}></h2>
        )}

        <ul className={styles.ulAfterHero}>
          {contentAfterHero.infoItems.map((info, i) => (
            <li
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

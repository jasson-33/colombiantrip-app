import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './img-text.module.css';

const ImgText = ({ data }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <section className={`siteSection ${styles.imgTextSection}`}>
      {data.title ? <h2 className={`${styles.titleBlockIMgtext} ${Bigola.className}`}>{data.title}</h2> : ''}

      <div
        className={`container ${styles.containerImgText} flex f-c f-ac ${
          data.invert ? styles.invert : ''
        }`}>
        <div className={styles.imgBlock}>
          <div
            className={`${styles.innerImgBlock} bg-cv`}
            style={{ backgroundImage: `url(${data.content.img})` }}></div>
        </div>

        <div className={styles.textBlock}>
          {data.subtitle ? <h3 className={`${styles.subtitleTextImg} ${Bigola.className}`}>{data.subtitle}</h3> : ''}
          {
            data.content.text.map((info, i) => (
              <p key={i} className={styles.innerTextBlock}>{info}</p>
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default ImgText;

import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './img-text.module.css';

const ImgText = ({ data }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <section className={`siteSection ${styles.imgTextSection}`}>
      {data.title ? <h2 className={`${styles.titleBlockIMgtext} ${Bigola.className}`} dangerouslySetInnerHTML={{__html:data.title}} /> : ''}

      <div
        className={`container ${styles.containerImgText} flex f-c f-ac ${
          data.invert ? styles.invert : ''
        }`}>
        <div className={styles.imgBlock}>
          <div
            className={`${styles.innerImgBlock} bg-cv`}
            style={{ backgroundImage: `url(${data.content.img.sizes?data.content.img.sizes.medium_large:''})` }}></div>
        </div>

        <div className={styles.textBlock}>
          {data.subtitle ? <h3 className={`${styles.subtitleTextImg} ${Bigola.className}`} dangerouslySetInnerHTML={{__html:data.subtitle}} /> : ''}
            <p className={styles.innerTextBlock} dangerouslySetInnerHTML={{__html:data.content.text}} />
        </div>
      </div>
    </section>
  );
};

export default ImgText;

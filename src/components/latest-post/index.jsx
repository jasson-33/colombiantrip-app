import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import styles from './latest-post.module.css';

const LatestPost = () => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <div className={styles.containerLatest}>
      <div className={styles.mobileTitle}>
        <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
          Latest Post
        </h3>
      </div>
      <div className={styles.lastPost}>
        <div className={styles.containerImageLatest}>
          <Image alt="" src="/images/meet/06.jpg" fill />
        </div>
        <div className={styles.infoLatestPost}>
          <p className={`${styles.dateLatest} ${Bigola.className}`}>28/02/23</p>
          <h2 className={`${styles.titleLatestPost} ${Bigola.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </h2>
          <p className={styles.typeLatestPost}>Gastronomy</p>
        </div>
      </div>
      <div className={styles.lastPost}>
        <div className={styles.containerImageLatest}>
          <Image alt="" src="/images/meet/06.jpg" fill />
        </div>
        <div className={styles.infoLatestPost}>
          <p className={`${styles.dateLatest} ${Bigola.className}`}>28/02/23</p>
          <h2 className={`${styles.titleLatestPost} ${Bigola.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </h2>
          <p className={styles.typeLatestPost}>Gastronomy</p>
        </div>
      </div>
      <div className={styles.lastPost}>
        <div className={styles.containerImageLatest}>
          <Image alt="" src="/images/meet/06.jpg" fill />
        </div>
        <div className={styles.infoLatestPost}>
          <p className={`${styles.dateLatest} ${Bigola.className}`}>28/02/23</p>
          <h2 className={`${styles.titleLatestPost} ${Bigola.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </h2>
          <p className={styles.typeLatestPost}>Gastronomy</p>
        </div>
      </div>
      <div className={styles.lastPost}>
        <div className={styles.containerImageLatest}>
          <Image alt="" src="/images/meet/06.jpg" fill />
        </div>
        <div className={styles.infoLatestPost}>
          <p className={`${styles.dateLatest} ${Bigola.className}`}>28/02/23</p>
          <h2 className={`${styles.titleLatestPost} ${Bigola.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </h2>
          <p className={styles.typeLatestPost}>Gastronomy</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

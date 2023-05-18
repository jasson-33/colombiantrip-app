
import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './blog-after-hero.module.css';

const BlogArterfHero = ({ blogAfterHero }) => {
  const { Gotham_Bold } = useContext(ColombianContext);

  return (
    <section className="siteSection">
      <div className={styles.blogAfterHero}>
        <div className={styles.contentDateBlog}>
          <p className={styles.contAutorBlog}>Written by <span className={`${styles.autorBlog} ${Gotham_Bold.className}`}>{blogAfterHero.autor}</span></p>
          <p className={styles.contDateBlog}>{blogAfterHero.date}</p>
        </div>
        <div className={`${styles.innerContSubtitle} ${Gotham_Bold.className}`}>
          {blogAfterHero.subtitle}
        </div>
      </div>
    </section>
  );
};

export default BlogArterfHero;

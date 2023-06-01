import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './blog-text-block.module.css';

const TextBlog = ({ textBlogBlock }) => {
  const { Bigola } = useContext(ColombianContext);

  return (
    <section className="siteSection">
      <div className={styles.innerContText}>
        <div
          className={`${styles.titleTextBlog} ${Bigola.className}`}
          dangerouslySetInnerHTML={{ __html: textBlogBlock.title }}
        />
        <div
          className={styles.descTextBlog}
          dangerouslySetInnerHTML={{ __html: textBlogBlock.desc }}
        />
      </div>
    </section>
  );
};

export default TextBlog;

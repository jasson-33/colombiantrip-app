import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './blog-text-block.module.css';

const TextBlog = ({ textBlogBlock }) => {
  
  const { Bigola } = useContext(ColombianContext);
  
  return (
    <section className="siteSection">
      <div className={styles.innerContText}>
        <div className={`${styles.titleTextBlog} ${Bigola.className}`}>{textBlogBlock.title}</div>
        <div className={styles.descTextBlog}>{textBlogBlock.desc}</div>
      </div>
    </section>
  );
};

export default TextBlog;

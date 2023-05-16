// import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import React from 'react';
import styles from './blog-img-block.module.css';

const ImgBlockBlog = ({ getimgsBlock }) => {
  // const { Bigola, Gotham_Bold } = useContext(ColombianContext);}

  console.log(getimgsBlock);
  console.log(getimgsBlock.imagesBlock.length);
 
  return (
    <section className="siteSection">
      <div className={`${styles.innerWidthImg} ${getimgsBlock.imagesBlock.length > 1 ? styles.conthalf : styles.contfull}`}>
        {getimgsBlock.imagesBlock.map((currimgBlog, i) => (
          <div  key={i}
          className={`${getimgsBlock.imagesBlock.length > 1 ? styles.halfWidth : styles.fullWidth} ${styles.currimgBlog}`} 
          style={{ backgroundImage: `url(${currimgBlog.img})` }}>
          </div>      
        ))}
      </div>
    </section>
  );
};

export default ImgBlockBlog;
